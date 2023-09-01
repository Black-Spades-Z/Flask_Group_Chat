from extensions import socketio

from flask import request
from flask_socketio import emit



@socketio.on("connect")
def handle_connect():
    print("Client connected!")