from flask import Flask, Blueprint
from flask_socketio import SocketIO, emit
from routes import main

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


app.register_blueprint(main)




@socketio.event
def my_event(message):
    emit('my response', {'data': 'got it!'})


if __name__ == '__main__':
    socketio.run(app, debug =True, allow_unsafe_werkzeug=True)