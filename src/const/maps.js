
const rate_words = ["credit", "rata", "rate", "unicredit"];
const gradinita_words = ["gradinita", "gradi"];
const cumparaturi_words = ["sampon", "eclere", "reprezentantive", "suc", "peste", "casti", "egros", "sampon",
    "harbuz", "pepene", "tort", "saci", "dovis", "telemea", "biscuiti", "cobyul", "brutărie", "vin", "ikea",
    "brutarie", "selgeos", "dm", "nyx", "gratar", "grătar", "dedoles", "cimpoesu", "cargus", "fancurier", "folie",
    "ceai", "nasturi", "emag", "lime", "scutece", "plăcintă", "batoane", "", "periuta", "palibo", "cartofi", "popcorn",
    "șuncă", "cumpărături", "aroma", "mancare", "branza", "gratar", "la2pasi", "kaufland", "piața",
    "kosarom", "exira", "carrefour", "carfur", "lidl", "profi", "selgros",
    "mega", "2pasi", "carmangerie", "cumparaturi", "cump", "auchan", "aeroport", "moldovencei", "cuptorul", "cuptor",
    "trans", "gigel", "bringo", "piata", "legume", "shopping", "mcs", "cupio", "meat", "narghilea", "bere", "rucsac", "pepene", "biscuiti"];
const eatingOut_words = ["racilor", "hotdog", "praji", "kebab", "ospatul", "placinta", "rita", "blanca", "covrig",
    "texas", "ospățul", "fryday", "panoramic", "matrioshka", "veneto", "saladbox",
    "prăjiturele", "corniche", "matriosca", "fenice", "mamma", "înghețată", "înghețata", "hummus", "bacsis",
    "cartofisserie", "mcdonald", "covrigi", "branzoice", "shaworma", "salad", "cartofiserie", "kfc", "fornetti",
    "pizza", "vivo", "mcdonald's", "matrioska", "plăcinte", "mado", "box", "prânz", "limonada",
    "restaurant", "fenis", "krud", "mec", "mcdonalds", "mc", "trumpets", "eatingout", "petru", "simigerie", "nico",
    "pranz", "glovo", "cafea", "legend", "foodcourt", "court", "falafel", "mesopotamia", "cafenea"];
const electricitate_words = ["eon", "curent", "electricitate", "tradiției"];
const gaz_words = ["gaz", "eon.", "eon"];
const digi_words = ["digi"];
const gunoi_words = ["gunoi"];
const apa_words = ["apa", "apavital"];
const telefoane_words = ["orange", "telefon", "tel", "telefoane"];
const masini_words = ["parbriz", "parcare", "lukoil", "rovignete", "vulcanizare", "taxi", "tramvai", "bilet",
    "moto", "bolt", "uber", "itp", "asigurare", "rompetrol", "rovigneta", "toyota", "cauciucuri", "roti", "jante",
    "benzina", "ford", "plin", "omv", "motorina", "benzinarie", "mol"];
const oana_words = ["oana"];
const sanatate_words = ["rmn", "kineto", "siminiceanu", "ortodont", "antiviral", "imunitate", "sunwave", "sarcina",
    "morfologie", "catina", "consultatie", "reteta", "unguent", "covid", "soluție", "medlife", "arcadia", "cervical",
    "teste", "echo", "implant", "gineco", "ecografie", "bioclinica", "synevo", "ortho", "plafaria", "pastile", "pcr", "stomato", "strepsils",
    "cardiologie", "radiografie", "plafar", "dentist", "bebetei", "farmacie", "farmacia", "catena", "dona",
    "tratament", "analize", "analiza", "dentesse"];
const jucarii_words = ["jucarie", "jucarii", "puzzle"];
const sala_words = ["prosop", "pedalas", "sala", "yoga", "worldclass",
    "inot", "fotbal"];
const unghii_words = ["epilat", "unghii", "manichiura", "pedichiura"];
const masaj_words = ["masaj", "natasa"];
const tuns_words = ["tuns", "geta", "neleapca", "moler"];
const home_words = ["jisk", "covoare", "motocoasa", "stalpi", "ciment", "scarificator", "leduri", "mini-vermorel",
    "monteaza", "irigație", "fitosanitare",
    "pavele", "dedeman", "leroy", "praktiker", "brico", "vidanjare", "vidanja"];
