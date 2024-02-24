"""
In this file, you can add as many commands as you want using the
@app.cli.command decorator Flask commands are usefull to run cronjobs
or tasks outside of the API but sill in integration with youy database,
for example: Import the price of bitcoin every night as 12am
"""

import click
from api.models import db, User, Car
from api.api_integration import fetch_car_data
import json


def setup_commands(app):
    """
    This is an example command "insert-test-users" that you can run from the
    command line by typing:
    $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """

    @app.cli.command("insert-test-users")  # name of our command
    @click.argument("count")  # argument of out command
    def insert_test_data(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.first_name = f"TestUser{x}"
            user.phone_number = f"55{x}-1212"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("delete-all-users")  # name of our command
    def delete_test_users():
        print("Deleting all users")
        for user in User.query.all():
            print(f"deleting user: {user.email}")
            db.session.delete(user)
            db.session.commit()
        print("All users deleted")

        # Insert the code to populate others tables if needed

    @app.cli.command("get-car-data")
    @click.argument("model")
    def get_sample_car_data(model):
        cars = fetch_car_data(model)
        if cars is not None:
            _c: Car
            car = cars[0]
            # Check if car exists in db
            _c = (
                db.session.query(Car)
                .where(Car.car_name == car["model"])
                .one_or_none()
            )
            if _c:
                print("car already exists in db.")
            else:
                _c = Car()
                _c.year = car["year"]
                _c.brand = car["make"]
                _c.car_name = car["model"]
                _c.car_type = car["class"]
                _c.engine = car["cylinders"]
                _c.transmission = car["transmission"]
                db.session.add(_c)
                db.session.commit()
                print(f"Added car {car['model']}")
