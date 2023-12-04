# 📖 Papyrus Portal 📖


Payrus Portal is a plataform 
This project focuses on implementing the login and sign-up pages of the Papyrus Portal, a platform that combines reading organization features with an online book store.
<br>
<br>

## PREVIEW
<div align="center">
  <img align="center" src="assets/preview.gif" width="700px">
</div> <br>

## Features and Details:

- The project's design was developed with a mobile-first approach, enabling the creation of a responsive page with minimal interventions through media queries.
<div align="center">
  <img src="assets/responsive.gif" width="700px">
</div> <br><br>

- Masks were implemented to format values entered in the sign up page input fields, indicating valid formats and making the information more visually accessible. The use of these masks enhances the usability of the page and helps ensure the integrity of the data provided to the system. The following regular expressions (regex) were employed in the JavaScript code for this purpose.

```JavaScript
//password ----------------------------------------------------------

(?=.*\d) //request at least one number in the password
(?=.*[a-z]) //request at least one lowerercase letter
(?=.*[A-Z]) //request at least one uppercase letter
(?=.*[$*&@#]) //request at least one special character
^[0-9a-zA-Z$*&@#]{8,}$ //request at least 8 characters

//email -------------------------------------------------------------

^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$
//text@text.text

//phone -------------------------------------------------------------

phone.value = phone.value.replace(/\D/g,'') //allows just numbers
phone.value = phone.value.replace(/(\d{2})(\d)/,"($1) $2") //brazillian number format with area code in parentheses
phone.value = phone.value.replace(/(\d)(\d{4})$/,"$1-$2") //brazilian fixed and mobile number format.
```
<br><br>

<div align="center">
  <img src="assets/phone.gif" width="700px">
</div> <br><br>

- Implementation of a floating label that allows the display of the field title even when it is in focus.
<div align="center">
  <img src="assets/label.gif" width="700px">
</div> <br><br>

- Password visibility option and a span displaying the required pattern, enhancing the usability of the page.
<div align="center">
  <img src="assets/password.gif" width="700px">
</div> <br><br>

- Efficient sign-up system that allows data submission only when all fields are filled with valid information.
<div style="display: inline_block" align="center">
  <img src="assets/signup1.gif" width="400px">
  <img src="assets/signup2.gif" width="400px">
</div> <br><br>

- Efficient login system that identifies and signals invalid information.
<div style="display: inline_block" align="center">
  <img src="assets/login1.gif" width="400px">
  <img src="assets/login2.gif" width="400px">
</div>

- Storage of information through localStorage.
<div align="center">
  <img src="assets/localstorage.gif" width="700px">
</div> <br><br>

- Creation of a random token with each new login, preventing access by users not logged into the session.
<div align="center">
  <img src="assets/token.gif" width="700px">
</div> <br><br>







