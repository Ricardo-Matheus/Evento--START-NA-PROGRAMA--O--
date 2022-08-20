function calculo_da_gorjeta(event) {

event.preventDefault();

let valor_da_conta = document.getElementById('conta').value;
let qualidade_do_serviço = document.getElementById('serviço').value;
let quantidade_de_pessoas = document.getElementById('divisao').value;

if(valor_da_conta == '' | valor_da_conta == 0 | qualidade_do_serviço == '' | qualidade_do_serviço == 0 | quantidade_de_pessoas == 0) {

    alert('PorFavor, Preencha os Campos !!');

    return;
}

let resultado_da_divisão = (valor_da_conta * qualidade_do_serviço)/quantidade_de_pessoas;

resultado_da_divisão.toFixed(2);

document.getElementById('resultado').innerHTML = resultado_da_divisão;
document.getElementById('resultado').style.display = 'block'
document.getElementById('caixa-do-resultado').style.display = 'block'

if (quantidade_de_pessoas > 1) {
    document.getElementById('cada').style.display = 'block';
}
}

document.getElementById('cada').style.display = 'none'

document.getElementById('caixa-do-resultado').style.display = "none";

document.getElementById('form').addEventListener('submit', calculo_da_gorjeta);

