document.addEventListener("DOMContentLoaded", () => {

    // --- PARTE 1: SELEÇÃO DE TODOS OS ELEMENTOS DO HTML ---
    // É uma boa prática declarar todas as variáveis que buscam elementos no início.

    // Elementos do Carrossel de Fotos (Fase 2)
    const mainPhoto = document.getElementById("main-photo");
    const prevBtn = document.getElementById("botaovoltar");
    const nextBtn = document.getElementById("botaoseguir");

    // Elementos da Validação de Campos (Fase 3)
    const inputCPF = document.getElementById("cpf");
    const inputEmail = document.getElementById("email");
    const statusCPF = document.getElementById("status-cpf");
    const statusEmail = document.getElementById("status-email");

    // Elementos de Adicionar Descrição (Fase 3)
    const botaoAdicionarInfo = document.getElementById("btn-add-info");
    const textareaInfo = document.getElementById("nova-info-perfil");
    const containerDescricao = document.getElementById("container-descricao");
    const formNovaInfo = document.getElementById("form-nova-info");

    // Elementos de Adicionar e Ordenar UCs (Fase 3)
    const botaoAdicionarUC = document.getElementById("btn-add-uc");
    const listaUCs = document.getElementById("lista-ucs");


    // --- PARTE 2: LÓGICA DAS FUNCIONALIDADES ---

    // Lógica do Carrossel de Fotos
    const images = ["images/eu.jpg", "images/eu2.png", "images/eu3.png", "images/eu4.jpg", "images/eu5.jpg"];
    let i = 0;
    if (prevBtn && nextBtn && mainPhoto) {
        prevBtn.addEventListener("click", () => {
            i = (i - 1 + images.length) % images.length;
            mainPhoto.src = images[i];
        });

        nextBtn.addEventListener("click", () => {
            i = (i + 1) % images.length;
            mainPhoto.src = images[i];
        });
    }

    // Lógica da Validação de Campos
    if (inputCPF && statusCPF) {
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

    if (inputEmail && statusEmail) {
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

    // Lógica de Adicionar Descrição
    if (botaoAdicionarInfo && textareaInfo && containerDescricao && formNovaInfo) {
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

    // Lógica de Adicionar e Ordenar UCs
    if (botaoAdicionarUC && listaUCs) {
        function adicionarControles(itemLista) {
            const textoUC = itemLista.textContent;
            itemLista.innerHTML = '';
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

        const itensIniciais = listaUCs.querySelectorAll("li");
        itensIniciais.forEach(item => adicionarControles(item));

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
    }

});