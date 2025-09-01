fetch('http://127.0.0.1:3300/login/cookie').then(res => res.text()).then(cookie => {
    cookie.split(/; {0,}/).forEach(e => {
        document.cookie = e
    })
})