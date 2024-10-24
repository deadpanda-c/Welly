#!./.venv/bin/python3

import flask
import json
from langchain_ollama import OllamaLLM

ollama_llm = OllamaLLM(model="llama3.1", base_url="http://10.10.75.205:11434")

"""
Routes and views for the flask application.

- / : Home page

- /ai : Chatbot page

- /home : Home page

-
"""
app = flask.Flask(__name__)

@app.route('/')
def index():
    return json.dumps({'hello': 'world'})

@app.route('/ai', methods=['POST'])
def chat():
    data = flask.request.get_json()

    response = ollama_llm(data["content"])

    return json.dumps({'chat': response})

@app.route("/home")
def home():
    return json.dumps({'home': 'page'})

if __name__ == '__main__':
    app.run(debug=True)
