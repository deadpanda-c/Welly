from flask import Blueprint, request, jsonify
from models.user import User
from extensions import db, bcrypt, jwt
from flask_jwt_extended import create_access_token
import routes.utils as utils

auth_bp = Blueprint("auth_bp", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    sqlite = utils.get_module_sqlite("./instance/welly.db")
    data = request.get_json()
    email = data.get("email")
    username = data.get("username")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    new_user = User(email=email, username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    user_id = sqlite.get_element("user", "id", {"email": email})
    access_token = create_access_token(identity=user_id)

    sqlite.close_connection()
    return jsonify({"access_token": access_token}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    sqlite = utils.get_module_sqlite("./instance/welly.db")
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Incorrect username or password"}), 403

    user_id = sqlite.get_element("user", "id", {"username": username})
    access_token = create_access_token(identity=user_id)

    sqlite.close_connection()

    return jsonify({"access_token": access_token}), 200
