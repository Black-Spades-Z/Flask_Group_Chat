if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var NAME = ''

function ready() {

    var nameInput = document.getElementById('inputName')
    nameInput.addEventListener('change', nameInputed)


    var menuButton = document.getElementById('button-menu')
    if (menuButton) {
        menuButton.addEventListener('click', menuBarControl)
    }


    var join_page_button = document.getElementById('join_page_btn')
    join_page_button.addEventListener('click', to_join_page)

}

function nameInputed(event) {
    var input = event.target
    NAME = input.value

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
    window.location.href = '/join-page'
    console.log('Location Changed')
    
    try {
         console.log(NAME)
    }catch (E){
        console.log(E)

    }

}