import json

from extensions import socketio
from datetime import datetime
from flask import request
from flask_socketio import emit, join_room, leave_room


users = []

@socketio.event
def my_event(message):
    print(message)

@socketio.on("connect")
def handle_connect():
    print("Client connected!")


@socketio.on('user-data')
def get_user(data):
    print('In get_user')
    print(type(data))
    username = data['username']
    user_id = data['user_id']
    users.append({
         user_id : username,
    })
    print(f'User,{username} has entered at {datetime.now()}')

@socketio.on('announce')
def send_announce(announcement):
    print(announcement)

@socketio.on('join')
def join_room(data):
    room_name = data['room_name']
    print(data['user_id'])
    for user in users:
        print(user)
        print(user.keys)
        if data['user_id'] == user.keys:
            username = user[data['user_id']]
    join_room(room_name)
    emit('announce', f'{username} has entered to room : {room_name}')