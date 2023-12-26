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
        return "Login successful"
    
    return "Invalid username or password"

def sign_up():
    """
    Rota para processar solicitações de cadastro.

    :return: Mensagem indicando se o cadastro foi bem-sucedido ou não.
    """
    username = request.form.get("username")
    password = request.form.get("password")

    print(username)
    print(password)

    if username in bdImprovisado:
        return "Username already taken"
    
    bdImprovisado[username] = password
    # Perform additional sign-up logic here

    return "Sign up successful"