const haine_words = ["papion", "bluza", "slapi", "geaca", "decathlon", "sutien", "trening", "ghete", "cravata", "costum", "rochii",
    "waikiki", "salopeta", "fusta", "rochie", "cămașă", "zara", "damat", "spălătorie", "chiloți", "chiloti", "haine", "hanorac",
    "sandale", "sinsay", "hm", "pepco", "tricou", "tricouri", "papuci", "pantofi", "blugi", "camasa", "fashion", "pantaloni",
    "sosete", "chiloti"];
const entertainment_words = ["planetariu", "trambuline", "mașinuța", "mașinuțe", "masinute", "revelion", "arcaland", "palas",
    "joaca", "circ", "joacă", "trambulina", "spotify", "youtube"];
const misc_words = ["cadou"];
const education_words = ["ceccar", "carturesti", "carte", "cărți", "carti", "curs", "training", "workshop"];
const economii_words = ["economii"];
const other_investments_words = ["teren", "nucului", "topo", "actiuni", "ripple", "pamant", "investitii", "investiții",
    "reinvest24"];
const stocks_words = ["actiuni", "acțiuni", "stock", "stocks", "xtb"];
const vacations_words = ["cazare", "munte", "wizzair", "wizz", "tarom", "avion", "misano", "bologna", "madrid", "motogp",
    "italia", "milano", "vacanta"];
const charity_words = ["donatie", "charity", "donatia", "donat"];

const category = [
    { categ_name: "Rate", bucket_name: "Total Cheltuieli", categ_words: rate_words },
    { categ_name: "Gradinita", bucket_name: "Total Cheltuieli", categ_words: gradinita_words },
    { categ_name: "Cumparaturi", bucket_name: "Total Cheltuieli", categ_words: cumparaturi_words },
    { categ_name: "Eating out", bucket_name: "Total Cheltuieli", categ_words: eatingOut_words },
    { categ_name: "Electricitate", bucket_name: "Total Cheltuieli", categ_words: electricitate_words },
    { categ_name: "Gaz", bucket_name: "Total Cheltuieli", categ_words: gaz_words },
    { categ_name: "Digi", bucket_name: "Total Cheltuieli", categ_words: digi_words },
    { categ_name: "Gunoi", bucket_name: "Total Cheltuieli", categ_words: gunoi_words },
    { categ_name: "Apa", bucket_name: "Total Cheltuieli", categ_words: apa_words },
    { categ_name: "Telefoane", bucket_name: "Total Cheltuieli", categ_words: telefoane_words },
    { categ_name: "Masini-Transport", bucket_name: "Total Cheltuieli", categ_words: masini_words },
    { categ_name: "Oana", bucket_name: "Total Cheltuieli", categ_words: oana_words },
    { categ_name: "Sanatate", bucket_name: "Total Cheltuieli", categ_words: sanatate_words },
    { categ_name: "Jucarii", bucket_name: "Total Cheltuieli", categ_words: jucarii_words },
    { categ_name: "Sala", bucket_name: "Total Cheltuieli", categ_words: sala_words },
    { categ_name: "Unghii-Epilat", bucket_name: "Total Cheltuieli", categ_words: unghii_words },
    { categ_name: "Masaj", bucket_name: "Total Cheltuieli", categ_words: masaj_words },
    { categ_name: "Tuns", bucket_name: "Total Cheltuieli", categ_words: tuns_words },
    { categ_name: "Home projects", bucket_name: "Total Cheltuieli", categ_words: home_words },
    { categ_name: "Haine", bucket_name: "Total Cheltuieli", categ_words: haine_words },
    { categ_name: "Entertainment", bucket_name: "Total Cheltuieli", categ_words: entertainment_words },
    { categ_name: "Misc", bucket_name: "Total Cheltuieli", categ_words: misc_words },
    { categ_name: "Economii", bucket_name: "Total Economii", categ_words: economii_words },
    { categ_name: "Other investments", bucket_name: "Total Investitii", categ_words: other_investments_words },
    { categ_name: "Stocks", bucket_name: "Total Investitii", categ_words: stocks_words },
    { categ_name: "Education", bucket_name: "Total Ed Vac Char", categ_words: education_words },
    { categ_name: "Vacations", bucket_name: "Total Ed Vac Char", categ_words: vacations_words },
    { categ_name: "Charity", bucket_name: "Total Ed Vac Char", categ_words: charity_words }];

module.exports = { constMaps: category };