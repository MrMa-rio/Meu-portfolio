function scrollPage(numero){

    const selectSection = ["aboutMe","myProjects","Me","cordelContainer","socialContainer","loginContainer","calculatorContainer","myContacts"]
    const positionArray = selectSection[numero]
    document.getElementById(`${positionArray}`).scrollIntoView({behavior:"smooth"});
    
    if(numero == 2){
        const thanks = document.getElementById("thanks")
        thanks.style.paddingBottom = "150px"
        thanks.innerHTML = `Obrigado por visitar meu Portfolio!`
        
    }
    document.getElementById("Me").style.backgroundImage = "linear-gradient(to bottom,#fff,#fff"
}
/* Criar uma funçao que muda a cor do fundo enquanto a rolagem da pagina é executada  */

function color(){


    document.getElementById("Me").style.backgroundImage = "linear-gradient(to bottom,#ffffff 90%, rgba(255, 0, 0, 0.603)"
}

