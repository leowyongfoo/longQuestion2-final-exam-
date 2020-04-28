function validate() {
    
    if(document.form1.name.value.length < 3)
    {
        alert("Pls, enter a valid name.");
        return false;
    }

    if(document.form1.email.value.length < 1)
    {
        alert("Pls, enter a valid email address");
        return false;
    }
    if(document.form1.phno.value.length < 10){
        alert("Pls, enter a valid phone number");
        return false;
    }
    if(document.form1.address.value.length < 5){
        alert("Please enter a valid address");
        return false;
    }
    

    return true;

}





	