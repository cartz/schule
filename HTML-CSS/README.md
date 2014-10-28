Aufgabe: CSS
====

1. Erstelle eine html- und eine css-Datei!
2. Erstelle eine Internetseite zu einem Thema deiner Wahl. Es gibt keine Begrenzungen. Du darfst das Internet zur Hilfe nehmen! Wichtige Links kannst du weiter unten finden.

P.S.: Schau dir die Dateien an, die ich dieser Aufgabe beigefügt habe (css_uebung.html und style.css), wenn du dir unsicher bist! Stelle Fragen oder schau dir unsere Übung als Film bei youtube ( https://www.youtube.com/watch?v=7CmBIQ_r9UU ) an. Oder Experimentiere mit den Dateien bei codepen ( http://codepen.io/cartz/pen/ugeEw )
   
       
###Einzelnen HTML-Tags einen Namen geben
Dinge, die wir mit einer Raute (#) bezeichnen haben einen Namen.
Damit sie funktionieren können, müssen wir in unserer html-Datei
eine "id" innerhalb des öffnenden Tags angeben.

Beispiel: 
```
			#Kurt {
				height: 40px;
				width: 40px;
				background-color: black;
			}

			<h1 id="Kurt">Ich heißte Kurt</h1>
```

Geben wir zu vielen Dingen einzelne Namen, dann bekommen wir
ab einer bestimmten Größe Probleme, weil die einzelnen Regeln
für die jeweiligen Namen sich gegenseitig ausschließen können.
Seid also sparsam bei der Vergabe von "id"s!



### Alle Tags einer Art ansprechen
Wenn vor einer Angabe nichts steht, dann sprechen wir damit alle
Tags von einem bestimmten Typ an. Von der Regel, die ihr hier sehen
könnt, werden zum Beispiel alle <p></p>-Tags angesprochen.

```
			p {
				font-size: 12px;
			}
```

### Tags in Kategorien unterteilen
Steht ein Punkt (.) vor einem Ausdruck, dann handelt es sich um eine
Regel für eine bestimmte "class". Am einfachsten ist es, wenn ihr
"class" mit Kategorie übersetzt. Ihr könnt zum Beispiel die Kategorien
"Junge", "Mädchen", "Mensch", "Roboter", ... haben und diese beliebig
kombinieren. Aber vorsicht, denn die Regeln können sich gegenseitig
ausschließen und funktionieren dann nicht so, wie ihr es erwartet.
Eine Klasse wird wie folgt im öffnenden Tag angegeben:

```
			.rot {
				color: red;
			}

			<h1 class="rot">Diese &Uuml;berschrift wird rot sein</h1>

```
    
    
    
====

### wichtige Links:
* http://de.selfhtml.org/
* http://www.css4you.de/css-a-z.html (alle möglichen CSS-Befehle zum Stöbern)


====

### FAQ:
* ![Link zum FAQ](https://github.com/cartz/schule/blob/master/faq.md)