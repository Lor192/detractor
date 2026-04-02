const symbols = ["🤬", "👎", "⌛️", "🔥", "💣"];

const reviews = [
  {
    author: "Elisa",
    rating: 1,
    text: "Un sacco di personale disponibile quando si tratta di vendere, se invece c'è un problema l'assistenza (1 persona di sabato) ti obbliga ad un'attesa interminabile o addirittura ti dice che devi tornare un altro giorno. Vergognatevi."
  },
  {
    author: "Olli",
    rating: 1,
    text: "Servizio carente, un sacco di personale disponibile in sala che faceva nulla, ma non avevano tempo e/o voglia di rispondere a una domanda veloce. Mentre ero venuta per comprare un orologio. Che senso ha uno store in centro se devo comunque andare da Unieuro per vedere una cosa?"
  },
  {
    author: "Traveler",
    rating: 1,
    text: "Telefono nuovo 6 mesi di colpo non funziona schermo nero, lo prendono in riparazione e dopo due ore mi chiamano dicendo che il telefono è irriparabile. Quando arrivo a riprenderlo scopro che hanno applicato una pellicola perché nel capire il problema hanno spaccato il vetro, hanno finto l'irriparabilità per il loro danno e non hanno sostituito il telefono come da garanzia fornendo oltretutto foto false. Una vergogna per un'azienda simile. Chiaramente procederemo per vie legali."
  },
  {
    author: "Martina",
    rating: 1,
    text: "Recensione più che negativa. Con tutto il personale disponibile ci hanno messo più di 1 ora e mezza per controllare perché una delle AirPods appena comprate da loro non si configurasse con il case. Personale oltre ad essere lento anche scortese nel rispondere, vergogna!! Non solo una persona spende 120€ in più ma deve ricevere un trattamento del genere. Non ritornerò mai più."
  },
  {
    author: "Eros",
    rating: 1,
    text: "Per la terza volta, esperienza negativissima. Il personale è sempre svogliato, ti rimbalzano da una parte all'altra e non possono mai risolvere un problema. L'assistenza peggio che andar di notte. Mi spiace che mi ostino ancora a comprare prodotti Apple."
  },
  {
    author: "Sassi",
    rating: 1,
    text: "Ci si serve in questo store da anni ma ultimamente è un delirio. Ragazzi al check-in poco cordiali e scorbutici, poco attenti alle richieste del cliente ma interessati solo a smistare e togliersi dalle scatole il cliente, rimandando a chiamare call center o propinando appuntamenti i giorni seguenti. Stessa storia accaduta poco fa dietro semplice richiesta su di un problema ad un Apple Watch."
  },
  {
    author: "Augusto",
    rating: 1,
    text: "Personale molto molto scortese e disponibilità articoli molto limitata."
  },
  {
    author: "Ricky",
    rating: 1,
    text: "L'assistenza post vendita che caratterizzava Apple oramai è diventata una chimera, riduce drasticamente il motivo per cui un consumatore sceglie Apple. Portato un telefono nel primo anno di garanzia, che si bloccava durante le chiamate, son dovuto tornare 4 volte per far valere la garanzia Apple, perché dai loro test non risultava nessun problema. Alla quarta volta mi hanno fissato un ulteriore appuntamento per sostituire delle parti, ma la mail di appuntamento riguardava dei giorni in cui sono via per lavoro. Risultato, ulteriore appuntamento per prendere un altro appuntamento. Mi spiace ma prodotti Apple basta, mai più per quanto mi riguarda."
  },
  {
    author: "Alessandro",
    rating: 1,
    text: "Peccato il commesso quarantenne con i capelli bianchi che risponde come un cafone dello stadio!"
  },
  {
    author: "Alessandro",
    rating: 1,
    text: "Totale incompetenza imbarazzante. La mia ragazza è andata al negozio di Apple Store per risolvere dei problemi riguardanti l'audio spaziale delle AirPods di 3 generazione, la ragazza in modo convinto dice 'no l'audio spaziale non funziona su Spotify mi dispiace' e di conseguenza il suo collega la asseconda dicendo mi dispiace ma non funziona, se vuoi ti posso ripristinare il telefono e farlo ritornare alle impostazioni di fabbrica. Ma questa risposta cosa c'entra con la sistemazione dell'audio spaziale con Spotify? Alla fine ho risolto da solo perché bastava disattivare l'audio mono. Molto imbarazzante e senza dubbio una delle esperienze più negative. Bleah."
  },
  {
    author: "Luca",
    rating: 2,
    text: "Niente di che... Prezzi un po' troppo esagerati, il posto è carino ma niente di speciale. 2 primi ed un fritto misto 98 euro con una bottiglia d'acqua. Ho speso meno e mangiato meglio. Giusto per turisti."
  },
  {
    author: "Marco",
    rating: 2,
    text: "Ho avuto un'esperienza estremamente negativa presso l'Apple Store Piazza Liberty. Avevo un appuntamento fissato e sono stato preso in carico con oltre 40 minuti di ritardo, mentre altre persone arrivate dopo di me venivano servite prima. Il problema principale però non è stata l'attesa, ma la gestione della pratica. Mi è stato chiesto di inizializzare completamente il telefono, rimuovendo carte di pagamento e documenti, con la prospettiva di una risoluzione immediata. Solo dopo aver completato il reset mi è stato comunicato che il dispositivo sarebbe stato riparato e non sostituito, senza alcuna flessibilità nonostante avessi spiegato di abitare a oltre un'ora di distanza e di non poter lasciare il telefono. Mi sono ritrovato senza carte attive e senza una soluzione immediata. Servizio rigido, poca attenzione al cliente e gestione poco professionale. Mi aspettavo standard decisamente più alti."
  },
  {
    author: "Giulia",
    rating: 1,
    text: "Sconsigliatissimo. Sono passata il mercoledì perché avevo bisogno di assistenza per il mio iPad. Mi hanno dato l'appuntamento per il giorno dopo a un orario super specifico (12:55). Sono arrivata puntualissima ma nonostante ciò mi hanno fatto aspettare più di mezz'ora. Trascorso questo tempo si è presentato davanti a me un tecnico. Era molto imbranato e poco competente, infatti non è riuscito a risolvere il problema e ha fatto finta di averlo risolto. È arrivato di fronte a me dicendo che, dopo mezz'ora di assistenza, era riuscito a risolvere il problema del mio dispositivo e mentre cercava di dimostrarmelo non funzionava già più. Mi ha detto però che non poteva più farci nulla e mi ha mandato via. Questo non lo ritengo un servizio adeguato. In tutto ciò io ho perso un'ora del mio tempo senza risolvere il problema."
  },
  {
    author: "Carlos",
    rating: 1,
    text: "Tempio dedicato al culto dei prodotti Apple. Spesso affollato. I prezzi sono convenientemente nascosti oppure indicati in modo sommario ('a partire da xxx €...') sul display stesso di alcuni dei prodotti in vendita, così come le loro caratteristiche (dimensione, capienza memoria), obbligando a mettersi in coda per meritare l'attenzione del sacrestano di turno, che divulgherà il sapere con aria sufficiente."
  },
  {
    author: "Luigi",
    rating: 1,
    text: "INCOMPETENTI - TRADE IN. Ho effettuato un acquisto con ritiro in negozio, prima sono stato allo store per informarmi ed una commessa ed un responsabile mi hanno riferito che il trade in si poteva effettuare post acquisto, con il credito accreditato direttamente sul metodo di pagamento. Sono andato via dallo store per ritornarci dopo mezz'ora per il ritiro, effettuo tutta la procedura di acquisto e trade in ma mi riferiscono che non era più possibile riaccreditare il credito sul metodo di acquisto poiché erano cambiate le procedure dal 17 novembre. Quindi mezz'ora prima sia un addetto che un responsabile non erano a conoscenza di ciò? Sembra abbastanza impossibile per come sono preparati, credo che le assunzioni fatte in questi periodi siano molto impreparate."
  },
  {
    author: "Antonio",
    rating: 1,
    text: "Ogni volta che vado in questo posto, fosse una volta che mi facessero quello che ho bisogno. Vai a Carugate, sono di una gentilezza e cercano in tutti i modi di accontentarti. E pensare che li ho tutti i loro iPhone."
  },
  {
    author: "Luca",
    rating: 1,
    text: "Non fate la garanzia Apple Care furto e smarrimento, perché non ti coprono nulla. Io vorrei fare causa ma sarebbe una perdita di tempo e soldi. Ho un iPhone 16 Pro rotto da sostituire, non trovo chiave di sicurezza che richiedono e non si può fare niente. Ho pagato 250 euro in più di assicurazione. Un telefono da 1.400 euro."
  },
  {
    author: "Tommaso",
    rating: 1,
    text: "Compri 1.500€ di telefono e ti vogliono cacciare mentre disperato cerchi di autenticarti sul sito della banca dall'iPhone vecchio che vuoi lasciare in permuta. Nel mentre sparlano di clienti che sono appena passati con lo stesso problema: ma ce la fate? A cosa serve un negozio fisico se la gente ti tratta con i piedi?"
  },
  {
    author: "Ivo",
    rating: 2,
    text: "Ho preso appuntamento per sostituire una batteria del mio iPhone 13 Pro. Appuntamento alle 13:30, sono arrivato alle 13:20 e dopo aver fatto check-in mi hanno lasciato su uno sgabello per oltre 45 minuti senza darmi nessuna informazione e nessuna indicazione sul ritardo. Dopo aver chiesto spiegazioni mi viene detto che servirà ancora del tempo per il mio turno e che per cambiare la batteria avrei dovuto aspettare in negozio circa 2 ore. Ho cancellato l'appuntamento e me ne sono andato. Livello di servizio inaccettabile per un servizio su prenotazione che servono circa 10 giorni per avere. Penso che anziché cambiare batteria, cambierò telefono."
  },
  {
    author: "Ilaria",
    rating: 2,
    text: "Sono andata per ritirare un telefono già prenotato e pagato online. Ho dovuto fare 3 code (ingresso, ritiro ordini, consegna dell'ordine). La specialist alla consegna era palesemente al suo secondo giorno di lavoro. Servizio piuttosto scadente per la qualità e i costi del brand."
  },
  {
    author: "Stefano",
    rating: 1,
    text: "Sono arrivato davanti al negozio alle 09:45 per acquistare Apple Watch Ultra 3, mi hanno fatto fare la prenotazione per l'acquisto dalle 12 in poi. Torno alle 12, arriva la ragazza per chiedermi i dettagli e mi dice che non ha più la cassa. Non sono uno che si lamenta mai, ma per quale motivo mi fate la prenotazione se poi non avete le cose in negozio? Pazzesco, persa una mattinata intera."
  },
  {
    author: "Caroline",
    rating: 1,
    text: "Mi sono fatta un'ora di strada per parlare con un tecnico Apple essendo che le mie AirPods avevano un problema di collegamento. La risposta del tecnico in store: 'Le do il numero per contattare l'assistenza e la aiuteranno loro, io non posso fare niente'."
  },
  {
    author: "Martina",
    rating: 1,
    text: "Attenzione alla persona che vi segue. Una delle assistenti alle vendite mi ha combinato un casino al telefono e mi sono ritrovata con il telefono resettato, perdendo tutti i miei dati."
  },
  {
    author: "Dino",
    rating: 1,
    text: "Esperienza pessima. Il 5 settembre ho cambiato la batteria del mio iPhone 13 presso questo store. Dopo soli 9 giorni, durante un viaggio in Giappone, il telefono è entrato in un loop infinito di riavvio ed è diventato inutilizzabile. Solo a Tokyo hanno risolto rapidamente e con professionalità, sostituendo anche lo schermo gratuitamente. Qui invece incompetenza e superficialità: un telefono non può rompersi dopo pochi giorni da un intervento. Lavoro fatto male."
  },
  {
    author: "Marika",
    rating: 1,
    text: "Sempre difficile capire se il problema siano i clienti o i commessi finto cortesi che arrossiscono se dici 'WhatsApp', come se i tablet potessero prendere fuoco. Esperienza antropologica interessante, ma meglio evitare."
  },
  {
    author: "Giulia",
    rating: 2,
    text: "Comprato da loro pochi giorni fa, sono tornata per assistenza e non hanno saputo aiutarmi, suggerendo soluzioni inutili e poi negando quanto detto. Rimbalzata tra più operatori, sono uscita con lo stesso problema."
  },
  {
    author: "Vincent",
    rating: 1,
    text: "Non è possibile che abbiano in stock solo 6 nuovi iPhone sapendo che la domanda è altissima nella prima settimana. Sono venuto apposta il secondo giorno dopo il lancio per acquistare iPhone 17 Pro Max ma non c'era nulla. Assurdo."
  },
  {
    author: "Maurizio",
    rating: 1,
    text: "Peracottari. Trattano con sufficienza i clienti e non sono in grado di rispettare gli impegni presi. Se portate un dispositivo a riparare è meglio fare un salto in duomo e accendere un cero votivo."
  },
  {
    author: "Pietro",
    rating: 1,
    text: "Esperienza deludente e personale poco professionale e maleducato. Ho portato l'iPhone per sostituire la batteria; dopo due mesi non reggeva più la carica. In assistenza mi è stato detto che sarebbe stata sostituita, ma al ritiro non è stato fatto nulla. Restituito nelle stesse condizioni. Personale tecnico scortese e poco disponibile a risolvere."
  },
  {
    author: "Lidia",
    rating: 1,
    text: "Esperienza pessima. Dipendenti maleducati e menefreghisti. Cellulare acquistato da pochi mesi già non funzionante. Per assistenza serve un appuntamento dopo una settimana e nel frattempo resti senza telefono. Risposta ricevuta: attendere o comprarne un altro."
  },
  {
    author: "Behrad",
    rating: 1,
    text: "Personale molto scortese. Mi hanno detto che, non comprando nulla, dovevo tornare il giorno dopo. In passato mi hanno graffiato l'iPhone durante la sostituzione batteria. Inoltre hanno dimenticato di attivare Apple Care+ sul mio Pencil, costringendomi a tornare più volte e contattare il supporto. Nessuna soluzione ricevuta."
  },
  {
    author: "Davide",
    rating: 2,
    text: "Dovevo riparare lo schermo e mi è stato restituito un iPhone con il tasto volume non funzionante. Per sistemare mi hanno chiesto 500€ o di cambiarlo. Nei test iniziali funzionava tutto tranne il display. Attenzione alle loro pratiche: sembra che l'obiettivo sia vendere più che aiutare."
  },
  {
    author: "Fabrizio",
    rating: 1,
    text: "Sono entrato per comprare delle cuffiette, aspettavo informazioni e una commessa mi ha urlato contro di non interrompere senza che avessi detto nulla. Ha continuato a essere arrogante e a rifiutarsi di aiutarmi. Comportamento inaccettabile."
  },
  {
    author: "Wanli",
    rating: 1,
    text: "Pessimo, voto meno zero per il direttore di Apple Piazza Liberty."
  },
  {
    author: "Paola",
    rating: 1,
    text: "Situato in centro a Milano, negozio che sembra più un museo con fontane all'entrata. Servizio clienti pessimo, personale sgarbato e maleducato. Ho visitato diversi Apple Store nel mondo ma qui mi sono trovata male. Luogo bello da vedere, ma non per il servizio."
  }
];

