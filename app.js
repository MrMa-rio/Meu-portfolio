function scrollPage(numero){

    const selectSection = ["aboutMe","myProjects","Me"]
    const positionArray = selectSection[numero]
    document.getElementById(`${positionArray}`).scrollIntoView({behavior:"smooth"});
    
    if(numero == 2){
        const thanks = document.getElementById("thanks")
        thanks.style.paddingBottom = "150px"
        thanks.innerHTML = `Obrigado por visitar meu Portfolio!`
    }
}
/* Criar uma funçao que muda a cor do fundo enquanto a rolagem da pagina é executada  */