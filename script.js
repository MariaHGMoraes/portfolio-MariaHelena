// ================= FORMULÁRIO =================
const form = document.getElementById("formContato");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if(nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)) {
        alert("Email inválido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});


// ================= SCROLL SUAVE =================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


// ================= TEMA =================
const botao = document.getElementById("toggleTema");

if(localStorage.getItem("tema") === "claro") {
    document.body.classList.add("light-mode");
    botao.textContent = "🌞";
}

botao.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")) {
        botao.textContent = "🌞";
        localStorage.setItem("tema", "claro");
    } else {
        botao.textContent = "🌙";
        localStorage.setItem("tema", "escuro");
    }
});