from flask import Flask, request, render_template, redirect, url_for, session
from flask_socketio import SocketIO


# def main():
#     print("Hello World!")
#
# # Press the green button in the gutter to run the script.
#
#     main()


app = Flask(__name__)

@app.route('/')

def index():
    return "Hello World!"


if __name__ == '__main__':
    app.run(debug=True)