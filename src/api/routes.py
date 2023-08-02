"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Car, Saved
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
import requests



api = Blueprint('api', __name__)
# api.config["JWT_SECRET_KEY"] = "super-secret"  # Change this "super secret" with something else!
# jwt = JWTManager(api)


# GET ALL THE CARS FROM OUR DATABASE
@api.route('/cars', methods=['GET'])
def get_cars():

    cars = Car.query.all()
    request_body = list(map(lambda x:x.serialize(), cars))

    return jsonify(request_body), 200

# GET ALL THE USERS FROM OUR DATABASE
@api.route('/users', methods=['GET'])
def get_users():

    users = User.query.all()
    request_body = list(map(lambda x:x.serialize(), users))

    return jsonify(request_body), 200


# FUNCTION TO FETCH CAR INFORMATION
def fetch_car_data(model):
    headers= {
        "X-RapidAPI-Key": "091b26d511msh9e1b3d4bf95fde1p1b1d59jsncc7949986be6",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
    }

    querystring = {"model":model, "year":"2022", "limit":"1"}

    url = f"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars"

    response = requests.get(url, headers=headers, params=querystring)
    if response.status_code == 200:
        cars_data = response.json()
        return cars_data
    else:
        # Handle error if the request fails
        print(f"Error: {response.status_code}")

# ROUTE TO STORE CARS DATA INTO OUR API
@api.route('/cars', methods=['POST'])
def add_car():
        model = request.json.get('model')

        existing_car = Car.query.filter_by(car_name=model).first()
        if existing_car:
             return jsonify({"Message": "Car exists on database already"}), 400

        car_data = fetch_car_data(model)
        if car_data is not None:
             year=car_data[0]['year'],
             brand=car_data[0]['make'],
             car_name=car_data[0]['model'],
             car_type=car_data[0]['class'],
             engine=car_data[0]['displacement'],
             transmission=car_data[0]['transmission'],
             car = Car(year=year, brand=brand, car_name=car_name, car_type=car_type, engine=engine, transmission=transmission)
             db.session.add(car)
             db.session.commit()
             return jsonify({"this is the car's data": car.serialize()}), 200
        else:
            return jsonify({'error': 'Failed to retrieve car information'}), 500
        
# ROUTE TO GET SINGLE CAR INFORMATION
@api.route('/cars/<int:car_id>', methods=['GET'])
def singleCarInfo(car_id):
    
    singleCar = Car.query.get(car_id)
    return jsonify(singleCar.serialize()), 200

# LOGIN ENDPOINT FOR USERS
@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401

    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })


# PRIVATE VIEW THAT USERS ARE GOING TO HAVE
@api.route('/private', methods=['GET'])
@jwt_required()
def show_saved_cars():
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        saved_cars = Saved.query.filter_by(user_id=current_user_id).all()
        response = {
             'id': user.id,
             'user': user.first_name,
             'email': user.email,
             'phone_number': user.phone_number,
             'saved': list(map(lambda x: x.serialize(), saved_cars))
        }

        return jsonify(response),200

# ALLOWING USERS TO CREATE A FAVORITE
@api.route('/add_saved', methods=['POST'])
@jwt_required()
def add_favorite():
    current_user_id = get_jwt_identity()

    user = User.query.get(current_user_id)
    car_id = request.json.get("car_id")

    car = Car.query.get(car_id)
    if not car:
        return jsonify({"Error": "Car does not exist"}), 404

    if user.saved:
        for saved_car in user.saved:
            if saved_car.car_id == car.id:
                return jsonify({"Message": "Car already saved"}), 409
    saved = Saved(user_id=user.id, car_id=car_id)
    db.session.add(saved)
    db.session.commit()
    print("car ID", car_id)
    return jsonify({"Message": "Car successfully saved"}), 200

# DELETE A FAVORITE
@api.route('/delete_saved', methods=['DELETE'])
@jwt_required()
def delete_saved():
    current_user_id = get_jwt_identity()

    user = User.query.get(current_user_id)
    car_id = request.json.get("car_id")

    car = Car.query.get(car_id)
    if not car:
        return jsonify({"Error": "Car does not exist"}), 404

    saved_car = Saved.query.filter_by(user_id=user.id, car_id=car.id).first()
    if not saved_car:
        return jsonify({"Message": "Car is not saved by the user"}), 404

    db.session.delete(saved_car)
    db.session.commit()

    return jsonify({"Message": "Car successfully removed from saved list"}), 200


# REGISTER ENDPOINT
@api.route('/register', methods=['POST'])
def create_user():
    user_email= request.json.get('email', None)
    user_first_name = request.json.get('first_name', None)
    user_password = request.json.get('password', None)
    user_phone_number = request.json.get('phone_number', None)

    active_user = User.query.filter_by(email = user_email).first()
    if active_user:
        return jsonify({"Error": "Email already in use, try another one"}), 409
    new_user = User(email=user_email,first_name=user_first_name,password=user_password,phone_number=user_phone_number)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"Message": "User successfully created"})

# Route to create user
@api.route("/createuser", methods=['POST'])
def add_user():
     body= request.get_json()
     if "email" not in body: return jsonify ("mising email"), 400

     user= User.query.filter_by(email=body["email"]).first()
     if user:
          return jsonify("user alredy exists"), 409
     if "firstName" not in body: return jsonify ("mising firstName"), 400
     if "phoneNumber" not in body: return jsonify ("phoneNumber"), 400
     if "password" not in body: return jsonify ("password"), 400

     newUser= User(
          email = body["email"],
          first_name = body["firstName"],
          phone_number = body["phoneNumber"],
          password = generate_password_hash(body["password"])
     )
     db.session.add(newUser)
     db.session.commit()
     return jsonify("successfully created new user"), 201


