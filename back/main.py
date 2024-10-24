#!./.venv/bin/python3

import flask
import json

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
    print(data["test"])
    return json.dumps({'chat': 'bot'})

@app.route("/home")
def home():
    return json.dumps({'home': 'page'})

if __name__ == '__main__':
    app.run(debug=True)
