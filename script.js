function init(){
	var counter = 0;
	console.log(counter);
	var trList = document.querySelectorAll("tr");
	var tdList =  document.querySelectorAll("td");
	var button = document.querySelector("button");
	console.log(button);
	console.log(tdList);
	var p1Score=[];
	var p2Score=[];
	
	/*button --- wyczyszczenie*/
	function opacity0(){
	  counter=0;
	p1Score=[];
	 p2Score=[];
	  for(var i=0;i<tdList.length;i++){
		tdList[i].classList.add("clear");
	  }
	setTimeout(action,1000);}
	button.addEventListener("click", opacity0,false);
	/*sprawdzanie wygranej*/
	function checkIfWin(arr, klas){
	//a1 a2 a3 ----- b1 b2 b3   -----c1 c2 c3
	if(arr.includes(tdList[0]) && arr.includes(tdList[1]) && arr.includes(tdList[2])){
	  tdList[0].classList.add(klas);
	  tdList[1].classList.add(klas);
	  tdList[2].classList.add(klas);
	return "winner";
	}
	else if(arr.includes(tdList[3]) && arr.includes(tdList[4]) && arr.includes(tdList[5])){
	  tdList[3].classList.add(klas);
	  tdList[4].classList.add(klas);
	  tdList[5].classList.add(klas);
	return "winner";
	}
	else if(arr.includes(tdList[6]) && arr.includes(tdList[7]) && arr.includes(tdList[8])){
	  tdList[6].classList.add(klas);
	  tdList[7].classList.add(klas);
	  tdList[8].classList.add(klas);
	return "winner";
	}
	//a1 b1 c1  ----- a2 b2 c2  ----- a3 b3 c3
	else if(arr.includes(tdList[0]) && arr.includes(tdList[3]) && arr.includes(tdList[6])){
	  tdList[0].classList.add(klas);
	  tdList[3].classList.add(klas);
	  tdList[6].classList.add(klas);
	return "winner";
	}
	else if(arr.includes(tdList[1]) && arr.includes(tdList[4]) && arr.includes(tdList[7])){
	  tdList[1].classList.add(klas);
	  tdList[4].classList.add(klas);
	  tdList[7].classList.add(klas);
	return "winner";
	}
	else if(arr.includes(tdList[2]) && arr.includes(tdList[5]) && arr.includes(tdList[8])){
	  tdList[2].classList.add(klas);
	  tdList[5].classList.add(klas);
	  tdList[8].classList.add(klas);
	return "winner";
	}
	//a1 b2 c3 ------ a3 b2 c1
	else if(arr.includes(tdList[0]) && arr.includes(tdList[4]) && arr.includes(tdList[8])){
	  tdList[0].classList.add(klas);
	  tdList[4].classList.add(klas);
	  tdList[8].classList.add(klas);
	return "winner";
	}else if(arr.includes(tdList[2]) && arr.includes(tdList[4]) && arr.includes(tdList[6])){
	  tdList[2].classList.add(klas);
	  tdList[4].classList.add(klas);
	  tdList[6].classList.add(klas);
	return "winner";
	}
	return false;
	}
	
	/* DODAJ KOLKO LUB KRZYZYK FUNKCJA*/
	function kIk(e){
	  console.log(e.target);
	  var target =e.target;
	  if(counter%2 !==0){
	  if(target.className===""){
	  target.className="kolko";
	  p1Score.push(target);
	  var win =checkIfWin(p1Score, "winnerK");
	  if(counter>=4 && checkIfWin(p1Score, "winnerK")){
		for(var y=0;y<tdList.length;y++){
		  tdList[y].removeEventListener("click", kIk, false);
		}
	  }
	counter++;}}
	else{
	  if(target.className===""){
	target.className="krzyzyk";
	p2Score.push(target);
	var win1 =checkIfWin(p2Score, "winnerKrz");
	if(counter>=4 && checkIfWin(p2Score, "winnerKrz")){
	  for(var x=0;x<tdList.length;x++){
		tdList[x].removeEventListener("click", kIk, false);
	  }
	}
	counter++;
	  }}
	
	}
	function action(){
	for(var x=0;x<tdList.length;x++){
	  tdList[x].className="";
	  tdList[x].addEventListener("click", kIk, false);
	}
	}
	action();
	}
	 window.onload= init();