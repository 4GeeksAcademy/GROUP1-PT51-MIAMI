"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Car, Saved
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, JWTManager


#from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this "super secret" with something else!
jwt = JWTManager(app)



# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response



# LOGIN ENDPOINT FOR USERS
@app.route('/login', methods=['POST'])
def login_user():
     user_email = request.json.get("email", None)
     user_password = request.json.get("password", None)

     user = User.query.filter_by(email = user_email, password = user_password).first()

     if user is None:
          return jsonify({"Error": "Wrong email or password"}), 401

     token = create_access_token(identity=user.id)
     return jsonify({"Response": "Successfully logged in", "token": token, "email": user.email}), 200


# PRIVATE VIEW THAT USERS ARE GOING TO HAVE
@app.route('/private', methods=['GET'])
@jwt_required()
def show_saved_cars():
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)
        saved_cars = Saved.query.filter_by(user_id=current_user_id).all()
        response = {
             'user': user.first_name,
             'email': user.email,
             'phone_number': user.phone_number,
             'saved_cars': [car.serialize() for car in saved_cars]
        }

        return jsonify(response),200

# ALLOWING USERS TO CREATE A FAVORITE
@app.route('/add_saved', methods=['POST'])
@jwt_required()
def add_favorite():
    current_user_id = get_jwt_identity()

    user = User.query.get(current_user_id)
    car_id = request.json.get("car_id")

    car = Car.query.get(car_id)
    if not car:
         return jsonify({"Error": "Car does not exist"}), 404
    saved = Saved(user_id=user.id, car_id=car_id)
    db.session.add(saved)
    db.session.commit()

    return jsonify({"Message": "Car successfully saved"})
# # LOGIN ENDPOINT FOR USERS
# @app.route('/login', methods=['POST'])
# def login_user():
#      user_email = request.json.get("email", None)
#      user_password = request.json.get("password", None)

#      user = User.query.filter_by(email = user_email, password = user_password).first()

#      if user is None:
#           return jsonify({"Error": "Wrong email or password"}), 401

#      token = create_access_token(identity=user.id)
#      return jsonify({"Response": "Successfully logged in", "token": token, "email": user.email}), 200


# # PRIVATE VIEW THAT USERS ARE GOING TO HAVE
# @app.route('/private', methods=['GET'])
# @jwt_required()
# def show_saved_cars():
#         current_user_id = get_jwt_identity()
#         user = User.query.get(current_user_id)
#         saved_cars = Saved.query.filter_by(user_id=current_user_id).all()
#         response = {
#              'user': user.first_name,
#              'email': user.email,
#              'phone_number': user.phone_number,
#              'saved_cars': [car.serialize() for car in saved_cars]
#         }

#         return jsonify(response),200

# # ALLOWING USERS TO CREATE A FAVORITE
# @app.route('/add_saved', methods=['POST'])
# @jwt_required()
# def add_favorite():
#     current_user_id = get_jwt_identity()

#     user = User.query.get(current_user_id)
#     car_id = request.json.get("car_id")

#     car = Car.query.get(car_id)
#     if not car:
#         return jsonify({"Error": "Car does not exist"}), 404

#     if user.saved:
#         for saved_car in user.saved:
#             if saved_car.car_id == car.id:
#                 return jsonify({"Message": "Car already saved"}), 409
#     saved = Saved(user_id=user.id, car_id=car_id)
#     db.session.add(saved)
#     db.session.commit()

#     return jsonify({"Message": "Car successfully saved"}), 200


# # REGISTER ENDPOINT
# @app.route('/register', methods=['POST'])
# def create_user():
#     user_email= request.json.get('email', None)
#     user_first_name = request.json.get('first_name', None)
#     user_password = request.json.get('password', None)
#     user_phone_number = request.json.get('phone_number', None)

#     active_user = User.query.filter_by(email = user_email).first()
#     if active_user:
#         return jsonify({"Error": "Email already in use, try another one"}), 409
#     new_user = User(email=user_email,first_name=user_first_name,password=user_password,phone_number=user_phone_number)
#     db.session.add(new_user)
#     db.session.commit()
#     return jsonify({"Message": "User successfully created"})


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
