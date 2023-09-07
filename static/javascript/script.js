if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {

    ready()
}




function ready(){
    const socket = io({autoConnect: false})

    console.log(typeof socket)

    var id = "id" + Math.random().toString(16).slice(2)
    socket.user_id = id

    USER_ID = socket.user_id
    console.log('User id = ' + USER_ID)

    join_page_btn = document.getElementById('join_page_btn')
    create_page_btn = document.getElementById('create_page_btn')
    user_name = document.getElementById('inputName')

    NAME = user_name.value

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
function alert_function()
{
    console.log('Enter your name first')
    alert('Enter the name please ) ')
}

