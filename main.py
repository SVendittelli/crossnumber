from flask import Flask
from markupsafe import escape
app = Flask(__name__)

def hello_name(name='World'):
    return { 'message': get_message(name) }

@app.route('/')
@app.route('/<name>')
def better_name(name='Team!'):
    return { 'message': get_message(name) }

def greet_rich(name='Rich :)'):
    return { 'message': get_message(name) }

def get_message(name):
    return 'Hello, {}!'.format(escape(name))

def function_for_sam():
    print("hey Sam :)")
    print('Hey Rosa')

def function_for_sam_2():
    print("hey Sam again :)")
    print("hey Sam again again :)") 

