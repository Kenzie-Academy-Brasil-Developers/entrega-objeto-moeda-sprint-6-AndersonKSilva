const coin = {
    state: 0,
  
    flip: function () {
        this.state = Math.round(Math.random()*1)
    },
  
    toString: function () {
        if(this.state===0){
            return "Heads"
        }else{
            return "Tails"
        }
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      if(this.state ===0){
          image.src = "./images/1centavocara.png"
          image.alt = "Heads"
      }else{
          image.src = "./images/1centavocoroa.png"
          image.alt = "Tails"
      }
      return image;
    },
};

function display20Flips() {
    const results = [];
    let container = document.querySelector(".container_strings")
    
    for(let flips = 0; flips<20;flips++){
        coin.flip()
        results.push(coin.toString())
        let newDiv = document.createElement("div")
        newDiv.classList.add("container_flips")
        newDiv.innerText = results[flips]
        if(results[flips]==="Heads"){
            newDiv.classList.add("head")
        }else{
            newDiv.classList.add("tail")
        }
        container.appendChild(newDiv)
    }
    
    return results
}
display20Flips()
  
function display20Images() {
    const results = [];
    let container = document.querySelector(".container_images")

    for(let flips = 0; flips<20;flips++){
        coin.flip()
        let image = coin.toHTML()
        image.classList.add("coin")
        results.push(image)
        if(results[flips].attributes[1].value==="Heads"){
            image.classList.add("head")
        }else{
            image.classList.add("tail")
        }
        
        container.appendChild(image)
    }
    return results
}
display20Images()