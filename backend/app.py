"""
Módulo com rotas iniciais básicas
"""
from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def hello_world():
    """
    Rota que retorna uma mensagem de saudação.

    :return: Mensagem de saudação em HTML.
    """
    return "<p>Hello, World!</p>"


@app.route("/login", methods=["POST"])
def login():
    """
    Rota para processar solicitações de login.

    :return: Mensagem indicando se o login foi bem-sucedido ou não.
    """
    username = request.form.get("username")
    password = request.form.get("password")

    # Check if the username and password are valid
    if username == "admin" and password == "password":
        return "Login successful"
    return "Invalid username or password"


if __name__ == "__main__":
    app.run(debug=True)
