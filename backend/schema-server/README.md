# Crossnumber Schema Server

## Initial Setup (not Windows?)

In a terminal:

    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

## Initial Setup (Windows)

Install python3:
Get installer from https://www.python.org/downloads/
    -> make sure to select the option 'Add Python 3.X to PATH'

Set execution policy:
In a terminal
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

Install pip:
In terminal
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
    python3 .\get-pip.py
Delete file get-pip.py

Install the virtualenv Python module:
In terminal
    pip install virtualenv

Set up the virtual environment:
In terminal
    virtualenv venv
    .\venv\Scripts\activate

Install the requirements:
    pip install -r .\requirements.txt

## Starting the Application

To start the application in debug mode:
In terminal
    .\venv\Scripts\activate
    flask run