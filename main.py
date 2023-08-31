from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('home.html')

@app.route('/join-page')
def join_page():
    return render_template('join.html', **vars())

@app.route('/create-page')
def create_page():
    return render_template('create.html', **vars())

@app.route('/room')

@socketio.event
def my_event(message):
    emit('my response', {'data': 'got it!'})


if __name__ == '__main__':
    socketio.run(app, debug =True, allow_unsafe_werkzeug=True)