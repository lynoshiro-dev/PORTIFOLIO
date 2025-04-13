document.getElementById("contact-fomr").addEventListener("submit",function(e){
    e.preventDefault();
    document.getElementById("message").textContent= "Mensagem enviada com sucesso! Obrigada pelo contato.";
    this.reset();
})