#!../.venv/bin/python3

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

import routes.utils as utils

userInfos_bp = Blueprint('userInfos', __name__)

@userInfos_bp.route('/userInfos', methods=['GET'])
@jwt_required()
def get_user_infos():
    current_user_id = get_jwt_identity()[0]
    sqlite = utils.SqliteModule("./instance/users.db")

    user_infos = sqlite.get_row("user", {"id": current_user_id})

    print(user_infos)
    sqlite.close_connection()
    return jsonify({"msg": "Hello, World!"})


if __name__ == "__main__":
    pass


