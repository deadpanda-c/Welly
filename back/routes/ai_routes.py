from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ollama_llm import ollama_llm

ai_bp = Blueprint('ai_bp', __name__)

@ai_bp.route('/ai', methods=['POST'])
# @jwt_required()
def chat():

    # current_user = get_jwt_identity()

    # print(current_user)

    data = request.get_json()

    response = ollama_llm(data["content"])

    print(response)

    return jsonify({'chat': response})
