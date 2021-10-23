let LEVEL = 1;

let selectedNumbers = []

const boxes=[document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
document.getElementById("4"),
document.getElementById("5")]

function getDistinctRandomNumber(){
  var arr = [];
  while(arr.length < LEVEL){
      var r = Math.floor(Math.random() * 5) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

function playLevel(){
  clearAll()
  selectedNumbers=getDistinctRandomNumber();
  colorBoxes();
}

function checkValidity(box_id){
  boxes[box_id-1].style.background="yellow"
  setTimeout(()=>{
 if(selectedNumbers[0]!==box_id){
    window.alert("Game over");
    window.location.reload()
  }
  else{
    selectedNumbers.splice(selectedNumbers.indexOf(box_id), 1)
    if(selectedNumbers.length===0){
      LEVEL+=1
      if(LEVEL===6){
        window.alert("Congratulations!!!! You Win")
        window.location.reload()
      }
      playLevel()
    }
  }
  },300)
}


function colorBoxes(){
  for(let i=0;i<selectedNumbers.length;i++){
    setTimeout(()=>{colorBox(selectedNumbers[i])},i*1000)
  }
}

function colorBox(id){
  boxes[id-1].style.background="green";
  setTimeout(()=>{boxes[id-1].style.background="grey";},1000)
}

function clearAll(){
  for(let j=0;j<5;j++){
    boxes[j].style.background="grey"
  }
}