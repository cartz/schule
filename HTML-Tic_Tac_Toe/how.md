![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Tic_Tac_Toe/images/1.jpg)

Aufgabe: Tic Tac Toe!
====

Ein wahrer Klassiker unter den Spielen ist "Tic Tak Toe". Zum Glück ist es auch relativ einfach ein "Tic Tak Toe"-Spiel selber zu programmieren. Wenn du den hier geschilderten Schritten folgst, dann wirst du am Ende der Stunde dein erstes eigenes Spiel erstellt haben. An manchen Stellen muss ich den Quellcode leider etwas umfangreicher angeben, weil wir noch nicht alle benötigten Elemente gelernt haben.

Im ersten Schritt erstellen wir drei verschiedene Dateien. Eine Datei mit dem Namen index.html, eine Datei mit dem Namen script.js und eine Datei mit dem Namen style.css. Diese drei Dateien sollten in dem gleichen Ordner liegen.

![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Tic_Tac_Toe/images/2.png)

Anschließend erstellen wir in unserer index.html Datei das Grundgerüst einer html-Seite, wie wir es in den vorherigen Stunden bereits geübt haben.

```
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```

Nun fügen wir zwischen den beiden head-Tags einen Link zu unserer CSS-Datei ein. Weil die CSS-Datei im gleichen Ordner sein soll, reicht es aus, wenn wir als Ziel (href) lediglich style.css eingeben. 

```
<link rel="stylesheet" href="style.css" media="screen" type="text/css" />
```

Auch verändern wir den Titel unserer Seite, den wir zwischen den beiden title-Tags finden können. Zwischen den beiden body-Tags fügen wir eine Überschift ein, die dem zukünftigen Spiel einen Titel geben soll. Damit die Überschrift mittig auf unserer Seite angezeigt wird, fügen wir in unserer CSS-Datei folgende Eigenschaft hinzu, die für diese und alle weiteren Überschriften des Typs h1 gilt.

```
h1 {
	text-align: center;
}
```

Nun beschäftigen wir uns mit dem eigentlichen Spielfeld, das wir in einer div einpacken wollen, um es einfacher formatieren und später auch ansteuern zu können. Das Spielfeld selber besteht aus neun quadratischen Feldern, die jeweils durch Linien voneinander abgegrenzt sind. Wichtig ist, dass ihr die Felder aufsteigend bei 1 beginnend durchnummeriert. Wenn ihr euch die felder anschaut, dann könnt ihr sehen, dasss sie alle mit drei verschiedenen Attributen belegt sind. Am Anfang findet ihr die class-Angabe "square", die dafür zuständig ist, dass es sich bei den Spielfeldern auch wirklich um Quadrate handelt. Anschließend findet ihr eine jeweils genaue Angabe der Position des Quadrats innerhalb des Spielfelds.

```
<div id="spielfeld">

	<!-- obere Reihe -->
	<div class="square" id="sqTopLeft"></div>
	<div class="square" id="sqTopMiddle"></div>
	<div class="square" id="sqTopRight"></div>

	<!-- mittlere Reihe -->
	<div class="square" id="sqMiddleLeft"></div>
	<div class="square" id="sqMiddleMiddle"></div>
	<div class="square" id="sqMiddleRight"></div>

	<!-- Untere Reihe -->
	<div class="square" id="sqBottomLeft"></div>
	<div class="square" id="sqBottomMiddle"></div>
	<div class="square" id="sqBottomRight"></div>

	<!-- Linien auf dem Spielfeld -->
	<div class="grid-line vert-line" id="left-vert"></div>
	<div class="grid-line vert-line" id="right-vert"></div>
	<div class="grid-line horiz-line" id="top-horiz"></div>
	<div class="grid-line horiz-line" id="bottom-horiz"></div>

</div>
```

Wenn ihr unter eurer Überschift die oben angezeigten Zeilen geschrieben habt, dann speichert ihr eure html-Datei ab und wechselt wieder in eure CSS-Datei uns fügt die folgenden class- und id-Angaben hinzu:

