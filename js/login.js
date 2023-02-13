document.getElementById('login').addEventListener('click',function(){
  const emailFild = document.getElementById('email-fild');
  const emailInput = emailFild.value;

  const passFild=document.getElementById('user-pass'); 
  const passInput=passFild.value; 

  if(emailInput=='shakil@gmail.com' && passInput=='shakil') 
  {
    window.location.href='http://127.0.0.1:5500/main.html';
  } 
  else{
     alert('Error!! Enter Valid Email & Password');
  }
}) 