const startButton = document.getElementById("startButton");
const playAgainButton = document.getElementById("playAgainButton");
const backToMenuButton = document.getElementById("backToMenuButton");
const modal = document.getElementById("resultModal");
const slotOverlay = document.getElementById("slotOverlay");
const statusText = document.getElementById("statusText");
const reviewAuthor = document.getElementById("reviewAuthor");
const reviewRating = document.getElementById("reviewRating");
const reviewText = document.getElementById("reviewText");
const resultSymbols = document.getElementById("resultSymbols");
const reelElements = [
  document.getElementById("reel0"),
  document.getElementById("reel1"),
  document.getElementById("reel2")
];

let isSpinning = false;
let activeTimers = [];
const ragePhrases = [
  "Che schifo",
  "Esperienza pessima",
  "Non tornerò più",
  "Voto 0",
  "Pessimi",
  "Assurdo!",
  "Servizio deludente",
  "Mai più!",
  "Vergogna",
  "Inaccettabile",
  "Che disastro",
  "Mai aiutato",
  "Soldi buttati"
];

function randomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomReview() {
  return reviews[Math.floor(Math.random() * reviews.length)];
}

function formatRating(rating) {
  return `${rating}${"⭐️".repeat(rating)}`;
}

function clearTimers() {
  activeTimers.forEach((timerId) => window.clearTimeout(timerId));
  activeTimers = [];
}

