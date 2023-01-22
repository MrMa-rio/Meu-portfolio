function scrollPage(numero){

    const selectSection = ["aboutMe","myProjects","Me"]
    const positionArray = selectSection[numero]
    document.getElementById(`${positionArray}`).scrollIntoView({behavior:"smooth"});
    
}