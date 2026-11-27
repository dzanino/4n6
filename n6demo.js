(function () {
  'use strict';
  var root = document.getElementById('n6live');
  var grid = document.getElementById('n6grid');
  if (!root && !grid) return;
  var L = (document.documentElement.lang || 'sk').slice(0, 2);
  var TITLES = {"anthro": {"cat": "anthro", "sk": "Výška z kostí", "en": "Stature from bones", "de": "Körperhöhe aus Knochen", "es": "Estatura a partir de los huesos", "pt": "Estatura a partir dos ossos", "pl": "Wzrost z kości"}, "aorta": {"cat": "identity", "sk": "Vek z obvodov aorty", "en": "Age from aortic girth", "de": "Alter aus Aortenumfang", "es": "Edad a partir del perímetro aórtico", "pt": "Idade a partir do perímetro da aorta", "pl": "Wiek z obwodu aorty"}, "blood": {"cat": "identity", "sk": "Krvné skupiny a stopy", "en": "Blood groups and traces", "de": "Blutgruppen und Spuren", "es": "Grupos sanguíneos y vestigios", "pt": "Grupos sanguíneos e vestígios", "pl": "Grupy krwi i ślady"}, "bmi": {"cat": "anthro", "sk": "BMI / výživa", "en": "BMI / nutrition", "de": "BMI / Ernährung", "es": "IMC / nutrición", "pt": "IMC / nutrição", "pl": "BMI / stan odżywienia"}, "bodyvol": {"cat": "anthro", "sk": "Objemový odhad", "en": "Volumetric estimate", "de": "Volumetrische Schätzung", "es": "Estimación volumétrica", "pt": "Estimativa volumétrica", "pl": "Oszacowanie objętościowe"}, "bsa_heart": {"cat": "cardio", "sk": "BSA + hmotnosť srdca", "en": "BSA + heart weight", "de": "BSA + Herzgewicht", "es": "SC + peso del corazón", "pt": "ASC + peso do coração", "pl": "BSA + masa serca"}, "burns": {"cat": "trauma", "sk": "Popáleniny - rozsah", "en": "Burns - extent", "de": "Verbrennungen - Ausdehnung", "es": "Quemaduras - extensión", "pt": "Queimaduras - extensão", "pl": "Oparzenia - rozległość"}, "case": {"cat": "case", "sk": "Zápisnica a prípady", "en": "Report and cases", "de": "Bericht und Fälle", "es": "Informe y casos", "pt": "Laudo e casos", "pl": "Protokół i sprawy"}, "cohb": {"cat": "toxicology", "sk": "CO-Hb - oxid uhoľnatý", "en": "CO-Hb - carbon monoxide", "de": "CO-Hb - Kohlenmonoxid", "es": "CO-Hb - monóxido de carbono", "pt": "CO-Hb - monóxido de carbono", "pl": "CO-Hb - tlenek węgla"}, "color": {"cat": "tools", "sk": "Colorime3ka", "en": "Colorime3ka", "de": "Colorime3ka", "es": "Colorime3ka", "pt": "Colorime3ka", "pl": "Colorime3ka"}, "conv": {"cat": "tools", "sk": "Konverzia jednotiek", "en": "Unit converter", "de": "Einheitenrechner", "es": "Conversor de unidades", "pt": "Conversor de unidades", "pl": "Przelicznik jednostek"}, "drinking": {"cat": "toxicology", "sk": "Etanol - koncentrácia v čase", "en": "Ethanol - concentration over time", "de": "Ethanol - Konzentration im Zeitverlauf", "es": "Etanol - concentración en el tiempo", "pt": "Etanol - concentração ao longo do tempo", "pl": "Etanol - stężenie w czasie"}, "dvi": {"cat": "identity", "sk": "DVI - hromadné nešťastie", "en": "DVI - mass fatality", "de": "DVI - Massenunglück", "es": "DVI - víctimas de catástrofes", "pt": "DVI - desastre de massa", "pl": "DVI - katastrofa masowa"}, "entomo": {"cat": "thanatology", "sk": "Forenzná entomológia", "en": "Forensic entomology", "de": "Forensische Entomologie", "es": "Entomología forense", "pt": "Entomologia forense", "pl": "Entomologia sądowa"}, "ethanol": {"cat": "toxicology", "sk": "Etanol - interpretácia", "en": "Ethanol - interpretation", "de": "Ethanol - Interpretation", "es": "Etanol - interpretación", "pt": "Etanol - interpretação", "pl": "Etanol - interpretacja"}, "henssge": {"cat": "thanatology", "sk": "Henssge - čas smrti", "en": "Henssge - time of death", "de": "Henssge - Todeszeit", "es": "Henssge - hora de la muerte", "pt": "Henssge - hora da morte", "pl": "Henssge - czas zgonu"}, "ihc": {"cat": "micro", "sk": "IHC - dezmín", "en": "IHC - desmin", "de": "IHC - Desmin", "es": "IHQ - desmina", "pt": "IHQ - desmina", "pl": "IHC - desmina"}, "littleye": {"cat": "tools", "sk": "littlEye AI", "en": "littlEye AI", "de": "littlEye AI", "es": "littlEye AI", "pt": "littlEye AI", "pl": "littlEye AI"}, "micro": {"cat": "micro", "sk": "Mikroskopia", "en": "Microscopy", "de": "Mikroskopie", "es": "Microscopía", "pt": "Microscopia", "pl": "Mikroskopia"}, "odonto": {"cat": "identity", "sk": "Odontológia", "en": "Odontology", "de": "Odontologie", "es": "Odontología", "pt": "Odontologia", "pl": "Odontologia"}, "osteo": {"cat": "anthro", "sk": "Pohlavie a vek kostry", "en": "Skeletal sex and age", "de": "Geschlecht und Alter am Skelett", "es": "Sexo y edad del esqueleto", "pt": "Sexo e idade do esqueleto", "pl": "Płeć i wiek ze szkieletu"}, "pal": {"cat": "toxicology", "sk": "PAL - koncentrácie liečiv", "en": "PAL - drug concentrations", "de": "PAL - Arzneimittelspiegel", "es": "PAL - concentraciones de fármacos", "pt": "PAL - concentrações de fármacos", "pl": "PAL - stężenia leków"}, "photogram": {"cat": "tools", "sk": "Fotograme3ka", "en": "Fotograme3ka", "de": "Fotograme3ka", "es": "Fotograme3ka", "pt": "Fotograme3ka", "pl": "Fotograme3ka"}, "pmi_scene": {"cat": "thanatology", "sk": "Posmrtné zmeny - PMI", "en": "Post-mortem changes - PMI", "de": "Leichenerscheinungen - PMI", "es": "Fenómenos cadavéricos - IPM", "pt": "Fenômenos cadavéricos - IPM", "pl": "Zmiany pośmiertne - PMI"}, "traube": {"cat": "biochem", "sk": "Traubov index", "en": "Traub index", "de": "Traub-Index", "es": "Índice de Traub", "pt": "Índice de Traub", "pl": "Wskaźnik Trauba"}, "vitreous": {"cat": "thanatology", "sk": "K⁺ v sklovci - PMI", "en": "Vitreous K⁺ - PMI", "de": "K⁺ im Glaskörper - PMI", "es": "K⁺ en humor vítreo - IPM", "pt": "K⁺ no humor vítreo - IPM", "pl": "K⁺ w ciele szklistym - PMI"}, "widmark": {"cat": "toxicology", "sk": "Etanol - prepočty", "en": "Ethanol - calculations", "de": "Ethanol - Berechnungen", "es": "Etanol - cálculos", "pt": "Etanol - cálculos", "pl": "Etanol - obliczenia"}};

  var S = {
    sk: {
      kK: 'Draslík (K⁺) v sklovci', vRes: 'od smrti · Madea 1989', vCi: '95 % interval: <b>{0} až {1} h</b> (± 20 h)', vBelow: 'Hodnota je pod rozsahom lineárnych metód: K⁺ zodpovedá veľmi krátkemu PMI. Appka ju neuvádza ako číslo.', vNeg: 'pod rozsahom metódy', vMeth: 'Metóda',
      vNote: 'Lineárne regresie platia zhruba 0 až 100 h po smrti. Appka pridáva model Zilg 2015 s vekom a teplotou okolia a hypoxantín ako kontrolu.',
      vCite: 'Sturner WQ, Gantner GE. The postmortem interval. A study of potassium in the vitreous humor. <i>Am J Clin Pathol.</i> 1964;42:137–144. · Madea B, Henssge C, Hönig W, Gerbracht A. References for determining the time of death by potassium in vitreous humor. <i>Forensic Sci Int.</i> 1989;40(3):231–243. · James RA, Hoadley PA, Sampson BG. Determination of the postmortem interval by sampling vitreous humour. <i>Am J Forensic Med Pathol.</i> 1997;18(2):158–162.',
      to: 'až',
      tabs: [['Henssge', 'čas smrti z teploty'], ['K⁺ v sklovci', 'PMI z draslíka'], ['Traub', 'glukóza + laktát']],
      inputs: 'Vstupy', result: 'Výsledok', h: 'h', ago: 'od smrti',
      tr: 'Rektálna teplota', ta: 'Teplota okolia', mass: 'Hmotnosť tela', cf: 'Korekčný faktor (podmienky)',
      cfs: [['1', 'nahé telo, pokojný vzduch (1,0)'], ['0.7', 'mokré telo alebo prúdiaci vzduch (0,7)'], ['1.2', 'ľahký odev (1,2)'], ['1.4', 'odev, pokojný vzduch (1,4)'], ['1.8', 'teplý odev alebo prikrývka (1,8)'], ['2.4', 'hrubá prikrývka, perina (2,4)']],
      ci: '95 % interval: <b>{0} až {1} h</b> (± {2} h podľa legendy nomogramu)',
      hLate: 'Neskorá fáza chladnutia (Q < 0,2): teplota je blízko okolia, presnosť výrazne klesá. Appka to označí a odporučí ďalšie metódy.',
      hImp: 'Telo nemôže byť teplejšie než 37,2 °C pri týchto vstupoch; v appke dostanete vysvetlenie, nie číslo.',
      hTa: 'Rektálna teplota musí byť vyššia než teplota okolia.',
      hNote: 'Štandardné telo 37,2 °C, dvojexponenciálny model chladnutia. Appka pridáva asistenta korekčného faktora, Glaisterovo pravidlo na kontrolu a zápis do zápisnice.',
      hCite: 'Henssge C. Death time estimation in case work I. The rectal temperature time of death nomogram. <i>Forensic Sci Int.</i> 1988;38(3–4):209–236. · Henssge C, Madea B. Estimation of the time since death in the early post-mortem period. <i>Forensic Sci Int.</i> 2004;144(2–3):167–175.',
      glu: 'Glukóza', lac: 'Laktát', matrix: 'Materiál', vit: 'sklovec', csf: 'likvor', tRes: 'Traubov index',
      tHyper: 'Hyperglykémia', tHyperT: 'Index nad prahom pre {0} (> {1} mg/dl). Appka odporučí doplniť β-hydroxybutyrát a HbA1c.',
      tLow: 'Nízky index, nediagnostický', tLowT: 'Súčet pod 160 mg/dl hypoglykémiu nedokazuje: glukóza po smrti klesá glykolýzou. Appka vysvetlí, čím sa hypoglykémia dokazuje.',
      tNorm: 'Bez známok hyperglykémie', tNormT: 'Index v rozpätí {0} až {1} mg/dl pre {2}. Appka ho uvádza spolu so samotnou glukózou.',
      tNote: 'Index = glukóza × 18,016 + laktát × 9,008 (mg/dl). Prahy: sklovec 160 a 410 mg/dl, likvor 160 a 362 mg/dl.',
      tCite: 'Traub F. Methode zur Erkennung von tödlichen Zuckerstoffwechselstörungen an der Leiche (Diabetes mellitus und Hypoglykämie). <i>Zentralbl Allg Pathol.</i> 1969;112(4):390–399. · Karlovsek MZ. Diagnostic values of combined glucose and lactate values in cerebrospinal fluid and vitreous humour - our experiences. <i>Forensic Sci Int.</i> 2004;146 Suppl:S19–S23. · Zilg B. Postmortem analyses of vitreous fluid (PhD thesis). Stockholm: Karolinska Institutet; 2015.',
      cite: 'Zdroj metódy', foot: 'Výpočet beží vo vašom prehliadači, nič sa neodosiela. V aplikácii má každý nástroj asistentov, výhrady a zápis do zápisnice.',
      all: 'Všetky', lite: 'Lite zadarmo', pro: 'Pro', count: '{0} z 27 nástrojov',
      cats: { thanatology: 'Tanatológia', trauma: 'Trauma', toxicology: 'Toxikológia', biochem: 'Biochémia', cardio: 'Kardiopatológia', identity: 'Identifikácia', anthro: 'Antropológia', micro: 'Mikroskopia', tools: 'Nástroje', 'case': 'Prípad' }
    },
    en: {
      kK: 'Vitreous potassium (K⁺)', vRes: 'since death · Madea 1989', vCi: '95 % interval: <b>{0} to {1} h</b> (± 20 h)', vBelow: 'The value is below the range of the linear methods: the K⁺ corresponds to a very short PMI. The app does not report it as a number.', vNeg: 'below the method range', vMeth: 'Method',
      vNote: 'The linear regressions apply roughly 0 to 100 h after death. The app adds the Zilg 2015 model with age and ambient temperature, and hypoxanthine as a cross-check.',
      vCite: 'Sturner WQ, Gantner GE. The postmortem interval. A study of potassium in the vitreous humor. <i>Am J Clin Pathol.</i> 1964;42:137–144. · Madea B, Henssge C, Hönig W, Gerbracht A. References for determining the time of death by potassium in vitreous humor. <i>Forensic Sci Int.</i> 1989;40(3):231–243. · James RA, Hoadley PA, Sampson BG. Determination of the postmortem interval by sampling vitreous humour. <i>Am J Forensic Med Pathol.</i> 1997;18(2):158–162.',
      to: 'to',
      tabs: [['Henssge', 'time of death from temperature'], ['Vitreous K⁺', 'PMI from potassium'], ['Traub', 'glucose + lactate']],
      inputs: 'Inputs', result: 'Result', h: 'h', ago: 'since death',
      tr: 'Rectal temperature', ta: 'Ambient temperature', mass: 'Body mass', cf: 'Corrective factor (conditions)',
      cfs: [['1', 'naked, still air (1.0)'], ['0.7', 'wet body or moving air (0.7)'], ['1.2', 'light clothing (1.2)'], ['1.4', 'clothed, still air (1.4)'], ['1.8', 'warm clothing or blanket (1.8)'], ['2.4', 'thick bedding (2.4)']],
      ci: '95 % interval: <b>{0} to {1} h</b> (± {2} h per the nomogram legend)',
      hLate: 'Late cooling phase (Q < 0.2): the body is close to ambient and precision drops sharply. The app flags this and recommends further methods.',
      hImp: 'The body cannot be warmer than 37.2 °C with these inputs; the app returns an explanation, not a number.',
      hTa: 'Rectal temperature must exceed the ambient temperature.',
      hNote: 'Standard body 37.2 °C, two-exponential cooling model. The app adds a corrective-factor assistant, the Glaister rule as a check and the report entry.',
      hCite: 'Henssge C. Death time estimation in case work I. The rectal temperature time of death nomogram. <i>Forensic Sci Int.</i> 1988;38(3–4):209–236. · Henssge C, Madea B. Estimation of the time since death in the early post-mortem period. <i>Forensic Sci Int.</i> 2004;144(2–3):167–175.',
      glu: 'Glucose', lac: 'Lactate', matrix: 'Matrix', vit: 'vitreous', csf: 'CSF', tRes: 'Traub index',
      tHyper: 'Hyperglycaemia', tHyperT: 'Index above the threshold for {0} (> {1} mg/dL). The app recommends adding β-hydroxybutyrate and HbA1c.',
      tLow: 'Low index, non-diagnostic', tLowT: 'A sum below 160 mg/dL does not prove hypoglycaemia: glucose falls after death through glycolysis. The app explains how hypoglycaemia is proven.',
      tNorm: 'No sign of hyperglycaemia', tNormT: 'Index within {0} to {1} mg/dL for {2}. The app reports it together with glucose alone.',
      tNote: 'Index = glucose × 18.016 + lactate × 9.008 (mg/dL). Thresholds: vitreous 160 and 410 mg/dL, CSF 160 and 362 mg/dL.',
      tCite: 'Traub F. Methode zur Erkennung von tödlichen Zuckerstoffwechselstörungen an der Leiche (Diabetes mellitus und Hypoglykämie). <i>Zentralbl Allg Pathol.</i> 1969;112(4):390–399. · Karlovsek MZ. Diagnostic values of combined glucose and lactate values in cerebrospinal fluid and vitreous humour - our experiences. <i>Forensic Sci Int.</i> 2004;146 Suppl:S19–S23. · Zilg B. Postmortem analyses of vitreous fluid (PhD thesis). Stockholm: Karolinska Institutet; 2015.',
      cite: 'Source of the method', foot: 'The calculation runs in your browser; nothing is sent anywhere. In the app every tool has assistants, caveats and a report entry.',
      all: 'All', lite: 'Free in Lite', pro: 'Pro', count: '{0} of 27 tools',
      cats: { thanatology: 'Thanatology', trauma: 'Trauma', toxicology: 'Toxicology', biochem: 'Biochemistry', cardio: 'Cardiac pathology', identity: 'Identification', anthro: 'Anthropology', micro: 'Microscopy', tools: 'Tools', 'case': 'Case' }
    },
    de: {
      kK: 'Kalium (K⁺) im Glaskörper', vRes: 'seit dem Tod · Madea 1989', vCi: '95-%-Intervall: <b>{0} bis {1} h</b> (± 20 h)', vBelow: 'Der Wert liegt unterhalb des Bereichs der linearen Methoden: Das K⁺ entspricht einer sehr kurzen Liegezeit. Die App gibt ihn nicht als Zahl an.', vNeg: 'unterhalb des Methodenbereichs', vMeth: 'Methode',
      vNote: 'Die linearen Regressionen gelten etwa 0 bis 100 h nach dem Tod. Die App ergänzt das Modell Zilg 2015 mit Alter und Umgebungstemperatur sowie Hypoxanthin als Kontrolle.',
      vCite: 'Sturner WQ, Gantner GE. The postmortem interval. A study of potassium in the vitreous humor. <i>Am J Clin Pathol.</i> 1964;42:137–144. · Madea B, Henssge C, Hönig W, Gerbracht A. References for determining the time of death by potassium in vitreous humor. <i>Forensic Sci Int.</i> 1989;40(3):231–243. · James RA, Hoadley PA, Sampson BG. Determination of the postmortem interval by sampling vitreous humour. <i>Am J Forensic Med Pathol.</i> 1997;18(2):158–162.',
      to: 'bis',
      tabs: [['Henssge', 'Todeszeit aus der Temperatur'], ['K⁺ im Glaskörper', 'Liegezeit aus Kalium'], ['Traub', 'Glukose + Laktat']],
      inputs: 'Eingaben', result: 'Ergebnis', h: 'h', ago: 'seit dem Tod',
      tr: 'Rektaltemperatur', ta: 'Umgebungstemperatur', mass: 'Körpermasse', cf: 'Korrekturfaktor (Bedingungen)',
      cfs: [['1', 'unbekleidet, ruhende Luft (1,0)'], ['0.7', 'nasser Körper oder bewegte Luft (0,7)'], ['1.2', 'leichte Kleidung (1,2)'], ['1.4', 'bekleidet, ruhende Luft (1,4)'], ['1.8', 'warme Kleidung oder Decke (1,8)'], ['2.4', 'dickes Bettzeug (2,4)']],
      ci: '95-%-Intervall: <b>{0} bis {1} h</b> (± {2} h laut Nomogrammlegende)',
      hLate: 'Späte Abkühlungsphase (Q < 0,2): Die Körpertemperatur liegt nahe der Umgebungstemperatur, die Genauigkeit sinkt deutlich. Die App markiert das und empfiehlt weitere Methoden.',
      hImp: 'Der Körper kann bei diesen Eingaben nicht wärmer als 37,2 °C sein; die App liefert eine Erklärung, keine Zahl.',
      hTa: 'Die Rektaltemperatur muss über der Umgebungstemperatur liegen.',
      hNote: 'Standardkörper 37,2 °C, doppelt exponentielles Abkühlungsmodell. Die App ergänzt einen Assistenten für den Korrekturfaktor, die Glaister-Regel als Kontrolle und den Protokolleintrag.',
      hCite: 'Henssge C. Death time estimation in case work I. The rectal temperature time of death nomogram. <i>Forensic Sci Int.</i> 1988;38(3–4):209–236. · Henssge C, Madea B. Estimation of the time since death in the early post-mortem period. <i>Forensic Sci Int.</i> 2004;144(2–3):167–175.',
      glu: 'Glukose', lac: 'Laktat', matrix: 'Material', vit: 'Glaskörper', csf: 'Liquor', tRes: 'Traub-Index',
      tHyper: 'Hyperglykämie', tHyperT: 'Index über der Schwelle für {0} (> {1} mg/dl). Die App empfiehlt, β-Hydroxybutyrat und HbA1c zu ergänzen.',
      tLow: 'Niedriger Index, nicht diagnostisch', tLowT: 'Eine Summe unter 160 mg/dl beweist keine Hypoglykämie: Glukose fällt nach dem Tod durch Glykolyse. Die App erklärt, womit eine Hypoglykämie belegt wird.',
      tNorm: 'Kein Hinweis auf Hyperglykämie', tNormT: 'Index im Bereich {0} bis {1} mg/dl für {2}. Die App gibt ihn zusammen mit der Glukose allein an.',
      tNote: 'Index = Glukose × 18,016 + Laktat × 9,008 (mg/dl). Schwellen: Glaskörper 160 und 410 mg/dl, Liquor 160 und 362 mg/dl.',
      tCite: 'Traub F. Methode zur Erkennung von tödlichen Zuckerstoffwechselstörungen an der Leiche (Diabetes mellitus und Hypoglykämie). <i>Zentralbl Allg Pathol.</i> 1969;112(4):390–399. · Karlovsek MZ. Diagnostic values of combined glucose and lactate values in cerebrospinal fluid and vitreous humour - our experiences. <i>Forensic Sci Int.</i> 2004;146 Suppl:S19–S23. · Zilg B. Postmortem analyses of vitreous fluid (PhD thesis). Stockholm: Karolinska Institutet; 2015.',
      cite: 'Quelle der Methode', foot: 'Die Berechnung läuft in Ihrem Browser; nichts wird gesendet. In der App hat jedes Werkzeug Assistenten, Vorbehalte und einen Protokolleintrag.',
      all: 'Alle', lite: 'In Lite kostenlos', pro: 'Pro', count: '{0} von 27 Werkzeugen',
      cats: { thanatology: 'Thanatologie', trauma: 'Trauma', toxicology: 'Toxikologie', biochem: 'Biochemie', cardio: 'Kardiopathologie', identity: 'Identifizierung', anthro: 'Anthropologie', micro: 'Mikroskopie', tools: 'Werkzeuge', 'case': 'Fall' }
    },
    es: {
      kK: 'Potasio (K⁺) en humor vítreo', vRes: 'desde la muerte · Madea 1989', vCi: 'Intervalo del 95 %: <b>{0} a {1} h</b> (± 20 h)', vBelow: 'El valor está por debajo del rango de los métodos lineales: el K⁺ corresponde a un IPM muy corto. La aplicación no lo muestra como número.', vNeg: 'por debajo del rango del método', vMeth: 'Método',
      vNote: 'Las regresiones lineales son válidas aproximadamente de 0 a 100 h tras la muerte. La aplicación añade el modelo Zilg 2015 con edad y temperatura ambiente, y la hipoxantina como control.',
      vCite: 'Sturner WQ, Gantner GE. The postmortem interval. A study of potassium in the vitreous humor. <i>Am J Clin Pathol.</i> 1964;42:137–144. · Madea B, Henssge C, Hönig W, Gerbracht A. References for determining the time of death by potassium in vitreous humor. <i>Forensic Sci Int.</i> 1989;40(3):231–243. · James RA, Hoadley PA, Sampson BG. Determination of the postmortem interval by sampling vitreous humour. <i>Am J Forensic Med Pathol.</i> 1997;18(2):158–162.',
      to: 'a',
      tabs: [['Henssge', 'hora de la muerte por temperatura'], ['K⁺ en vítreo', 'IPM por potasio'], ['Traub', 'glucosa + lactato']],
      inputs: 'Entradas', result: 'Resultado', h: 'h', ago: 'desde la muerte',
      tr: 'Temperatura rectal', ta: 'Temperatura ambiente', mass: 'Masa corporal', cf: 'Factor de corrección (condiciones)',
      cfs: [['1', 'desnudo, aire en calma (1,0)'], ['0.7', 'cuerpo mojado o aire en movimiento (0,7)'], ['1.2', 'ropa ligera (1,2)'], ['1.4', 'vestido, aire en calma (1,4)'], ['1.8', 'ropa de abrigo o manta (1,8)'], ['2.4', 'ropa de cama gruesa (2,4)']],
      ci: 'Intervalo del 95 %: <b>{0} a {1} h</b> (± {2} h según la leyenda del nomograma)',
      hLate: 'Fase tardía del enfriamiento (Q < 0,2): la temperatura corporal está cerca de la ambiental y la precisión cae mucho. La aplicación lo señala y recomienda otros métodos.',
      hImp: 'El cuerpo no puede estar a más de 37,2 °C con estas entradas; la aplicación devuelve una explicación, no un número.',
      hTa: 'La temperatura rectal debe superar la ambiente.',
      hNote: 'Cuerpo estándar de 37,2 °C, modelo biexponencial de enfriamiento. La aplicación añade un asistente del factor de corrección, la regla de Glaister como control y la entrada en el informe.',
      hCite: 'Henssge C. Death time estimation in case work I. The rectal temperature time of death nomogram. <i>Forensic Sci Int.</i> 1988;38(3–4):209–236. · Henssge C, Madea B. Estimation of the time since death in the early post-mortem period. <i>Forensic Sci Int.</i> 2004;144(2–3):167–175.',
      glu: 'Glucosa', lac: 'Lactato', matrix: 'Matriz', vit: 'humor vítreo', csf: 'LCR', tRes: 'Índice de Traub',
      tHyper: 'Hiperglucemia', tHyperT: 'Índice por encima del umbral para {0} (> {1} mg/dl). La aplicación recomienda añadir β-hidroxibutirato y HbA1c.',
      tLow: 'Índice bajo, no diagnóstico', tLowT: 'Una suma inferior a 160 mg/dl no demuestra hipoglucemia: la glucosa baja tras la muerte por glucólisis. La aplicación explica cómo se demuestra la hipoglucemia.',
      tNorm: 'Sin signos de hiperglucemia', tNormT: 'Índice entre {0} y {1} mg/dl para {2}. La aplicación lo muestra junto con la glucosa sola.',
      tNote: 'Índice = glucosa × 18,016 + lactato × 9,008 (mg/dl). Umbrales: vítreo 160 y 410 mg/dl, LCR 160 y 362 mg/dl.',
      tCite: 'Traub F. Methode zur Erkennung von tödlichen Zuckerstoffwechselstörungen an der Leiche (Diabetes mellitus und Hypoglykämie). <i>Zentralbl Allg Pathol.</i> 1969;112(4):390–399. · Karlovsek MZ. Diagnostic values of combined glucose and lactate values in cerebrospinal fluid and vitreous humour - our experiences. <i>Forensic Sci Int.</i> 2004;146 Suppl:S19–S23. · Zilg B. Postmortem analyses of vitreous fluid (PhD thesis). Stockholm: Karolinska Institutet; 2015.',
      cite: 'Fuente del método', foot: 'El cálculo se ejecuta en su navegador; no se envía nada. En la aplicación cada herramienta tiene asistentes, advertencias y entrada en el informe.',
      all: 'Todas', lite: 'Gratis en Lite', pro: 'Pro', count: '{0} de 27 herramientas',
      cats: { thanatology: 'Tanatología', trauma: 'Trauma', toxicology: 'Toxicología', biochem: 'Bioquímica', cardio: 'Cardiopatología', identity: 'Identificación', anthro: 'Antropología', micro: 'Microscopía', tools: 'Herramientas', 'case': 'Caso' }
    },
    pt: {
      kK: 'Potássio (K⁺) no humor vítreo', vRes: 'desde a morte · Madea 1989', vCi: 'Intervalo de 95 %: <b>{0} a {1} h</b> (± 20 h)', vBelow: 'O valor está abaixo da faixa dos métodos lineares: o K⁺ corresponde a um IPM muito curto. O aplicativo não o relata como número.', vNeg: 'abaixo da faixa do método', vMeth: 'Método',
      vNote: 'As regressões lineares valem aproximadamente de 0 a 100 h após a morte. O aplicativo acrescenta o modelo Zilg 2015 com idade e temperatura ambiente, e a hipoxantina como controle.',
      vCite: 'Sturner WQ, Gantner GE. The postmortem interval. A study of potassium in the vitreous humor. <i>Am J Clin Pathol.</i> 1964;42:137–144. · Madea B, Henssge C, Hönig W, Gerbracht A. References for determining the time of death by potassium in vitreous humor. <i>Forensic Sci Int.</i> 1989;40(3):231–243. · James RA, Hoadley PA, Sampson BG. Determination of the postmortem interval by sampling vitreous humour. <i>Am J Forensic Med Pathol.</i> 1997;18(2):158–162.',
      to: 'a',
      tabs: [['Henssge', 'hora da morte pela temperatura'], ['K⁺ no vítreo', 'IPM pelo potássio'], ['Traub', 'glicose + lactato']],
      inputs: 'Entradas', result: 'Resultado', h: 'h', ago: 'desde a morte',
      tr: 'Temperatura retal', ta: 'Temperatura ambiente', mass: 'Massa corporal', cf: 'Fator de correção (condições)',
      cfs: [['1', 'despido, ar parado (1,0)'], ['0.7', 'corpo molhado ou ar em movimento (0,7)'], ['1.2', 'roupa leve (1,2)'], ['1.4', 'vestido, ar parado (1,4)'], ['1.8', 'roupa quente ou cobertor (1,8)'], ['2.4', 'roupa de cama grossa (2,4)']],
      ci: 'Intervalo de 95 %: <b>{0} a {1} h</b> (± {2} h conforme a legenda do nomograma)',
      hLate: 'Fase tardia do resfriamento (Q < 0,2): a temperatura do corpo está próxima da ambiente e a precisão cai muito. O aplicativo sinaliza isso e recomenda outros métodos.',
      hImp: 'O corpo não pode estar acima de 37,2 °C com estas entradas; o aplicativo devolve uma explicação, não um número.',
      hTa: 'A temperatura retal deve ser superior à ambiente.',
      hNote: 'Corpo padrão de 37,2 °C, modelo biexponencial de resfriamento. O aplicativo acrescenta um assistente do fator de correção, a regra de Glaister como controle e o registro no laudo.',
      hCite: 'Henssge C. Death time estimation in case work I. The rectal temperature time of death nomogram. <i>Forensic Sci Int.</i> 1988;38(3–4):209–236. · Henssge C, Madea B. Estimation of the time since death in the early post-mortem period. <i>Forensic Sci Int.</i> 2004;144(2–3):167–175.',
      glu: 'Glicose', lac: 'Lactato', matrix: 'Material', vit: 'humor vítreo', csf: 'líquor', tRes: 'Índice de Traub',
      tHyper: 'Hiperglicemia', tHyperT: 'Índice acima do limiar para {0} (> {1} mg/dl). O aplicativo recomenda acrescentar β-hidroxibutirato e HbA1c.',
      tLow: 'Índice baixo, não diagnóstico', tLowT: 'Uma soma abaixo de 160 mg/dl não prova hipoglicemia: a glicose cai após a morte por glicólise. O aplicativo explica como a hipoglicemia é comprovada.',
      tNorm: 'Sem sinais de hiperglicemia', tNormT: 'Índice entre {0} e {1} mg/dl para {2}. O aplicativo o relata junto com a glicose isolada.',
      tNote: 'Índice = glicose × 18,016 + lactato × 9,008 (mg/dl). Limiares: vítreo 160 e 410 mg/dl, líquor 160 e 362 mg/dl.',
      tCite: 'Traub F. Methode zur Erkennung von tödlichen Zuckerstoffwechselstörungen an der Leiche (Diabetes mellitus und Hypoglykämie). <i>Zentralbl Allg Pathol.</i> 1969;112(4):390–399. · Karlovsek MZ. Diagnostic values of combined glucose and lactate values in cerebrospinal fluid and vitreous humour - our experiences. <i>Forensic Sci Int.</i> 2004;146 Suppl:S19–S23. · Zilg B. Postmortem analyses of vitreous fluid (PhD thesis). Stockholm: Karolinska Institutet; 2015.',
      cite: 'Fonte do método', foot: 'O cálculo roda no seu navegador; nada é enviado. No aplicativo cada ferramenta tem assistentes, ressalvas e registro no laudo.',
      all: 'Todas', lite: 'Grátis no Lite', pro: 'Pro', count: '{0} de 27 ferramentas',
      cats: { thanatology: 'Tanatologia', trauma: 'Trauma', toxicology: 'Toxicologia', biochem: 'Bioquímica', cardio: 'Cardiopatologia', identity: 'Identificação', anthro: 'Antropologia', micro: 'Microscopia', tools: 'Ferramentas', 'case': 'Caso' }
    },
    pl: {
      kK: 'Potas (K⁺) w ciele szklistym', vRes: 'od zgonu · Madea 1989', vCi: 'Przedział 95 %: <b>{0} do {1} h</b> (± 20 h)', vBelow: 'Wartość jest poniżej zakresu metod liniowych: K⁺ odpowiada bardzo krótkiemu PMI. Aplikacja nie podaje jej jako liczby.', vNeg: 'poniżej zakresu metody', vMeth: 'Metoda',
      vNote: 'Regresje liniowe obowiązują mniej więcej od 0 do 100 h po zgonie. Aplikacja dodaje model Zilg 2015 z wiekiem i temperaturą otoczenia oraz hipoksantynę jako kontrolę.',
      vCite: 'Sturner WQ, Gantner GE. The postmortem interval. A study of potassium in the vitreous humor. <i>Am J Clin Pathol.</i> 1964;42:137–144. · Madea B, Henssge C, Hönig W, Gerbracht A. References for determining the time of death by potassium in vitreous humor. <i>Forensic Sci Int.</i> 1989;40(3):231–243. · James RA, Hoadley PA, Sampson BG. Determination of the postmortem interval by sampling vitreous humour. <i>Am J Forensic Med Pathol.</i> 1997;18(2):158–162.',
      to: 'do',
      tabs: [['Henssge', 'czas zgonu z temperatury'], ['K⁺ w ciele szklistym', 'PMI z potasu'], ['Traub', 'glukoza + mleczan']],
      inputs: 'Dane wejściowe', result: 'Wynik', h: 'h', ago: 'od zgonu',
      tr: 'Temperatura w odbytnicy', ta: 'Temperatura otoczenia', mass: 'Masa ciała', cf: 'Współczynnik korekcyjny (warunki)',
      cfs: [['1', 'nagie ciało, nieruchome powietrze (1,0)'], ['0.7', 'mokre ciało lub ruch powietrza (0,7)'], ['1.2', 'lekka odzież (1,2)'], ['1.4', 'ubrane, nieruchome powietrze (1,4)'], ['1.8', 'ciepła odzież lub koc (1,8)'], ['2.4', 'gruba pościel (2,4)']],
      ci: 'Przedział 95 %: <b>{0} do {1} h</b> (± {2} h według legendy nomogramu)',
      hLate: 'Późna faza stygnięcia (Q < 0,2): ciało ma temperaturę bliską otoczeniu, dokładność znacznie spada. Aplikacja to oznacza i zaleca inne metody.',
      hImp: 'Przy tych danych ciało nie może być cieplejsze niż 37,2 °C; aplikacja zwraca wyjaśnienie, a nie liczbę.',
      hTa: 'Temperatura w odbytnicy musi być wyższa od temperatury otoczenia.',
      hNote: 'Ciało standardowe 37,2 °C, dwuwykładniczy model stygnięcia. Aplikacja dodaje asystenta współczynnika korekcyjnego, regułę Glaistera jako kontrolę i wpis do protokołu.',
      hCite: 'Henssge C. Death time estimation in case work I. The rectal temperature time of death nomogram. <i>Forensic Sci Int.</i> 1988;38(3–4):209–236. · Henssge C, Madea B. Estimation of the time since death in the early post-mortem period. <i>Forensic Sci Int.</i> 2004;144(2–3):167–175.',
      glu: 'Glukoza', lac: 'Mleczan', matrix: 'Materiał', vit: 'ciało szkliste', csf: 'PMR', tRes: 'Wskaźnik Trauba',
      tHyper: 'Hiperglikemia', tHyperT: 'Wskaźnik powyżej progu dla: {0} (> {1} mg/dl). Aplikacja zaleca dodać β-hydroksymaślan i HbA1c.',
      tLow: 'Niski wskaźnik, niediagnostyczny', tLowT: 'Suma poniżej 160 mg/dl nie dowodzi hipoglikemii: glukoza po śmierci spada w wyniku glikolizy. Aplikacja wyjaśnia, czym dowodzi się hipoglikemię.',
      tNorm: 'Bez cech hiperglikemii', tNormT: 'Wskaźnik w zakresie {0} do {1} mg/dl dla: {2}. Aplikacja podaje go razem z samą glukozą.',
      tNote: 'Wskaźnik = glukoza × 18,016 + mleczan × 9,008 (mg/dl). Progi: ciało szkliste 160 i 410 mg/dl, PMR 160 i 362 mg/dl.',
      tCite: 'Traub F. Methode zur Erkennung von tödlichen Zuckerstoffwechselstörungen an der Leiche (Diabetes mellitus und Hypoglykämie). <i>Zentralbl Allg Pathol.</i> 1969;112(4):390–399. · Karlovsek MZ. Diagnostic values of combined glucose and lactate values in cerebrospinal fluid and vitreous humour - our experiences. <i>Forensic Sci Int.</i> 2004;146 Suppl:S19–S23. · Zilg B. Postmortem analyses of vitreous fluid (PhD thesis). Stockholm: Karolinska Institutet; 2015.',
      cite: 'Źródło metody', foot: 'Obliczenie działa w Państwa przeglądarce; nic nie jest wysyłane. W aplikacji każde narzędzie ma asystentów, zastrzeżenia i wpis do protokołu.',
      all: 'Wszystkie', lite: 'Za darmo w Lite', pro: 'Pro', count: '{0} z 27 narzędzi',
      cats: { thanatology: 'Tanatologia', trauma: 'Urazy', toxicology: 'Toksykologia', biochem: 'Biochemia', cardio: 'Kardiopatologia', identity: 'Identyfikacja', anthro: 'Antropologia', micro: 'Mikroskopia', tools: 'Narzędzia', 'case': 'Sprawa' }
    }
  };
  var T = S[L] || S.en;
  var dec = L === 'en' ? '.' : ',';
  function num(v, d) { var s = (Math.round(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); return s.replace('.', dec); }
  function fmt(s) { var a = [].slice.call(arguments, 1); return s.replace(/\{(\d)\}/g, function (_, i) { return a[+i]; }); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

    function Bval(f, M) { return -1.2815 * Math.pow(f * M, -0.625) + 0.0284; }
  function Qmod(B, tt, cold) { return cold ? 1.25 * Math.exp(B * tt) - 0.25 * Math.exp(5 * B * tt) : 1.11 * Math.exp(B * tt) - 0.11 * Math.exp(10 * B * tt); }
  function solveT(Q, B, cold) {
    if (Qmod(B, 100, cold) > Q) return null;
    var lo = 0, hi = 100, mid;
    for (var i = 0; i < 200; i++) { mid = (lo + hi) / 2; if (Qmod(B, mid, cold) > Q) lo = mid; else hi = mid; }
    return (lo + hi) / 2;
  }
  function ciHours(f, Q) { var std = (f === 1); if (Q > 0.5) return 2.8; if (Q > 0.3) return std ? 3.2 : 4.5; if (Q > 0.2) return std ? 4.5 : 7.0; return 7.0; }

    function range(id, label, min, max, step, val, unit, d) {
    var w = el('div', 'n6-field');
    w.innerHTML = '<label for="' + id + '"><span>' + label + '</span><output id="' + id + '_o"></output></label>' +
      '<input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '">';
    var inp = w.querySelector('input'), out = w.querySelector('output');
    var show = function () { out.textContent = num(+inp.value, d) + ' ' + unit; };
    inp.addEventListener('input', show); show();
    return w;
  }
  function seg(id, label, opts, val) {
    var w = el('div', 'n6-field');
    w.innerHTML = '<label><span>' + label + '</span></label><div class="n6-seg" id="' + id + '">' +
      opts.map(function (o) { return '<button type="button" data-v="' + o[0] + '" aria-pressed="' + (o[0] === val) + '">' + o[1] + '</button>'; }).join('') + '</div>';
    w.querySelector('.n6-seg').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      w.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      w.dispatchEvent(new CustomEvent('n6change', { bubbles: true }));
    });
    return w;
  }
  function segVal(id) { var b = document.querySelector('#' + id + ' [aria-pressed="true"]'); return b ? b.getAttribute('data-v') : null; }
  function cite(txt) { return '<div class="n6-cite"><span class="lbl">' + T.cite + '</span>' + txt + '</div>'; }
  function band(lo, hi, mid, min, max) {
    var p = function (v) { return Math.max(0, Math.min(100, (v - min) / (max - min) * 100)); };
    return '<div class="n6-band"><i style="left:' + p(lo) + '%;width:' + (p(hi) - p(lo)) + '%"></i><s style="left:' + p(mid) + '%"></s></div>' +
      '<div class="n6-scale"><span>' + num(min, 0) + '</span><span>' + num(max, 0) + '</span></div>';
  }

  var DEMOS = {
    henssge: function (inp, out) {
      inp.appendChild(range('h_tr', T.tr, 15, 37, 0.1, 28.4, '°C', 1));
      inp.appendChild(range('h_ta', T.ta, -5, 35, 0.5, 18, '°C', 1));
      inp.appendChild(range('h_m', T.mass, 30, 160, 1, 75, 'kg', 0));
      var w = el('div', 'n6-field'); w.innerHTML = '<label for="h_cf"><span>' + T.cf + '</span></label><select id="h_cf">' +
        T.cfs.map(function (o) { return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join('') + '</select>';
      inp.appendChild(w);
      return function () {
        var Tr = +document.getElementById('h_tr').value, Ta = +document.getElementById('h_ta').value, M = +document.getElementById('h_m').value, f = +document.getElementById('h_cf').value;
        var html;
        if (Tr <= Ta) html = '<span class="n6-state warn">' + T.hTa + '</span>';
        else if (Tr >= 37.2) html = '<span class="n6-state warn">' + T.hImp + '</span>';
        else {
          var Q = (Tr - Ta) / (37.2 - Ta), cold = Ta <= 23.2, B = Bval(f, M), t = solveT(Q, B, cold);
          if (t == null) html = '<span class="n6-state warn">' + T.hImp + '</span>';
          else {
            var ci = ciHours(f, Q), lo = Math.max(0, t - ci), hi = t + ci;
            html = '<p class="n6-res"><span class="n6-grad">' + num(t, 1) + ' ' + T.h + '</span><small>' + T.ago + '</small></p>' +
              '<p class="n6-ci">' + fmt(T.ci, num(lo, 1), num(hi, 1), num(ci, 1)) + '</p>' + band(lo, hi, t, 0, Math.max(24, Math.ceil(hi / 6) * 6)) +
              (Q < 0.2 ? '<span class="n6-state warn">' + T.hLate + '</span>' : '');
          }
        }
        out.innerHTML = html + '<p class="n6-note">' + T.hNote + '</p>' + cite(T.hCite);
      };
    },
    vitreous: function (inp, out) {
      inp.appendChild(range('v_k', T.kK, 4, 20, 0.1, 9, 'mmol/l', 1));
      return function () {
        var K = +document.getElementById('v_k').value;
        var st = 7.14 * K - 39.1, ma = 5.26 * K - 30.9, ja = 4.32 * K - 18.35;
        var f = function (h) { return h < 0 ? T.vNeg : num(h, 1) + ' ' + T.h; };
        var rows = [['Sturner &amp; Gantner 1964', st], ['Madea et al. 1989 (± 20 h)', ma], ['James et al. 1997', ja]];
        var tbl = '<table class="n6-tbl"><tr><th>' + T.vMeth + '</th><th>' + (L === 'es' || L === 'pt' ? 'IPM' : 'PMI') + '</th></tr>' + rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + f(r[1]) + '</td></tr>'; }).join('') + '</table>';
        var head = ma < 0 ? '<span class="n6-state warn">' + T.vBelow + '</span>' :
          '<p class="n6-res"><span class="n6-grad">' + num(ma, 1) + ' ' + T.h + '</span><small>' + T.vRes + '</small></p>' +
          '<p class="n6-ci">' + fmt(T.vCi, num(Math.max(0, ma - 20), 1), num(ma + 20, 1)) + '</p>' + band(Math.max(0, ma - 20), ma + 20, ma, 0, 100);
        out.innerHTML = head + tbl + '<p class="n6-note">' + T.vNote + '</p>' + cite(T.vCite);
      };
    },
    traub: function (inp, out) {
      inp.appendChild(seg('t_mx', T.matrix, [['vit', T.vit], ['csf', T.csf]], 'vit'));
      inp.appendChild(range('t_g', T.glu, 0, 40, 0.1, 6.2, 'mmol/l', 1));
      inp.appendChild(range('t_l', T.lac, 0, 40, 0.1, 12, 'mmol/l', 1));
      return function () {
        var mx = segVal('t_mx'), g = +document.getElementById('t_g').value, l = +document.getElementById('t_l').value;
        var hyper = mx === 'vit' ? 410 : 362, idx = g * 18.016 + l * 9.008, name = mx === 'vit' ? T.vit : T.csf, st, cls, txt;
        if (idx > hyper) { st = T.tHyper; cls = 'bad'; txt = fmt(T.tHyperT, name, hyper); }
        else if (idx < 160) { st = T.tLow; cls = 'warn'; txt = T.tLowT; }
        else { st = T.tNorm; cls = 'ok'; txt = fmt(T.tNormT, 160, hyper, name); }
        out.innerHTML = '<p class="n6-res"><span class="n6-grad">' + num(idx, 0) + '</span><small>mg/dl · ' + T.tRes + '</small></p>' +
          band(160, hyper, idx, 0, 600) + '<span class="n6-state ' + cls + '">' + st + '</span><p class="n6-note">' + txt + '</p>' +
          '<p class="n6-note">' + T.tNote + '</p>' + cite(T.tCite);
      };
    }
  };

  if (root) {
    var ids = ['henssge', 'vitreous', 'traub'];
    root.innerHTML = '<div class="n6-panel"><div class="n6-tabs" role="tablist">' +
      ids.map(function (id, i) { return '<button class="n6-tab" role="tab" type="button" data-id="' + id + '" aria-selected="' + (i === 0) + '">' + T.tabs[i][0] + '<small>' + T.tabs[i][1] + '</small></button>'; }).join('') +
      '</div><div class="n6-body"><div class="n6-in"><h3>' + T.inputs + '</h3><div id="n6in"></div></div><div class="n6-out"><h3>' + T.result + '</h3><div id="n6out" aria-live="polite"></div></div></div>' +
      '<div class="n6-foot"><span><span class="ok">●</span> ' + T.foot + '</span></div></div>';
    var inBox = document.getElementById('n6in'), outBox = document.getElementById('n6out'), current;
    function mount(id) {
      inBox.innerHTML = ''; outBox.innerHTML = '';
      current = DEMOS[id](inBox, outBox); current();
      root.querySelectorAll('.n6-tab').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-id') === id); });
    }
    inBox.addEventListener('input', function () { current && current(); });
    inBox.addEventListener('change', function () { current && current(); });
    inBox.addEventListener('n6change', function () { current && current(); });
    root.querySelector('.n6-tabs').addEventListener('click', function (e) { var b = e.target.closest('.n6-tab'); if (b) mount(b.getAttribute('data-id')); });
    mount('henssge');
  }

    if (grid) {
    var LITE = { henssge: 1, vitreous: 1, traube: 1, bmi: 1, bsa_heart: 1, aorta: 1, conv: 1 };
    var ORDER = ['case', 'thanatology', 'toxicology', 'biochem', 'cardio', 'trauma', 'identity', 'anthro', 'micro', 'tools'];
    var list = Object.keys(TITLES).map(function (id) { return { id: id, cat: TITLES[id].cat, name: TITLES[id][L] || TITLES[id].en }; });
    list.sort(function (a, b) { return ORDER.indexOf(a.cat) - ORDER.indexOf(b.cat) || a.name.localeCompare(b.name, L); });
    var filt = document.getElementById('n6filter'), countEl = document.getElementById('n6count');
    var chips = [['all', T.all], ['lite', T.lite]].concat(ORDER.filter(function (c) { return list.some(function (x) { return x.cat === c; }); }).map(function (c) { return [c, T.cats[c] || c]; }));
    filt.innerHTML = chips.map(function (c, i) { return '<button type="button" data-f="' + c[0] + '" aria-pressed="' + (i === 0) + '">' + c[1] + '</button>'; }).join('');
    grid.innerHTML = list.map(function (x) {
      return '<div class="n6-tool" data-cat="' + x.cat + '" data-lite="' + (LITE[x.id] ? 1 : 0) + '"><span class="cat">' + (T.cats[x.cat] || x.cat) + '</span><span class="nm">' + x.name + '</span>' +
        '<span class="tag ' + (LITE[x.id] ? 'lite' : 'pro') + '">' + (LITE[x.id] ? T.lite : T.pro) + '</span></div>';
    }).join('');
    function apply(f) {
      var n = 0;
      grid.querySelectorAll('.n6-tool').forEach(function (t, i) {
        var show = f === 'all' || (f === 'lite' ? t.getAttribute('data-lite') === '1' : t.getAttribute('data-cat') === f);
        t.hidden = !show; if (show) { n++; t.style.animationDelay = (n * 25) + 'ms'; }
      });
      countEl.textContent = fmt(T.count, n);
      filt.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-f') === f); });
    }
    filt.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) apply(b.getAttribute('data-f')); });
    apply('all');
  }
})();
