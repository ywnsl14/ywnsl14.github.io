id=prompt('아이디 입력');
if(id=='std01'){
    password=prompt('비밀번호 입력');
    if(password==='1111') {
        location.href="09_login.html"
    }
    else {
        location.href="09_error.html"
    }
}
else if(id=='std02'){
    password=prompt('비밀번호 입력');
    if(password==='2222') {
        location.href="09_login.html"
    }
    else {
        location.href="09_error.html"
    }
}
else if(id=='std03'){
    password=prompt('비밀번호 입력');
    if(password==='3333') {
        location.href="09_login.html"
    }
    else {
        location.href="09_error.html"
    }
}
else {
    location.href="09_error.html"
}