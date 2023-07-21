const userName = document.getElementById("userName");
const userPrenom = document.getElementById("userPrenom");
const telephone = document.getElementById("telephone");
const motDePasse1 = document.getElementById("motDePasse1");
const motDePasse2 = document.getElementById("motDePasse2");
const email = document.getElementById("email");
const submit = document.getElementById("envoyer");


const verifyUserName = () => {

    let userNameVal = document.querySelector("#userName").value;
    let str = /^([a-z A-Z]{3,})$/;

    if (str.test(userNameVal)) {
        document.getElementById("alerteNam").style.display = "none";
        userName.style.border = "3px solid green";
        return userNameVal;

    } else {
        document.getElementById("alerteNam").style.display = "inherit";
        userName.style.border = "3px solid red";
        return false;
    }

}

const verifyUserPrenom = () => {
    let userPrenomVal = document.querySelector("#userPrenom").value;
    let str = /^([a-z A-Z]{3,})$/;

    if (str.test(userPrenomVal)) {
        userPrenom.style.border = "3px solid green";
        return userPrenomVal;

    } else {
        userPrenom.style.border = "3px solid red";
        return false;
    }

}

const verifyUserTel = () => {

    let telephoneVal = document.querySelector("#telephone").value;
    let str = /^[0-9]{9}$/;

    if (str.test(telephoneVal)) {
        document.getElementById("alerteTel").style.display = "none";
        telephone.style.border = "3px solid green";
        return telephoneVal;

    } else {
        document.getElementById("alerteTel").style.display = "inherit";
        telephone.style.border = "3px solid red";
        return false;
    }

}

const verifyUserPass1 = () => {

    let motDePasse1Val = document.querySelector("#motDePasse1").value;
    let str = /^[a-z0-9]{8,8}$/;

    if (str.test(motDePasse1Val)) {
        document.getElementById("alertePass").style.display = "none";
        motDePasse1.style.border = "3px solid green";
        return motDePasse1Val;

    } else {
        document.getElementById("alertePass").style.display = "inherit";
        motDePasse1.style.border = "3px solid red";
        return false;

    }

}

const verifyUserPass2 = () => {
    let motDePasse2Val = document.querySelector("#motDePasse2").value;
    let motDePasse1Val = document.querySelector("#motDePasse1").value;

    if (motDePasse1Val === motDePasse2Val) {
        motDePasse2.style.border = "3px solid green";
        return motDePasse2Val;

    } else {
        motDePasse2.style.border = "3px solid red";
        return false;

    }
}

const verifyUserEmail = () => {

    const emailVal = document.querySelector("#email").value;
    const str = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    if (str.test(emailVal)) {
        document.getElementById("alerteMail").style.display = "none";
        email.style.border = "3px solid green";
        return emailVal;

    } else {
        document.getElementById("alerteMail").style.display = "inherit";
        email.style.border = "3px solid red";
        return false;

    }
}
let str = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+*$/.

userName.addEventListener("blur", verifyUserName);
userPrenom.addEventListener("blur", verifyUserPrenom);
telephone.addEventListener("blur", verifyUserTel);
motDePasse1.addEventListener("blur", verifyUserPass1);
motDePasse2.addEventListener("blur", verifyUserPass2);
email.addEventListener("blur", verifyUserEmail);


submit.addEventListener("click", (event) => {
    let canSend = true;
    const name = verifyUserName();
    const surname = verifyUserPrenom();
    const tel = verifyUserTel();
    const pwd = verifyUserPass1();
    const email = verifyUserEmail();

    if (name && surname && tel && pwd && email) {
        alert(JSON.stringify({ name, surname, tel, pwd, email }, null, 4));
    } else {
        event.preventDefault();
    }

})