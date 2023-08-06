from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship


db = SQLAlchemy()
# SAVED CARS BY USER WITH RELATED COLUMNS


class Saved(db.Model):
    __tablename__ = 'saved'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey("user.id"), nullable=True)
    car_id = db.Column(db.Integer, ForeignKey('car.id'), nullable=True)
    # THE FOLLOWING 2 COLUMNS ESTABLISHES RELATIONSHIP BETWEEN CARS ON OUR DATABASE AND USERS ON OUR DATABASE
    user = db.relationship('User', backref='saved_cars', foreign_keys=[user_id])
    car = db.relationship('Car', backref='saved_by_users', foreign_keys=[car_id])
    def __repr__(self):
        return f'<Car id:{self.car_id} Saved id:{self.id}>'
    def serialize(self):
        return {
            "car": self.car.serialize() if self.car else None
        }
    


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(120), nullable=False)
    phone_number = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    saved = relationship('Saved', lazy=True, back_populates='user', overlaps="saved_cars")
    def __repr__(self):
        return f'<User {self.email}>'
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "phone_number": self.phone_number,
            "saved": list(map(lambda x: x.serialize(), self.saved))
        }
    

class Car(db.Model):
    __tablename__ = 'car'
    id = db.Column(db.Integer, primary_key=True)
    year = db.Column(db.Integer, nullable=False)
    brand = db.Column(db.String(100), nullable=False)
    car_name = db.Column(db.String(50), nullable=False)
    car_type = db.Column(db.String(30), nullable=False)
    engine = db.Column(db.String(100), nullable=True)
    transmission = db.Column(db.String(100), nullable=True)
    images = db.relationship('Car_image', back_populates='car')
    price = db.Column(db.String(50))
    def __repr__(self):
        return f'<Car {self.id} {self.brand} {self.car_name}>'
    def serialize(self):
        return {
            "id": self.id,
            "year": self.year,
            "brand": self.brand,
            "car_name": self.car_name,
            "car_type": self.car_type,
            "engine": self.engine,
            "transmission": self.transmission,
            "images": list(map(lambda x: x.serialize(), self.images)),
            "price": self.price
        }
    
    
class Car_image(db.Model):
    __tablename__ = 'car_image'
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(250), nullable=False)
    car_id = db.Column(db.Integer, ForeignKey('car.id'), nullable=False)
    car = db.relationship('Car', back_populates='images', foreign_keys=[car_id], overlaps='images' )
    def __repr__(self):
        return f'<Image {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "image_url": self.image_url,
        }