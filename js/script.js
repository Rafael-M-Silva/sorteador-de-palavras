var button = document.querySelector("#button")
var inputSort = document.querySelector("#words-sort")


document.addEventListener("keypress", function(e) {
  if(e.key === "Enter"){
    const btn = document.querySelector("#button")
    btn.click()
  }
})


function cron() {
  var progress = document.querySelector("#progress")
  var milliSecond = 0
  var second = 0
  setInterval(function(){
    progress.setAttribute("value", (second))
    var stopwatch = document.querySelector("#stopwatch")
    stopwatch.innerHTML = `${second}:${milliSecond}`
    milliSecond++
    if(milliSecond == 60){
      milliSecond = 0
      second++
    }
  })
}

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

const playGame = function(){
  sortWords()
  cron()
  inputSort.focus()
}

button.addEventListener("click", playGame)
  