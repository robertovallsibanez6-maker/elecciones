(() => {
  const D = window.DATA;
  const P = Object.fromEntries(D.parties.map(p => [p.id, p]));
  const H = D.hemicycle;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const color = id => (P[id] ? P[id].color : H.others[id].color);
  const name = id => (P[id] ? P[id].name : H.others[id].name);
  const fmt = n => (n == null ? "—" : String(n).replace(".", ","));

  $("#stamp").textContent = "Datos a " + D.updated.replace(" de 2026", "");
  $("#upd").textContent = D.updated;

  /* ---------- Countdown (hora de Madrid) ---------- */
  const madridDay = d => new Date(d.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
  const today = madridDay(new Date()); today.setHours(0, 0, 0, 0);
  const eday = new Date(2026, 10, 29);
  const days = Math.round((eday - today) / 864e5);
  if (days > 1) { $("#cd-n").textContent = days; }
  else if (days === 1) { $("#cd-n").textContent = "1"; $("#cd-l").innerHTML = "<strong>día</strong>para votar el domingo 29 de noviembre"; }
  else if (days === 0) { $("#cd-n").textContent = "Hoy"; $("#cd-l").innerHTML = "<strong>se vota</strong>de 9:00 a 20:00"; }
  else { $("#cd-n").textContent = "29N"; $("#cd-l").innerHTML = "<strong>ya se votó</strong>consulta el recuento oficial del Ministerio del Interior"; }

  /* ---------- Hemicycle ---------- */
  const CX = 200, CY = 204, R0 = 78, R1 = 194, ROWS = 11, DOT = 4.7;
  const seatsLayout = (() => {
    const radii = Array.from({ length: ROWS }, (_, i) => R0 + (R1 - R0) * i / (ROWS - 1));
    const sum = radii.reduce((a, b) => a + b, 0);
    const counts = radii.map(r => Math.round(350 * r / sum));
    counts[ROWS - 1] += 350 - counts.reduce((a, b) => a + b, 0);
    const pts = [];
    radii.forEach((r, i) => {
      const c = counts[i];
      for (let k = 0; k < c; k++) {
        const a = Math.PI - Math.PI * k / (c - 1);
        pts.push({ a, r, x: CX + r * Math.cos(a), y: CY - r * Math.sin(a) });
      }
    });
    pts.sort((p, q) => (q.a - p.a) || (p.r - q.r));
    return pts;
  })();

  function seatColors(map) {
    const out = [];
    H.order.forEach(id => { for (let i = 0; i < (map[id] || 0); i++) out.push(color(id)); });
    return out;
  }
  function drawHemi(svg, map, animate) {
    const ns = "http://www.w3.org/2000/svg";
    svg.innerHTML = "";
    const tick = document.createElementNS(ns, "line");
    Object.entries({ x1: CX, x2: CX, y1: 0, y2: CY - R1 - 6, stroke: "#15192A", "stroke-width": 1.5, "stroke-dasharray": "2 2" })
      .forEach(([k, v]) => tick.setAttribute(k, v));
    svg.appendChild(tick);
    const cols = seatColors(map);
    seatsLayout.forEach((p, i) => {
      const c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", p.x.toFixed(2)); c.setAttribute("cy", p.y.toFixed(2)); c.setAttribute("r", DOT);
      if (animate && !reduce) {
        c.setAttribute("fill", "#E1E4EA");
        c.style.transitionDelay = (i * 3) + "ms";
      } else c.setAttribute("fill", cols[i]);
      svg.appendChild(c);
    });
    if (animate && !reduce) requestAnimationFrame(() => requestAnimationFrame(() => {
      svg.querySelectorAll("circle").forEach((c, i) => c.setAttribute("fill", cols[i]));
      setTimeout(() => svg.querySelectorAll("circle").forEach(c => (c.style.transitionDelay = "0ms")), 1700);
    }));
  }
  function recolor(svg, map) {
    const cols = seatColors(map);
    svg.querySelectorAll("circle").forEach((c, i) => c.setAttribute("fill", cols[i]));
  }
  function legend(el, map, compact) {
    const main = ["pp", "psoe", "vox", "fa", "erc", "junts", "podemos"];
    let html = "";
    if (compact) {
      main.forEach(id => { if (map[id]) html += `<span><i style="background:${color(id)}"></i>${esc(name(id))} <b>${map[id]}</b></span>`; });
      const others = Object.keys(H.others).reduce((a, k) => a + (map[k] || 0), 0);
      html += `<span><i style="background:#B8BDC8"></i>Otros <b>${others}</b></span>`;
    } else {
      H.order.slice().sort((a, b) => (map[b] || 0) - (map[a] || 0)).forEach(id => {
        if (map[id]) html += `<span><i style="background:${color(id)}"></i>${esc(name(id))} <b>${map[id]}</b></span>`;
      });
    }
    el.innerHTML = html;
  }
  drawHemi($("#hemi-home"), H.polls, true);
  legend($("#legend-home"), H.polls, true);

  /* ---------- Timeline ---------- */
  const tl = [
    ["5 oct", "Sánchez disuelve las Cortes y convoca elecciones", "2026-10-05"],
    ["13–27 nov", "Campaña electoral", "2026-11-27"],
    ["19 nov", "Fin del plazo para pedir el voto por correo", "2026-11-19"],
    ["24–28 nov", "Prohibido publicar encuestas", "2026-11-28"],
    ["26 nov", "Último día para enviar el voto por correo (plazo ampliado)", "2026-11-26"],
    ["28 nov", "Jornada de reflexión", "2026-11-28"],
    ["29 nov", "Votación, de 9:00 a 20:00. Recuento provisional desde las 20:00", "2026-11-29"],
    ["4–7 dic", "Escrutinio oficial de las Juntas Electorales Provinciales", "2026-12-07"]
  ];
  const isoToday = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  let nowMarked = false;
  $("#timeline").innerHTML = tl.map(([d, t, end]) => {
    let cls = "";
    if (end < isoToday) cls = "past";
    else if (!nowMarked) { cls = "now"; nowMarked = true; }
    return `<li class="${cls}"><span class="d">${d}</span><span>${t}</span></li>`;
  }).join("");

  /* ---------- Party grid + sheet ---------- */
  $("#pgrid").innerHTML = D.parties.map((p, i) => {
    const tag = p.catOnly ? "Solo en Cataluña" : p.noCat ? "No se presenta en Cataluña" : "";
    const wide = i === D.parties.length - 1 && D.parties.length % 2 ? " wide" : "";
    return `<button class="pcard${wide}" data-party="${p.id}" aria-label="${esc(p.name)}: ver ficha">
      <span class="bar" style="background:${p.color}"></span>
      <span><span class="nm" style="display:block">${esc(p.name)}</span><span class="ld" style="display:block">${esc(p.leader)}</span>${tag ? `<span class="tag">${tag}</span>` : ""}</span>
      <span class="st"><span class="s">${p.pollSeats}</span><span class="w">${p.pollSeats === 1 ? "escaño" : "escaños"} en las encuestas<br>${p.seats2023 ? p.seats2023 + " en 2023" : "dentro de Sumar en 2023"}</span></span>
    </button>`;
  }).join("");

  const sheet = $("#sheet");
  function openParty(id, push = true) {
    const p = P[id]; if (!p) return;
    const ink = p.ink || "#fff";
    sheet.innerHTML = `
      <div class="sheet-head" style="background:${p.color};color:${ink}">
        <button class="close" aria-label="Cerrar" style="color:${ink}">✕</button>
        <div class="nm" id="sh-name">${esc(p.name)}</div>
        ${p.full !== p.name ? `<div class="full">${esc(p.full)}</div>` : ""}
        <div class="who">${esc(p.leader)}</div>
        <div class="role">${esc(p.leaderRole)}</div>
        <div class="motto">«${esc(p.motto)}»</div>
      </div>
      <div class="sheet-body">
        <div class="stats">
          <div><div class="v">${p.seats2023 || "—"}</div><div class="k">escaños en 2023</div></div>
          <div><div class="v">${p.pollSeats}</div><div class="k">escaños en las encuestas</div></div>
          <div><div class="v">${fmt(p.pollVote)}%</div><div class="k">voto estimado</div></div>
        </div>
        ${p.seatsNote ? `<p class="small" style="margin-top:8px">${esc(p.seatsNote)}</p>` : ""}
        <span class="chip">${esc(p.ideology)}</span>
        <h2>Quiénes son</h2>
        <div class="block">${p.intro.map(t => `<p>${esc(t)}</p>`).join("")}</div>
        <h2>Sus propuestas clave</h2>
        <ul class="props" style="--pc:${p.color}">${p.proposals.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("")}</ul>
        <h2>Con quién pactaría</h2>
        <div class="block"><p>${esc(p.pacts)}</p></div>
        <h2>En Cataluña</h2>
        <div class="block"><p>${esc(p.catalonia)}</p></div>
        <h2>Fuentes</h2>
        <ul class="links">${p.sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("")}</ul>
      </div>`;
    sheet.scrollTop = 0;
    sheet.classList.add("open");
    document.body.style.overflow = "hidden";
    sheet.querySelector(".close").addEventListener("click", () => history.back());
    sheet.querySelector(".close").focus({ preventScroll: true });
    if (push) history.pushState({ party: id }, "", "#partido-" + id);
  }
  function closeParty() {
    sheet.classList.remove("open");
    document.body.style.overflow = "";
  }
  $("#pgrid").addEventListener("click", e => { const b = e.target.closest("[data-party]"); if (b) openParty(b.dataset.party); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && sheet.classList.contains("open")) history.back(); });

  /* ---------- Encuestas ---------- */
  drawHemi($("#hemi-polls"), H.polls, false);
  legend($("#legend-polls"), H.polls, false);
  document.querySelectorAll("[data-hm]").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("[data-hm]").forEach(x => x.setAttribute("aria-pressed", x === b));
    const map = H[b.dataset.hm];
    recolor($("#hemi-polls"), map);
    legend($("#legend-polls"), map, false);
  }));

  // Vote bars
  const MAXV = 36;
  $("#vbars").innerHTML = D.parties.map(p => `
    <div class="vrow"><div class="pn">${esc(p.name)}</div>
      <div class="track"><div class="fill" style="width:${p.pollVote / MAXV * 100}%;background:${p.color}"></div>
      ${p.vote2023 ? `<div class="tick" style="left:${p.vote2023 / MAXV * 100}%" title="2023: ${fmt(p.vote2023)}%"></div>` : ""}</div>
      <div class="pv">${fmt(p.pollVote)}%</div></div>`).join("") +
    `<p class="small" style="margin-top:6px">En 2023: PP ${fmt(33.1)}%, PSOE ${fmt(31.7)}%, Vox ${fmt(12.4)}%, Sumar ${fmt(12.3)}%, ERC ${fmt(1.9)}%, Junts ${fmt(1.6)}%. Podemos fue dentro de Sumar.</p>`;

  // PP+Vox strip
  const rows = D.pollsTable.filter(r => r.seats && r.seats[0] != null && r.seats[2] != null)
    .map(r => ({ ...r, pp: r.seats[0], vx: r.seats[2], sum: r.seats[0] + r.seats[2] }))
    .sort((a, b) => b.sum - a.sum);
  const DOM = 220, pct = v => (v / DOM * 100) + "%";
  $("#strip").innerHTML = `<div class="strip-axis"><span></span><div class="ax"><span style="left:${pct(0)};transform:none">0</span><span style="left:${pct(100)}">100</span><span style="left:${pct(176)};font-weight:700;color:var(--ink)">176</span></div><span></span></div>` +
    rows.map(r => `<div class="srow ${r.sum < 176 ? "below" : ""}">
      <div class="lab">${esc(r.who)}<small>${esc(r.date)}</small></div>
      <div class="tr"><span class="seg2" style="left:0;width:${pct(r.pp)};background:${P.pp.color}"></span><span class="seg2" style="left:${pct(r.pp)};width:${pct(r.vx)};background:${P.vox.color}"></span><span class="majline" style="left:${pct(176)}"></span></div>
      <div class="val">${fmt(Math.round(r.sum))}</div></div>`).join("") +
    `<div class="keyline"><span><i style="width:12px;height:10px;background:${P.pp.color};border-radius:2px"></i>PP</span><span><i style="width:12px;height:10px;background:${P.vox.color};border-radius:2px"></i>Vox</span></div>`;

  // Ranges
  const RD = 150;
  $("#ranges").innerHTML = D.parties.filter(p => p.range && p.pollSeats > 2).map(p => `
    <div class="rrow"><div class="pn" style="font-weight:750;font-variation-settings:'wdth' 72;font-size:17px">${esc(p.name)}</div>
      <div class="tr"><span class="rg" style="left:${p.range[0] / RD * 100}%;width:${(p.range[1] - p.range[0]) / RD * 100}%;background:${p.color}"></span>
      <span class="mid" style="left:${p.pollSeats / RD * 100}%;background:${p.color}" title="Media: ${p.pollSeats}"></span>
      <span class="ends" style="left:calc(${p.range[0] / RD * 100}% - 4px);transform:translateX(-100%)">${p.range[0]}</span>
      <span class="ends" style="left:calc(${p.range[1] / RD * 100}% + 4px)">${p.range[1]}</span></div></div>`).join("");

  // Probabilities
  const probs = [
    ["El PP queda primero en votos", 90, "19 de 21 encuestadoras", "Lo dan todas salvo el CIS y SW Demoscopia. Fuente: Mapa Electoral."],
    ["PP y Vox suman mayoría absoluta (176+)", 88, "14 de 16 encuestas con escaños", "El politólogo Pablo Simón lo sitúa en torno al 90% y el modelo de elDiario.es lo daba en 9 de cada 10 simulaciones (octubre)."],
    ["Feijóo, próximo presidente del Gobierno", 82, "≈ 82% en Polymarket", "Mercado de apuestas, no encuesta: refleja lo que esperan sus usuarios."],
    ["PP y Vox llegan a 210 escaños (tres quintos)", 6, "6% de las simulaciones", "Modelo de Mapa Electoral. Es la mayoría que permite reformar la Constitución."]
  ];
  $("#prob").innerHTML = probs.map(([q, v, l, n]) => `
    <div class="prow"><div class="q">${q}</div><div class="pb"><i style="width:${v}%;background:var(--ink)"></i></div>
    <div class="pv"><b>${l}</b></div><p class="small" style="margin-top:4px">${n}</p></div>`).join("");

  // Pact calculator
  const chipIds = H.order.filter(id => H.polls[id] > 0).sort((a, b) => H.polls[b] - H.polls[a]);
  const sel = new Set();
  $("#pchips").innerHTML = chipIds.map(id => `<button class="pchip" aria-pressed="false" data-pc="${id}"><i style="background:${color(id)}"></i>${esc(name(id))} <b>${H.polls[id]}</b></button>`).join("");
  function updatePact() {
    let tot = 0;
    const order = H.order.filter(id => sel.has(id));
    order.forEach(id => (tot += H.polls[id]));
    $("#psum-n").textContent = tot;
    $("#psum-m").textContent = !sel.size ? "Elige partidos" : tot >= 176 ? "Mayoría absoluta" : `Faltan ${176 - tot} para 176`;
    $("#pbar").innerHTML = order.map(id => `<i style="width:${H.polls[id] / 350 * 100}%;background:${color(id)}"></i>`).join("");
    document.querySelectorAll("[data-pc]").forEach(b => b.setAttribute("aria-pressed", sel.has(b.dataset.pc)));
  }
  $("#pchips").addEventListener("click", e => {
    const b = e.target.closest("[data-pc]"); if (!b) return;
    const id = b.dataset.pc; sel.has(id) ? sel.delete(id) : sel.add(id); updatePact();
  });
  updatePact();

  // Scenarios
  const scen = [
    { t: "Feijóo presidente con Vox", ids: ["pp", "vox"], lk: ["hi", "Muy probable"],
      d: "Es lo que apuntan casi todas las encuestas. Falta saber la fórmula: el PP prefiere gobernar solo con apoyo externo de Vox, pero no descarta una coalición; Vox pone condiciones como la «prioridad nacional»." },
    { t: "Gobierno del PP en solitario", ids: ["pp"], lk: ["mid", "Depende de Vox"],
      d: "Con 128 escaños, el PP necesita que Vox vote «sí» en la investidura. Si Vox solo se abstuviera, el resto de partidos tendría más «noes» que los «síes» del PP." },
    { t: "Repetir la mayoría de Sánchez", ids: ["psoe", "fa", "erc", "bildu", "junts", "pnv", "adelante", "bng", "podemos"], lk: ["lo", "Muy improbable"],
      d: "Ni sumando a todos los partidos de izquierda y nacionalistas se llega a 176, y PP y Vox tendrían más votos en contra. Además, Junts dice que no investirá a Sánchez." },
    { t: "El PSOE se abstiene para que gobierne el PP", ids: ["pp"], lk: ["lo", "Escenario teórico"],
      d: "Permitiría al PP gobernar sin depender de Vox. Hay precedente: en 2016 el PSOE se abstuvo para investir a Mariano Rajoy." },
    { t: "Bloqueo y nuevas elecciones", ids: [], lk: ["lo", "Poco probable"],
      d: "Si en dos meses desde la primera votación de investidura nadie es elegido, se repiten las elecciones. Pasó en 2016 y en 2019." }
  ];
  $("#scen").innerHTML = scen.map((s, i) => {
    const tot = s.ids.reduce((a, id) => a + (H.polls[id] || 0), 0);
    return `<li><div class="sh"><strong>${s.t}</strong>${s.ids.length ? `<span class="seats num">${tot}</span>` : ""}</div>
      <span class="lk lk-${s.lk[0]}">${s.lk[1]}</span><p>${s.d}</p>
      ${s.ids.length ? `<div class="minibar">${s.ids.map(id => `<i style="width:${H.polls[id] / 350 * 100}%;background:${color(id)}"></i>`).join("")}</div>
      <button class="chip" data-try="${i}" style="margin-top:10px">Probar en la calculadora</button>` : ""}</li>`;
  }).join("");
  $("#scen").addEventListener("click", e => {
    const b = e.target.closest("[data-try]"); if (!b) return;
    sel.clear(); scen[+b.dataset.try].ids.forEach(id => { if (H.polls[id] > 0) sel.add(id); }); updatePact();
    $("#pchips").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  });

  // Table
  const lead = (r, k) => {
    const vals = { pp: r.pp, psoe: r.psoe, vox: r.vox };
    const max = Math.max(...Object.values(vals).filter(v => v != null));
    return vals[k] === max ? "lead" : "";
  };
  $("#ptable").innerHTML = `<thead><tr><th>Instituto</th><th><span class="dotc" style="background:${P.pp.color}"></span>PP</th><th><span class="dotc" style="background:${P.psoe.color}"></span>PSOE</th><th><span class="dotc" style="background:${P.vox.color}"></span>Vox</th><th><span class="dotc" style="background:${P.fa.color}"></span>FA</th><th>Escaños PP·PSOE·Vox</th></tr></thead><tbody>` +
    D.pollsTable.map(r => `<tr><td>${esc(r.who)}<span class="m">${esc(r.media)} · ${esc(r.date)}</span></td>
      <td class="${lead(r, "pp")}">${fmt(r.pp)}</td><td class="${lead(r, "psoe")}">${fmt(r.psoe)}</td><td>${fmt(r.vox)}</td><td>${fmt(r.fa)}</td>
      <td>${r.seats ? r.seats.map(fmt).join(" · ") : "—"}</td></tr>`).join("") + "</tbody>";

  /* ---------- Temas ---------- */
  const MK = { si: "Sí", no: "No", mix: "Mixto", nd: "Sin dato", txt: "" };
  let curTopic = D.topics[0].id;
  $("#tchips").innerHTML = D.topics.map(t => `<button class="tchip" data-t="${t.id}" aria-pressed="${t.id === curTopic}">${t.icon} ${esc(t.name)}</button>`).join("");
  function renderTopic() {
    const t = D.topics.find(x => x.id === curTopic);
    $("#topic").innerHTML = `
      <p class="muted" style="margin-top:14px">${esc(t.why)}</p>
      <div class="tq">${esc(t.question)}</div>
      <div class="grid-ans">${D.parties.map(p => {
        const [k, txt] = t.answers[p.id];
        return `<div class="arow"><div class="pp"><i style="background:${p.color}"></i>${esc(p.name)}</div>
          <div class="ans"><span class="mk ${k}">${MK[k]}</span>${esc(txt)}</div></div>`;
      }).join("")}</div>
      <ul class="stances">${D.parties.map(p => `<li style="--pc:${p.color}"><strong>${esc(p.name)}</strong><p>${esc(t.stances[p.id])}</p></li>`).join("")}</ul>`;
  }
  $("#tchips").addEventListener("click", e => {
    const b = e.target.closest("[data-t]"); if (!b) return;
    curTopic = b.dataset.t;
    document.querySelectorAll("[data-t]").forEach(x => x.setAttribute("aria-pressed", x === b));
    renderTopic();
  });
  renderTopic();

  const opts = D.parties.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join("");
  $("#cmpA").innerHTML = opts; $("#cmpB").innerHTML = opts;
  $("#cmpA").value = "pp"; $("#cmpB").value = "psoe";
  function renderCmp() {
    const a = P[$("#cmpA").value], b = P[$("#cmpB").value];
    $("#cmp-out").innerHTML = D.topics.map(t => `
      <div class="cmp-row"><h3>${t.icon} ${esc(t.name)}</h3>
      <div class="cmp-cols"><div style="--pc:${a.color}"><strong style="color:var(--ink)">${esc(a.name)}</strong><br>${esc(t.stances[a.id])}</div>
      <div style="--pc:${b.color}"><strong style="color:var(--ink)">${esc(b.name)}</strong><br>${esc(t.stances[b.id])}</div></div></div>`).join("");
  }
  $("#cmpA").addEventListener("change", renderCmp); $("#cmpB").addEventListener("change", renderCmp);
  renderCmp();
  document.querySelectorAll("[data-tm]").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("[data-tm]").forEach(x => x.setAttribute("aria-pressed", x === b));
    $("#tm-temas").hidden = b.dataset.tm !== "temas";
    $("#tm-cmp").hidden = b.dataset.tm !== "cmp";
  }));

  /* ---------- Votar ---------- */
  const heads = [["psoe", "PSC", "Jordi Hereu"], ["pp", "PP", "Xavier García Albiol"], ["vox", "Vox", "Juan José Aizcorbe"], ["fa", "Front Ampli", "Ada Colau"], ["erc", "ERC", "Gabriel Rufián"], ["junts", "Junts", "Míriam Nogueras"]];
  $("#heads").innerHTML = heads.map(([id, n, c]) => `<li><i style="background:${color(id)}"></i><strong>${n}</strong><span>${c}</span></li>`).join("") +
    `<li><i style="background:${P.podemos.color}"></i><strong>Podemos</strong><span>No se presenta</span></li>`;
  const sources = [
    ["Web oficial de las elecciones (Ministerio del Interior)", "https://29neleccionesgenerales.es"],
    ["Calendario electoral (Junta Electoral Central)", "https://www.juntaelectoralcentral.es/cs/jec/documentos/eg2026_calendario.pdf"],
    ["Voto por correo (Correos)", "https://www.correos.es/es/es/particulares/para-el-ciudadano/voto-por-correo"],
    ["Guía básica del 29N (La Moncloa)", "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/guia-dudas-elecciones-generales-29n.aspx"],
    ["Encuestas y medias (Mapa Electoral)", "https://mapaelectoral.es/encuestas/"],
    ["Encuesta de las encuestas (Demócrata)", "https://www.democrata.es/encuestas/elecciones-generales/encuesta-de-las-encuestas-29n-pp-vox-192-escanos/"],
    ["Programas resumidos (Política Electoral)", "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/psoe"],
    ["Partidos y candidatos en Cataluña (Catalan News)", "https://www.catalannews.com/29-n-election/item/spains-2026-general-election-a-whos-who-guide-to-parties-and-candidates-in-catalonia"],
    ["Las batallas del 29-N en Cataluña (Ara)", "https://es.ara.cat/politica/elecciones-generales/batallas-esconde-29-n-cataluna_1_5903927.html"],
    ["Preocupaciones de los españoles (GAD3 vía Demócrata)", "https://www.democrata.es/encuestas/elecciones-generales/ranking-preocupaciones-espanoles-gad3-noviembre/"]
  ];
  $("#sources").innerHTML = sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("");

  /* ---------- Navigation ---------- */
  const screens = ["inicio", "partidos", "encuestas", "temas", "votar"];
  function go(s, push = true) {
    if (!screens.includes(s)) s = "inicio";
    screens.forEach(x => $("#s-" + x).classList.toggle("on", x === s));
    document.querySelectorAll("[data-go]").forEach(b => {
      if (b.dataset.go === s) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
    if (push) history.pushState({ screen: s }, "", "#" + s);
    current = s;
  }
  let current = "inicio";
  document.querySelector("nav.tabs").addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b) go(b.dataset.go); });
  window.addEventListener("popstate", e => {
    const st = e.state || {};
    if (sheet.classList.contains("open") && !st.party) closeParty();
    if (st.party) openParty(st.party, false);
    else if (st.screen && st.screen !== current) go(st.screen, false);
  });
  const h0 = location.hash.slice(1);
  if (h0.startsWith("partido-")) { go("partidos", false); history.replaceState({ screen: "partidos" }, "", "#partidos"); openParty(h0.slice(8)); }
  else { go(h0 || "inicio", false); history.replaceState({ screen: current }, "", "#" + current); }

  const top = $("#top");
  addEventListener("scroll", () => top.classList.toggle("scrolled", scrollY > 4), { passive: true });

  if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
})();
