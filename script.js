// ===============================
// PESQUISA DE PRODUTOS
// ===============================

const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keyup", function () {

        const texto = pesquisa.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const nome = card.querySelector("h3").textContent.toLowerCase();

            const descricao = card.querySelector("p").textContent.toLowerCase();

            if (nome.includes(texto) || descricao.includes(texto)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ===============================
// ENVIAR ORÇAMENTO PARA WHATSAPP
// ===============================

const form = document.getElementById("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const moto = document.getElementById("moto").value.trim();
        const peca = document.getElementById("peca").value.trim();

        const mensagem =
`*NOVO PEDIDO DE ORÇAMENTO*

👤 Nome: ${nome}

🏍 Moto: ${moto}

🔧 Peça desejada:
${peca}

Enviado pelo site da Washington Motos.`;

        const numero = "5584994162306";

        const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}

// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});

// ===============================
// VOLTAR AO TOPO
// ===============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "⬆";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "100px";
botaoTopo.style.right = "25px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#e30613";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
botaoTopo.style.zIndex = "9999";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});