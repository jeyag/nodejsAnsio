function myFunction()
{
    var empNo = document.inputForm.empNo;
    var fname = document.inputForm.fname;
    var lname = document.inputForm.lname;
    var team = document.inputForm.team;
    var feedbackText = document.inputForm.feedbackText;
}

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;
}    

function onlyAlphabets(event) {
	if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)||(event.keyCode==32))
      return true;
    return false;
}

function init() {
    document.getElementById("inputForm").reset();
}
window.onload = init;


