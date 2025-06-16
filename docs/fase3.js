document.addEventListener("DOMContentLoaded", () => {
    const images = ["images/eu.jpg", "images/eu2.jpg", "images/eu3.png", "images/eu4.jpg", "images/eu5.jpg"];
    let i = 0;

    const mainPhoto = document.getElementById("main-photo");
    const prevBtn = document.getElementById("botaovoltar");
    const nextBtn = document.getElementById("botaoseguir");

    prevBtn.addEventListener("click", () => {
        i = (i - 1 + images.length) % images.length;
        mainPhoto.src = images[i];
    });

    nextBtn.addEventListener("click", () => {
        i = (i + 1) % images.length;
        mainPhoto.src = images[i];
    });
});

// Garante que o script só rode depois que a página carregar
document.addEventListener("DOMContentLoaded", () => {


    // --- FUNCIONALIDADE 2 e 3: VALIDAR CAMPOS ---
    const inputCPF = document.getElementById("cpf");
    const inputEmail = document.getElementById("email");

    // Seleciona os novos spans
    const statusCPF = document.getElementById("status-cpf");
    const statusEmail = document.getElementById("status-email");

    if (inputCPF) {
        inputCPF.addEventListener("blur", () => {
            const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            if (regexCPF.test(inputCPF.value)) {
                inputCPF.style.border = "2px solid green";
                statusCPF.textContent = " ✅"; 
            } else {
                inputCPF.style.border = "2px solid red";
                statusCPF.textContent = " ❌";
            }
        });
    }

    if (inputEmail) {
        inputEmail.addEventListener("blur", () => {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (regexEmail.test(inputEmail.value)) {
                inputEmail.style.border = "2px solid green";
                statusEmail.textContent = " ✅";
            } else {
                inputEmail.style.border = "2px solid red";
                statusEmail.textContent = " ❌";
            }
        });
    }
    // --- FUNCIONALIDADE 4: ADICIONAR DESCRIÇÃO ---
    const botaoAdicionarInfo = document.getElementById("btn-add-info");
    const textareaInfo = document.getElementById("nova-info-perfil");
    const containerDescricao = document.getElementById("container-descricao");

    const formNovaInfo = document.getElementById("form-nova-info");

    if (botaoAdicionarInfo) {
        botaoAdicionarInfo.addEventListener("click", () => {
            const novaInfo = textareaInfo.value;
            if (novaInfo) {
                const novoParagrafo = document.createElement("p");
                novoParagrafo.className = "p_profile";
                novoParagrafo.textContent = novaInfo;

                containerDescricao.insertBefore(novoParagrafo, formNovaInfo);

                textareaInfo.value = "";
            }
        });
    }
    // --- FUNCIONALIDADE 5: ADICIONAR E ORDENAR UCs ---

    function adicionarControles(itemLista) {
        const textoUC = itemLista.textContent;
        itemLista.innerHTML = ''; // Limpa o conteúdo do <li>

        const btnSubir = document.createElement("button");
        btnSubir.className = "btn-ordem";
        btnSubir.innerHTML = "▲";
        itemLista.appendChild(btnSubir);

        const btnDescer = document.createElement("button");
        btnDescer.className = "btn-ordem";
        btnDescer.innerHTML = "▼";
        itemLista.appendChild(btnDescer);

        const spanTexto = document.createElement("span");
        spanTexto.className = "texto-uc";
        spanTexto.textContent = textoUC;
        itemLista.appendChild(spanTexto);
    }

    // Pega todos os itens da lista que já existem no HTML e adiciona os controles
    const itensIniciais = listaUCs.querySelectorAll("li");
    itensIniciais.forEach(item => adicionarControles(item));

    // Modifica a função de ADICIONAR UC
    botaoAdicionarUC.addEventListener("click", () => {
        const nomeNovaUC = prompt("Digite o nome da nova UC:");
        if (nomeNovaUC) {
            const novoItemLista = document.createElement("li");
            novoItemLista.textContent = nomeNovaUC;
            adicionarControles(novoItemLista);
            listaUCs.appendChild(novoItemLista);
        }
    });

    listaUCs.addEventListener("click", (event) => {
        const alvo = event.target;

        if (alvo.tagName === "BUTTON" && alvo.className === "btn-ordem") {
            const itemAtual = alvo.closest("li");

            if (alvo.innerHTML === "▲") {
                const itemAnterior = itemAtual.previousElementSibling;
                if (itemAnterior) {
                    listaUCs.insertBefore(itemAtual, itemAnterior);
                }
            }

            if (alvo.innerHTML === "▼") {
                const itemSeguinte = itemAtual.nextElementSibling;
                if (itemSeguinte) {
                    listaUCs.insertBefore(itemSeguinte, itemAtual);
                }
            }
        }
    });

});

