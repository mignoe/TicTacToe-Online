from flask import Flask
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

current_players = []

@app.route("/login", methods=["POST"])
def login():
    username = request.args["username"]

    if username in current_players:
        return f"Username already taken ({current_players})"
    else:
        current_players.append(username)
        return "Login successful"
