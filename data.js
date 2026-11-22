// Datos de la app. Última actualización: 22 de noviembre de 2026.
// Desde el 24-nov está prohibido publicar encuestas en España (LOREG), así que estas son las últimas.
window.DATA = {
  updated: "22 de noviembre de 2026",
  electionDate: "2026-11-29T09:00:00+01:00",

  // Orden de los partidos: por escaños obtenidos en 2023 (criterio neutral).
  parties: [
    {
      id: "pp", name: "PP", full: "Partido Popular", color: "#1F6FC5", ink: "#fff",
      leader: "Alberto Núñez Feijóo", leaderRole: "Candidato a la Presidencia · cabeza de lista por Madrid",
      bcn: "Xavier García Albiol", motto: "La Reconstrucción Nacional (título del programa)",
      ideology: "Centroderecha · conservador y liberal",
      seats2023: 137, vote2023: 33.1, pollVote: 30.9, pollSeats: 128, range: [98, 139],
      intro: [
        "Fundado en 1989 como refundación de Alianza Popular, es el gran partido de centroderecha de España. Gobernó con Aznar (1996–2004) y Rajoy (2011–2018), hasta que una moción de censura dio el Gobierno a Pedro Sánchez.",
        "Feijóo lo lidera desde 2022, tras presidir Galicia entre 2009 y 2022 con cuatro mayorías absolutas. En 2023 ganó las elecciones con 137 escaños, pero su investidura fracasó por falta de apoyos.",
        "Llega como favorito en casi todas las encuestas. Su programa tiene 249 medidas en 82 páginas, centradas en vivienda, bajada de impuestos, control migratorio y reforma institucional."
      ],
      proposals: [
        ["Un millón de viviendas", "Objetivo de construir un millón de viviendas con una nueva Ley del Suelo y licencias resueltas en tres meses (si la Administración no contesta, se entienden concedidas)."],
        ["Comprar la primera casa siendo joven", "IVA del 4% (ahora 10%) en la primera vivienda para menores de 40 años; 'Hucha Hogar Joven' para ahorrar hasta 2.000 € al año con deducción del 20%; aval público del 20% del valor de la casa."],
        ["Derogar la Ley de Vivienda", "Elimina las zonas tensionadas y los topes al alquiler. A cambio, plan 'Tres años+': ventajas fiscales para inquilinos y para propietarios que renueven tres años con subidas por debajo del IPC. Desalojo de okupas en 48 horas por orden judicial."],
        ["IRPF: menos para jóvenes y salario mínimo", "Quien cobre el salario mínimo no pagaría IRPF. Los jóvenes de 18 a 35 años no pagarían el primer año de trabajo, y después el 25%, 50% y 75% en los tres siguientes. Bajada para rentas medias y bajas."],
        ["Inmigración: control y cupos", "Identificar en 7 días a quien entre de forma irregular y devolverlo rápido si no tiene derecho de asilo. Cupos anuales por sectores solo con países que colaboren en las devoluciones, visado por puntos y una autoridad única de inmigración. Prohibir por ley las regularizaciones masivas."],
        ["Nueva Ley de Nacionalidad", "Exigiría residencia legal continuada, español nivel B2, conocer los valores constitucionales y estar al día con Hacienda y la Seguridad Social. Propone prohibir el burka y el niqab en espacios públicos."],
        ["Recortar la Administración", "Auditoría de todo el gasto público en los 100 primeros días, menos ministerios, altos cargos y asesores, y reducir un 25% las cargas administrativas (35% para pymes) antes de 2029."],
        ["Nucleares: alargar su vida", "Anular el calendario de cierre de Almaraz, Ascó, Vandellós, Cofrentes y Trillo, tramitando su prórroga en los primeros 100 días (con aval del Consejo de Seguridad Nuclear)."],
        ["Justicia e instituciones", "Que los jueces elijan a los 12 vocales judiciales del CGPJ, fiscal general con un único mandato de 5 años, prohibir indultos por corrupción y recuperar los delitos de sedición y referéndum ilegal. Su secretario general ha anunciado que derogarían la amnistía (no figura en el texto del programa)."],
        ["Pensiones y sanidad", "Revalorizar las pensiones cada año con el IPC. Al menos 4.500 médicos de atención primaria más, plan urgente contra las listas de espera y un Plan Nacional de Salud Mental 2027–2037."]
      ],
      pacts: "Su prioridad declarada es gobernar en solitario con apoyo de Vox, pero Feijóo ya no descarta una coalición: «Hacer o no una coalición de Gobierno no depende de mí». Junts ha descartado apoyarle.",
      catalonia: "En Barcelona encabeza la lista Xavier García Albiol, alcalde de Badalona. El PP retira candidatos al Senado en Tarragona y Girona para dejar esas plazas a Vox (estrategia conjunta en 23 provincias).",
      sources: [["Resumen del programa (Política Electoral)", "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/pp"], ["Programa por temas (Tu Papeleta)", "https://tupapeleta.es/programa-electoral/pp/"]]
    },
    {
      id: "psoe", name: "PSOE", full: "Partido Socialista Obrero Español (PSC en Cataluña)", color: "#E30613", ink: "#fff",
      leader: "Pedro Sánchez", leaderRole: "Presidente del Gobierno · candidato a la reelección",
      bcn: "Jordi Hereu (PSC)", motto: "La fuerza de seguir avanzando",
      ideology: "Centroizquierda · socialdemócrata",
      seats2023: 121, vote2023: 31.7, pollVote: 28.2, pollSeats: 112, range: [96, 143],
      intro: [
        "Fundado en 1879, es el partido más antiguo de España. Ha gobernado con González, Zapatero y, desde 2018, con Pedro Sánchez, que llegó al poder con una moción de censura contra Rajoy.",
        "Desde 2023 gobierna en coalición con Sumar, con el apoyo puntual de ERC, Junts, EH Bildu, PNV, BNG y CC. Esa mayoría se rompió: el 2 de octubre de 2026 PP, Vox, Junts y UPN tumbaron sus dos decretos de vivienda, y tres días después Sánchez adelantó las elecciones.",
        "Su programa reúne 500 compromisos en 114 páginas, con la vivienda como gran prioridad. En Cataluña se presenta como PSC."
      ],
      proposals: [
        ["La vivienda, derecho fundamental", "Reformar el artículo 47 de la Constitución para que la vivienda sea un derecho exigible ante los tribunales. Movilizar cada año el 1% del PIB entre todas las administraciones."],
        ["100.000 viviendas públicas estatales", "Crear un parque público de 100.000 viviendas a través de la empresa estatal Casa 47 y rehabilitar otras 550.000."],
        ["Alquiler: contratos más largos", "Alargar los contratos y congelar temporalmente las rentas que superen los índices de referencia en zonas tensionadas. Seguro público de impago para jóvenes inquilinos e impuesto progresivo a las viviendas vacías, turísticas o con alquiler abusivo de fondos y grandes propietarios."],
        ["Más impuestos a rentas altas y grandes empresas", "Tipo máximo del 35% para rentas del capital por encima de 300.000 €, subir la tasa Tobin del 0,2% al 0,4%, gravar megayates, jets privados y billetes en business, y más impuesto de sociedades a cotizadas cuyo primer ejecutivo cobre más de 100 veces el salario mediano."],
        ["Ayudas por hijo", "Prestación por crianza de 200 € al mes y convertir el mínimo por hijo en un crédito fiscal que se cobra aunque no se pague IRPF (unos dos millones de hogares)."],
        ["Jornada de 37,5 horas, luego 35", "Completar la reducción a 37,5 horas semanales sin bajar sueldo y avanzar hacia las 35 mediante negociación colectiva, con registro horario digital. Salario mínimo por encima del 60% del salario medio y exento de IRPF."],
        ["Pensiones blindadas", "Incluir en la Constitución el sistema público y su revalorización con el IPC; mantener la cuota de solidaridad y llevar el Fondo de Reserva a 20.000 millones."],
        ["Sanidad y dentista", "Gasto sanitario público del 7% del PIB para acabar con las listas de espera. 'Plan Sonríe': dentista básico en la pública y, mientras llega, ayuda de hasta 200 € al año. Primera consulta psicológica en un máximo de 30 días."],
        ["Educación y universidad", "Educación de 0 a 3 años universal, primer curso de grado gratis en universidades públicas, becas Erasmus de 1.000 a 1.500 € al mes según renta y más control a las universidades privadas."],
        ["Derechos y Europa", "Aborto en la Constitución, ley abolicionista de la prostitución, voto a los 16 años. Rechaza gastar el 5% del PIB en defensa («aliados, no vasallos») y apuesta por una defensa europea. Mantiene el cierre nuclear hasta 2035 y un 81% de electricidad renovable en 2030."]
      ],
      pacts: "Aspira a reeditar una mayoría progresista con Frente Amplio y sus socios. Problema: Junts dice que podría investir a un presidente socialista, pero no a Sánchez.",
      catalonia: "Se presenta como PSC. En Barcelona encabeza la lista Jordi Hereu, ministro de Industria y exalcalde de Barcelona. Ha pactado con Front Ampli que este retire candidatos al Senado en Girona, Lleida y Tarragona.",
      sources: [["Resumen del programa (Política Electoral)", "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/psoe"], ["Claves del programa (Demócrata)", "https://www.democrata.es/elecciones-generales-espana/todas-claves-programa-psoe-29n-100000-viviendas-ayudas-por-hijo-nuevos-impuestos/"]]
    },
    {
      id: "vox", name: "Vox", full: "Vox", color: "#58AD2E", ink: "#fff",
      leader: "Santiago Abascal", leaderRole: "Candidato a la Presidencia (cuarta vez)",
      bcn: "Juan José Aizcorbe", motto: "Es sentido común",
      ideology: "Derecha nacional-conservadora · muchos medios y politólogos la sitúan en la derecha radical o extrema derecha",
      seats2023: 33, vote2023: 12.4, pollVote: 18.6, pollSeats: 65, range: [47, 80],
      intro: [
        "Fundado en 2013 por exmiembros del PP; Abascal lo preside desde 2014. Entró en el Congreso en 2019 y su mejor resultado fueron 52 escaños (noviembre de 2019). En 2023 bajó a 33.",
        "Ha gobernado en coalición con el PP en varias comunidades autónomas. Las encuestas le dan ahora en torno a 65 escaños, lo que sería su récord y lo haría imprescindible para un gobierno del PP.",
        "Su programa tiene 115 medidas en 13 bloques. Hace campaña sobre tres ejes: «prioridad nacional», «remigración» y desregulación con bajada de impuestos."
      ],
      proposals: [
        ["«Prioridad nacional»", "Que los españoles tengan acceso preferente a la vivienda pública, las ayudas y los servicios, incluido el Ingreso Mínimo Vital. Abascal la pone como una de sus tres condiciones para cualquier pacto de gobierno."],
        ["Inmigración y «remigración»", "No admitir más inmigración, prohibir las regularizaciones masivas, suprimir el arraigo, repatriar a quienes estén en situación irregular y deportar a extranjeros con delitos graves o reiterados. Plan para «facilitar el retorno» de extranjeros que vivan de subsidios."],
        ["Ceuta y Melilla", "Es el primer bloque del programa: militarizar la frontera, expulsar a quienes entraron de forma irregular y planes de inversión para ambas ciudades. Pide sanciones y suspender acuerdos con Marruecos."],
        ["Bajada masiva de impuestos", "Bajar IRPF, IVA e Impuesto de Sociedades (el programa no fija tipos; su plan de 2025 proponía 22.000 € exentos y tipos del 15% y 25%). Gravamen sobre las remesas al extranjero. El coste está en disputa: Vox lo cifra en unos 46.000 M€ y Hacienda en 85.000 M€."],
        ["Vivienda", "Derogar la Ley de Vivienda, IVA del 0% en la primera vivienda nueva y sin impuesto de transmisiones en la usada, vivienda social «masiva» con prioridad nacional, desalojo de okupas en 24 horas y prohibir alquilar a inmigrantes en situación irregular."],
        ["Menos leyes y menos burocracia", "Por cada ley nueva, derogar tres. Derogar la legislación laboral del Gobierno actual. Cuota cero para autónomos que ganen menos del salario mínimo."],
        ["Sanidad", "Tarjeta sanitaria única con historia clínica compartida en toda España y plan contra las listas de espera con colaboración público-privada. Atención a inmigrantes irregulares solo en urgencias graves."],
        ["Educación", "Derogar la LOMLOE, prohibir los móviles en clase, currículo y selectividad únicos, educación en español en toda España y un máximo de alumnos por aula «de otras culturas» o sin dominio del español."],
        ["Leyes de género y seguridad", "Derogar las «leyes de género» y sustituirlas por normas que protejan a todas las víctimas. Bajar la edad de responsabilidad penal, ampliar la prisión permanente revisable, recuperar la sedición e ilegalizar partidos que atenten contra la unidad de España."],
        ["Energía y Bruselas", "Derogar el cierre de las nucleares y estudiar nuevas centrales, bajar los impuestos de la luz, revertir normas del Pacto Verde europeo (fin de los motores de combustión, impuestos al CO₂) y eliminar las zonas de bajas emisiones. Rechaza el acuerdo UE-Mercosur."]
      ],
      pacts: "Dispuesta a facilitar un Gobierno de Feijóo, con condiciones (entre ellas, la «prioridad nacional»). Abascal no ha aclarado si entraría como vicepresidente.",
      catalonia: "En Barcelona encabeza la lista Juan José Aizcorbe; el líder de Vox en Cataluña es Ignacio Garriga. El PP le cede las candidaturas al Senado en Tarragona y Girona.",
      sources: [["Resumen del programa (Política Electoral)", "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/vox"], ["Medidas oficiales (web de Vox)", "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112"]]
    },
    {
      id: "fa", name: "Frente Amplio", full: "Frente Amplio (Front Ampli en Cataluña)", color: "#FF5A36", ink: "#fff", accent: "#C6E33B",
      leader: "Ada Colau", leaderRole: "Candidata a la Presidencia · cabeza de lista por Barcelona",
      bcn: "Ada Colau (nº 2: Ernest Urtasun)", motto: "Un voto como una casa",
      ideology: "Izquierda · ecologista y federalista",
      seats2023: 31, vote2023: 12.3, pollVote: 6.0, pollSeats: 13, range: [7, 25],
      seatsNote: "En 2023 se presentó como Sumar (31 escaños, incluidos 5 de Podemos).",
      intro: [
        "Es la coalición que sustituye a Sumar. La impulsan Movimiento Sumar, Izquierda Unida, Más Madrid y Catalunya en Comú, junto a una decena de partidos territoriales (como Compromís o Chunta Aragonesista). Podemos no está.",
        "Ada Colau fue alcaldesa de Barcelona entre 2015 y 2023 y antes activista por el derecho a la vivienda. Es la primera vez que la candidatura a la Presidencia de este espacio sale de Barcelona. En Madrid encabeza la lista Emilio Delgado.",
        "Todo su discurso gira en torno a la vivienda. Su portavoz de campaña es Pablo Bustinduy."
      ],
      proposals: [
        ["1,5 millones de viviendas públicas", "Invertir el 1% del PIB (unos 17.000 M€ al año) para sumar 1,5 millones de viviendas al parque público en 12 años."],
        ["Alquiler topado e indefinido", "Contratos de alquiler indefinidos y renta máxima del 25% de los ingresos netos medios de los hogares en zonas tensionadas. Prohibir desahucios sin alternativa habitacional."],
        ["Freno a la especulación", "Prohibir las compras especulativas de vivienda por fondos, bancos e inmobiliarias; expropiación progresiva de viviendas de grandes propietarios; fin de las licencias turísticas en zonas tensionadas en 3 años e IVA del 21% a los pisos turísticos."],
        ["Impuestos a grandes fortunas", "Mínimo efectivo del 20% en Sociedades para grandes empresas, 2% sobre fortunas de más de 1 M€ y 3% por encima de 50 M€, impuesto estatal de sucesiones sobre herencias de más de 1 M€ (100% en lo que supere 10 M€) y tasa sobre jets, yates y coches de lujo."],
        ["Semana de 32 horas", "Jornada de 32 horas sin bajar sueldo, salario mínimo al 60% del salario medio neto y pensiones mínimas iguales al salario mínimo."],
        ["200 € por hijo y comedor gratis", "Prestación universal de 200 € al mes por hijo hasta los 18 años, sin requisito de renta. Comedor escolar gratuito en Infantil y Primaria públicas. Permiso de nacimiento de 20 semanas por progenitor."],
        ["Más gasto en servicios públicos", "Al menos el 7% del PIB para educación pública y el 8% para sanidad pública. Dentista (objetivo: 50% de la población), gafas y lentillas gratis y audífonos financiados."],
        ["Fondo energético y transporte barato", "Un Fondo Generacional de Energía con participación pública del 30% en nuevas renovables, cuyos beneficios irían a vivienda y pensiones. Abono de transporte estatal de 20 € al mes (10 € menores de 26, gratis menores de 16)."],
        ["Regularización permanente", "Un procedimiento permanente de regularización de inmigrantes, completar las regularizaciones pendientes, más vías legales y seguras y una ley integral contra el racismo."],
        ["República federal y democracia económica", "Avanzar hacia una república federal y plurinacional, derogar la «ley mordaza», revisar los acuerdos con la Iglesia y dar a los trabajadores un tercio de los consejos de administración (la mitad en empresas de más de 1.000 empleados)."]
      ],
      pacts: "Se presenta como «el motor de la próxima mayoría progresista»: aspira a repetir un Gobierno de coalición con el PSOE.",
      catalonia: "Se presenta como Front Ampli, con Ada Colau de número uno por Barcelona. Ha pactado con el PSC retirar sus candidatos al Senado en Girona, Lleida y Tarragona a cambio de un senador designado.",
      sources: [["Programa explicado (Demócrata)", "https://www.democrata.es/elecciones-generales-espana/frente-amplio-programa-electoral-reforma-fiscal-servicios-publicos-vivienda/"]]
    },
    {
      id: "erc", name: "ERC", full: "Esquerra Republicana de Catalunya", color: "#F5A800", ink: "#15192A",
      leader: "Gabriel Rufián", leaderRole: "Cabeza de lista por Barcelona",
      bcn: "Gabriel Rufián (Oriol Junqueras, nº 31)", motto: "Defender Cataluña, mejorar la vida, reforzar lo público (sus tres ejes)",
      ideology: "Izquierda · independentista catalana",
      seats2023: 7, vote2023: 1.9, pollVote: 2.6, pollSeats: 10, range: null,
      catOnly: true,
      intro: [
        "Fundada en 1931, es uno de los partidos históricos de Cataluña. Su presidente es Oriol Junqueras, que va en el puesto 31 de la lista por Barcelona; el candidato es Gabriel Rufián, su portavoz en el Congreso.",
        "Fue socia del Gobierno de Sánchez en esta legislatura. En enero de 2026 pactó con el Gobierno un nuevo modelo de financiación para Cataluña.",
        "Para estas elecciones ha pactado con Podemos: Podemos no se presenta en Cataluña y pide el voto para ERC, y Rufián hace campaña con Irene Montero en el resto de España."
      ],
      proposals: [
        ["Referéndum pactado", "Su primera propuesta: negociar con el Estado un referéndum de autodeterminación en Cataluña, con la UE y el Consejo de Europa como facilitadores."],
        ["Financiación y deuda", "Aplicar el nuevo modelo de financiación pactado en enero de 2026 (+4.700 M€ al año, según ERC), que la Agència Tributària de Catalunya recaude progresivamente todos los impuestos y completar la condonación de 17.100 M€ de deuda del FLA."],
        ["Rodalies y aeropuertos", "Traspaso completo de Rodalies (R1, R2 Sud, R3, R4 Nord y R16) y de los aeropuertos de Girona, Reus y Sabadell. También la gestión de migración y asilo y de las prestaciones por desempleo."],
        ["Vivienda", "Que Cataluña pueda aprobar su propia ley de alquileres, traspaso gratuito de los pisos de la Sareb a vivienda pública, IVA del 21% al alquiler turístico y al menos el 1,5% del PIB para vivienda."],
        ["Salario mínimo catalán", "Salario mínimo catalán de 1.460 €, el estatal al 60% del salario medio, jornada de 37,5 horas sin bajar sueldo y recuperar 45 días por año en el despido improcedente."],
        ["Familias y pensiones", "Prestación universal por crianza desde 200 € al mes, pensiones actualizadas con el IPC de cada territorio y equiparar las familias monoparentales a las numerosas."],
        ["Impuestos", "Hacer permanentes los impuestos a grandes fortunas, banca y energéticas, subir del 30% al 35% el tipo máximo de las rentas del capital y bajar impuestos a las rentas del trabajo de menos de 35.000 €."],
        ["Sanidad", "Dentista completo en la sanidad pública (empastes, endodoncias, prótesis), atención psicológica universal y gratuita, y gafas y lentillas cubiertas."],
        ["Catalán y educación", "Blindar la inmersión lingüística frente a sentencias que fijan porcentajes de castellano, ley estatal de plurilingüismo, oficialidad del catalán en la UE, educación gratuita de 0 a 3 años y 6% del PIB en educación."],
        ["Derechos y exterior", "Derogar la «ley mordaza» y los delitos de ofensas religiosas e injurias a la Corona, embargo total de armas a Israel y revertir el cambio de posición de 2022 sobre el Sáhara Occidental."]
      ],
      pacts: "Defiende un frente común de izquierdas frente a PP y Vox y apoyaría un Gobierno progresista. Si PP y Vox llegan a la Moncloa, Rufián propone un Gobierno de concentración en Cataluña.",
      catalonia: "Solo se presenta en Cataluña (32 escaños en Barcelona, 6 en Girona, 6 en Tarragona y 4 en Lleida). Cuenta con el apoyo de Podemos, que no presenta listas allí.",
      sources: [["Programa explicado (Demócrata)", "https://www.democrata.es/elecciones-generales-espana/programa-electoral-erc-29n-referendum/"]]
    },
    {
      id: "junts", name: "Junts", full: "Junts per Catalunya", color: "#16B9A8", ink: "#15192A",
      leader: "Míriam Nogueras", leaderRole: "Cabeza de lista por Barcelona · portavoz en el Congreso",
      bcn: "Míriam Nogueras", motto: "Catalunya al centre",
      ideology: "Centroderecha · independentista catalán",
      seats2023: 7, vote2023: 1.6, pollVote: 1.4, pollSeats: 5, range: null,
      catOnly: true,
      intro: [
        "Fundado por Carles Puigdemont, que sigue siendo su presidente. Recoge buena parte del espacio de la antigua Convergència: independentista, con un perfil económico liberal.",
        "En 2023 sus 7 escaños fueron decisivos para investir a Sánchez a cambio de la ley de amnistía. Después rompió con el PSOE, y en octubre de 2026 sus votos, junto a los de PP, Vox y UPN, tumbaron los decretos de vivienda que precipitaron las elecciones.",
        "Su programa (unas 90 páginas, publicado el 18 de noviembre) se resume en su lema: poner Cataluña en el centro de cualquier negociación."
      ],
      proposals: [
        ["Independencia y referéndum", "Su objetivo es la independencia por la vía de la autodeterminación. Cualquier referéndum pactado debería ofrecer «la misma elección» que el 1 de octubre de 2017."],
        ["Concierto económico", "Que la Agència Tributària de Catalunya recaude todos los impuestos (como el País Vasco y Navarra), publicar cada año las balanzas fiscales y condonar el 100% de la deuda del FLA. Nogueras lo pone como requisito para cualquier acuerdo."],
        ["Bajar impuestos", "Eliminar el impuesto de sucesiones y donaciones, deflactar el IRPF cada año y bajar los primeros tramos. IVA del 10% en luz, gas y peluquerías. No propone eliminar el impuesto de patrimonio."],
        ["Vivienda sin topes al alquiler", "Prohibir hasta 2028 que bancos y fondos compren viviendas, recuperar la deducción del 15% en el IRPF por alquiler o hipoteca, IVA de la vivienda nueva del 10% al 5% y desalojo de okupas en 48 horas. Rechaza limitar los precios del alquiler."],
        ["Inmigración gestionada desde Cataluña", "Que la Generalitat gestione permisos de residencia y trabajo, renovaciones y expulsiones. Exigir catalán para el arraigo y las renovaciones, rechazo a las regularizaciones masivas por decreto y prohibición del burka y el niqab (no del hiyab)."],
        ["El catalán, línea roja", "Escuela en catalán como «línea roja», catalán exigible a jueces y fiscales, y oficialidad en la Unión Europea."],
        ["Pensiones con IPC catalán", "Revalorizar las pensiones con el IPC de Cataluña, elevar las mínimas hasta 1.400 € al mes en 14 pagas y pensión completa con 40 años cotizados."],
        ["Sanidad y educación", "8% del PIB para sanidad pública (un 25% para primaria), traspaso de cinco hospitales como Vall d'Hebron y Bellvitge, y 6% del PIB en educación con más financiación para la pública y la concertada."],
        ["Mossos y multirreincidencia", "Que los Mossos sean la policía integral de Cataluña, también en puertos y aeropuertos, y aplicar por completo su ley contra la multirreincidencia (cárcel para hurtos repetidos de menos de 400 €)."],
        ["Energía", "Revisar el calendario de cierre de las nucleares de Ascó y Vandellòs para asegurar el suministro, acelerar solar y eólica y traspasar a la Generalitat la parte catalana de la cuenca del Ebro."]
      ],
      pacts: "No entrará en ningún Gobierno español y nunca votará al bloque PP-Vox. Podría investir a un presidente socialista si cumple sus exigencias, pero no a Sánchez. Su regla: «primero se cumple y después se vota».",
      catalonia: "Solo se presenta en Cataluña. Aliança Catalana no concurre a estas generales; según el Ara, una parte de sus votantes se inclina por Junts y otra por Vox.",
      sources: [["Resumen del programa (Política Electoral)", "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/junts"]]
    },
    {
      id: "podemos", name: "Podemos", full: "Podemos", color: "#6E2C8E", ink: "#fff",
      leader: "Irene Montero", leaderRole: "Candidata a la Presidencia",
      bcn: "No se presenta en Cataluña (pide el voto para ERC)", motto: "Así de básico: paz, casa y trabajo",
      ideology: "Izquierda",
      seats2023: 0, vote2023: null, pollVote: 1.3, pollSeats: 1, range: [0, 2],
      seatsNote: "En 2023 fue dentro de Sumar y obtuvo 5 escaños; luego pasó al Grupo Mixto.",
      noCat: true,
      intro: [
        "Nació en 2014 y llegó a tener 69 escaños en 2015. Gobernó en coalición con el PSOE entre 2020 y 2023, con Irene Montero como ministra de Igualdad. Su secretaria general es Ione Belarra.",
        "En 2023 concurrió dentro de Sumar, pero rompió con ese espacio y no se ha unido a Frente Amplio. Montero ganó sus primarias con el 90,7% de los votos.",
        "Ha pactado con ERC: no se presenta en Cataluña y pide allí el voto para Rufián. Las encuestas le dan entre 0 y 2 escaños."
      ],
      proposals: [
        ["Bajar los alquileres un 40%", "Rebaja del 40% por ley, también en los contratos ya firmados, y contratos indefinidos por defecto."],
        ["Casas para vivir, no para invertir", "Prohibir comprar viviendas que no sean para vivir uno mismo o la familia (con excepciones), expropiar el uso de pisos de grandes propietarios, prohibir progresivamente los pisos turísticos y crear una agencia pública de vivienda."],
        ["Salario mínimo de 1.800 €", "Subir el salario mínimo a 1.800 € al mes en la legislatura y actualizar automáticamente los salarios con el coste de la vida."],
        ["Semana de 30 horas", "Reducir la jornada a 30 horas sin bajar sueldo, empezando por una primera rebaja a 35."],
        ["Jubilación a los 63", "Bajar la edad ordinaria de jubilación a 63 años y quitar penalizaciones por jubilación anticipada con 40 años cotizados."],
        ["Más impuestos a los que más tienen", "Ampliar el impuesto de patrimonio, hacer permanentes los impuestos a banca y energéticas, subir impuestos a grandes empresas y rentas altas y quitar ventajas fiscales a las socimis."],
        ["Empresas públicas", "Nacionalizar Repsol, crear una banca pública, una empresa pública de energía y una red pública de supermercados para intervenir en precios básicos."],
        ["Transporte público gratis", "Bus, metro, tranvía y tren gratis en toda España con una tarjeta única, e intervenir los precios de la luz, el gas y los combustibles."],
        ["Salir de la OTAN", "Sacar a España de la OTAN, cerrar las bases de EE. UU. en Rota y Morón, revertir el aumento del gasto militar y un estatuto de neutralidad."],
        ["Renta básica", "Convertir progresivamente el Ingreso Mínimo Vital en una renta universal incondicional y un cheque energético de 300 € al año para hogares con requisitos de renta."]
      ],
      pacts: "Quiere «someter al PSOE desde su izquierda». Critica a Frente Amplio por su cercanía al PSOE.",
      catalonia: "No presenta listas en Cataluña: por su acuerdo con ERC, pide a sus votantes catalanes que voten a ERC.",
      sources: [["Programa explicado (Demócrata)", "https://www.democrata.es/elecciones-generales-espana/programa-electoral-podemos-29n/"]]
    }
  ],

  // Hemiciclo: de izquierda a derecha. "others" son partidos que no se votan en Cataluña.
  hemicycle: {
    order: ["podemos", "fa", "adelante", "bildu", "bng", "erc", "psoe", "pnv", "junts", "cc", "pp", "upn", "vox"],
    others: {
      adelante: { name: "Adelante Andalucía", color: "#B9A36B" },
      bildu: { name: "EH Bildu", color: "#9DBB3A" },
      bng: { name: "BNG", color: "#8FB8D6" },
      pnv: { name: "PNV", color: "#4E8A5A" },
      cc: { name: "Coalición Canaria", color: "#E8CF5A" },
      upn: { name: "UPN", color: "#5D93CF" }
    },
    polls: { podemos: 1, fa: 13, adelante: 3, bildu: 7, bng: 2, erc: 10, psoe: 112, pnv: 4, junts: 5, cc: 0, pp: 128, upn: 0, vox: 65 },
    r2023: { podemos: 0, fa: 31, adelante: 0, bildu: 6, bng: 1, erc: 7, psoe: 121, pnv: 5, junts: 7, cc: 1, pp: 137, upn: 1, vox: 33 }
  },

  // Última encuesta de cada instituto (≤30 días). Fuente: Mapa Electoral y Demócrata.
  // seats: [PP, PSOE, Vox] (punto medio de la horquilla cuando la hay)
  pollsTable: [
    { who: "Ipsos", media: "La Vanguardia", date: "22 nov", pp: 30.3, psoe: 29.8, vox: 17.9, fa: 5.8, seats: [127, null, 63] },
    { who: "SW Demoscopia", media: "La Séptima", date: "22 nov", pp: 29.7, psoe: 32.5, vox: 15.8, fa: 6.8, seats: [123, 134, 50] },
    { who: "Data10", media: "OKDiario", date: "22 nov", pp: 32.1, psoe: 27.0, vox: null, fa: null, seats: [133, 111, 63] },
    { who: "SocioMétrica", media: "El Español", date: "21 nov", pp: 31.8, psoe: 28.5, vox: 18.8, fa: 5.9, seats: [134, 113, 65] },
    { who: "EM-Analytics", media: "Electomanía", date: "21 nov", pp: 31.0, psoe: 27.9, vox: 18.5, fa: 7.3, seats: [126, 121, 59] },
    { who: "40dB.", media: "El País / SER", date: "21 nov", pp: 31.9, psoe: 31.6, vox: 16.9, fa: 5.3, seats: [132.5, 124.5, 54] },
    { who: "Sigma Dos", media: "El Mundo", date: "21 nov", pp: 31.5, psoe: 28.0, vox: 18.3, fa: 7.1, seats: null },
    { who: "Sondaxe", media: "La Voz de Galicia", date: "21 nov", pp: 29.5, psoe: 27.9, vox: 19.8, fa: 6.8, seats: [125, 110, 70] },
    { who: "More in Common", media: "—", date: "20 nov", pp: 28.9, psoe: 28.0, vox: 19.8, fa: 7.1, seats: null },
    { who: "Public First", media: "Politico", date: "19 nov", pp: 29.5, psoe: 27.2, vox: 19.6, fa: 5.9, seats: null },
    { who: "NC Report", media: "La Razón", date: "16 nov", pp: 32.1, psoe: 26.1, vox: 19.0, fa: 7.6, seats: [138, 103, 67] },
    { who: "Target Point", media: "El Debate", date: "16 nov", pp: 30.6, psoe: 27.0, vox: 18.7, fa: 7.3, seats: [127, 112, 66] },
    { who: "IMOP Insights", media: "El Confidencial", date: "16 nov", pp: 31.5, psoe: 26.9, vox: 19.0, fa: 6.9, seats: [128, 109, 66] },
    { who: "InvyMark", media: "laSexta", date: "16 nov", pp: 32.2, psoe: 28.2, vox: 19.1, fa: 6.4, seats: null },
    { who: "YouGov", media: "Ara", date: "14 nov", pp: 29.6, psoe: 25.9, vox: 20.3, fa: 9.2, seats: [121, 104.5, 72] },
    { who: "Winston", media: "Artículo14", date: "13 nov", pp: 31.1, psoe: 26.4, vox: 18.7, fa: 8.4, seats: [134, 109, 64] },
    { who: "CIS", media: "Organismo público", date: "12 nov", pp: 25.5, psoe: 33.3, vox: 18.4, fa: 6.9, seats: [102, 138.5, 61] },
    { who: "DYM", media: "—", date: "10 nov", pp: 33.1, psoe: 27.3, vox: 18.6, fa: 5.6, seats: [137, 106, 64.5] },
    { who: "GAD3", media: "Vocento", date: "9 nov", pp: 31.9, psoe: 25.9, vox: 18.6, fa: 7.5, seats: [136, 103, 63] },
    { who: "Ateneo del Dato", media: "elDiario.es", date: "8 nov", pp: 31.5, psoe: 28.6, vox: 18.6, fa: 6.1, seats: [128, 112, 65] },
    { who: "Celeste-Tel", media: "Onda Cero", date: "6 nov", pp: 31.4, psoe: 25.7, vox: 19.2, fa: 8.0, seats: [138, 101, 66] },
    { who: "Hamalgama", media: "Vozpópuli", date: "2 nov", pp: 32.0, psoe: 26.4, vox: 19.9, fa: 5.4, seats: [137, 106, 70] }
  ],

  topics: [
    {
      id: "vivienda", name: "Vivienda", icon: "🏠",
      why: "Es la mayor preocupación del país: el 55% la sitúa entre los dos principales problemas (GAD3, noviembre) y fue la caída de los decretos de vivienda lo que precipitó las elecciones.",
      question: "¿Limitar por ley el precio del alquiler?",
      answers: { pp: ["no", "No: deroga los topes"], psoe: ["si", "Sí: congelar rentas abusivas"], vox: ["no", "No: deroga la ley"], fa: ["si", "Sí: máx. 25% de la renta"], erc: ["si", "Sí: con ley catalana propia"], junts: ["no", "No"], podemos: ["si", "Sí: −40%"] },
      stances: {
        pp: "Construir un millón de viviendas con más suelo y licencias en 3 meses. IVA del 4% y aval del 20% para que menores de 40 compren su primera casa. Derogar la Ley de Vivienda y sus topes; incentivos fiscales para alquileres estables.",
        psoe: "Vivienda como derecho fundamental en la Constitución, 1% del PIB al año y 100.000 viviendas públicas estatales. Contratos más largos y congelar rentas que superen el índice en zonas tensionadas. Impuesto a pisos vacíos o turísticos de fondos y grandes propietarios.",
        vox: "Derogar la Ley de Vivienda, IVA 0% en la primera vivienda nueva y vivienda social con «prioridad nacional» para españoles. Desalojo de okupas en 24 horas y prohibir alquilar a inmigrantes irregulares.",
        fa: "1,5 millones de viviendas públicas en 12 años. Alquiler indefinido con renta máxima del 25% de los ingresos medios en zonas tensionadas. Prohibir compras especulativas y fin de licencias turísticas en zonas tensionadas.",
        erc: "Ley catalana de alquileres propia, pisos de la Sareb a vivienda pública, IVA del 21% al alquiler turístico y al menos el 1,5% del PIB para vivienda.",
        junts: "Prohibir hasta 2028 que bancos y fondos compren viviendas, deducción del 15% por alquiler o hipoteca e IVA de vivienda nueva al 5%. Desalojo de okupas en 48 horas. Rechaza topar alquileres.",
        podemos: "Bajar por ley los alquileres un 40%, también los firmados. Prohibir comprar casas que no sean para vivir, expropiar el uso de pisos de grandes propietarios y eliminar progresivamente los pisos turísticos."
      }
    },
    {
      id: "impuestos", name: "Impuestos", icon: "💶",
      why: "Es la línea que más separa a los dos bloques: unos priorizan bajar impuestos para estimular la economía, otros subirlos a rentas altas y grandes empresas para financiar servicios.",
      question: "¿Bajada general de impuestos?",
      answers: { pp: ["si", "Sí: IRPF y jóvenes"], psoe: ["mix", "Baja a rentas bajas, sube a altas"], vox: ["si", "Sí: «bajada masiva»"], fa: ["no", "No: sube a fortunas"], erc: ["mix", "Baja trabajo, sube capital"], junts: ["si", "Sí: fuera sucesiones"], podemos: ["no", "No: sube a los ricos"] },
      stances: {
        pp: "Salario mínimo sin IRPF; jóvenes de 18 a 35 años exentos el primer año de trabajo; bajada del IRPF a rentas medias y bajas; deducción familiar mensual. Se opone al impuesto de patrimonio estatal.",
        psoe: "Salario mínimo exento de IRPF y crédito fiscal por hijo. Sube a las rentas del capital (hasta el 35% por encima de 300.000 €), tasa Tobin al 0,4%, impuestos a jets, megayates y grandes tecnológicas.",
        vox: "Bajada «masiva» de IRPF, IVA y Sociedades, impuestos de la luz más bajos y un gravamen sobre las remesas que envían los inmigrantes. El coste está en disputa (46.000–85.000 M€).",
        fa: "Sociedades mínimo del 20% para grandes empresas, 2% a fortunas de más de 1 M€ y 3% de más de 50 M€, sucesiones estatales para herencias de más de 1 M€. Baja el IVA de productos básicos.",
        erc: "Baja a rentas del trabajo de menos de 35.000 €; sube las del capital del 30% al 35% y hace permanentes los impuestos a fortunas, banca y energéticas. Quiere que Cataluña recaude sus impuestos.",
        junts: "Eliminar sucesiones y donaciones, deflactar el IRPF y bajar sus primeros tramos, IVA del 10% en luz, gas y peluquerías. Concierto económico: Cataluña recaudaría todos sus impuestos.",
        podemos: "Ampliar el impuesto de patrimonio, impuestos permanentes a banca y energéticas, más impuestos a grandes empresas y rentas altas y fin de ventajas fiscales a las socimis."
      }
    },
    {
      id: "inmigracion", name: "Inmigración", icon: "🛂",
      why: "La crisis de Ceuta del 30 de julio, con la entrada de decenas de miles de personas desde Marruecos, convirtió la inmigración en uno de los ejes de la campaña.",
      question: "¿Nueva regularización de inmigrantes?",
      answers: { pp: ["no", "No: prohibir las masivas"], psoe: ["no", "No la plantea"], vox: ["no", "No: y «remigración»"], fa: ["si", "Sí: permanente"], erc: ["nd", "Pide la competencia"], junts: ["no", "No por decreto"], podemos: ["nd", "Sin dato en el resumen"] },
      stances: {
        pp: "Identificar en 7 días a quien entre irregularmente y devolverlo rápido; cupos por sectores con países que colaboren; autoridad única; nueva Ley de Nacionalidad con español B2. Prohibir burka y niqab.",
        psoe: "Migración «ordenada, legal y segura»: contratación en origen, plan de integración de 500 M€, más vías legales de asilo y protección reforzada para menores solos. No plantea nueva regularización.",
        vox: "No admitir más inmigración, suprimir el arraigo, repatriar a los irregulares, «remigración» de quienes vivan de subsidios y «prioridad nacional» en ayudas. Militarizar la frontera de Ceuta y Melilla.",
        fa: "Procedimiento permanente de regularización, más vías legales y seguras de migración y asilo y una ley integral contra el racismo.",
        erc: "Que Cataluña gestione la migración y el asilo. Su resumen de programa apenas detalla más medidas.",
        junts: "Competencias completas para la Generalitat (permisos y expulsiones), catalán obligatorio para el arraigo y las renovaciones, rechazo a regularizaciones masivas por decreto y prohibición de burka y niqab.",
        podemos: "Los resúmenes publicados de su programa no detallan sus propuestas sobre inmigración."
      }
    },
    {
      id: "trabajo", name: "Trabajo y pensiones", icon: "⏱️",
      why: "La reducción de jornada a 37,5 horas no salió adelante en esta legislatura, y salarios y pensiones son claves frente al coste de la vida.",
      question: "¿Reducir la jornada laboral por ley?",
      answers: { pp: ["no", "No: votó en contra"], psoe: ["si", "37,5 h → 35 h"], vox: ["no", "No: votó en contra"], fa: ["si", "32 horas"], erc: ["si", "37,5 horas"], junts: ["no", "No: votó en contra"], podemos: ["si", "30 horas"] },
      stances: {
        pp: "Se opuso a la jornada de 37,5 horas (votó en contra en 2025). Propone rebajas de cotizaciones para nuevos autónomos y empresas con plantillas estables. Pensiones revalorizadas con el IPC.",
        psoe: "37,5 horas sin bajar sueldo y después 35 por negociación colectiva; salario mínimo por encima del 60% del salario medio; pensiones con IPC blindadas en la Constitución.",
        vox: "Derogar la reforma laboral del Gobierno y eliminar el registro horario obligatorio. Cuota cero para autónomos bajo el salario mínimo. Pensiones sostenidas con más empleo y natalidad, sin cifras.",
        fa: "Semana de 32 horas sin bajar sueldo, salario mínimo al 60% del salario medio neto y pensiones mínimas iguales al salario mínimo.",
        erc: "37,5 horas, salario mínimo catalán de 1.460 €, despido improcedente de 45 días por año y pensiones con el IPC de cada territorio.",
        junts: "Votó contra la ley de 37,5 horas en 2025. Propone horas extra voluntarias con mejor trato fiscal, un salario mínimo catalán y pensiones con el IPC catalán (mínimas hasta 1.400 €).",
        podemos: "Semana de 30 horas (primero 35), salario mínimo de 1.800 € y jubilación ordinaria a los 63 años."
      }
    },
    {
      id: "territorio", name: "Cataluña y territorio", icon: "🗺️",
      why: "Cataluña elige 48 de los 350 diputados y sus partidos han sido decisivos para formar Gobierno. La amnistía, la financiación y un posible referéndum siguen en el centro del debate.",
      question: "¿Referéndum de autodeterminación en Cataluña?",
      answers: { pp: ["no", "No"], psoe: ["no", "No"], vox: ["no", "No"], fa: ["nd", "Federalismo plurinacional"], erc: ["si", "Sí, pactado"], junts: ["si", "Sí"], podemos: ["nd", "República plurinacional"] },
      stances: {
        pp: "Ningún régimen especial de financiación para una comunidad; modelo multilateral. Recuperar los delitos de sedición y referéndum ilegal; ha anunciado que derogaría la amnistía.",
        psoe: "Nuevo modelo de financiación autonómica con unos 21.000 M€ adicionales y asumir parte de la deuda autonómica (83.000 M€). Reformar el Senado como cámara territorial.",
        vox: "Recuperar la sedición, prohibir indultos por delitos contra la unidad territorial e ilegalizar partidos que atenten contra ella. Ley de Unidad de Mercado.",
        fa: "Reforma de la financiación con condonación de deuda y fin del «dumping fiscal» entre comunidades. Avanzar hacia una república federal y plurinacional.",
        erc: "Negociar un referéndum de autodeterminación, aplicar la financiación pactada en enero de 2026 y que Cataluña recaude sus impuestos. Traspaso de Rodalies y aeropuertos.",
        junts: "Independencia por la vía de la autodeterminación. Concierto económico como el vasco, condonación total del FLA y competencias en inmigración, Seguridad Social y puertos.",
        podemos: "Su programa incluye un capítulo titulado «España, república plurinacional»; el resumen publicado no detalla sus medidas."
      }
    },
    {
      id: "servicios", name: "Sanidad y educación", icon: "🩺",
      why: "La sanidad es el tercer problema que más afecta personalmente a los españoles (CIS de julio). Las listas de espera y el dentista público están en casi todos los programas.",
      question: "Su medida estrella",
      answers: { pp: ["txt", "+4.500 médicos de familia"], psoe: ["txt", "Dentista público"], vox: ["txt", "Tarjeta sanitaria única"], fa: ["txt", "8% del PIB a sanidad"], erc: ["txt", "Dentista completo"], junts: ["txt", "8% del PIB a sanidad"], podemos: ["txt", "Servicios públicos gratis"] },
      stances: {
        pp: "Al menos 4.500 médicos de atención primaria más, plan urgente de listas de espera y de salud mental. Sustituir la LOMLOE, prohibir redes sociales a menores de 14 y escuelas 0–3 gratuitas.",
        psoe: "7% del PIB en sanidad pública, dentista básico público (y ayuda de 200 €/año mientras llega) y psicólogo en 30 días. Educación 0–3 universal y primer año de universidad pública gratis.",
        vox: "Tarjeta sanitaria única y plan contra listas de espera con colaboración privada; inmigrantes irregulares solo en urgencias graves. Derogar la LOMLOE, móviles fuera de clase y selectividad única.",
        fa: "8% del PIB para sanidad y 7% para educación públicas, dentista, gafas y audífonos, comedor escolar gratuito en Infantil y Primaria.",
        erc: "Dentista completo, salud mental gratuita y gafas cubiertas en la pública. 6% del PIB en educación y 0–3 gratis. Blindar la inmersión en catalán.",
        junts: "8% del PIB en sanidad (25% a primaria) y traspaso de cinco grandes hospitales. 6% del PIB en educación, más fondos para pública y concertada; escuela en catalán como línea roja.",
        podemos: "Su programa dedica un capítulo a servicios públicos; los resúmenes publicados destacan sobre todo el transporte público gratuito y la renta básica."
      }
    },
    {
      id: "energia", name: "Energía y clima", icon: "⚡",
      why: "Está en juego el calendario de cierre de las centrales nucleares (2027–2035) y el ritmo de la transición verde, con impacto en el precio de la luz.",
      question: "¿Alargar la vida de las nucleares?",
      answers: { pp: ["si", "Sí, las cinco"], psoe: ["no", "No: cierre hasta 2035"], vox: ["si", "Sí, y nuevas"], fa: ["nd", "Sin dato en el resumen"], erc: ["nd", "Sin dato en el resumen"], junts: ["si", "Revisar Ascó y Vandellòs"], podemos: ["nd", "Sin dato en el resumen"] },
      stances: {
        pp: "Prorrogar Almaraz, Ascó, Vandellós, Cofrentes y Trillo en 100 días. Suprimir el impuesto a la generación eléctrica. Descarbonizar, pero a un ritmo adaptado a cada sector.",
        psoe: "81% de electricidad renovable en 2030, mantener el cierre nuclear hasta 2035 y una ley de adaptación al cambio climático.",
        vox: "Derogar el cierre nuclear y estudiar nuevas centrales, bajar impuestos de la luz, revertir el Pacto Verde europeo (motores de combustión, impuestos al CO₂) y eliminar las zonas de bajas emisiones.",
        fa: "Fondo Generacional de Energía con participación pública en renovables, placas solares obligatorias en comunidades donde sea viable, reforma del mercado eléctrico y abono de transporte de 20 €/mes.",
        erc: "Hacer permanente el impuesto a las energéticas. Su resumen de programa apenas detalla más medidas energéticas.",
        junts: "Revisar el cierre de Ascó y Vandellòs si las renovables no bastan, acelerar solar y eólica y ampliar el autoconsumo compartido de 5 a 100 km.",
        podemos: "Empresa pública de energía, intervenir los precios de luz, gas y combustibles, nacionalizar Repsol y transporte público gratuito."
      }
    }
  ]
};
