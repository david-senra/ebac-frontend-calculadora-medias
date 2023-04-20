const formulario = document.getElementById("formulario-inputs");
const mediaDasNotas = document.getElementById("media-notas");
const resultadoFinal = document.getElementById("resultado-final");
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'
let media = 0;
let linhas = "";
let atividadesCadastradas = [];
let notasCadastradas = [];

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividadesCadastradas.includes(inputNomeAtividade.value)) {
        (alert(`A atividade ${inputNomeAtividade.value} já foi incluída!`))
    } 
    else {
        atividadesCadastradas.push(inputNomeAtividade.value);
        notasCadastradas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculaMedia();
    mediaDasNotas.innerHTML = mediaFinal;
    resultadoFinal.innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMedia() {
    let valortotal = 0;
    for (let i = 0; i < notasCadastradas.length; i++) {
        valortotal += notasCadastradas[i];
    }
    return valortotal / (notasCadastradas.length);
}