```
#spielfeld {
	position:relative;
	height: 400px;
	width:400px;
	margin: 0 auto 0 auto;
}

.square {
	position: absolute;
	border: 1px dotted transparent;
	height: 128px;
	width: 126px;
	font-size: 150px;
	text-align: center;
	line-height: .88em;
	cursor: pointer;
}

.grid-line {
	position: absolute;
	background-color: #000000;
}

.vert-line {
	height: 390px;
	width: 10px;
}

.horiz-line {
	width: 390px;
	height: 10px;
}

#left-vert {
	top: 5px;
	left:32%;
}

#right-vert {
	top: 5px;
	left:66%;
}

#top-horiz {
	top: 32%;
	left: 5px;
}

#bottom-horiz {
	top: 66%;
	left:5px;
}

#sqTopLeft {
	left: 0;
	top: 0;
}

#sqTopMiddle {
	left: 34%;
	top: 0;
}

#sqTopRight {
	left: 68%;
	top: 0;
}

#sqMiddleLeft {
	left: 0;
	top: 34%;
}

#sqMiddleMiddle {
	left: 34%;
	top: 34%;
}

#sqMiddleRight {
	left: 68%;
	top: 34%;
}

#sqBottomLeft {
	left: 0;
	top: 68%;
}
#sqBottomMiddle {
	left: 34%;
	top: 68%;
}

#sqBottomRight {
	left: 68%;
	top: 68%;
}

```

Wenn ihr euch euer Spiel anschaut, indem ihr eure index.html-Datei mit einem Browser öffnet, dann sollte euer Spiel nun wie folgt aussehen.

![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Tic_Tac_Toe/images/3.jpg)

Als letzten Schritt fügen wir nun noch unter dem Spielfeld in unserer index.html, nach dem abschließenden div-Tag, die folgenden Zeilen ein, die uns einen Schriftzug mit dem Hinweis darauf bescheren, dass der erste Spieler anfängt und eine div, die wir im späteren Verlauf noch gebrauchen werden, wenn wir ein neues Spiel starten wollen, ohne dabei das komplette Fenster neu zu laden. Auch ist es sehr wichtig, dass eure Überschrift mit der class-Angabe "message" versehen wird, weil wir über diese später auf den Inhalt zwischen den beiden Tags nehmen werden.

```
<h2 class="message">Spieler 1 fängt an!</h2>
<div class="resetButton hide">Neues Spiel?</div>
```

In unserer style.css-Datei ergänzen wir selbstverständlich ein paar weitere class-Angaben:

```
.resetButton {
	position:relative;
	height: 40px;
	width:135px;
	background-color: #95a5a6;
	font-size: 20px;
	text-align: center;
	margin: 0 auto 15px auto;
	padding: 15px 0 0 0;
	color: #000000;
	cursor: pointer;
}

h2 {
	text-align: center;
}

.hide {
	display: none;
}
```

Bitte erschreckt euch aber nicht, wenn ihr jetzt eure Seite anzeigen lassen wollt, dann werdet ihr nämlich ausschließlich die neue Überschrift zu sehen bekommen. Speichert bitte ab, wenn bis hier alles funktioniert hat, wie ich es beschrieben habe.

Ihr habt es nun soweit geschafft, dass ihr bereits mit der CSS- und eurer HTML-Datei fast fertig seid. Nun kümmern wir uns um den Teil des Spiels, der es erst zu einem Spiel macht. Als vorletzten Arbeitsschritt mit eurer HTML-Datei fügen wir nun zwei Zeilen Code in diese ein. Es handelt sich einmal um einen Verweis auf unsere "script.js"-Datei, die wir am Anfang erstellt haben und zum anderen um einen Verweis auf eine jquery-Datei, die sich im Internet befindet. jquery ist ein Hilfsmittel, damit wir gleich mit deutlich weniger Aufwand das eigentliche Spiel programmieren können. Fügt also diese beiden Zeilen nun direkt vor dem schließenden body-Tag ein.

