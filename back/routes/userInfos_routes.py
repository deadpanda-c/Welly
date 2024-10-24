#!../.venv/bin/python3

from flask import Blueprint, request, jsonify
import utils

userInfos_bp = Blueprint('userInfos', __name__)
sqlite = utils.get_module_sqlite("./test.db")

if __name__ == "__main__":
    # get only one user
    print(sqlite.get_row("Users", {"id": 1}))

