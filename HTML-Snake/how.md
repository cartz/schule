![Screenshot](https://upload.wikimedia.org/wikipedia/commons/5/55/Snake_can_be_completed.gif)

Aufgabe: Snake!
====

Wie ihr bereits in dem kurzen Film, den wir zum Beginn des Themas "Computerspiele" erfahren habt, gibt es ein Spiel, das für viele Menschen in besonderer Erinnerung ist, weil sie damit auf ihrem Handy in Berührung gekommen sind und es für sie die erste Erfahrung mit Spielen auf dem Handy gewesen ist. Es handelt sich dabei natürlich um das Spiel "snake", das wir nun selber versuchen werden zu bauen.

## Dateien erstellen und Vorbereiten der HTML-Datei

Im ersten Schritt erstellen wir zwei verschiedene Dateien. Eine Datei mit dem Namen index.html und eine Datei mit dem Namen script.js. Diese beiden Dateien sollten in dem gleichen Ordner liegen.

![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Snake/images/1.png)

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

Nachdem wir dieses Grundgerüst erstellt haben, geben wir dem Spiel selbstverständlich einen Titel. Den Titel eines Dokuments findest du zwischen den beiden title-Tags im head-Bereich. Anschließend fügen wir direkt in der Zeile vor dem schließenden body-Tag einen Link zu unserer js-Datei ein. Da die js-Datei im gleichen Ordner sein soll, reicht es aus, wenn wir als Quelle (src) lediglich "script.js" eingeben.

```
<script type="text/javascript" src="script.js"></script>
```

Da wir das Spiel innerhalb von einem Termin fertig bekommen wollen, benutzen wir als kleine Hilfe jquery. Es handelt sich dabei um eine Art "Spickzettel" für javascript und hilft uns später, die wichtigsten Dinge korrekt zu berechnen.
Es ist sehr wichtig, dass ihr den Link zu der jquery-Datei in der Zeile über dem Link zu "script.js" einfügt, da es ansonsten nicht richtig funktionieren wird.

```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
```

Typisch für das Spiel "snake" ist, dass es eine  Spielfläche hat, die an den Seiten begrenzt ist. Wir werden uns nun um genau diese Spielfläche kümmern. Damit wir später innerhalb dieser Spielfläche unsere Figuren (die Schlange und das Essen) positionieren und verändern können, benutzen wir ein canvas-Element. Wir platzieren dieses Element zwischen den beiden body-Tags aber vor den Verweisen auf unsere beiden .js-Dateien.

```
<canvas id="spielfeld"></canvas>
```

Wenn wir diese einfachen Schritte hinter uns gebracht haben, dann sind wir nun bereit und können uns endlich um das eigentliche Spiel kümmern.

## Die Variablen in script.js definieren

Da der gesamte Rest des Spiels innerhalb unserer "script.js"-Datei programmiert wird, speichern wir nun zur Sicherheit unsere html-Datei ab und wenden uns unserer "script.js"-Datei zu.
In einem ersten Schritt müssen wir die für das weitere Spiel wesentlichen Dinge einführen, damit das Programm später weiß, dass es diese Dinge überhaupt gibt. Wir öffnen dazu eine funktion, die die entsprechenden Variablen enthält.

* In der ersten Zeile findest du einen Verweis auf unser Spielfeld. Es ist sehr wichtig, dass du dem Spielfeld die id "spielfeld" gegeben hast, damit unser script später das Spielfeld finden kann
* Mit der zweiten Zeile setzen wir den Verweis, dass wir später auch auf unserem Spielfeld zeichnen können. Da es sich bei "snake" um ein Spiel handelt, dass sich in zwei Dimensionen (Länge und Breite) abspielt, steht nach der getContext-Methode, die zum Zeichnen benutzt wird als Angabe '2d'
* In den folgenden Zeile legen führen wir weitere Variablen ein, deren Bedeutung sich anhand des Namens herleiten lässt.
* Die letzten Zeilen enthalten schließlich die für das Spiel selber notwendigen Variablen: 
	* die Variablen dir und newdir beschreiben die Bewegung der Schlange
	* die Variable snake ist für die Länge der Schlange verantwortlich
	* in food wird der Ort, wo sich das Essen auf dem Spielfeld befindet abgespeichert
	* score merkt sich die Anzahl der Punkte in dem jeweiligen Spiel
	* gstarted und gpaused ermöglichen uns eine Spielpause zu machen

```
(function ($) {
		var canvas = document.getElementById('spielfeld'),
				spielfeld = canvas.getContext('2d'),
				height, width, pixelsize, rate,
				dir, newdir, snake = [], food = [], score,
				gstarted = false, gpaused = false;
}(jQuery));
```

Wenn ihr diese Zeilen eingetragen habt, dann gibt es schließlich noch eine Besonderheit, die es zu beachten gilt. **Da das Spiel auf jquery zurückgreift, ist es sehr wichtig, dass die letzte Zeile mit dem Eintrag }(jQuery)); immer am Ende eurer "script.js"-Datei bleibt!**

