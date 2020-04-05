from flask import Flask
from markupsafe import escape
app = Flask(__name__)

@app.route('/')
@app.route('/<name>')
def hello_name(name='World'):
    return { 'message': get_message(name) }

def get_message(name):
    return 'Hello, {}!'.format(escape(name))

def function_for_sam():
    print("hey Sam :)")

def function_for_sam_2():
    print("hey Sam again :)") 
