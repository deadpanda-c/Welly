from flask import Blueprint, request, jsonify
from models.goal import Goal
from extensions import db

goal_bp = Blueprint('goal_bp', __name__)

@goal_bp.route('/goal', methods=['POST'])
def create_goal():
    data = request.get_json()

    title = data["title"]
    description = data["description"]
    minigoal = data["minigoal"]

    if Goal.query.filter_by(title=title).first():
        return jsonify({"message": "Goal already exists"}), 400

    new_goal = Goal(title=title, description=description, minigoal=minigoal)
    db.session.add(new_goal)
    db.session.commit()

    return jsonify({'goal': new_goal.id})

@goal_bp.route('/goal')
def get_goal():
    data = request.get_json()

    id = data["id"]

    goal = Goal.query.filter_by(id=id).first()

    if not goal:
        return jsonify({"message": "Goal already exists"}), 400

    return jsonify({'title': goal.title, 'description': goal.description, 'minigoal': goal.minigoal})
