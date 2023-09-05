from extensions import socketio
from flask import request
from flask_socketio import emit

@socketio.event
def my_event(message):
    print(message)

@socketio.on("connect")
def handle_connect():
    print("Client connected!")


@socketio.on('user-data')
def get_user(username):
    print(f'User,{username} has entered . . .')
    