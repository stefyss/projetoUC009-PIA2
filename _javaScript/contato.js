function cadastrar() {
    var vNome = document.getElementById("nom").value;
    var vDocumento = document.getElementById("doc");
    var vTelefone = document.getElementById("tel");
    var vCelular = document.getElementById("cel");
    

    if (vNome != "") {
        if (vDocumento.value != "" && vDocumento .checkValidity()) {
            if (vTelefone .value != "" && vDocumento .checkValidity()) {
                if (vCelular .value != "" && vDocumento .checkValidity()) {
                    return true;
                } else {
                    alert("Informe um cel válido")
                    return false;
                }

            } else {
                alert("Informe um tel válido")
                return false;
            }

        } else {
            alert("Informe um CPF válido")
            return false;
        }
    } else {
        alert("Informe seu nome completo")
        return false;
    }
}


function calcular() {
    var vCep = document.getElementById("cep");
    var vLogradouro = document.getElementById("rua").value;
    var vNumero = document.getElementById("num").value;
    var vComplemento = document.getElementById("comp").value;
    var vBairro = document.getElementById("bairro").value;
    var vCidade = document.getElementById("cidade").value;
    var vEstado = document.getElementById("uf").value;

    if(vCep .value != "" && vDocumento .checkValidity()) {
        if (vLogradouro != "") {
            if (vNumero != "") {
                if (vComplemento != "") {
                    if (vBairro != "") {
                        if (vCidade != "") {
                            if (vEstado != "") {
                                return true;

                            } else {
                                alert("Informe o estado")
                                return false;
                            }

                        } else {
                            alert("Informe a cidade")
                            return false;
                        }

                    } else {
                        alert("Informe o bairro")
                        return false;
                    }

                } else {
                    alert("Informe o complemento")
                    return false;
                }

            } else {
                alert("Informe o número")
                return false;
            }

        } else {
            alert("Informe o logradouro")
            return false;
        }

    } else {
        alert("Informe um CEP válido")
        return false;
    }
    
}
    

function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        // document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            
            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};