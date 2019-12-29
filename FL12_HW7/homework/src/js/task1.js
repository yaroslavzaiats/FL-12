let email = prompt('Enter your email');
let at = /@/;
let user = 'user@gmail.com';
let admin = 'admin@gmail.com';
let password;
let userPass = 'UserPass';
let adminPass = 'AdminPass';
let newPassConf;
let newUserPass;
let newAdminPass;
let passCheck;
let passLength = 6;
let emailLength = 5;
if(email === '' || !at.test(email)){
    alert('Canceled.');
} else if(email.length < emailLength){
    alert('I don’t know any emails having name length less than 5 symbols');
} else if(email === user || email === admin ){
    password = prompt('Enter password');
} else {
    alert('I don’t know you');
}
if(password === '' || password === null){
    alert('Canceled.');
} else if(email === user && password === userPass || email === admin && password === adminPass){
    newPassConf = confirm('Do you want to change your password?');
    if(newPassConf === true && password === userPass){
        password = prompt('Enter old password');
        if(password === '' || password === null){
            alert('Canceled.');
        } else if(password === userPass){
            newUserPass = prompt('Enter new password');
            if(newUserPass === '' || newUserPass === null){
                alert('Canceled');
            } else if(newUserPass.length < passLength){
                alert('It’s too short password. Sorry.');
            } else {
                passCheck = prompt('Enter it again');
            }
            if(newUserPass === passCheck){
                alert('You have successfully changed your password.');
            } else{
                alert('You wrote the wrong password.');
            }
        } else{
            alert('Wrong password');
        }
    } else if(newPassConf === true && password === adminPass){
        password = prompt('Enter old password');
        if(password === '' || password === null){
            alert('Canceled.');
        } else if(password === adminPass){
            newAdminPass = prompt('Enter new password');
            if(newAdminPass === '' || newAdminPass === null){
                alert('Canceled');
            } else if(newAdminPass.length < passLength){
                alert('It’s too short password. Sorry.');
            } else {
                passCheck = prompt('Enter it again');
            }
            if(newAdminPass === passCheck){
                alert('You have successfully changed your password.');
            } else{
                alert('You wrote the wrong password.');
            }
        } else{
            alert('Wrong password');
        }
    }
} else{
    alert('Wrong password');
}
