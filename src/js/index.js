// passo 1 - dau um jeito de pegar os elementos que representam as abas no Html
// passo 2 - dar um jeito de identificar o clique no elemento aba
// passo 3 - quando o usuario clicar, desmarcar a aba selecionada
//passo 4 - marcar a aba clicada como selecionado
// passo 5 - esconder o conteudo anterior
// passo 6 - mostrar o conteudo da aba selecionada


//passo 1 -
const abas = document.querySelectorAll(".aba");

//passo 2 - 
abas.forEach(aba => {
    aba.addEventListener("click", function() {

            if(aba.classList.contains("selecionado")){
                return;
            }
       
        //passo 3 -
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        // passo 4 -
        aba.classList.add("selecionado")

        // passo 5 -
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        // passo 6 -
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")

    });

});
