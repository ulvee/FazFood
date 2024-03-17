// const userData = {
//   name: "Qumral",
//   phone: "07777",
//   email: "qumral@g.com",
//   password: "qumral11",
//   againpsw: "qumral11",
// };

// const inputR = document.querySelectorAll(".form-control");
// const formR = document.querySelectorAll("form");
// const myalert = document.querySelector("#myalert");

// const register = (e) => {
//   e.preventDefault();
//   if (!inputR[0].value || !inputR[1].value || inputR[2].value || inputR[3].value || inputR[4].value) {
//     myalert.innerHTML = "Please, fill inputs";
//     myalert.className = "alert alert-warning";
//   } else {
//     if (
//       inputR[0].value === userData.name &&
//       inputR[1].value === userData.phone &&
//       inputR[2].value === userData.email &&
//       inputR[3].value === userData.password &&
//       inputR[4].value === userData.againpsw
//     ) {
//       myalert.innerHTML = "Register successfull!";
//       myalert.className = "alert alert-success";
//     } else {
//       myalert.innerHTML = "Email or password is wrong!";
//       myalert.className = "alert alert-danger ";
//     }
//   }
// };

// formR.onsubmit = register;
// ==============================================================================
// const formInput = document.querySelectorAll(".form-control");
// const form = document.querySelector('form');
// const myalert = document.querySelector('#myalert');

// const register = (e) => {
//     e.preventDefault();
//     if (!formInput[0].value || !formInput[1].value || !formInput[2].value || !formInput[3].value || !formInput[4].value) {
//         myalert.innerHTML = 'Please, fill inputs';
//         myalert.className = "alert alert-warning";
//     } else {
//         if (formInput[3].value != formInput[4].value) {
//             myalert.innerHTML = 'Password is different!';
//             myalert.className = "alert alert-danger";
//         } else {
//             myalert.innerHTML = 'Register is successfull!';
//             myalert.className = "alert alert-success";
//             localStorage.setItem('fullname',formInput[0].value);
//             localStorage.setItem('email',formInput[2].value);
//             localStorage.setItem('password',formInput[3].value);
//             localStorage.setItem('login',"false");
//             window.location.assign('login.html');
//         }
//     }

// }
// form.onsubmit = register;

// ======================================================================
const formInput = document.querySelectorAll(".form-control");
const form = document.querySelector(".go");
const myalert = document.querySelector("#myalert");

const register = (e) => {
    e.preventDefault();
    if (!formInput[0].value || !formInput[1].value || !formInput[2].value || !formInput[3].value || !formInput[4].value) {
        myalert.innerHTML = 'Please, fill inputs';
        myalert.className = "alert alert-warning";
    } else {
        if (formInput[3].value !== formInput[4].value) {
            myalert.innerHTML = 'Password is different!';
            myalert.className = "alert alert-danger";
        } else {
            myalert.innerHTML = 'Register is successfull!';
            myalert.className = "alert alert-success";
            localStorage.setItem('fullname',formInput[0].value);
            localStorage.setItem('email',formInput[2].value);
            localStorage.setItem('password',formInput[3].value);
            localStorage.setItem('login',"false");
            window.location.assign('login.html');
        }
    }


}
form.onclick = register;