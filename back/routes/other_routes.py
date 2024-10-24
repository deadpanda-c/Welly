from flask import Blueprint, jsonify

other_bp = Blueprint('other_bp', __name__)

@other_bp.route('/')
def index():
    return jsonify({'hello': 'world'})

@other_bp.route('/home')
def home():
    return jsonify({'home': 'page'})
