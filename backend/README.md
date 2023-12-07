## Você deve executar o seguinte comando para instalar os pré-requisitos do python:
```sh
sudo apt update && sudo apt install libssl-dev python3-pip python3-dev -y

python3 -m pip install --upgrade pip
python3 -m pip install --user pipenv
```

## Você deve executar o seguinte comando para instalar o pipenv e as dependências do projeto:

```sh
pip install --user pipenv && make init
```

