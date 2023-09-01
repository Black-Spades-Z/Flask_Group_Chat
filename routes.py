from flask import Blueprint,  render_template


main = Blueprint("main", __name__)

@main.route('/')
def index():
    return render_template('home.html')

@main.route('/join-page')
def join_page():
    return render_template('join.html', **vars())

@main.route('/create-page')
def create_page():
    return render_template('create.html', **vars())

@main.route('/room')

def create_room():
    return render_template('room.html', **vars())