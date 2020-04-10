# Crossnumber Solubility Checker

## Initial Setup

In a terminal:

    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

## Starting the Application

To start the application in debug mode:

`./start.sh`

Or:

* Unix:

        export FLASK_APP=main.py
        export FLASK_ENV=development
        flask run

* Windows

        set FLASK_APP=main.py
        set FLASK_ENV=development
        flask run
