# Einkaufsliste

### Die App wurde mit Angular14 erstellt

## App-Beschreibung

In dieser App kann der Benutzer eine Einkaufsliste erstellen, die es dem Benutzer ermöglicht, die Einkaufsliste zu benennen, Artikel hinzuzufügen, Artikel zu entfernen und die Einkaufsliste im Localstorage zu speichern, damit sie beim nächsten Besuch verfügbar ist.

- Funktionen wurden mit Karma/Jasmine getestet
- Die Einkaufslisten können im Localstorage gespeichert werden
- Einige Funktionen wurden für weitere Optimierungen hinzugefügt, z. B. ("neues Listenmodal öffnen und schließen", "Artikel im neuen Listenmodal und in den gespeicherten Einkaufslisten durchstreichen, wodurch der Localstorage aktualisiert wird", "wenn das Titelfeld leer bleibt, wird ein Fehler angezeigt", und "das Entfernen eine Liste oder eine Artikel aus Einkaufslisten durch Aktualisierung des Localstorage")

## Installation

1. Klonen Sie das Repository: „git clone git@github.com:William8421/shopping-list-task.git“.
2. Wechseln Sie in das App-Verzeichnis: cd shopping-list
3. Installieren Sie dependencies: npm install oder Yarn install

## Ausführen der Anwendung

Um die Anwendung zu starten, führen Sie den folgenden Befehl aus:

bash

### ng serve

Die Anwendung ist unter http://localhost:4200/ in Ihrem Webbrowser verfügbar.

## wie es funktioniert

Wie es funktioniert

1. Klicken Sie auf die Button „Add new“, um ein neues Listenmodal zu öffnen.
2. Einkaufslistentitel hinzufügen.
3. Fügen Sie den Artikelnamen hinzu und klicken Sie außerhalb des Eingabefelds, um den Artikel hinzuzufügen.
4. Klicken Sie auf die Button „X“ neben dem Artikel, um das Element zu entfernen.
5. Durch Klicken auf das Checkbox links neben dem Element wird das Element durchgestrichen.
6. Fügen Sie so viele Elemente wie nötig hinzu.
7. Durch Klicken auf die Button „Reset“ wird die neue Liste zurückgesetzt.
8. Klicken Sie auf Save, um die neue Einkaufsliste zu speichern
9. Schließen Sie das neue Einkaufslistenmodal.
10. Durch Klicken auf die Button „X“ neben dem Titel der Einkaufsliste wird die Liste aus den Einkaufslisten entfernt.
11. Klicken Sie auf das Checkbox links neben dem Element, um das Element im Localstorage zu aktualisieren und es durchgestrichen bzw. die Markierung aufzuheben.
12. Durch Klicken auf die Button „X“ rechts neben dem Artikel wird das Element aus den Listenelementen entfernt.
