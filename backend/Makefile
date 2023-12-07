PYTHON=pipenv run python3
PYLINT=pipenv run pylint
PEP=pipenv run autopep8

init:
	pipenv install --requirements requirements.txt
run:
	$(PYTHON) app.py
lint:
	$(PYLINT) *.py
pep:
	$(PEP) -i -v *.py
