var theText="Distrutto il lavoro a domicilio, vulnerata. la vita di famiglia, sorti i vasti opifici nei grandi centri manifatturieri, le macchine divennero per così dire il simbolo della quistioni) operaia, ad affrontare la quale occorrono grandi provvidenze, non tanto legislative quanto d’ordine morale e di rispetto civile.I ntanto però le macchine sonò divenute una necessità. Si può lamentare moralmente, socialmente questa necessità, ma bisogna subîrla uniti. Se il Tevere inonda Roma, sarebbe ozioso il far voto che indietreggi verso gli Appennini quando è spinto al mare; lo stesso accade per le macchine; ad accettare la lotta della concorrenza occorrono armi eguali. Ora, la soluzione della questione operaia. sta nel procurare agli operai il miglior ben essere ed i migliori salari possibili. Queste condizioni non si otterranno se non ci mettiamo in condizione di poter lottare ad anni pari. Pretensiosi isolotti dalle pompose vestì di smeraldo, voi non siete per me se non larghi fiori palustri, piatti sull'acqua, corrosi da grasse mosche nerastre, Già come un turbine vi sorpasso, e con la mano accarezzo velocissimamente il globo immenso dell'atmosfera, enorme dorso del massacrante pericolo che mi separa dal mare!… Vedo e sento, giù in fondo, a picco sotto i miei piedi, lo spaventevole urto possibile, contro il petto del mare, più duro della pietra!… Oh gioia! oh gioia!… Bisogna pure ch'io lasci un istante le leve, per batter le mani alla Squadra! Sono venti tartarughe favolose, immote sotto di me, con gole di cannoni protese fuori dai gusci metallici, e tutt'intorno il guizzare delle torpediniere e delle barche-rospi, che sgambettano sui loro piccoli remi folleggianti!… I marinai sulle tolde sono schiacciati e tondi; i loro volti seguono i miei applausi come talvolta seguono gli stridi turchini degli uccelli migranti…. Le larghe corazzate ora tacciono, ma un giorno, ma presto, riparleranno terribili con la loro esplodente eloquenza a ventaglio sullo smalto spazzato del nostro lago Adriatico!";
var current = "";
var originalText = theText; 
outlets = 3;
inlets = 1;

function GenerateText(t){
	var parts = theText.split(' ');
	//post(parts.length);
	var from = getRandomInt(0, parts.length - 20);
	var to = from +  getRandomInt(2, 19);
	var theExtract = parts.slice(from, to);

	setCurrent(theExtract);
	
	}
	
function setCurrent(t){
//post(t);
	   t = String(t);
	   current = t.toLowerCase();
	}
	
function setSource(t){
	theText = t;
	}

function resetSource(){
	theText = originalText;
}
	
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function letterByLetter(){
	 if(current.length==0){
		outlet(1,1);
		return;
	 }
	current = String(current);
//	post(current);
	var lett = current.substring(0,1);
	current = current.substring(1);
	
	var regex=/^[a-zA-Z0-9]+$/;
    if (lett.match(regex)){
/*	 var p = this.patcher;
	 var lui = p.getnamed('lui');
	 lui.message(lett);*/
	 	outlet(0,lett);
		}
	else{
		outlet(2,1);
		}
	}