```
<script src="http://codepen.io/assets/libs/fullpage/jquery.js"></script>	
<script src="script.js"></script>
```

Wenn ihr damit fertig seid, dann speichert ihr bitte einmal alle Dateien ab und öffnet eure script.js-Datei mit dem Editor.

Damit das Spiel funktionieren kann, haben wir bisher das Spielfeld aufgebaut und müssen uns nun darum kümmern, dass der Computer die Regeln unseres Spiels kennen lernt. Dazu fügen wir den folgenden Code in unsere script.js-Datei ein.

```
// Spielzüge sollen aufgenommen werden
var moveLog = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Spielzüge sollen gezählt werden
var turnNo = 1;

// die 8 Möglichkeiten ein Spiel zu gewinnen müssen eingeführt werden
var leftColWin = []; //1
var midColWin = []; //2
var rightColWin = []; //3
var topRowWin = []; //4
var midRowWin = []; //5
var bottomRowWin = []; //6
var leftDiagWin = []; //7
var rightDiagWin = []; //8

// die 8 Möglichkeiten ein Spiel zu gewinnen müssen definiert werden
function linesOfThree() {
	leftColWin = [ moveLog[0], moveLog[3], moveLog[6] ];
	midColWin = [ moveLog[1], moveLog[4], moveLog[7] ];
	rightColWin = [ moveLog[2], moveLog[5], moveLog[8] ];
	topRowWin = moveLog.slice(0, 3);
	midRowWin = moveLog.slice(3, 6);
	bottomRowWin = moveLog.slice(-3);
	leftDiagWin = [ moveLog[0], moveLog[4], moveLog[8] ];
	rightDiagWin = [ moveLog[2], moveLog[4], moveLog[6] ];
}

// Soll das Spiel beendet oder weitergeführt werden?
var gameEnd = "no";

// die Positionen der einzelnen Steine auf dem Spielfeld 
function getPlayPosition(squareNo) {
	switch (squareNo) {
		case 1:
			return document.getElementById("sqTopLeft");
		case 2:
			return document.getElementById("sqTopMiddle");
		case 3:
			return document.getElementById("sqTopRight");
		case 4:
			return document.getElementById("sqMiddleLeft");
		case 5:
			return document.getElementById("sqMiddleMiddle");
		case 6:
			return document.getElementById("sqMiddleRight");
		case 7:
			return document.getElementById("sqBottomLeft");
		case 8:
			return document.getElementById("sqBottomMiddle");
		case 9:
			return document.getElementById("sqBottomRight");
	}
}
```

Wie ihr sehen könnt, verwenden wir an dieser Stelle wieder die gleichen Bezeichnungen für die jeweiligen Felder, wie wir sie bereits in den vorherigen Schritten vergeben und verwendet haben. Damit das script erkennen kann, welche Felder wir anklicken, müssen wir nun in unserer html-Datei die Felder markieren. Hierzu verändern wir die Felder in unserem Spielfeld wie folgt:

```
<div class="square" id="sqTopLeft" onclick="sqPlayed(1)"></div>
```

Wichtig ist dabei, dass ihr beim ersten Feld anfangt und bis zum letzten Spielfeld nummeriert. Euer letztes Spielfeld muss also folgenden Code aufweisen:

```
<div class="square" id="sqBottomRight" onclick="sqPlayed(9)"></div>
```

Wenn ihr dies getan habt, dann speichert ihr die html-Datei erneut ab und wendet euch wieder eurer script.js zu. Dort müssen wir nun die folgenden Zeilen eintragen, damit der Computer nicht nur die Regeln für das Spiel kennt, sondern mit diesen auch praktisch etwas anzufangen weiß.

