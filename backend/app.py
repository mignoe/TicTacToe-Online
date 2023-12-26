"""
Módulo com rotas iniciais básicas
"""
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

bdImprovisado = {}

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

    print(username)
    print(password)
    # Check if the username and password are valid
    if username in bdImprovisado and bdImprovisado[username] == password:
        return "Login successful"
    
    return "Invalid username or password"

@app.route("/signUp", methods=["POST"])
def sign_up():
    """
    Rota para processar solicitações de cadastro.

    :return: Mensagem indicando se o cadastro foi bem-sucedido ou não.
    """
    username = request.form.get("username")
    password = request.form.get("password")

    print(username)
    print(password)
    # Perform sign up logic here
    if username in bdImprovisado:
        return "Username already taken"
    
    bdImprovisado[username] = password                                                                                                                                                                                                                                                                                                                                                              
    # ...

    return "Sign up successful"



if __name__ == "__main__":
    app.run(debug=True)
