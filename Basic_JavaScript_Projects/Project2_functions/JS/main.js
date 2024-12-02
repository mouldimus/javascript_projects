function My_First_Function() {
  let str = "This is the button text!";
  // Change the button text
  document.getElementById("Button_Text").innerHTML = str;

  // concatenation
  let pStr = "This is the paragraph text! ";
  let catStr = "This has been concatenated!";
  document.getElementById("appear").innerHTML = pStr += catStr;
}
