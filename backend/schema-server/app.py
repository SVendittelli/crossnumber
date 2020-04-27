import sys
import os
import json

from flask import Flask
from flask_cors import CORS
from markupsafe import escape

# Hack to get crossnumber/ in path
PACKAGE = '.'
PACKAGE_PARENT = '..'
PACKAGE_GRANDPARENT = '..\..'
SCRIPT_DIR = os.path.dirname(os.path.realpath(os.path.join(os.getcwd(), os.path.expanduser(__file__))))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, PACKAGE_PARENT)))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, PACKAGE_GRANDPARENT)))

from test_schema import test_grid_2_2, test_grid_2_3

app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome_message():
    return wrap_string("Welcome to schema-server. Use '/schema' to view the schema or '/test' for test puzzles")

@app.route('/schema')
def get_schema():
    with open('..\..\schema.json', 'r') as json_file:
        return json.load(json_file)

@app.route('/test')
def test_message():
    return wrap_string("Test puzzles: Use '/test/$(option)'. Current options are 2x2 and 2x3")

@app.route('/test/2x2')
def get_test_2x2():
    return test_grid_2_2()

@app.route('/test/2x3')
def get_test_2x3():
    return test_grid_2_3()

def wrap_string(message):
    return { 'info': message }