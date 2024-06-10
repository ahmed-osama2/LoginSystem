var logInEmail = document.querySelector('#logInEmail')
var logInpassword = document.querySelector('#logInpassword')
var logBtn = document.querySelector('.btnLogin')


var savedData = JSON.parse(localStorage.getItem('allData'))


logBtn.addEventListener('click', function () {
    if (logInEmail.value == '' || logInpassword.value == '') {

        document.querySelector('.myMassage').innerHTML = ` All Inputs Is Required `
    }

    else{

        for (i = 0; i < savedData.length; i++) {
    
    
            if (savedData[i].email == logInEmail.value && savedData[i].password == logInpassword.value) {
                window.open("./!!!!!!welcom !!!!!!!!!/index.html", '_self')
                localStorage.setItem('userName', savedData[i].name)

            }

            else {
    
                document.querySelector('.myMassage').innerHTML = ` The email address or password you entered is incorrect. Make sure have an account.<br>if you Dont have account? <a class="text-white " ./!!!!!sin up !!!!!!!!!!/index.html">sing up</a> `
    
            }
    
        }

    }





})


