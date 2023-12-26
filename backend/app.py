# app.py
from flask import Flask
from flask_cors import CORS
from auth_routes import login, sign_up

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.route("/login", methods=["POST"])(login)
app.route("/signUp", methods=["POST"])(sign_up)

if __name__ == "__main__":
    app.run(debug=True)
