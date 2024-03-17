// const userData = {
//     email: "qumraltahmaz@gmail.com",
//     password: "qumral1107"
// }

// const inputL = document.querySelectorAll(".form-control");
// const formL = document.querySelector('form');
// const alertL = document.querySelector('#alerts');

// const login = (e) => {
//     e.preventDefault();
//     if (!inputL[0].value || !inputL[1].value) {
//         alertL.innerHTML = 'Please, fill inputs';
//         alertL.className = "alert alert-warning";
//     } else {
//         if (inputL[0].value === userData.email && inputL[1].value === userData.password) {
//             alertL.innerHTML = 'Login successfull!';
//             alertL.className = "alert alert-success";
//         } else {
//             alertL.innerHTML = 'Email or password is wrong!';
//             alertL.className = "alert alert-danger ";
//         }
//     }
// }

// formL.onsubmit = login;
// ===================================================================================
// const databaseUser = {
//   email: "admin@bestshop.com",
//   password: "bestshop2024",
// };

// const loginInput = document.querySelectorAll(".form-control");
// const loginForm = document.querySelector("form");
// const myalert = document.querySelector("#myalert");

// const authLogin = (e) => {
//   e.preventDefault();
//   if (!loginInput[0].value || !loginInput[1].value) {
//     myalert.innerHTML = "Please, fill inputs";
//     myalert.className = "alert alert-warning";
//   } else {
//     if (
//       loginInput[0].value === databaseUser.email &&
//       loginInput[1].value === databaseUser.password
//     ) {
//       myalert.innerHTML = "Login successfull!";
//       myalert.className = "alert alert-success";
//     } else {
//       myalert.innerHTML = "Email or password is wrong!";
//       myalert.className = "alert alert-danger ";
//     }
//   }
// };

// loginForm.onsubmit = authLogin;
// =================================================================
const databaseUser = {
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password')
}


const loginInput = document.querySelectorAll(".form-control");
const loginForm = document.querySelector('.log');
const myalert = document.querySelector('#myalert');

const authLogin = (e) => {
  e.preventDefault();
  if (!loginInput[0].value || !loginInput[1].value) {
      myalert.innerHTML = 'Please, fill inputs';
      myalert.className = "alert alert-warning";
  } else {
      if (loginInput[0].value === databaseUser.email && loginInput[1].value === databaseUser.password) {
          myalert.innerHTML = 'Login successfull!';
          myalert.className = "alert alert-success";
          window.location.assign('/pages/index.html');
          localStorage.setItem('login',"true");

      } else {
          myalert.innerHTML = 'Email or password is wrong!';
          myalert.className = "alert alert-danger ";
      }
  }
}

loginForm.onclick=authLogin