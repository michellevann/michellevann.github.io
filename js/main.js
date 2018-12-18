document.getElementById("sent").style.display = "none"

function lock(){
  document.getElementById("target").classList.remove("flip-it")
  document.getElementById("target").classList.add("lock")
  i = false
}
function submitEmail(){
  event.preventDefault();
  document.getElementById("form").style.display = "none"
  document.getElementById("sent").style.display = ""
  setTimeout(unLock, 3000);
}
function unLock(){
  document.getElementById("target").classList.add("flip-it")
  document.getElementById("target").classList.remove("lock")
  document.getElementById("form").style.display = ""
  document.getElementById("sent").style.display = "none"
    i = true
}