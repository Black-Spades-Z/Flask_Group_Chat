

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {

    ready()
}

const socket = new io.Socket({autoConnect: false})



var NAME = ''

function ready() {

    var nameInput = document.getElementById('inputName')
    if (nameInput)
    {
        try {
        nameInput.addEventListener('change', nameInputed)
    }catch (e) {
        console.log(e)
    }
    }




    var menuButton = document.getElementById('button-menu')
    if (menuButton) {
        menuButton.addEventListener('click', menuBarControl)
    }


    join_page_btn =  document.getElementById('join_page_btn')
    if (join_page_btn){
        join_page_btn.addEventListener('click', to_join_page);
    }


}

function nameInputed(event) {
    var input = event.target
    if (input.value != ''){
        NAME = input.value
    }


}

function menuBarControl(){

        var menuBar = document.getElementById('menu-bar')
        var state = menuBar.style.display
        if (state == 'none'){
            console.log("menu-bar set block")
            menuBar.style.display = 'block'
        }
        else {
            console.log("menu bar set none")
            menuBar.style.display = 'none'
        }
    //
    }

function to_join_page() {

    console.log('Working bitch')
    window.location.href = 'join-page'
    socket.connect()
    console.log('Location Changed')
     socket.on("connect", function() {
                socket.emit("message", "Hi tables boss is here");
            })

    
    try {
         console.log(NAME)
    }catch (E){
        console.log(E)

    }

}

function createRoom() {
    console.log('Create Room is working')
    window.location.href = '/room'
}