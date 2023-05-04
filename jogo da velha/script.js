function jogo()
{

    var caixa = 
    [
        [document.getElementById("cx00").value, document.getElementById("cx01").value, document.getElementById("cx02").value],
        [document.getElementById("cx10").value, document.getElementById("cx11").value, document.getElementById("cx12").value],
        [document.getElementById("cx20").value, document.getElementById("cx21").value, document.getElementById("cx22").value]
    ]

    for(x = 0; x < 3; x++){
        for(y = 0; y < 3; y++)
        caixa[y][x] = caixa[y][x].toUpperCase()
    }

    var texto = document.getElementById('texto')

    if(caixa[0][0] == 'X' && caixa[1][0] == 'X' && caixa[2][0] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }
    if(caixa[0][1] == 'X' && caixa[1][1] == 'X' && caixa[2][1] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }
    if(caixa[0][2] == 'X' && caixa[1][2] == 'X' && caixa[2][2] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }

    if(caixa[0][0] == 'X' && caixa[0][1] == 'X' && caixa[0][2] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }
    if(caixa[1][0] == 'X' && caixa[1][1] == 'X' && caixa[1][2] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }
    if(caixa[2][0] == 'X' && caixa[2][1] == 'X' && caixa[2][2] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }

    if(caixa[0][0] == 'X' && caixa[1][1] == 'X' && caixa[2][2] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }
    if(caixa[2][0] == 'X' && caixa[1][1] == 'X' && caixa[0][2] == 'X'){
        texto.innerHTML = 'O jogador X VENCEU'
    }

    

    if(caixa[0][0] == 'O' && caixa[1][0] == 'O' && caixa[2][0] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }
    if(caixa[0][1] == 'O' && caixa[1][1] == 'O' && caixa[2][1] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }
    if(caixa[0][2] == 'O' && caixa[1][2] == 'O' && caixa[2][2] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }

    if(caixa[0][0] == 'O' && caixa[0][1] == 'O' && caixa[0][2] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }
    if(caixa[1][0] == 'O' && caixa[1][1] == 'O' && caixa[1][2] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }
    if(caixa[2][0] == 'O' && caixa[2][1] == 'O' && caixa[2][2] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }
    
    if(caixa[0][0] == 'O' && caixa[1][1] == 'O' && caixa[2][2] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }
    if(caixa[2][0] == 'O' && caixa[1][1] == 'O' && caixa[0][2] == 'O'){
        texto.innerHTML = 'O jogador O VENCEU'
    }


    if(texto.innerHTML != "O jogador O VENCEU" && texto.innerHTML != "O jogador X VENCEU" && caixa[0][0] != "" && caixa[0][1] != "" && caixa[0][2] != "" && caixa[1][0] != "" && caixa[1][1] != "" && caixa[1][2] != "" && caixa[2][0] != "" && caixa[2][1] != "" && caixa[2][2] != "")
    {
        texto.innerHTML = 'VELHA!'
    }
    

    
}


function digito(input) //Funçao que apaga os caracteres inseridos que são diferentes de X ou O
{
    var regex = /[^X,O]/gi
    input.value = input.value.replace(regex, "")
}