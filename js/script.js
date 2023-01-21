var button = document.querySelector("#button")
var inputSort = document.querySelector("#words-sort")

document.addEventListener("keypress", function(e) {
  if(e.key === "Enter"){
    const btn = document.querySelector("#button")
    btn.click()
    progressChallenge()
    }
})

function sortWords(){
  var res = document.querySelector("#res")
  const words = [
      "Banana",
      "Pão",
      "Feijão",
      "Tijolo",
      "Alface",
  ]
  var sort = Math.floor(Math.random() * words.length)
  res.innerHTML = `${words[sort]}`
}

    var progressLine = 10
function progressChallenge(){
  var progress = document.querySelector("#progress")
  progress.setAttribute("value", (progressLine))
  if(progressLine >= 100){
      alert("teste")
  }
  progressLine = progressLine + 10
}

button.addEventListener("click", () =>{
  sortWords()
})