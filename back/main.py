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
    # get the current user informations


    return 'Hello, World!'

@app.route("/ai")
def chat():
    return "Chatbot"

@app.route("/home")
def home():
    return "Home page"

if __name__ == '__main__':
    app.run(debug=True)
