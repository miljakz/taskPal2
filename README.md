TaskPal je jednostavna aplikacija za upravljanje zadacima izrađena pomoću Vue.js za korisničko sučelje, Node.js s Expressom za backend, te Firebase za autentifikaciju i pohranu podataka.

Značajke
Autentifikacija korisnika:

Sigurna prijava i registracija koristeći Firebase Authentication.
Autentifikacija putem lozinke s e-poštom i lozinkom.
Upravljanje zadacima:

Dodavanje zadataka s naslovima i kategorijama.
Filtriranje zadataka prema kategorijama.
Brisanje pojedinačnih zadataka.
Upravljanje kategorijama:

Dodavanje novih kategorija za organizaciju zadataka.
Brisanje postojećih kategorija.
Preduvjeti
Prije pokretanja TaskPal lokalno, provjerite imate li instalirano sljedeće:

Node.js (verzija >= 12.0.0)
npm (Node Package Manager)
Instalacija
Klonirajte repozitorij:

bash
Kopiraj kod
git clone <repository-url>
cd taskpal
Instalirajte ovisnosti:

bash
Kopiraj kod
npm install
Postavite Firebase:

Kreirajte Firebase projekt na Firebase konzoli.
Dobavite svoju konfiguraciju Firebase (firebaseConfig) i vjerodajnice Firebase Admin SDK (serviceAccountKey.json).
Konfigurirajte Firebase:

Zamijenite firebaseConfig u src/app.js s konfiguracijom vašeg Firebase projekta.
Stavite svoje vjerodajnice Firebase Admin SDK (serviceAccountKey.json) u korijenski direktorij.
Pokrenite poslužitelj:

bash
Kopiraj kod
npm start
Ovo će pokrenuti poslužitelj na adresi http://localhost:3000.

Otvorite TaskPal u vašem pregledniku:
Otvorite http://localhost:3000 da biste vidjeli aplikaciju.

Upotreba
Prijava: Unesite svoju registriranu e-poštu i lozinku za prijavu.
Upravljanje zadacima:
Dodajte zadatke unosom naslova i odabirom kategorije.
Uklonite zadatke klikom na "Ukloni" gumb.
Filtrirajte zadatke odabirom kategorije iz padajućeg izbornika.
Upravljanje kategorijama:
Dodajte nove kategorije koristeći polje za unos i gumb "Dodaj kategoriju".
Uklonite kategorije klikom na "Ukloni" gumb pokraj svake kategorije.
Struktura mape
node_modules/: Ovisnosti instalirane putem npm-a.
public/: Statički resursi i index.html.
src/: Backend (server.js, middleware, rute) i frontend (app.js, Vue komponente).
Doprinose
Doprinosi su dobrodošli! Molimo vas da slijedite smjernice GitHub-a za pull zahtjeve.

Licenca
Ovaj projekt je licenciran pod MIT Licencom - pogledajte LICENSE datoteku za detalje.
