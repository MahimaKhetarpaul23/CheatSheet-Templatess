let signInBtn = document.getElementById('sign-in-span');
// console.log(signInBtn);

let signUpBtn = document.getElementById('sign-up-span');
// console.log(signUpBtn);


// // Can do using toggle class also first give display as none......:
signUpBtn.addEventListener('click',function showForm(e){
    console.log("signUpBtn Clicked!!");
    let body = document.getElementsByTagName('body')[0];
    let div = document.createElement('div');
    let str = `
      <h1> Hello Dear </h1>  
    `
    let form = document.getElementById('FormDiv');
    console.log(form);
    if(form!=null){
        console.log(form.style.display);
    }
    
    if(form!=null && form.style.display=="block"){
        form.style.display="none";
    }
    else if(form!=null && form.style.display=="none"){
        form.style.display="block";
    }
    else{
        div.innerHTML=str;
        div.id="FormDiv";
        div.setAttribute('style','display:block;background-color:yellow;color:red;position:fixed;top:10vh;height:85vh;width:90vw;margin:0vh 5vw');
        body.appendChild(div);
    }
}); 