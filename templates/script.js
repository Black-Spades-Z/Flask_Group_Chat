if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {

    var menuButton = document.getElementById('button-menu')
    menuButton.addEventListener('click', function () {

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
    })
}