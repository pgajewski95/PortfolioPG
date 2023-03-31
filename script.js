
document.addEventListener('DOMContentLoaded', function() {
	
	const all_table = document.querySelector("table");
	const all_td = document.getElementsByTagName("td");
	const X = document.getElementById("X");
	const zero = document.getElementById("zero");
	const one_player = document.getElementById("one_player");
	const two_players = document.getElementById("two_players");
	const reset_game = document.getElementById("reset");
	const play_with = document.getElementById("play_with");
	const you_choose = document.getElementById("you_choose");
	let helper = "0";
	let player = "";
	let winner = "";
	
	// Wybor X lub 0
	one_player.addEventListener("click", function() {
		player = "computer_play";
		console.log(player);
		play_with.innerText = "Grasz z komputerem";
	})
	
	two_players.addEventListener("click", function() {
		player = "human_play";
		console.log(player);
		play_with.innerText = "Grasz z inną osobą";
	})
	
	X.addEventListener("click", function() {
		helper = "X";
		if (player == "human_play") { 
		you_choose.innerText = "Wybrałeś X \n \n Przeciwnik gra O";
		} else { 
		you_choose.innerText = "Wybrałeś X";
		}
		zero.style.display = "none";
		console.log(helper);
	})
	
	zero.addEventListener("click", function() {
		helper = "0";
		if (player == "human_play") { 
		document.getElementById("you_choose").innerText = "Wybrałeś O \n \n Przeciwnik gra X";
		} else { 
		document.getElementById("you_choose").innerText = "Wybrałeś O";
		}
		X.style.display = "none";
		console.log(helper);
	})
	
	reset_game.addEventListener("click", function() {
		for ( i = 0; i < all_td.length; i = i+1 ) {
			all_td[i].innerText = "";
			document.querySelector("#statement").innerText = "Wynik gry:";
			helper = "0";
			player = "";
			X.style.display = "inline-block";
			zero.style.display = "inline-block";
			winner = "";
			play_with.innerText = "";
			you_choose.innerText = "";
		}
		console.log(helper);
	})
	
	// Funkcja gry - naprzemiennie wstawiamy 0 i X
	all_table.addEventListener("click", function(e){
		
		let field = e.target.closest("td").innerText
		
		if (winner == true){ 
		//if (document.querySelector("#statement").innerText.includes("Wygrana!")){ // jesli jest wygrana to wyjdz i nic nie rob wiecej
			return;
		}
		
		if (helper === "X" && field == ""){   				// Jesli helper rowna sie X to wykonaj:
		e.target.closest("td").innerText = "X";				// wpisz w najbliszy td (czyli klikniety td) X
			wynik("X"); 
			wynik("0");
			if (player == "") { 
				helper = "0";
			}
			if (player == "human_play") { 					// i jeśli player ustawiony jest na human play to
				helper = "0";								// ustaw helpera na 0
			}
			if (player == "computer_play") {				// a jesli player ustawiony jest na computer play	
				computer_move();							// to wykonaj funkcje computer_move
			}
				wynik("X"); 
				wynik("0");
		return;												// wyjdz i nie sprawdzaj kolejnego warunku
		} 
			
		if (helper === "0" && field == ""){ 
		e.target.closest("td").innerText = "0";
			wynik("0");
			wynik("X");
			if (player == "") { 
				helper = "X";
			}
			if (player == "human_play") { 
				helper = "X";
			}
			if (player == "computer_play") {
				computer_move();
			}
				wynik("0");
				wynik("X");
		return;
		} 
	}) 	
	
	// Funkcja ruch komputera      // Znajduje wszystkie puste pola sposrod wszystkich td, dodaje je do tablicy i losuje z nich losowe pole, w ktore wstawia 0 lub X
	function computer_move() {
		if (winner == true) { console.log("sprawdzamy"); return; }
		//if (document.querySelector("#statement").innerText.includes("Wygrana!")) { console.log("sprawdzamy"); return; }		// jesli jest wygrana to wyjdz i nie wykonuj kodu
		if (document.querySelector("#statement").innerText.includes("Remis!")) { return;}
		let new_td = "";
		let new_td_tab = [];
		for (i=0; i < all_td.length; i++){
			if (all_td[i].innerText == "") {
				new_td = all_td[i];
				new_td_tab.push(new_td);
			}
		}
		//console.log(new_td_tab.length);
		let random_field = Math.floor((Math.random() * new_td_tab.length) + 1);
		//console.log(random_field);
		
		if (helper === "X") {
		new_td_tab[random_field-1].innerText = "0";
		}
		if (helper === "0") {
		new_td_tab[random_field-1].innerText = "X";
		}
	}
	
	
	// Funkcja sprawdzajaca wynik
	
	function wygrana(C)
	{
		document.querySelector("#statement").innerText = "Wygrana!" + " \n Wygrał: " + C;
		winner = true;
		console.log("yupi!");
	}
	
	function tie(){
		document.querySelector("#statement").innerText = "Remis!";
	}
	
	function wynik(C)	{ 
	
		let all_td_tab = [];
		
		
		// sprawdzanie wyniku w poziomie (skacze co 3 komorki, bo musi byc sprawdzony 3 razy)
		for ( i = 0; i < all_td.length; i = i+3 )				
		{ 
			if (all_td[i].innerText == C && all_td[i+1].innerText == C && all_td[i+2].innerText == C) { 
			wygrana(C);
			}
		}
		// sprawdzanie wyniku w pionie (musi byc sprawdzony 3 razy )
		for ( i = 0; i < 3; i= i+1 )							
		{ 	
			if (all_td[i].innerText == C && all_td[i+3].innerText == C && all_td[i+6].innerText == C) { 
			wygrana(C);
			}
		}
		// sprawdzanie skosow
			if (all_td[0].innerText == C && all_td[4].innerText == C && all_td[8].innerText == C) { 
			wygrana(C);
			}
			if (all_td[2].innerText == C && all_td[4].innerText == C && all_td[6].innerText == C) { 
			wygrana(C);
			}
		// remis
		for ( i = 0; i < all_td.length; i = i+1 ) {
			if (all_td[i].innerText != "" ) {
				all_td_tab.push(all_td[i]);
			}}
		//console.log(all_td_tab.length);
			if (all_td_tab.length == 9 && winner != true) {
			//if (all_td_tab.length == 9 && document.querySelector("#statement").innerText !== "Wygrana!") {
				tie();
			}
	}	
});
