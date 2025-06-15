// Garante que o script só rode depois que a página carregar
document.addEventListener("DOMContentLoaded", () => {

    // --- FUNCIONALIDADE 1: ADICIONAR UC ---
    const botaoAdicionarUC = document.getElementById("btn-add-uc");
    const listaUCs = document.getElementById("lista-ucs");

    botaoAdicionarUC.addEventListener("click", () => {
        const nomeNovaUC = prompt("Digite o nome da nova UC:");
        if (nomeNovaUC) { // Verifica se o usuário não clicou em cancelar
            const novoItemLista = document.createElement("li");
            novoItemLista.textContent = nomeNovaUC;
            listaUCs.appendChild(novoItemLista);
        }
    });

    // ... (aqui entrará o código das outras funcionalidades)

});

// --- FUNCIONALIDADE 2 e 3: VALIDAR CAMPOS ---
const inputCPF = document.getElementById("cpf");
const inputEmail = document.getElementById("email");

inputCPF.addEventListener("blur", () => {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (regexCPF.test(inputCPF.value)) {
        inputCPF.style.border = "2px solid green";
    } else {
        inputCPF.style.border = "2px solid red";
    }
});

inputEmail.addEventListener("blur", () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(inputEmail.value)) {
        inputEmail.style.border = "2px solid green";
    } else {
        inputEmail.style.border = "2px solid red";
    }
});
// --- FUNCIONALIDADE 4: ADICIONAR DESCRIÇÃO ---
const botaoAdicionarInfo = document.getElementById("btn-add-info");
const textareaInfo = document.getElementById("nova-info-perfil");
const containerDescricao = document.getElementById("cont-perfil");

botaoAdicionarInfo.addEventListener("click", () => {
    const novaInfo = textareaInfo.value;
    if (novaInfo) {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.className = "p_profile"; // Para manter o estilo
        novoParagrafo.textContent = novaInfo;
        containerDescricao.appendChild(novoParagrafo);
        textareaInfo.value = ""; // Limpa a caixa de texto
    }
});