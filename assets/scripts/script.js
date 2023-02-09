// DECLARAÇÃO DE VARIÁVEIS

function ocultarElemento(pd) {
    var display = document.getElementById(pd).style.display;

    if (display == "none") {
        document.getElementById(pd).style.display = 'block';
        document.getElementById('resultContent').style.display = 'none';
    } else {
        document.getElementById(pd).style.display = 'none';
        document.getElementById('resultContent').style.display = 'block';
    }
}

function lightYearsConverter(ly) {
    
    ly.preventDefault();

    let name = document.getElementById('name').value;
    let lightYears = document.getElementById('lightYears').value;

    if (name == '' | lightYears == '') {
        alert("Verifique e preencha os campos corretamente!")
        return;
    }

    document.getElementById('user').innerHTML = name;
    document.getElementById('lightYearsResult').innerHTML = lightYears;

    let meters = 9.500000000000000;
    let result = lightYears * meters;
    if (result <= '1000') {
        document.getElementById('meters').innerHTML = result + " Trilhões";
    } else if (result <= '1000000') {
        document.getElementById('meters').innerHTML = result + " Quatrilhões";
    } else if (result <= '1000000000') {
        document.getElementById('meters').innerHTML = result + " Quintrilhões";
    } else {
        document.getElementById('meters').innerHTML = "Número Inválido";
    }

}

document.getElementById('form').addEventListener('submit', lightYearsConverter);