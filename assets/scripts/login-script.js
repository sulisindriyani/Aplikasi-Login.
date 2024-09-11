/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
/** @modul login-script */
/**
* Membuat variabel loginFormElement untuk tampulam form.
* @constant { HTMLElement
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* membuat variabel inputEmailElement untuk tampilan input email.
*@constant { HTMLElement
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
** membuat variabel inputPasswordElement untuk tampilan input password.
*@constant { HTMLElement
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
** membuat variabel expectedEmail untuk menyimpan infprmasi email sementara.
*@constant {string
*/
const expectedEmail = 'admin@dicoding.com';


/**
** membuat variabel expectedPassword untuk menyimpan infprmasi password sementara.
*@constant {string
*/
const expectedPassword = 'superpassword';



/*comnet : menambahkan aksil klik pada button */

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  
/**
** membuat variabel email untuk menyimpan nilai email yang di dapatkan saat button di tekan.
*@constant {string
*/

  const email = inputEmailElement.value;

  /**
** membuat variabel email untuk menyimpan nilai password yang di dapatkan saat button di tekan.
*@constant {string
*/

  const password = inputPasswordElement.value;
 /*comnet : memastikan bahwa nilai email dan password sesui dengan nilai yang tersimpan */ 
  if (email == expectedEmail && password == expectedPassword) {

    /*comnet : jika sesuai maka program akan berpindah ke halaman home */
    goToHome();
  } else {
    /*comnet : namun jika tidak sesuai makan akan menampilkan informasi bahwa input salah */
    showPopUp();
  }
});
