// Sección "Discapacidad" (pestaña Temas). Actualizado: 23 de noviembre de 2026.
// "ley": lo que ya está vigente (BOE, Ministerio, INE, IMSERSO).
// "prop": propuestas de los partidos. Fuente principal: programas oficiales de PSOE y PP;
// para Vox, Frente Amplio y Podemos (sin programa completo publicado o no accesible), resúmenes
// de prensa especializada de sus documentos. ERC y Junts: no se han localizado medidas específicas.
window.DISCAPACIDAD = {
  intro: [
    "En España hay 4,38 millones de personas con discapacidad, casi 1 de cada 10 habitantes (INE, encuesta EDAD 2020).",
    "Es un tema con poca presencia en la campaña y que los partidos tratan de forma desigual. Aquí separamos lo que ya es ley de lo que propone cada partido, en los nueve ámbitos que más preguntan las familias y entidades."
  ],
  stats: [
    ["4,38 M", "personas con discapacidad", "INE, EDAD 2020"],
    ["28,9%", "tasa de empleo de las personas con discapacidad (69,7% sin discapacidad)", "INE, 2024"],
    ["134.734", "personas en lista de espera de la dependencia; Cataluña es la 2ª comunidad con más espera en proporción", "Ministerio de Derechos Sociales, septiembre 2026"]
  ],
  reform: {
    title: "Lo que ya ha cambiado: la Ley 4/2026",
    text: "Reforma las leyes de discapacidad y de dependencia. Se publicó en el BOE el 3 de octubre y está en vigor desde el 23 de octubre de 2026, así que se aplicará gobierne quien gobierne, salvo que se cambie.",
    points: [
      "El plazo para resolver la dependencia baja de 6 a 3 meses.",
      "La asistencia personal entra en el catálogo de servicios, para cualquier grado y edad, y ya no solo para estudiar o trabajar.",
      "La teleasistencia pasa a ser un derecho de toda persona con dependencia reconocida.",
      "Tener un grado I de dependencia equivale a un 33% de discapacidad; los grados II y III, a un 65% (no a efectos fiscales).",
      "La accesibilidad universal pasa a ser un derecho reclamable, y la atención temprana (0 a 6 años), un derecho subjetivo.",
      "El Estado paga las cotizaciones de las personas cuidadoras principales y asume el 50% de la inversión en dependencia."
    ]
  },
  areas: [
    {
      id: "educacion", name: "Educación",
      what: "Educación inclusiva, apoyos, formación profesional y transición a la vida adulta.",
      ley: [
        "La ley reconoce el derecho a una educación inclusiva, universalmente accesible, de calidad y gratuita (Ley 4/2026, art. 18).",
        "La atención temprana es un derecho subjetivo para niños y niñas de 0 a 6 años con trastornos del desarrollo o riesgo de tenerlos."
      ],
      prop: [
        ["psoe", "Plan Estratégico de Educación Inclusiva 2026-2031 con recursos para alumnado con TEA y necesidades especiales, y refuerzo de los centros de educación especial. El alumnado con necesidades especiales contaría doble en las ratios. Un orientador por cada 250 alumnos y más becas por discapacidad."],
        ["pp", "No cerrar los centros de educación especial, que «seguirán escolarizando a quienes los necesiten», y que las familias decidan de verdad la escolarización. Detección temprana de dificultades de lectura y cálculo."],
        ["iu", "Izquierda Unida, dentro de Frente Amplio, propone ratios máximas en aulas de educación especial (3 alumnos en las de autismo, 5 en programas de transición a la vida adulta), especialistas de Pedagogía Terapéutica y Audición y Lenguaje en cada centro y medidas de acceso a la universidad."]
      ],
      none: "Vox, Podemos, ERC y Junts: no se han localizado medidas específicas. Ningún programa consultado detalla medidas de formación profesional adaptada.",
      src: "Programa PSOE (compromisos 158, 161, 162 y 224); programa PP (medidas 209 y 213); programa IU 29N, bloque 2; BOE Ley 4/2026; Ministerio de Derechos Sociales."
    },
    {
      id: "empleo", name: "Empleo",
      what: "Acceso al trabajo, empleo con apoyo y centros especiales de empleo.",
      ley: [
        "Las empresas de 50 o más trabajadores deben reservar el 2% de la plantilla a personas con discapacidad.",
        "En el empleo público se reserva el 7% de las plazas, de las que el 2% son para personas con discapacidad intelectual."
      ],
      prop: [
        ["psoe", "Que se cumpla de verdad la cuota del 2% en empresas y sector público, con más inspección y control."],
        ["pp", "Hacer compatibles las pensiones de discapacidad con el empleo, más apoyo para adaptar puestos de trabajo y para el empleo con apoyo, y jubilación anticipada para personas con síndrome de Down."],
        ["iu", "Impulsar el empleo con apoyo en el sector privado, incentivos a la contratación y apoyo a empresas de inserción."],
        ["sector", "El CERMI pide extender la reserva de empleo a las empresas de 25 a 49 trabajadores."]
      ],
      none: "Vox, Podemos, ERC y Junts: no se han localizado medidas específicas. Ningún programa consultado detalla cambios en los centros especiales de empleo.",
      src: "Ministerio de Derechos Sociales; INE (Empleo de las personas con discapacidad, 2024); programa PSOE (compromisos 124 y 227); programa PP (medida 112); programa IU; El Boletín (demandas del CERMI)."
    },
    {
      id: "vida", name: "Vida independiente",
      what: "Vivienda, asistencia personal, autonomía y apoyos.",
      ley: [
        "La asistencia personal ya es un servicio del catálogo de la dependencia, para cualquier grado y edad, y las comunidades deben garantizarla.",
        "La ayuda a domicilio puede prestarse también fuera de casa, por ejemplo para ir al médico o a la compra."
      ],
      prop: [
        ["psoe", "Un marco de apoyos para la vida independiente: asistencia personal, vivienda accesible y servicios comunitarios. Más asistencia personal, centros de día y respiro familiar. Ayudas para ascensores y quitar barreras en casa."],
        ["pp", "Asistencia personal y viviendas con apoyos, con continuidad de los apoyos a lo largo de toda la vida."],
        ["fa", "Asistencia personal y viviendas con apoyos como alternativa a las residencias. Doblar las horas de ayuda a domicilio, con fines de semana en los casos de gran dependencia."],
        ["vox", "Más plazas residenciales y más ayudas para la atención en casa."],
        ["podemos", "Que todas las residencias pasen a gestión pública directa."]
      ],
      none: "ERC y Junts: no se han localizado medidas específicas.",
      src: "BOE Ley 4/2026 y Ministerio de Derechos Sociales; programa PSOE (compromisos 208, 214 y 221); programa PP (medida 112); 65ymas y Balance Sociosanitario (Frente Amplio, Vox, Podemos)."
    },
    {
      id: "accesibilidad", name: "Accesibilidad universal",
      what: "Cognitiva, comunicativa, sensorial, física y digital.",
      ley: [
        "La accesibilidad pasa a ser un derecho reclamable en servicios y edificios públicos, con un Programa Estatal de Promoción de la Accesibilidad Universal.",
        "En edificios de viviendas, las administraciones deben ayudar a pagar las obras de accesibilidad, y la comunidad debe pedir esas ayudas si un vecino lo solicita.",
        "Un nuevo reglamento de accesibilidad cognitiva (lectura fácil, pictogramas, señalización comprensible) entra en vigor el 2 de enero de 2027."
      ],
      prop: [
        ["psoe", "Más inspección y financiación estable para el Programa Estatal de Accesibilidad. Calles más accesibles y la figura del facilitador procesal en los juicios."],
        ["pp", "Garantizar la accesibilidad universal (sin detallar medidas)."],
        ["vox", "Acabar con las barreras arquitectónicas que limitan la movilidad."],
        ["iu", "Una norma de accesibilidad que vaya más allá de lo arquitectónico, con sanciones, y webs públicas accesibles."]
      ],
      none: "Podemos, ERC y Junts: no se han localizado medidas específicas.",
      src: "Ministerio de Derechos Sociales; BOE Ley 4/2026 y Real Decreto 707/2026; programa PSOE (compromisos 211, 222, 223 y 283); programa PP (medida 112); Balance Sociosanitario (Vox); programa IU."
    },
    {
      id: "derechos", name: "Derechos sociales",
      what: "Dependencia, prestaciones, pensiones y servicios sociales.",
      ley: [
        "La dependencia debe resolverse en 3 meses. Aun así, el tiempo medio de tramitación era de 293 días en septiembre de 2026.",
        "Grado I de dependencia = 33% de discapacidad; grados II y III = 65%."
      ],
      prop: [
        ["psoe", "La primera Ley estatal de Servicios Sociales, con una cartera común en todas las comunidades. Aplicar la Ley 4/2026 con financiación plurianual para bajar las listas de espera. Revisar el baremo de discapacidad (Real Decreto 888/2022)."],
        ["pp", "Un Pacto de Estado por la Dependencia, con el Estado pagando el 50% del coste. Que las prestaciones no se pierdan al cambiar de comunidad, atención presencial y un IMSERSO modernizado."],
        ["vox", "Más presupuesto para la dependencia (sin cifra), simplificar el reconocimiento del grado y más deducciones fiscales por discapacidad. Aplica la «prioridad nacional» a ayudas y servicios sociales."],
        ["fa", "Subir el gasto en dependencia del 0,8% al 1,7% del PIB en 2030 y eliminar los copagos."],
        ["podemos", "Una Ley de Calidad del Sistema Estatal de Cuidados con ratios mínimas de personal."],
        ["erc", "Más financiación del Estado para la dependencia."]
      ],
      none: "Junts: no se han localizado medidas específicas.",
      src: "Ministerio de Derechos Sociales (Panel del SAAD, 19 de octubre de 2026); programa PSOE (compromisos 202, 205 y 226); programa PP (medidas 93, 110 y 114); 65ymas, Redacción Médica, Balance Sociosanitario y El Boletín."
    },
    {
      id: "salud", name: "Salud",
      what: "Salud mental, diagnóstico, acompañamiento y atención especializada.",
      ley: [
        "La atención temprana (0 a 6 años) es un derecho subjetivo que no depende de que haya plazas o presupuesto."
      ],
      prop: [
        ["psoe", "Atención psicológica gratuita en la pública, con la primera consulta en 30 días y más salud mental infantil y juvenil. Atención temprana en los primeros 1.000 días. Diagnóstico temprano de enfermedades raras. Personas con ELA en grado III+ sin copagos y con atención continuada en casa."],
        ["pp", "Plan Nacional de Salud Mental 2027-2037 con financiación garantizada, un fondo estatal para enfermedades raras y deducción en el IRPF para familias con un enfermo de ELA, cáncer u otra enfermedad grave."],
        ["fa", "Dedicar al menos el 8% del PIB a sanidad e incluir la salud bucodental, visual, auditiva y mental. IU propone además eliminar las sujeciones mecánicas en salud mental («Cero Contenciones»)."],
        ["erc", "Dentista completo, atención psicológica gratuita y gafas y lentillas en la sanidad pública."],
        ["junts", "8% del PIB para sanidad pública, con un 25% para atención primaria."]
      ],
      none: "Vox y Podemos: no se han localizado medidas específicas de salud vinculadas a la discapacidad.",
      src: "Programa PSOE (compromisos 143, 153, 196 y 209); programa PP (medidas 223 a 225); Autismo España (Frente Amplio); programa IU; Demócrata (ERC); Política Electoral (Junts); Ministerio de Derechos Sociales."
    },
    {
      id: "familia", name: "Familia y cuidados",
      what: "Apoyo a las familias y a las personas cuidadoras.",
      ley: [
        "El Estado paga por ley las cotizaciones de las personas cuidadoras principales, que pueden ser también personas no familiares del entorno.",
        "Se garantiza que los cuidados continúen si la persona cuidadora enferma o es hospitalizada."
      ],
      prop: [
        ["psoe", "Equiparar al salario mínimo lo que cobran las cuidadoras principales y mejorar su protección social."],
        ["pp", "Deducción del 40% de lo que se pague por la atención profesional de un mayor dependiente. El Estado cotizaría por quien deje de trabajar o reduzca jornada para cuidar a un familiar."],
        ["vox", "Más apoyo a los cuidadores familiares y cotizaciones a la Seguridad Social para los padres que cuidan de sus hijos."],
        ["fa", "Al menos un mes de respiro al año para las familias cuidadoras, un Pacto de Estado por los Cuidados y 200 € al mes por hijo."],
        ["podemos", "Pagar a las cuidadoras familiares según el grado: el 100% del salario mínimo en el grado III, el 70% en el II y el 40% en el I."]
      ],
      none: "ERC y Junts: no se han localizado medidas específicas.",
      src: "Ministerio de Derechos Sociales; programa PSOE (compromisos 207 y 322); programa PP (medida 114); 65ymas, Redacción Médica y Balance Sociosanitario."
    },
    {
      id: "participacion", name: "Participación ciudadana",
      what: "Derecho a voto, participación política, cultura, ocio y deporte.",
      ley: [
        "Desde 2018 todas las personas con discapacidad pueden votar: unas 100.000 personas recuperaron ese derecho.",
        "Los colegios electorales deben ser accesibles, y los miembros de mesa sordos tienen derecho a un intérprete de lengua de signos gratuito.",
        "A partir de 2027 se podrá ir a votar con una persona de apoyo por dificultades cognitivas, habrá una guía de votación fácil y los partidos deberán publicar su programa en lenguaje sencillo. No se aplica todavía el 29N."
      ],
      prop: [
        ["iu", "Garantizar el voto autónomo y secreto de las personas con discapacidad y adaptar centros, espacios y eventos culturales y de ocio."],
        ["psoe", "Que las organizaciones de personas con discapacidad y sus familias participen en el diseño y la evaluación de las políticas."],
        ["pp", "Participación de las organizaciones de pacientes en la política sanitaria."],
        ["sector", "El CERMI pide a los partidos campañas plenamente accesibles, y Plena Inclusión alerta de una menor sensibilización de los partidos en esta campaña."]
      ],
      none: "Vox, Podemos, ERC y Junts: no se han localizado medidas específicas.",
      src: "BOE Ley Orgánica 2/2018; Real Decreto 422/2011; Real Decreto 707/2026; programa IU; programa PSOE (compromiso 225); programa PP (medida 221); Servimedia y Diario Siglo XXI."
    },
    {
      id: "igualdad", name: "Igualdad y no discriminación",
      what: "Discriminación, abusos, violencia y protección de derechos.",
      ley: [
        "Desde 2024 la Constitución (art. 49) habla de «personas con discapacidad» y pide atender las necesidades específicas de mujeres y menores con discapacidad.",
        "Desde la Ley 4/2026 es ilegal cobrar más por un seguro de hogar o de salud por tener discapacidad, y en los juicios existe la figura del facilitador procesal."
      ],
      prop: [
        ["psoe", "Atención especializada a víctimas de violencia de género con discapacidad, y salud sexual y reproductiva con atención específica a mujeres con discapacidad."],
        ["pp", "Combatir la discriminación por discapacidad, quitar barreras para estudiar, trabajar y participar en la vida pública, y un plan contra la soledad no deseada que incluye a personas con discapacidad."],
        ["iu", "Control público y transparente de las entidades tuteladas por el Estado."]
      ],
      none: "Vox, Podemos, ERC y Junts: no se han localizado medidas específicas.",
      src: "BOE (reforma del art. 49, 17 de febrero de 2024); Ministerio de Derechos Sociales; programa PSOE (compromisos 328 y 341); programa PP (medidas 111 y 113); programa IU."
    }
  ],
  vote: {
    title: "Votar con discapacidad el 29N",
    points: [
      ["Todo el mundo puede votar", "Ninguna discapacidad quita el derecho a voto. La mesa debe admitir el voto de cualquier persona inscrita en el censo."],
      ["Puedes ir acompañado", "Si una discapacidad te impide elegir la papeleta, meterla en el sobre o entregarla, puedes hacerlo con una persona de tu confianza. También puedes valerte de alguien o de algún medio para entregar los sobres."],
      ["Voto en braille", "El kit de voto accesible para personas ciegas se pedía del 6 de octubre al 2 de noviembre en el 900 150 000. Quien lo pidió lo tendrá en su mesa el domingo."],
      ["Colegios accesibles", "Los locales de votación deben ser accesibles. Si encuentras una barrera, díselo a la mesa: las Juntas Electorales de Zona deben velar por que se cumplan estas garantías."]
    ]
  },
  sources: [
    ["BOE: Ley 4/2026 (reforma de discapacidad y dependencia)", "https://boe.es/boe/dias/2026/10/03/pdfs/BOE-A-2026-20528.pdf"],
    ["Ministerio de Derechos Sociales: qué cambia con la reforma", "https://www.dsca.gob.es/es/comunicacion/notas-prensa/congreso-aprueba-gran-reforma-dependencia-discapacidad-nuevos-derechos"],
    ["Ministerio de Derechos Sociales: Panel del SAAD (septiembre de 2026)", "https://www.dsca.gob.es/es/comunicacion/notas-prensa/gobiernos-autonomicos-recibieron-mas-700-millones-euros-adicionales"],
    ["Ministerio de Derechos Sociales: empleo y discapacidad", "https://www.dsca.gob.es/es/derechos-sociales/discapacidad/empleo"],
    ["INE: Encuesta de Discapacidad EDAD 2020", "https://ine.es/prensa/edad_2020_p.pdf"],
    ["INE: empleo de las personas con discapacidad (2024)", "https://ine.es/dyngs/Prensa/EDML20242023.htm"],
    ["BOE: reforma del artículo 49 de la Constitución", "https://www.boe.es/boe/dias/2024/02/17/pdfs/BOE-A-2024-3099.pdf"],
    ["BOE: Ley Orgánica 2/2018 (derecho de voto)", "https://www.boe.es/eli/es/lo/2018/12/05/2"],
    ["BOE: Instrucción 5/2019 de la Junta Electoral Central", "https://www.boe.es/boe/dias/2019/03/13/pdfs/BOE-A-2019-3566.pdf"],
    ["BOE: Real Decreto 707/2026 (accesibilidad cognitiva)", "https://boe.es/buscar/pdf/2026/BOE-A-2026-18509-consolidado.pdf"],
    ["Programa electoral del PSOE (oficial)", "https://www.psib-psoe.org/wp-content/uploads/PROGRAMAPSOE29N26.pdf"],
    ["Programa electoral del PP (oficial)", "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf"],
    ["Programa de Izquierda Unida, bloque 2 (oficial)", "https://izquierdaunida.org/2026/11/16/programa-29n-2026-bloque-2-servicios-publicos-de-calidad-para-garantizar-derechos/"],
    ["65ymas: qué proponen los partidos sobre dependencia", "https://www.65ymas.com/sociedad/29-n-partidos-prometen-mas-recursos-menos-burocracia-en-dependencia-pero-chocan-en-modelo_87804_102.html"],
    ["Balance Sociosanitario: propuestas sobre dependencia", "https://balancesociosanitario.com/actualidad/elecciones-generales-29n-que-proponen-los-partidos-politicos-en-materia-de-mayores-y-dependencia/"],
    ["Autismo España: análisis de los programas", "https://autismo.org.es/actualidad/noticias/analisis-programas-electorales-29n/"],
    ["ONCE: cómo pedir el voto en braille", "https://www.once.es/grupo-social-once/oncecom/20261015/archivos/N047a326e75268d20be05a06cfef07c9db521b8115d298983b6cb3fb5886fc6a4c2_82930.txt"]
  ],
  method: "Lo que ya es ley procede del BOE, el Ministerio de Derechos Sociales, el INE y el IMSERSO. Las propuestas del PSOE, el PP e IU salen de sus programas oficiales. Vox, Frente Amplio y Podemos no han publicado un programa completo, así que sus medidas se toman de resúmenes de prensa especializada de sus documentos. Cuando no se ha encontrado nada, se indica en lugar de suponerlo. IU forma parte de Frente Amplio, pero sus propuestas son de su propio programa."
};
