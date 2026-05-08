function yes(){
  document.getElementById("button1").style.display = "none";
  document.getElementById("button2").style.display = "none";
  document.getElementById("question").innerHTML = "what is your ssn?";
  document.getElementById("ssn").style.display = "block";
  document.getElementById("button3").style.display = "block";
}

function no(){
  const myTimeout = setTimeout(history.go(-(window.history.length - 1)), 4000);
  
  document.getElementById("question").innerHTML = "leave >:((((";
  clearTimeout(myTimeout);
}

function ssn(){
  document.getElementById("guy").style.display = "block";
  document.getElementById("question").innerHTML = "tahnk you :))))";
}
