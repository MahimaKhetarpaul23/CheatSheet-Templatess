// Validations to sign-up form :

let btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click',function sign(e){
    e.preventDefault();
    let name = document.getElementById('input-name').value;
    console.log(name);
    let mail = document.getElementById('input-mail').value;
    console.log(mail);
    let password = document.getElementById('input-password').value;
    console.log(password);
    let confirmPassword = document.getElementById('input-confPassword').value;
    console.log(confirmPassword);

    let div = document.getElementById('alert-div');

    if(name=='' || mail=='' || password=='' || confirmPassword==''){
        console.log("Empty field");
        div.innerHTML=`Empty fields are not allowed.`;
        div.setAttribute('style','background-color:pink;font-size:1.3rem;font-family:The Nautigal, cursive;;color:purple;width:100vw;padding:1vh 4vw');
        setTimeout(function(){
            div.style.display="none";
        },3000);
    }
    else if(password!=confirmPassword){
        console.log("Passwords didn't matched!");
        div.innerHTML=`Passwords didn't matched !`;
        div.setAttribute('style','background-color:pink;font-size:1.3rem;font-family:The Nautigal, cursive;;color:purple;width:100vw;padding:1vh 4vw');
        setTimeout(function(){
            div.style.display="none";
        },3000);
    }
    else{
        console.log("Form submitted!");
        div.innerHTML=`Form submitted successfully ! Welcome to Coding with Mahima.`;
        div.setAttribute('style','background-color:lightgreen;font-size:1.3rem;font-family:The Nautigal, cursive;;color:purple;width:100vw;padding:1vh 4vw');
        setTimeout(function(){
            div.style.display="none";
        },3000);
    }
})