function sendMail(){
    let params={
        name:document.getElementById("inputPassword4").value,
        email:document.getElementById("inputEmail4").value,
        subject:document.getElementById("inputAddress").value,
        message:document.getElementById("exampleFormControlTextarea1").value,
    }
    emailjs.send("service_d00egrv","template_ucw1ans",params).then(alert("Email Sent successfully!!"))
}
    // emailjs.send("service_d00egrv","template_ucw1ans",params)
    // .then(
    //     res => {
    //         document.getElementById('inputPassword4').value="";
    //         document.getElementById('inputEmail4').value="";
    //         document.getElementById('inputAddress').value="";
    //         document.getElementById('iexampleFormControlTextarea1').value="";
    //         console.log(res);
    //         alert("your message sent successfully");

    //     }
    // );    


