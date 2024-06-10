var signupName = document.querySelector('#signupName');
var signupEmail = document.querySelector('#signupEmail');
var signupPassword = document.querySelector('#signupPassword');


var myMasege = document.querySelector('#validationName')


// console.log(signupName , signupPassword ,signupEmail)

var singUpBtn = document.querySelector('.myBtn')

var allData = []

if ((localStorage.getItem('allData') != null)) {
    allData = JSON.parse(localStorage.getItem('allData'))

}




// signupEmail.addEventListener('keyup', function (){




//     for (i = 0; i < allData.length; i++) {
//         if(signupEmail.value == allData[i].email){

//             document.querySelector('#validationName').innerHTML = ` This email already exists `
//             singUpBtn.setAttribute("disabled"," ")   
//         }

//         else{

//             document.querySelector('#validationName').innerHTML = ""
//             singUpBtn.removeAttribute("disabled")   



//         }

// //     }
// // })
// singUpBtn.addEventListener('click', function () {
//     for (i = 0; i < allData.length; i++) {
//         if(signupEmail.value == allData[i].email){

//             document.querySelector('#validationName').innerHTML = ` This email already exists `
//             // singUpBtn.setAttribute("disabled"," ")   
//         }
//     }

// })


function testEmail() {
    for (i = 0; i < allData.length; i++) {
        if (signupEmail.value == allData[i].email) {

            return true
        }
    }

}









singUpBtn.addEventListener('click', function () {





    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {

        document.querySelector('#validationName').innerHTML = ` All Inputs Is Required `

    } 
    
    else if (testEmail() == true) {
        document.querySelector('#validationName').innerHTML = ` <h6 class="text-warning">This email  already exist</h6>  `


    }

    else if (ValidationTest() == true) {

        var userData = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value

        }

        allData.push(userData)
        clear()

        localStorage.setItem('allData', JSON.stringify(allData))


        document.querySelector('#validationName').innerHTML = ` <h5  class="text-success">Registration was successful</h5>  `




    }


    else {
        var testValidation = ValidationTest()

        myMasege.innerHTML = `${testValidation}`


    }




})

function clear() {
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}

// var signupNameRgex = /^[a-z]{3,30}$/mig;
// var signupEmailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
// var signupPasswordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]?).{6,})\S$/;

// function validation() {

//     if(signupNameRgex.test( signupName.value) == false){
//         return "Site name must contain at least 3 characters "

//     }


//     if(signupEmailRegex.test(signupEmail.value) == false){
//         return 'Email must be a valid one'
//     }


//     if(signupPasswordRegex.test(signupPassword.value) == false){
//         return 'password must contain Capital Letter And Small Letter '
//     }

//     return true;






// }

function ValidationTest() {

    var nameRegex = /^[a-z]{3,30}$/mig;
    var emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    var passRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]?).{6,})\S$/;

    if (nameRegex.test(signupName.value) == false) {
        return 'Name Must Be At Least 3 Letter'
    }

    if (emailRegex.test(signupEmail.value) == false) {
        return 'Email Must Be In Avald Format >> name@example.com'
    }

    if (passRegex.test(signupPassword.value) == false) {
        return 'Password Must Contain Capital Letter And Small Letter And consists of at least 6 letters '
    }

    return true

}


