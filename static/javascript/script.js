if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {


    ready()
}




function ready(){


    var path = window.location.pathname;
    console.log( path );



    if ( path == '/'){

        var socket = io({autoConnect: false})

        var id = "id" + Math.random().toString(16).slice(2)
        socket.user_id = id

        localStorage.setItem('socket', JSON.stringify(socket));

        let USER_ID = socket.user_id
        console.log('User id = ' + USER_ID + '\nIn Local Storage')


        var join_page_btn = document.getElementById('join_page_btn')
        var create_page_btn = document.getElementById('create_page_btn')
        var user_name = document.getElementById('inputName')

        let NAME = user_name.value

        user_name.addEventListener('change', function (){
            NAME = user_name.value
        })


        join_page_btn.addEventListener('click', function () {
            if (NAME != "") {
                console.log('Before connection')
                socket.connect();
                console.log('After connection')


                socket.on('connect', function () {
                    console.log('In connect')

                    socket.emit('user-data', {
                        "username" : NAME,
                        "user_id" : USER_ID
                    })
                    window.location.href = '/join-page'
                })

            }
            else {
                alert_function()
            }

        })
        create_page_btn.addEventListener('click', function () {

             if (NAME != "") {
                socket.connect();
                socket.on('connect', function () {
                    console.log('In connect')
                     socket.emit('user-data', {
                        "username" : NAME,
                        "user_id" : USER_ID
                    })
                    window.location.href = '/create-page'
                })

            } else {
                 alert_function()
             }
        })


    }
    else if (path == '/create-pages'){

            var storedSocket = JSON.parse(localStorage.getItem('socket'));

            let USER_ID = storedSocket.user_id
            console.log('User id = ' + USER_ID)

            var room_name = document.getElementById('inputRoomName')

            var ROOM_NAME = room_name.value

            room_name.addEventListener('change', function () {
                ROOM_NAME = room_name.value
            })

            var create_btn = document.getElementById('create_btn')
            create_btn.addEventListener('click', function () {
                if (ROOM_NAME != ""){
                    console.log(ROOM_NAME)
                    console.log(storedSocket.user_id)
                    storedSocket.emit("join", {
                        "room_name" : ROOM_NAME,
                        "user_id" : storedSocket.user_id
                    })
                    console.log('created')
                    window.location.href = '/room'
                }else{
                    alert_function()
                }
            })
        }

}
function alert_function()
{
    console.log('Enter your name first')
    alert('Enter the name please ) ')
}