Im nächsten Schritt legen wir eine Funktion an, die unsere bereits deklarierten Variablen benutzt und uns hilft, diese zu verwenden. Ganz am Ende dieser Anleitung werden wir die entsprechenden Werte bestimmten, die unser Spiel dann erst zu einem funktionierenden Spiel machen.

```
    function setup(h, w, ps, r) {
        height = h;
        width = w;
        pixelsize = ps;
        rate = r;
        canvas.height = h*ps;
        canvas.width = w*ps;
```

## Die Steuerung

Zusätzlich zu dem Setup unserer Variablen müssen wir uns natürlich auch um eine Möglichkeit zu steuern kümmern. Da wir das Spiel an einem Computer spielen werden, halten wir uns hierbei an die Vorgaben, die es bei javascript gibt und benutzen hierfür die vorgegebenen Events. Ein Event ist ein Ereignis wie zum Beispiel ein Tastenanschlag, wobei jeder Taste ein bestimmter nummerischer Wert zugewiesen wird. 
Bezogen auf die Pfeiltasten handelt es sich dabei um die folgenden Werte:

* 37 = links
* 38 = hoch
* 39 = rechts
* 40 = unten


```
        $(document).keydown(function (e) {
            switch(e.which) {
                case 38:
                    if(dir != 2) {
                        newdir = 0;
                    }
                    break;
                case 39:
                    if(dir != 3) {
                        newdir = 1;
                    }
                    break;
                case 40:
                    if(dir != 0) {
                        newdir = 2;
                    }
                    break;
                case 37:
                    if(dir != 1) {
                        newdir = 3;
                    }
                    break;
                case xx:
                    if(!gstarted) {
                        startGame();
                    }
                    else {
                        togglePause();
                    }
                    break;
            }
        });
        showIntro();
    }        
```