```
// Diese Funktion benachrichtigt die Spieler, wenn jemand gewonnen hat.
function checkWin() {
	linesOfThree();
	
	if (leftColWin.toString() == "O,O,O" ||
			midColWin.toString() == "O,O,O" ||
			rightColWin.toString() == "O,O,O" ||
			topRowWin.toString() == "O,O,O" ||
			midRowWin.toString() == "O,O,O" ||
			bottomRowWin.toString() == "O,O,O" ||
			leftDiagWin.toString() == "O,O,O" ||
			rightDiagWin.toString() == "O,O,O")
	{     
		$('.message').html("Spieler 1 hat gewonnen!");
		gameEnd = "yes";
		$('.resetButton').removeClass("hide");
	}
	
	else if (leftColWin.toString() == "X,X,X" ||
			midColWin.toString() == "X,X,X" ||
			rightColWin.toString() == "X,X,X" ||
			topRowWin.toString() == "X,X,X" ||
			midRowWin.toString() == "X,X,X" ||
			bottomRowWin.toString() == "X,X,X" ||
			leftDiagWin.toString() == "X,X,X" ||
			rightDiagWin.toString() == "X,X,X") 
	{  
		$('.message').html("Spieler 2 gewinnt!");
		gameEnd = "yes";
		$('.resetButton').removeClass("hide");
	}
	
	else {
		//mach nichts
	}
}

// Diese Funktion wird bei einem Unentschieden ausgelöst.
function checkCatsGame() {
	if (turnNo == 10 && gameEnd == "no") {
		$('.message').html("Das Spiel endet mit einem Unentschieden");
		gameEnd = "yes";
		$('.resetButton').removeClass("hide");
	}
	else {
		//mach nichts
	}
}

// Diese Funktion rechnet die Gewinnbedingungen für die Spieler aus.
function makePlay(playerNo, position) {
	if (getPlayPosition(position).innerHTML === "X" || 
			getPlayPosition(position).innerHTML === "O") {
	}
	else if (playerNo === 1) {
		getPlayPosition(position).innerHTML = "O";
		moveLog[position - 1] = "O";
		nextTurn(1);
		turnNo++;
	}
	else if (playerNo === 2) {
		getPlayPosition(position).innerHTML = "X";
		moveLog[position - 1] = "X";
		nextTurn(2);
		turnNo++;
	}
	checkWin();
	checkCatsGame();
}

// Diese Funktion lässt den Spieler seine Steine setzen.
function sqPlayed(squareNo) {
	if (gameEnd == "no") {
		if (playerTurn === 1) {
			makePlay(1, squareNo);  
		}
		else if (playerTurn === 2) {
			makePlay(2, squareNo);
		}
	}
	else if (gameEnd == "yes") {
		//mach nichts
	}
}
```

Nun haben wir bereits bei der Gestaltung unserer HTML-Datei einen Button eingefügt, der ein neues Spiel starten soll, wenn man mit dem alten Spiel fertig ist. Eben diesen Button sprechen wir nun an. Die folgenden Zeilen lassen sämtliche Daten über das alte und bereits abgeschlossene Spiel löschen und setzen auch die gesetzen Spielsteine zurück, damit man wieder von vorne anfangen kann. Dieser Teil gehört an das Ende eurer script.js-Datei.

```
$('.resetButton').click(function() {
	$('.resetButton').addClass("hide");
	$('.square').html("");
	$('.message').html("Spieler 1 fängt an");
	
	gameEnd = "no";
	playerTurn = 1;
	turnNo = 1;
	
	moveLog = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	
	leftColWin = []; //1
	midColWin = []; //2
	rightColWin = []; //3
	topRowWin = []; //4
	midRowWin = []; //5
	bottomRowWin = []; //6
	leftDiagWin = []; //7
	rightDiagWin = []; //8
});
```

Wenn ihr diesen Schritt fertig habt, dann speichert ihr alle Dateien ab und könnt eure erste Runde Tic Tac Toe gegen euren Sitznachbarn spielen.
