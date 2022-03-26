const inputCep = document.querySelector("#cep");
const BASE_URL = 'https://brasilapi.com.br/api';
const inputRua = document.querySelector('#rua');
const inputComplemento = document.querySelector('#complemento');
const inputBairro = document.querySelector('#bairro');
const inputUF = document.querySelector('#UF');


inputCep.onkeyup = async (evento) => {
    //verifica se o CEP tem 8 digitos
    if(inputCep.value.length < 8){
        return;
    }
    //fazendo uma requisição a api BRASILAPI para buscar o CEP digitado
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`,{
        method: "GET",
    });

    //extraindo o json da resposta
    const conteudoResposta = await resposta.json();
    console.log(conteudoResposta);
    
    // if (resposta.status == 200){
    //     alert("uhul achei " + inputCep.value);
    // }

    inputRua.value = conteudoResposta.street;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;
    inputComplemento.value = conteudoResposta.city;
    


    
    
};

