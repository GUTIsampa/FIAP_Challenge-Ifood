function validaForm() {
    document.querySelector(".mensagem-erro").style.display = "none";
    if (document.getElementById("email").value.length == 0) {
        document.getElementById("email").focus();
        document.getElementById('error-message1').style.display = "block";
        return false;
    }
    if (document.getElementById("senha").value.length == 0) {
        document.getElementById("senha").focus();
        document.getElementById('error-message2').style.display = 'block';
        return false;
    }
    window.location = "./assets/pages/Home.html";
}