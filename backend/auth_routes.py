# auth_routes.py
from flask import request

bdImprovisado = {}


def login():
    """
    Rota para processar solicitações de login.

    :return: Mensagem indicando se o login foi bem-sucedido ou não.
    """
    username = request.form.get("username")
    password = request.form.get("password")

    print(username)
    print(password)

    if username in bdImprovisado and bdImprovisado[username] == password:
        return "Login successful", 200
    
    return "Invalid username or password. Please try again", 400


def sign_up():
    """
    Rota para processar solicitações de cadastro.

    :return: Mensagem indicando se o cadastro foi bem-sucedido ou não.
    """
    username = request.form.get("username")
    password = request.form.get("password")

    print(username)
    print(password)

    if username in ["", "null", None]:
        return "Username must have at least one character. Please try again", 400

    elif username in bdImprovisado:
        return "Username already taken. Please insert another unsername.", 400

    elif password in ["", "null", None]:
        return "Password must have at least one character. Please try again", 400

    bdImprovisado[username] = password
    return "Sign up successful", 200
