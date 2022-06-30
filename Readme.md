# Testumgebung für die Abschlussprojekte im WebTech-Kurs (Sommer 2022)

Das Repository enthält einen Vorschlag für die vorgegebene Code-Struktur der Abschlussprojekte. Enthalten ist nur die Vorlage für die eigentliche Anwendung. Der Datenimport, d.h. das Erstellen und befüllen der Datenbank ist nicht berücksichtigt.

## Aufbau

- `app`: Enthält den Client-Code
- `.env`: Umgebungsvariablen für Default-Werte
- `database.sqlite`: Demo-Datenbank aus dem Kurs

Beim Starten der Anwendung wird ein _express_-Server gestartet, der den Inhalt des `app`-Ordners statisch über die Route `/` bereitstellt. Dieser Client ist über die URL `http://localhost:8080` (Standardwerte aus `.env`) erreichbar. Zusätzlich wird eine Verbindung zur SQLite-Datenbank aus der Datei `database.sqlite` aufgebaut. 

### HTTP-Schnittstelle

`POST` > `/database`: Der Server führt die `query` aus dem übergebenen JSON-Objekt in der Datenbank aus und gibt das _Result Set_ als `resultSet`-Eigenschaft einer JSON-formatierten Antwort zurück.

### Abstraktion im Client

Über den Prototypen `RemoteSQLiteDatabase` bzw. dessen Methode `runQuery` können SQL-Queries an den Server übertragen werden. Das _Result Set_ bzw. die Antwort wird über ein _Promise_ zurückgegeben.

## Start

`npm start` führt die Anwendung aus. Vorher müssen mit `npm install` die notwendigen Abhängigkeiten installiert werden.

