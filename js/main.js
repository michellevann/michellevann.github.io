let i = true

function toggle(){
  
  if (i){
    document.getElementById("target").classList.remove("flip-it")
    i = false
  }
  else{
    document.getElementById("target").classList.add("flip-it")
    document.getElementById("target").classList.remove("lock")
    i = true
  }
}

function check(){
  console.log(document.getElementById("target").classList)
}

function lock(){
  document.getElementById("target").classList.remove("flip-it")
  document.getElementById("target").classList.add("lock")
  i = false
}