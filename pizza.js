document.getElementById("pizza-form").onsubmit = () => {

  clearErrors();

  let isValid = true;
  
  // Validate first name
  let fname = document.getElementById("fname").value.trim();
  
  if(!fname) {
    document.getElementById("err-fname").style.display = "block";
    isValid = false;
  }

  // Validates last name
  let lname = document.getElementById("lname").value.trim();
  
  if(!lname) {
    document.getElementById("err-lname").style.display = "block";
    isValid = false;
  }

  // Validates email
  let ename = document.getElementById("ename").value.trim();
  if(!ename) {
    document.getElementById("err-ename").style.display = "block";
    isValid = false;
  }

  let size = document.getElementById("size").value;
  if(size == "none") {
    document.getElementById("err-size").style.display = "block";
    isValid = false;
  }

  // Validate method
  let pickup = document.getElementById("pickup");
  let delivery = document.getElementById("delivery");
  if(!pickup.checked && !delivery.checked) {
    document.getElementById("err-method").style.display = "block";
    isValid = false;
  }

  return isValid;

}

function clearErrors() {
  let errors = document.getElementsByClassName("err");

  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}

