/** 
 *@function validateForm - does not take any parameters
 *  This function insures the user enters something before clicking subscribe
 * This function also makes sure the user agrees to the terms and condition before subscribing
 * @returns false - this function only returns false
 * @constant x -is assigned the value entered by the user as name
 * @constant y -is assigned the value entered by the user as email
 * @method alert - is used to give a popup message to the user with instruction 
 * 
*/
function validateForm () {
  const x = document.forms['form.myForm']['name.fname'].value
  const y = document.forms['form.myForm']['email.femail'].value
  if (x === '' || x == null) {
    alert('Please fillout the name')
    return false
  } else if (y === '' || x == null) {
    alert('please fillout the email')
    return false
  } else if (document.getElementById('exampleCheck1').checked === false) {
    alert('you have to agree to the terms and conditions to continue')
    return false
  }
}
