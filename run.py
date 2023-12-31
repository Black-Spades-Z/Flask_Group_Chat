from flask import Flask, Blueprint
from routes import main
from events import socketio

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'


app.register_blueprint(main)
socketio.init_app(app)

users = [
    'adk'
]

def add_user(username):
    users.append(username)


if __name__ == '__main__':
    socketio.run(app, debug =True)