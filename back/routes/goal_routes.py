from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.goal import Goal
from models.user import User
from models.favorite_goal import FavoriteGoal
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

@goal_bp.route("/add_favorite", methods=["POST"])
@jwt_required()
def add_favorite():
    data = request.get_json()
    current_user = get_jwt_identity()

    user = User.query.filter_by(id=current_user).first()

    if not user:
        return jsonify({"message": "User not found"}), 404

    goal_id = data["goal_id"]
    new_favorite = FavoriteGoal(user_id=user.id, goal_id=goal_id)
    db.session.add(new_favorite)
    db.session.commit()

    return jsonify({'favorite': new_favorite.id})

@goal_bp.route("/remove_favorite", methods=["POST"])
@jwt_required()
def remove_favorite():
    data = request.get_json()
    current_user = get_jwt_identity()

    user = User.query.filter_by(id=current_user).first()

    if not user:
        return jsonify({"message": "User not found"}), 404

    goal_id = data["goal_id"]

    favorite_goal = FavoriteGoal.query.filter_by(user_id=user.id, goal_id=goal_id).first()

    if not favorite_goal:
        return jsonify({"message": "Favorite goal not found"}), 404

    db.session.delete(favorite_goal)
    db.session.commit()

    return jsonify({"message": "Favorite goal removed successfully"}), 200

@goal_bp.route("/my_goals")
@jwt_required()
def get_my_goals():
    current_user = get_jwt_identity()

    print(current_user)

    user = User.query.filter_by(id=current_user).first()

    if not user:
        return jsonify({"message": "User not found"}), 404

    favorites = FavoriteGoal.query.filter_by(user_id=user.id).all()

    goal_ids = [favorite.goal_id for favorite in favorites]

    goals = Goal.query.filter(Goal.id.in_(goal_ids)).all()

    goals_array = []

    for goal in goals:
        goals_array.append({
            "id": goal.id,
            "title": goal.title,
            "description": goal.description,
            "minigoal": goal.minigoal
        })

    return jsonify({"favorites": goals_array}), 200

# @goal_bp.route("/not_my_goals")
# @jwt_required()
# def get_my_goals():
#     current_user = get_jwt_identity()

#     user = User.query.filter_by(username=current_user).first()

#     if not user:
#         return jsonify({"message": "User not found"}), 404

#     favorites = FavoriteGoal.query.filter_by(user_id=user.id).all()

#     goal_ids = [favorite.goal_id for favorite in favorites]

#     goals = Goal.query.filter(~Goal.id.in_(goal_ids)).all()

#     goals_array = []

#     for goal in goals:
#         goals_array.append({
#             "id": goal.id,
#             "title": goal.title,
#             "description": goal.description,
#             "minigoal": goal.minigoal
#         })

#     return jsonify({"favorites": goals_array}), 200