if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {


    ready()
}




function ready(){


    var path = window.location.pathname;
    console.log( path );



    if ( path == '/'){




        var join_page_btn = document.getElementById('join_page_btn')
        var create_page_btn = document.getElementById('create_page_btn')
        var user_name = document.getElementById('inputName')

        let NAME = user_name.value

        user_name.addEventListener('change', function (){
            NAME = user_name.value
        })


        join_page_btn.addEventListener('click', function () {
            if (NAME != "") {
                window.localStorage.setItem("username", NAME)
                window.location.href = '/join-page';
            }
            else {
                alert_function()
            }

        })
        create_page_btn.addEventListener('click', function () {

             if (NAME != "") {
                 window.localStorage.setItem("username", NAME)
                 window.location.href = '/create-page';
            } else {
                 alert_function()
             }
        })


    }
    else if (path == '/create-page'){


            var room_name = document.getElementById('inputRoomName')

            var ROOM_NAME = room_name.value

            room_name.addEventListener('change', function () {
                ROOM_NAME = room_name.value
            })

            var create_btn = document.getElementById('create_btn')
            create_btn.addEventListener('click', function () {
                if (ROOM_NAME != ""){
                    var room_id = "rid" + Math.random().toString(16).slice(2)
                    console.log(ROOM_NAME)
                    console.log(room_id)
                    window.localStorage.setItem('room_name', ROOM_NAME)
                    window.localStorage.setItem('room_id', room_id)
                    window.location.href = ('/room/' + room_id)
                }else{
                    alert_function()
                }
            })
        }
    else if (path == ('/room/' + window.localStorage.getItem('room_id'))){

        var socket = io({autoConnect: false})

        var id = "id" + Math.random().toString(16).slice(2)
        socket.user_id = id

        socket.connect()


        let USER_ID = socket.user_id
        let USERNAME = window.localStorage.getItem('username')
        let ROOM_NAME = window.localStorage.getItem('room_name')

        console.log('User id = ' + USER_ID )

        socket.on('connect', function () {
            console.log('In connect')

            socket.emit('user-data', {
                "username" : USERNAME,
                "user_id" : USER_ID
            })
            socket.emit('join', {
                "username" : USERNAME,
                "user_id" : USER_ID,
                "room_name" : ROOM_NAME
            })

        })

        let message = ''

        send_btn = document.getElementById('send_btn')
        msg_box = document.getElementById('msg_box')

        msg_box.addEventListener('change', function (){
            message = msg_box.value
        })

        send_btn.addEventListener('click', function (){
            console.log('Send')
            console.log(ROOM_NAME)
            socket.emit('message', {
                "user" : USERNAME,
                "room_name" : ROOM_NAME,
                "message" : message
            } )
            message = ''
            msg_box.value = ''
        })

    }

}
function alert_function()
{
    console.log('Enter your name first')
    alert('Enter the name please ) ')
}
