function validateEmail(email) 
{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
console.log(validateEmail("charan@gmail.com"));
console.log(validateEmail("kiran@gmail"));
  