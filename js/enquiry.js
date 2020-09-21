function enquiry() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var query = document.getElementById("query").value;


    var studentDetails = document.getElementById("studentDetails");
    var msg = document.getElementById("p");

    studentDetails.innerHTML = "Name:  " + fname + " " + lname + "<br>Email:  " + email + "<br>Mobile:  " + mobile;
    msg.innerHTML = "<br>" + query;

}