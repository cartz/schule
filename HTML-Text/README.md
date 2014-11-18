Aufgabe: Text formatieren
====

Guten Morgen,

heute lernt ihr ein paar kleine und lustige CSS-Befehle kennen. Denkt bitte daran, dass ihr nur noch zwei Wochen im November übrig habt, um an eurer Internetseite zu arbeiten. Ihr könnt die unterschiedlichen Formatierungsmöglichkeiten auch wieder auf codepen anschauen: http://codepen.io/cartz/pen/XJJbvL
   
       
###Beispiele: 


Mit dem Befehl "font-family" kann man die Schriftart von einem bestimmten Element (siehe h1) oder einer bestimmten id verändern (siehe #Timo). Natürlich funktioniert dies auch mit euren class-Angaben.
Auch könnt ihr sehen, dass die "font-family"-Angabe immer mehr als eine Sache hinter dem Doppelpunkt stehen hat. Das soll helfen, wenn ein Computer zum Beispiel nicht die Schriftart "Times New Roman" installiert hat, dann soll mit "Times" eine Ersatzschriftart angesteuert werden. Ist auch diese nicht vorhanden, dann wird eine Schriftart mit Serifen gewählt.

```
	h1 {
  		font-family: ‘Times New Roman’, Times, serif;
  		color: blue;
	}
```

Über den Befehl "font-size" verändert ihr die Schriftgröße.

```
	.klein {
		font-size: 8px;
	}
```

Mit dem Befehl "text-decoration: underline" könnt ihr einen Text unterstreichen lassen.

```
.unterstrichen {
  text-decoration: underline;
}
```

Die Eigenschaft "font-weight: bold" lässt einen Text fett werden.

```
.fett {
  font-weight: bold;
}
```

    
    
====

### wichtige Links:
* http://de.selfhtml.org/
* http://www.css4you.de/css-a-z.html (alle möglichen CSS-Befehle zum Stöbern)


====

### FAQ:
* ![Link zum FAQ](https://github.com/cartz/schule/blob/master/faq.md)