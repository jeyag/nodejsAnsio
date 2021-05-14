function formValidation()
{
var numberEntered = document.inputForm.textid.value;
if(numberEntered!==" ")
if(isNumber(numberEntered))
document.getElementById("fn_error").style.display='none';
else{
document.getElementById("fn_error").style.display='block';
document.getElementById("fn_error").innerHTML="Only numbers are allowed";
document.inputForm.textid.focus();
}
}

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))

        return false;

    return true;
}    

function init() {
    document.getElementById("inputForm").reset();
  
}
window.onload = init;

