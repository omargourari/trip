## 🎯 Prompt: Genera una visualizzazione dati interattiva per itinerario di viaggio

Crea un **file HTML completo** (standalone) che visualizzi un itinerario di viaggio attraverso una lista di paesi, permettendomi di vedere e interagire con:

- la durata massima consentita per ciascun paese (visto)
- il miglior periodo climatico in cui visitarli
- il mio soggiorno effettivo modificabile

---

### 📅 Requisiti temporali

- Timeline da **24 aprile 2024** a **31 dicembre 2026**
- L'asse temporale deve essere orizzontale e diviso in **settimane**, indicandone il numero, ma devono essere indicati anche i mesi
  - Etichetta superiore: mese e anno (es. `May 2024`)
  - Etichetta inferiore: numero della settimana (es. `W17`)
- Ogni riga rappresenta un **paese**, la cui lista puoi prenderla più sotto

---

### 🗺️ Struttura dei dati per ciascun paese

Ogni paese deve contenere:

- `name`: nome del paese
- `climateStart` e `climateEnd`: periodo climatico ideale (verde)
- `entry` e `exit`: periodo di soggiorno effettivo (drag & resize) (viola)
- `maxStay`: limite legale di soggiorno in giorni (bordo giallo tratteggiato)

Tutti i rettangoli devono essere:

- visivamente separati
- trascinabili
- ridimensionabili orizzontalmente
- aggiornati anche nei tooltip

---

### ✅ Interattività richiesta

- Trascinamento della barra di soggiorno
- Ridimensionamento della lunghezza del soggiorno
- Tooltip con:
  - Nome del paese
  - Date precise (`dd-MMM-yyyy`)
  - Giorni totali
- Modalità avanzata: inserimento manuale di date tramite input (facoltativo)

---

### 🎨 Requisiti estetici

- Ispirazione estetica: **Notion / Linear / Framer**
- Palette colori: scegline una in autonomia dal sito coolors e applica i colori in base a quello che rappresentano (applica scelte contestuali)
- Tipografia sans-serif, font leggibile, margini ampi (magari imb inter)
- Funziona su tablet e desktop (non è richiesta responsività mobile)

---

### 📦 Output richiesto

- Fornisci un **file `.html` unico** contenente:
  - tutto il codice CSS + JS + HTML
  - tutti i paesi precompilati
  - visualizzazione asse temporale + righe paese
  - rettangoli interattivi e tooltip

---

### 🌍 Lista dei paesi da includere

Nell'ordine in cui sono elencati: Greece, Turkey, Georgia, Armenia, Azerbaijan, Iran, Turkmenistan, Kazakhstan, Tajikistan, Kyrgyzstan,
Pakistan, India, Nepal, Sri Lanka, Bangladesh, Myanmar, Thailand, Cambodia, Laos, Vietnam,
Malaysia, Indonesia, Philippines, Taiwan, South Korea, Japan, China, Mongolia, Russia, Alaska,
Canada, Mexico, Nicaragua, Cuba, Costa Rica, Colombia, Venezuela, Ecuador, Peru, Bolivia,
Chile, Argentina, Paraguay, Uruguay, Brazil

---

### 🌿 Periodo ideale

Per tutte le righe di ogni paese deve passare una fascia che interseca il paese ed i mesi corrispondenti al periodo (per ora climatico) migliore in cui visitare il paese (poi verranno aggiunti altri criteri per determinare il periodo migliore in cui visitare ogni paese).

Usa questi valori indicativi per i paesi selezionati e cerca gli altri periodi per tutti gli altri paesi mancanti:

- Greece: May–June
- Turkey: June–August
- Armenia: August–mid October
- Georgia: June–August
- Iran: March–April or October
- India: November–February
- South East Asia: December–March
- Japan: April–May, October–November
- South America (Andes): May–August
- Patagonia: November–February

(usa [climate-data.org](https://en.climate-data.org/) o altre fonti affidabili per riempire gli altri dati)

---

### 🔗 Fonte per permanenza massima dei paesi

Per i primi paesi, la permanenza massima va estratta da questa pagina Notion:

**📄 Notion link**  
👉 https://www.notion.so/omargourari/Trip-7320138691bd455aa8c887b27328f8cd?pvs=4

Mentre per gli altri vanno reperite le informazioni aggiornate online. Questi dati, relativi alla permanenza minima, posso essere statici.
La permanenza massima può anch'essa essere una fascia a larghezza variabile e scomposta che intersecai paesi/periodi come quella del periodo di permanenza migliore.

---

### 💡 Suggerimenti aggiuntivi

- Usa D3.js (v7+) per manipolare assi, date, drag
- Utilizza `d3.timeWeek` per ticks settimanali e `d3.timeFormat`
- Se vuoi fare debug o demo, logga i dati finali al click

---

### ❌ Cosa **non** serve

- Mappa geografica
- Vista mobile o responsive
- Framework moderni (React, Vue) – voglio tutto in **vanilla HTML + D3**

---

### ✅ Esempio output richiesto

Un file `.html` che, una volta aperto in browser, mi mostra l’intero itinerario sotto forma di timeline interattiva.
