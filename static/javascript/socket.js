const socket = io({autoConnect: false})

var id = "id" + Math.random().toString(16).slice(2)
socket.user_id = id

let USER_ID = socket.user_id
console.log('User id = ' + USER_ID + '\nIn Local Storage')

export default socket