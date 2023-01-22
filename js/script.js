var button = document.querySelector("#button")
var inputSort = document.querySelector("#words-sort")
var buttonRestart = document.querySelector("#button-end-game button:nth-child(2)")
var buttonStart = document.querySelector("#button-end-game button:nth-child(1)")
var homeScreens = document.querySelector("#end-game")

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
    if(milliSecond == 60) {
      milliSecond = 0
      second++
    }
    if(second >= 3) {
      homeScreens.classList.remove('drop-box')
      second = -1000
      stopwatch.classList.add('drop-box')
    }
    
  })
  stopwatch.classList.remove('drop-box')
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


function homeScreen() {
    homeScreens.classList.add('drop-box')
}

buttonStart.addEventListener("click", homeScreen)

