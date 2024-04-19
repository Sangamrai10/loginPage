// let js = require('jsdom')
let logIn = document.getElementById('log');
logIn.addEventListener('click', function () {
    let emailPhone = document.getElementById('memId').value;
    let pass = document.getElementById('pass').value;
    localStorage.setItem('pass', `pass: ${pass}`)
    localStorage.setItem('Email or phone', `email: ${emailPhone},`)
    let hi = localStorage.getItem('Email or phone')
    let hii = localStorage.getItem('pass')
    console.log(hi, hii)
    if (check.checked) {
        console.log('cookie check')
        setCookie('username', mail, 1)
        console.log( 'your cookie:'+ getCookies());
    }
    else {
        console.log('we use cookie')
    }

});

let mail = document.getElementById('memId').value;
let check = document.getElementById('check');

function setCookie(name, value, exDate) {
    let expDate = new Date()
    expDate.setTime(expDate.getTime() + (exDate * 60 * 1000));
    const expire = "expires=" + expDate.toUTCString()
    document.cookie = name + '=' + value + ';' + expire + ';path=/'

}

function getCookies() {
    const cookies = document.cookie.split(';');
    const cookieMap = {};

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        cookieMap[name] = decodeURIComponent(value);
    });

    return cookieMap;
}

