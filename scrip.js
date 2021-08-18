const criaElementos=()=>{
    let divString = document.createElement("div")
    divString.classList.add("container_strings")
    document.body.appendChild(divString)
    let divCoins = document.createElement("div")
    divCoins.classList.add("container_images")
    document.body.appendChild(divCoins)
}
criaElementos()