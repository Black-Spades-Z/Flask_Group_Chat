import json

from extensions import socketio
from datetime import datetime
from flask import request
from flask_socketio import emit, join_room, leave_room, send


users = {}

@socketio.event
def my_event(message):
    print(message)

@socketio.on('message')
def messages(message):
    print(message['user'] + ': ', end='')
    print(message['message'])
    print(message['room_name'])
    send( message['message'],  broadcast=True, to=message['room_name'])

@socketio.on("connect")
def handle_connect():
    print("Client connected!")


@socketio.on('user-data')
def get_user(data):
    username = data['username']
    user_id = data['user_id']
    users.update({
         user_id : username,
    })
    print(f'User : {username} '
          f'\nDate: {datetime.now()}\n')

@socketio.on('announce')
def send_announce(announcement):
    print(announcement)

@socketio.on('join')
def join_to_room(data : dict):
    print('In join Room')
    room_name = data['room_name']
    print(data['user_id'])
    print(room_name)
    for id in users.keys():
        if data['user_id'] == id:
            username = users[id]
            print('in if')
            print(username)

    join_room(room_name)
    emit('announce', f'{username} has entered to room : {room_name}')