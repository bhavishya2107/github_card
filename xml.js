let inputGet = document.querySelector('input')
let div = document.querySelector('div')
let cardDiv = document.querySelector('.cardDiv')

let res;
var getData = (e) => {
    if(e.keyCode === 13) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${e.target.value}`) 
        xhr.onload = () => {
            displayData(JSON.parse(xhr.response))
        }
        xhr.send()
        inputGet.value = ""
    } 
}

let followers = document.querySelector('.followers')
let repo = document.querySelector('.repo')
let img = document.querySelector('.concept .img')
let username = document.querySelector('#userName')
let card = document.querySelector('.concept')
card.style.display = "none"
card.style.background = "lightgrey"

var displayData = (res) => {
    card.style.display = ""
    img.setAttribute('src',res.avatar_url)
    username.textContent = res.login
    repo.textContent = res.public_repos
    followers.textContent = res.followers
}

inputGet.addEventListener('keyup', getData)








