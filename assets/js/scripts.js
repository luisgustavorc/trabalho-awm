document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;

  // identifica o tema salvo, se houver
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
  }

  themeSwitcher.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // modifica a classe do body conforme o tema
    let theme = "light-mode";
    if (body.classList.contains("dark-mode")) {
      theme = "dark-mode";
    }
    localStorage.setItem("theme", theme);
  });

  const contactForm = document.getElementById("contact-form");
  // lógica de formulário, com feedback fictício de envio
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;
      const formMessage = document.getElementById("form-message");

      if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
        formMessage.textContent =
          "Por favor, preencha todos os campos obrigatórios.";
        formMessage.style.color = "red";
      } else {
        // feedback de envio
        formMessage.textContent = "Mensagem enviada com sucesso! (simulação)";
        formMessage.style.color = "green";
        contactForm.reset();
      }
    });
  }
});
