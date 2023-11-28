from flask import Flask
from flask import Flask, request

app = Flask(__name__)


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    # Check if the username and password are valid
    if username == "admin" and password == "password":
        return "Login successful"
    else:
        return "Invalid username or password"
