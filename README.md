Ligth-Switcher
The application will consists on a single page with a light switcher. Such that the user will be able to enable/disable a dark mode. The user can see and save some statistics. E.g.: how many times the switcher has been used, and what was the last status of the switch (is the light on or off?).

Technology used: NodeJS Language used: Javascript, Html, Css

webApp.js
L’applicazione esegue lo start dal modulo webApp.js (il nostro main).
Qui sono state inizializzate le variabili necessarie al routing delle richieste e variabili per il 	salvataggio di file.

routes.js
Questo modulo gestisce le richieste dell’utente ed ha anche la responsabilità di salvare dati nel file JSON.

Index.ejs | dark.ejs
Sono i due moduli che implementano la visibilità notturna. Ogni volta che il bottone viene premuto 	si cambia da una pagina all’altra.

Per il salvataggio e la visualizzazione delle statistiche ho utilizzato la libreria “fs”.
Per il routing ho utilizzato la libreria  “express”.
Per il search engine ho utilizzato la libreria “ejs”.

