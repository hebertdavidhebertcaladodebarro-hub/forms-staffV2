document.getElementById("staffForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("msgSucesso");
  msg.textContent = "✅ Candidatura enviada com sucesso! Nossa equipe entrará em contato em breve.";
  msg.style.display = "block";

  // Limpa os campos após enviar
  this.reset();

  // Some a mensagem depois de alguns segundos
  setTimeout(() => {
    msg.style.display = "none";
  }, 5000);
});
