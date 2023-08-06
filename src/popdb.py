from app import app
import json
from api.models import Car, db, Car_image

def pop_images():
    images = []
    with open("./src/data/images.json", "rt") as imagefile: 
        images = json.loads(imagefile.read())["images"]
    images = [Car_image(**image) for image in images]
    db.session.add_all(images)
    db.session.commit()
def pop_cars():
    cars = []
    with open("./src/data/cars.json", "rt") as carfile: 
        cars = json.loads(carfile.read())["cars"]
    cars = [Car(**car) for car in cars]
    db.session.add_all(cars)
    db.session.commit()

with app.app_context(): 
    pop_cars()
    pop_images()