from flask import Blueprint, request, jsonify
from ollama_llm import ollama_llm

ai_bp = Blueprint('ai_bp', __name__)

@ai_bp.route('/ai', methods=['POST'])
def chat():
    data = request.get_json()

    # Interroger le modèle AI
    response = ollama_llm(data["content"])

    return jsonify({'chat': response})
