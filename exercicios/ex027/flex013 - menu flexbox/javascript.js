function menu() {
    let menu = document.getElementById('link')
    let burguer = document.getElementById('burguer')
    let titulo = document.getElementsByTagName('h1')

    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
        burguer.style.backgroundColor = 'white'
        burguer.style.color = 'black'
        burguer.style.transition = '0.4s'
    } else {
        menu.style.display = 'none'
        burguer.style.backgroundColor = 'rgb(77, 72, 65)'
        burguer.style.color = 'white'
        burguer.style.transition = '0.4s'
    }

    if (titulo.style.text-align != 'center') {
        menu.style.display = 'block'
    }
}