Wie du bereits erfahren hast, kann man die Zahlenwerte 37, 38, 39 und 40 den Pfeiltasten zuweisen. Deine Aufgabe ist es nun auf dieser Internetseite: (http://www.mediaevent.de/javascript/Extras-Javascript-Keycodes.html) zu schauen, welcher Zahl die Leertaste zugewiesen ist, die wir später als Pausentaste benutzen wollen und diesen Zahlenwert an der entsprechenden Stelle in den Quellcode einzufügen.
Du kannst sehen, dass das script mit "case"-Angaben arbeitet. Das bedeutet, dass für den Fall, dass die Taste 38 gedrückt wird, sofern die Schlange nicht gerade auf dem Weg nach unten ist, die Richtung der Schlange in 0, was für oben steht, geändert wird.
Insgesamt stehen der Schlange vier unterschiedliche Bewegungsrichtungen zur Verfügung:

* 0 = hoch
* 1 = rechts
* 2 = runter
* 3 = links

Wenn du bis hier gekomment bist, dann hast du das Spielfeld und seine Variablen definiert und die Steuerung deiner Schlange (sowie eine Möglichkeit das Spiel zu pausieren) angelegt.

#Phasen des Spiels

Jedes Spiel (und damit auch unser schönes "snake"-Spiel) hat unterschiedliche Phasen, in die es sich unterteilen lässt. Diese Regel trifft natürlich auch auf Snake zu. Wir werden uns jetzt deshalb mit den einzelnen Phasen und den Dingen, die während dieser Phasen passieren, befassen.

![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Snake/images/2.png)

## Der Startbildschirm

Nun beschäftigen wir uns mit dem Startbildschirm, der ein paar grundlegende Informationen zum Spiel enthalten soll. Wir rufen den Startbildschirm über die Funktion showIntro auf.

```
    function showIntro() {
        spielfeld.fillStyle = '#000';
        spielfeld.fillRect(0, 0, width*pixelsize, height*pixelsize);
        spielfeld.fillStyle = '#fff';
        spielfeld.font = '30px sans-serif';
        spielfeld.textAlign = 'center';
        spielfeld.fillText('Deine Überschrift', width/2*pixelsize, height/4*pixelsize, width*pixelsize);
        spielfeld.font = '12px sans-serif';
        spielfeld.fillText('Hinweise zur Steuerung und den Regeln hier eintragen', width/2*pixelsize, height/2*pixelsize);
        spielfeld.fillText('Leertaste = Start/Pause.', width/2*pixelsize, height/1.5*pixelsize); 
    }
```

In diesem Teil ist es deine Aufgabe die Texte, die im Moment bloß als Platzhalter vorhanden sind, an deine Vorstellungen anzupassen und zum Beispiel die Steuerung des Spiels zu erklären. Du kannst später auch gerne das ganze Spielfeld farblich verändern, jetzt solltest du dies aber **noch nicht** machen.

## Der Spielstart

In diesem Schritt erstellen wir unsere "Start"-Schlange, die bereits über 3 Segmente verfügt. Du musst der Funktion lediglich die Richtung sagen, in die deine Schlange starten soll. Die entsprechenden Variablen sind 'dir' und 'newdir'.

```
    function startGame() {
        var x = Math.floor(width/2), y = Math.floor(height/2);
        genFood();
        snake = [
            [x, y],
            [--x, y],
            [--x, y],
            [--x, y]
        ];
        dir = x;
        newdir = x;
        score = 0;
        gstarted = true;
        gpaused = false;
        frame();
    }
```

Diese Funktion ist aber auch deshalb wichtig, weil sie zwei weitere Funktionen startet. Zum einen startet sie die Funktion genFood, die an zufälligen Stellen Nahrung erzeugt, zum anderen auch die Funktion frame, die für die Animation zuständig ist. Ohne die Funktion frame würde sich auf dem Spielfeld nichts bewegen.

## Das Spielende und andere Unterbrechungen

![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Snake/images/4.png)

Unsere Funktion, die das Spielende beschreibt, zeigt auch gleichzeitig ein paar wichtige Informationen, wie zum Beispiel die erreichte Punktzahl an. Durch die Verwendung eines rgba Farbcodes erhalten wir die Möglichkeit den bereits erreichten Spielstand bluren zu lassen und können diesen als Hintergrund verwenden.

```
    function endGame() {
        gstarted = false;
        spielfeld.fillStyle = 'rgba(0,0,0,0.8)';
        spielfeld.fillRect(0, 0, width*pixelsize, height*pixelsize);
        spielfeld.fillStyle = '#f00';
        spielfeld.font = '20px sans-serif';
        spielfeld.textAlign = 'center';
        spielfeld.fillText('Spielende', width/2*pixelsize, height/2*pixelsize);
        spielfeld.fillStyle = '#fff';
        spielfeld.font = '12px sans-serif';
        spielfeld.fillText('Punktzahl: ' + score, width/2*pixelsize, height/1.5*pixelsize);
    }
```

Selbstverständlich musst du auch hier die Meldungen zum Teil anpassen!

Wie bereits früher erwähnt, haben wir auch an eine Möglichkeit gedacht, das Spiel durch eine Pausenfunktion zu unterbrechen. Diese Funktion fügen wir nun ein, damit die von dir einprogrammierte Leertaste auch ihre Funktion vollständig erfüllen kann.

```
    function togglePause() {
        if(!gpaused) {
            gpaused = true;
            spielfeld.fillStyle = '#fff';
            spielfeld.font = '20px sans-serif';
            spielfeld.textAlign = 'center';
            spielfeld.fillText('Pause', width/2*pixelsize, height/2*pixelsize);
        }
        else {
            gpaused = false;
            frame();
        }
    }
```

Spieltexte müssen wieder angepasst werden!

## Nahrung für die Schlange

Um das Spiel spannender zu machen, gilt es die Schlange beständig länger werden zu lassen. Die hierfür benötigte Nahrung zeichnen wir nun mit dieser Funktion, die immer wieder aufgerufen wird und beständig neue Nahrung produziert.

```
    function genFood() {
        var x, y;
        do {
            x = Math.floor(Math.random()*(width-1));
            y = Math.floor(Math.random()*(height-1));
        } while(testCollision(x, y));
        food = [x, y];
    }
```

## Mal mir die Schlange und die Nahrung

Würden wir in diesem Moment das Spiel aufrufen, dann würde noch nichts richtig funktionieren. Wir müssen nämlich in unserem vorletzten Schritt die Schlange und die Nahrung noch zeichnen, die wir bereits gesetzt und in ihrem Verhalten berechnet haben. dies machen wir mit diesen beiden Funktionen.

```
    function drawFood() {
        spielfeld.beginPath();
        spielfeld.arc((food[0]*pixelsize)+pixelsize/2, (food[1]*pixelsize)+pixelsize/2, pixelsize/2, 0, Math.PI*2, false);
        spielfeld.fill();
    }
    
    function drawSnake() {
        var i, l, x, y;
        for(i = 0, l = snake.length; i < l; i++) {
            x = snake[i][0];
            y = snake[i][1];
            spielfeld.fillRect(x*pixelsize, y*pixelsize, pixelsize, pixelsize);
        }
    }
``` 

Durch die Verwendung von "PI*2" in der Funktion drawFood erhalten wir die typischen runden Pillen, wie sie in vielen klassichen "snake"-Spielen verwendet wurden.

![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Snake/images/3.png)

## Zusammenstöße mit dem Spielfeldrand und sich selber

Im Grunde ist "snake" ein sehr einfaches Spiel, denn anders als bei TicTacToe gibt es hier nur zwei Bedingungen, die wir erfüllen müssen, damit wir ein Spiel verlieren. Entweder stößt die Schlange an den Spielfeldrand oder sie frisst sich selber auf.

```
    function testCollision(x, y) {
        var i, l;
        if(x < 0 || x > width-1) {
            return true;
        }
        if(y < 0 || y > height-1) {
            return true;
        }
        for(i = 0, l = snake.length; i < l; i++) {
            if(x == snake[i][0] && y == snake[i][1]) {
                return true;
            }
        }
        return false;
    }
```

Wie du sehen kannst benutzen wir auch hierfür eine Art Schleife. Diese Funktion überprüft mit jedem Spielzug, ob man gerade entweder gegen den Spielfeldrand oder sich selber gestoßen ist. Solange dies beides nicht der Fall ist wird die Schleife immer wieder ablaufen und keinen Fehler ausgeben.
Wenn wir aber einen Zusammenstoß haben, dann gibt die Schleife den Wert "true" aus, der zum Ende des Spiels führt.

![Screenshot](https://raw.githubusercontent.com/cartz/schule/master/HTML-Snake/images/5.png)

## Das Spiel zum Laufen bringen

Unsere letzte Funktion, die wir einfügen, ist die frame Funktion. Sie heißt deshalb frame, weil sie jedes Bild des Spiels berechnet und in einem Film oder Spiel bei den Einzelbildern der Fachbegriff "Frame" benutzt wird.

```
    function frame() {
        if(!gstarted || gpaused) {
            return;
        }
        var x = snake[0][0], y = snake[0][1];
        switch(newdir) {
            case 0:
                y--;
                break;
            case 1:
                x++;
                break;
            case 2:
                y++;
                break;
            case 3:
                x--;
                break;
        }
        if(testCollision(x, y)) {
            endGame();
            return;
        }
        snake.unshift([x, y]);
        if(x == food[0] && y == food[1]) {
            score++;
            genFood();
        }
        else {
            snake.pop();
        }
        dir = newdir;
        spielfeld.fillStyle = '#000';
        spielfeld.fillRect(0, 0, width*pixelsize, height*pixelsize);
        spielfeld.fillStyle = '#fff';
        drawFood();
        drawSnake();
        
        setTimeout(frame, rate);
    }
```

Wie ihr sehen könnt werden innerhalb dieser Funktion alle von uns vorher geschriebenen Funktionen aufgerufen.

Um dem Spiel nun noch die letzten Definitionen zu geben, die es zum Laufen benötigt, kommt in die vorletzte Zeile (wir erinnern uns, dass unsere letzte Zeile noch immer **}(jQuery));** sein sollte) ein Aufruf unserer setup Funktion, in dem wir die Daten für die Berechnung des Spiels übergeben.

```
setup(50, 100, 10, 100);
```

Mit den ersten beiden Zahlen legen wir die Größe unseres Spielfeldes in Blöcken fest, die wir mit der dritten Zahl genauer definieren, da wir hier die Anweisung geben, dass ein Block 10 Pixel groß sein soll. 

Durch die vierte Zahl können wir das Spieltempo variieren und damit auch die Schwierigkeit steuern.

Ich wünsche euch nun viel Spaß mit eurem Spiel!

P.S.: Wer das Spiel fertig programmiert hat, der kann gerne nach einem Test versuchen, das Aussehen der einzelnen Elemente zu verändern!