function schedule(callback, delay) {
  const timerId = window.setTimeout(callback, delay);
  activeTimers.push(timerId);
}

function openModal(finalSymbols, review) {
  resultSymbols.textContent = finalSymbols.join("   ");
  reviewAuthor.textContent = review.author;
  reviewRating.textContent = formatRating(review.rating);
  reviewText.textContent = review.text;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function setStatus(message) {
  statusText.textContent = message;
  statusText.classList.toggle("is-hidden", !message);
}

function showSlotOverlay() {
  slotOverlay.classList.add("active");
}

function hideSlotOverlay() {
  slotOverlay.classList.remove("active");
}

function backToMenu() {
  clearTimers();
  closeModal();
  hideSlotOverlay();
  resetReels();
  setStatus("Tira la leva e lascia parlare il rancore.");
  startButton.disabled = false;
  startButton.textContent = "Tira la leva e tenta la fortuna";
  isSpinning = false;
}

function resetReels() {
  reelElements.forEach((reel, index) => {
    reel.textContent = symbols[index];
    reel.classList.remove("spinning");
  });
}

function runSpin() {
  if (isSpinning) {
    return;
  }

  clearTimers();
  closeModal();
  isSpinning = true;
  showSlotOverlay();
  startButton.disabled = true;
  startButton.textContent = "La leva sta scendendo...";
  setStatus("");

  const finalSymbols = [randomSymbol(), randomSymbol(), randomSymbol()];
  const stopMessages = [
    "Che schifo",
    "Servizio deludente",
    "Mai più!"
  ];

  reelElements.forEach((reel) => reel.classList.add("spinning"));

  // Ogni rullo gira con un suo ritmo e si ferma in sequenza per simulare il rallentamento.
  const reelPlans = [
    { interval: 85, stopAfter: 1150 },
    { interval: 115, stopAfter: 1850 },
    { interval: 155, stopAfter: 2700 }
  ];

  for (let i = 0; i < 8; i += 1) {
    schedule(() => {
      setStatus(ragePhrases[Math.floor(Math.random() * ragePhrases.length)]);
    }, 180 + i * 260);
  }

  reelPlans.forEach((plan, index) => {
    let elapsed = 0;

    const tick = () => {
      if (elapsed >= plan.stopAfter) {
        reelElements[index].textContent = finalSymbols[index];
        reelElements[index].classList.remove("spinning");
        setStatus(stopMessages[index]);

        if (index === reelPlans.length - 1) {
          schedule(() => {
            const selectedReview = randomReview();
            setStatus("");
            openModal(finalSymbols, selectedReview);
            hideSlotOverlay();
            startButton.disabled = false;
            startButton.textContent = "Tira la leva e tenta la fortuna";
            isSpinning = false;
          }, 460);
        }

        return;
      }

      reelElements[index].textContent = randomSymbol();
      elapsed += plan.interval;
      schedule(tick, plan.interval);
    };

    schedule(tick, plan.interval);
  });
}

startButton.addEventListener("click", runSpin);

playAgainButton.addEventListener("click", () => {
  closeModal();
  runSpin();
});

backToMenuButton.addEventListener("click", backToMenu);

modal.addEventListener("click", (event) => {
  if (event.target === modal && !isSpinning) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden") && !isSpinning) {
    closeModal();
  }
});

resetReels();
