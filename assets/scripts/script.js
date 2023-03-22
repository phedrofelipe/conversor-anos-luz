// FUNÇÕES BASE DE AÇÕES DA PÁGINA

function lightYearsConverter(pr) {
    
    pr.preventDefault(); // A declaração "preventDefault" cancela um determinado evento, nesse casso o evento cancelado é o recarregamento da página após o envio do formulário.


    // Declaração de váriaveis que recebem os valores do input de "name" e "lightYears":
    var name = document.getElementById('name').value;
    var lightYears = document.getElementById('lightYears').value;

    // Validação de preenchimento dos valores do input de "name" e "lightYears", finalizando a função com o "return" especificando os valores que devem ser preenchidos.
    if (name == '' | lightYears == '') {
        alert("Verifique e Preencha todos os campos corretamente!")
        return;
    }


    // A estrutura condicional abaixo é responsável pela alteração do conteúdo principal da página. Omitindo e Exibindo respectivamento os elementos 'mainContent' e 'resultContent'.
    let display = document.getElementById('mainContent').style.display;
    if (display == "none") {
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('resultContent').style.display = 'none';
    } else {
        document.getElementById('mainContent').style.display = 'none';
        document.getElementById('resultContent').style.display = 'block';
    }

    
    // Alteração dos valores padrões do elemento 'resultContent' para os valores preenchidos no forms do elemento 'mainContent'.
    document.getElementById('user').innerHTML = name;
    document.getElementById('lightYearsResult').innerHTML = lightYears;

    // Cálculo de conversão de anos luz em metros:
    var meters = 9.500000000000000;
    var result = lightYears * meters;
    document.getElementById('meters').innerHTML = result;
    
    // Estrutura condicional para especificar a classe numeral do resultado do cálculo da conversão:
    if (result <= '1000') {
        document.getElementById('meters').innerHTML = result + " Trilhões";
    } else if (result <= '1000000') {
        document.getElementById('meters').innerHTML = result + " Quatrilhões";
    } else if (result <= '1000000000') {
        document.getElementById('meters').innerHTML = result + " Quintilhões";
    } else if (result <= '1000000000000') {
        document.getElementById('meters').innerHTML = result + " Sextilhões";
    } else {
        document.getElementById('resultText').innerHTML = "Número Inválido! Preencha outro número e tente novamente."
    }

}


// Função para recarregar a página.
function goBack() {
    window.location.reload();
}


// Declaração que cria o evento de ativação da função lightYearsConverter após o envio do formulário.
document.getElementById('form').addEventListener('submit', lightYearsConverter);