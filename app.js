(() => {
  const D = window.DATA;
  const P = Object.fromEntries(D.parties.map(p => [p.id, p]));
  const H = D.hemicycle;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const color = id => (P[id] ? P[id].color : H.others[id].color);
  const name = id => (P[id] ? P[id].name : H.others[id].name);
  const fmt = n => (n == null ? "—" : String(n).replace(".", ","));
  const fmt1 = n => n.toFixed(1).replace(".", ",");

  $("#upd").textContent = D.updated;

  /* ---------- Countdown with tally marks (hora de Madrid) ---------- */
  const madrid = d => new Date(d.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
  const today = madrid(new Date()); today.setHours(0, 0, 0, 0);
  const days = Math.round((new Date(2026, 10, 29) - today) / 864e5);
  function tally(n) {
    let out = "", left = n, g = 0;
    const jit = i => (Math.sin(i * 12.9898) * 1.6).toFixed(2);
    while (left > 0) {
      const k = Math.min(5, left); let lines = "";
      for (let i = 0; i < Math.min(4, k); i++) {
        const x = 6 + i * 10, j = jit(g * 7 + i);
        lines += `<line x1="${x}" y1="${6 + +j}" x2="${x + +j * .6}" y2="${52 - +j}"/>`;
      }
      if (k === 5) lines += `<line x1="1" y1="44" x2="41" y2="12"/>`;
      out += `<svg viewBox="0 0 ${k === 5 ? 42 : 6 + (k - 1) * 10 + 6} 58" fill="none" stroke="#14213D" stroke-width="4" stroke-linecap="round">${lines}</svg>`;
      left -= k; g++;
    }
    return out;
  }
  if (days >= 1 && days <= 30) {
    $("#palotes").innerHTML = tally(days);
    $("#count-t").innerHTML = `${days === 1 ? "queda" : "quedan"} <b>${days} ${days === 1 ? "día" : "días"}</b>para votar, el domingo 29 de noviembre`;
  } else if (days === 0) {
    $("#count-t").innerHTML = `<b>Hoy se vota</b>de 9:00 a 20:00`;
  } else if (days < 0) {
    $("#count-t").innerHTML = `<b>Ya se votó</b>consulta el recuento oficial del Ministerio del Interior`;
  }

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
    return pts.sort((p, q) => (q.a - p.a) || (p.r - q.r));
  })();
  const seatColors = map => H.order.flatMap(id => Array(map[id] || 0).fill(color(id)));
  function drawHemi(svg, map, animate) {
    const ns = "http://www.w3.org/2000/svg";
    svg.innerHTML = `<path d="M${CX} 0 V${CY - R1 - 7}" stroke="#14213D" stroke-width="2"/><path d="M${CX - 5} 0 H${CX + 5}" stroke="#14213D" stroke-width="2"/>`;
    const cols = seatColors(map);
    seatsLayout.forEach((p, i) => {
      const c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", p.x.toFixed(2)); c.setAttribute("cy", p.y.toFixed(2)); c.setAttribute("r", DOT);
      if (animate && !reduce) { c.setAttribute("fill", "#CDD1D8"); c.style.transitionDelay = (i * 3) + "ms"; }
      else c.setAttribute("fill", cols[i]);
      svg.appendChild(c);
    });
    if (animate && !reduce) requestAnimationFrame(() => requestAnimationFrame(() => {
      svg.querySelectorAll("circle").forEach((c, i) => c.setAttribute("fill", cols[i]));
      setTimeout(() => svg.querySelectorAll("circle").forEach(c => (c.style.transitionDelay = "0ms")), 1700);
    }));
  }
  const recolor = (svg, map) => { const cols = seatColors(map); svg.querySelectorAll("circle").forEach((c, i) => c.setAttribute("fill", cols[i])); };
  function legend(el, map, compact) {
    const main = ["pp", "psoe", "vox", "fa", "erc", "junts", "podemos"];
    let html = "";
    if (compact) {
      main.forEach(id => { if (map[id]) html += `<span><i style="background:${color(id)}"></i>${esc(name(id))} <b>${map[id]}</b></span>`; });
      const others = Object.keys(H.others).reduce((a, k) => a + (map[k] || 0), 0);
      html += `<span><i style="background:#B6BCC6"></i>Otros <b>${others}</b></span>`;
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
  const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  let marked = false;
  $("#timeline").innerHTML = tl.map(([d, t, end]) => {
    let cls = end < iso ? "past" : (!marked ? (marked = true, "now") : "");
    return `<li class="${cls}"><span class="d">${d}</span><span>${t}</span></li>`;
  }).join("");

  /* ---------- Party ballots ---------- */
  $("#pgrid").innerHTML = D.parties.map((p, i) => {
    const flag = p.catOnly ? "solo en Cataluña" : p.noCat ? "no va en Cataluña" : "";
    const wide = i === D.parties.length - 1 && D.parties.length % 2 ? " wide" : "";
    return `<button class="slip${wide}" style="--pc:${p.color}" data-party="${p.id}" aria-label="${esc(p.name)}: ver ficha">
      ${flag ? `<span class="flag">${flag}</span>` : ""}
      <span class="slip-top"><span class="slip-k">Candidatura</span><span class="slip-n">${esc(p.name)}</span></span>
      <span class="perf"></span>
      <ol class="slip-list"><li><span>1</span>${esc(p.leader)}</li><li class="ghost"><span>2</span>· · · · · · · · ·</li></ol>
      <span class="slip-foot"><span class="s num">${p.pollSeats}</span><span class="w">${p.pollSeats === 1 ? "escaño" : "escaños"} en las encuestas<br>${p.seats2023 ? p.seats2023 + " en 2023" : "en 2023, dentro de Sumar"}</span></span>
    </button>`;
  }).join("");

  const sheet = $("#sheet");
  function openParty(id, push = true) {
    const p = P[id]; if (!p) return;
    const ink = p.ink || "#fff";
    sheet.innerHTML = `
      <div class="sh-head" style="--pc:${p.color};color:${ink}">
        <button class="sh-close" aria-label="Cerrar">✕</button>
        <div class="sh-k">${p.full !== p.name ? esc(p.full) : "&nbsp;"}</div>
        <div class="sh-name" id="sh-name">${esc(p.name)}</div>
        <div class="sh-who">${esc(p.leader)}</div>
        <div class="sh-role">${esc(p.leaderRole)}</div>
        <div class="sh-motto">«${esc(p.motto)}»</div>
      </div>
      <div class="sh-body" style="--pc:${p.color}">
        <div class="sh-stats">
          <div><div class="v num">${p.seats2023 || "—"}</div><div class="k">escaños en 2023</div></div>
          <div><div class="v num">${p.pollSeats}</div><div class="k">${p.pollSeats === 1 ? "escaño" : "escaños"} en las encuestas</div></div>
          <div><div class="v num">${fmt(p.pollVote)}%</div><div class="k">voto estimado</div></div>
        </div>
        ${p.seatsNote ? `<p class="small">${esc(p.seatsNote)}</p>` : ""}
        <p class="ideo">${esc(p.ideology)}</p>
        ${p.easyRead ? `<a class="lf" href="${p.easyRead.url}" target="_blank" rel="noopener">
            <span class="lf-doc" aria-hidden="true"><b>LF</b></span>
            <span class="lf-txt"><strong>Programa en lectura fácil</strong><small>${esc(p.easyRead.lang)}. ${esc(p.easyRead.who)}.</small></span>
            <span class="lf-pdf">PDF</span>
          </a>` : `<p class="lf-none">No hemos encontrado una versión oficial de su programa en lectura fácil (comprobado el 23 de noviembre).</p>`}
        <h2>Quiénes son</h2>${p.intro.map(t => `<p>${esc(t)}</p>`).join("")}
        <h2>Sus propuestas clave</h2>
        <ul class="props">${p.proposals.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("")}</ul>
        <h2>Con quién pactaría</h2><p>${esc(p.pacts)}</p>
        <h2>En Cataluña</h2><p>${esc(p.catalonia)}</p>
        <h2>Fuentes</h2>
        <ul class="links">${p.sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("")}</ul>
      </div>`;
    sheet.scrollTop = 0;
    sheet.classList.add("open");
    document.body.style.overflow = "hidden";
    sheet.querySelector(".sh-close").addEventListener("click", () => history.back());
    sheet.querySelector(".sh-close").focus({ preventScroll: true });
    if (push) history.pushState({ party: id }, "", "#partido-" + id);
  }
  const closeParty = () => { sheet.classList.remove("open"); document.body.style.overflow = ""; };
  $("#pgrid").addEventListener("click", e => { const b = e.target.closest("[data-party]"); if (b) openParty(b.dataset.party); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && sheet.classList.contains("open")) history.back(); });

  /* ---------- Encuestas ---------- */
  drawHemi($("#hemi-polls"), H.polls, false);
  legend($("#legend-polls"), H.polls, false);
  $$("[data-hm]").forEach(b => b.addEventListener("click", () => {
    $$("[data-hm]").forEach(x => x.setAttribute("aria-pressed", x === b));
    recolor($("#hemi-polls"), H[b.dataset.hm]);
    legend($("#legend-polls"), H[b.dataset.hm], false);
  }));

  const MAXV = 36;
  $("#vbars").innerHTML = D.parties.map(p => `
    <div class="vrow"><div class="pn">${esc(p.name)}</div>
      <div class="track"><div class="fill" style="width:${p.pollVote / MAXV * 100}%;background:${p.color}"></div>
      ${p.vote2023 ? `<div class="tick" style="left:${p.vote2023 / MAXV * 100}%"></div>` : ""}</div>
      <div class="pv">${fmt(p.pollVote)}%</div></div>`).join("") +
    `<p class="small">En 2023: PP 33,1%, PSOE 31,7%, Vox 12,4%, Sumar 12,3%, ERC 1,9%, Junts 1,6%. Podemos fue dentro de Sumar.</p>`;

  const rows = D.pollsTable.filter(r => r.seats && r.seats[0] != null && r.seats[2] != null)
    .map(r => ({ ...r, pp: r.seats[0], vx: r.seats[2], sum: r.seats[0] + r.seats[2] }))
    .sort((a, b) => b.sum - a.sum);
  const DOM = 220, pct = v => (v / DOM * 100) + "%";
  $("#strip").innerHTML = `<div class="strip-axis"><span></span><div class="ax"><span style="left:0;transform:none">0</span><span style="left:${pct(100)}">100</span><span style="left:${pct(176)};font-weight:700;color:#14213D">176</span></div><span></span></div>` +
    rows.map(r => `<div class="srow ${r.sum < 176 ? "below" : ""}">
      <div class="lab-n">${esc(r.who)}<small>${esc(r.date)}</small></div>
      <div class="tr"><span class="seg2" style="left:0;width:${pct(r.pp)};background:${P.pp.color}"></span><span class="seg2" style="left:${pct(r.pp)};width:${pct(r.vx)};background:${P.vox.color}"></span><span class="majline" style="left:${pct(176)}"></span></div>
      <div class="val">${Math.round(r.sum)}</div></div>`).join("") +
    `<div class="keyline"><span><i style="background:${P.pp.color}"></i>PP</span><span><i style="background:${P.vox.color}"></i>Vox</span></div>`;

  const RD = 150;
  $("#ranges").innerHTML = D.parties.filter(p => p.range && p.pollSeats > 2).map(p => `
    <div class="rrow"><div class="pn">${esc(p.name)}</div>
      <div class="tr"><span class="rg" style="left:${p.range[0] / RD * 100}%;width:${(p.range[1] - p.range[0]) / RD * 100}%;background:${p.color}"></span>
      <span class="mid" style="left:${p.pollSeats / RD * 100}%;background:${p.color}"></span>
      <span class="ends" style="left:calc(${p.range[0] / RD * 100}% - 4px);transform:translateX(-100%)">${p.range[0]}</span>
      <span class="ends" style="left:calc(${p.range[1] / RD * 100}% + 4px)">${p.range[1]}</span></div></div>`).join("");

  const probs = [
    ["El PP queda primero en votos", 90, "19 de 21 encuestadoras", "Lo dan todas salvo el CIS y SW Demoscopia. Fuente: Mapa Electoral."],
    ["PP y Vox suman mayoría absoluta", 88, "14 de 16 encuestas con escaños", "El politólogo Pablo Simón lo sitúa en torno al 90% y el modelo de elDiario.es lo daba en 9 de cada 10 simulaciones (octubre)."],
    ["Feijóo, próximo presidente", 82, "≈ 82% en Polymarket", "Mercado de apuestas, no encuesta: refleja lo que esperan sus usuarios."],
    ["PP y Vox llegan a 210 escaños", 6, "6% de las simulaciones", "Modelo de Mapa Electoral. Tres quintos: la mayoría que permite reformar la Constitución."]
  ];
  $("#prob").innerHTML = probs.map(([q, v, l, n]) => `
    <div class="prow"><div class="q">${q}</div><div class="ruler"><i style="width:${v}%"></i></div>
    <div class="pv">${l}</div><p class="small">${n}</p></div>`).join("");

  // Pact calculator
  const chipIds = H.order.filter(id => H.polls[id] > 0).sort((a, b) => H.polls[b] - H.polls[a]);
  const sel = new Set();
  $("#pchips").innerHTML = chipIds.map(id => `<button class="pchip" aria-pressed="false" data-pc="${id}"><i style="background:${color(id)}"></i>${esc(name(id))} <b>${H.polls[id]}</b></button>`).join("");
  function updatePact() {
    const order = H.order.filter(id => sel.has(id));
    const tot = order.reduce((a, id) => a + H.polls[id], 0);
    $("#psum-n").textContent = tot;
    $("#psum-m").textContent = !sel.size ? "Elige partidos" : tot >= 176 ? "Mayoría absoluta" : `Faltan ${176 - tot}`;
    $("#pbar").innerHTML = order.map(id => `<i style="width:${H.polls[id] / 350 * 100}%;background:${color(id)}"></i>`).join("");
    $$("[data-pc]").forEach(b => b.setAttribute("aria-pressed", sel.has(b.dataset.pc)));
  }
  $("#pchips").addEventListener("click", e => {
    const b = e.target.closest("[data-pc]"); if (!b) return;
    sel.has(b.dataset.pc) ? sel.delete(b.dataset.pc) : sel.add(b.dataset.pc); updatePact();
  });
  updatePact();

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
    return `<article><div class="sh"><h3>${s.t}</h3>${s.ids.length ? `<span class="seats num">${tot}</span>` : ""}</div>
      <span class="stamp ${s.lk[0]}">${s.lk[1]}</span><p>${s.d}</p>
      ${s.ids.length ? `<div class="minibar">${s.ids.map(id => `<i style="width:${H.polls[id] / 350 * 100}%;background:${color(id)}"></i>`).join("")}</div>
      <button class="try" data-try="${i}">Probar en la calculadora</button>` : ""}</article>`;
  }).join("");
  $("#scen").addEventListener("click", e => {
    const b = e.target.closest("[data-try]"); if (!b) return;
    sel.clear(); scen[+b.dataset.try].ids.forEach(id => { if (H.polls[id] > 0) sel.add(id); }); updatePact();
    $("#pchips").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  });

  const lead = (r, k) => { const v = [r.pp, r.psoe, r.vox].filter(x => x != null); return r[k] === Math.max(...v) ? "lead" : ""; };
  $("#ptable").innerHTML = `<thead><tr><th>Instituto</th><th><span class="dotc" style="background:${P.pp.color}"></span>PP</th><th><span class="dotc" style="background:${P.psoe.color}"></span>PSOE</th><th><span class="dotc" style="background:${P.vox.color}"></span>Vox</th><th><span class="dotc" style="background:${P.fa.color}"></span>FA</th><th>Escaños PP / PSOE / Vox</th></tr></thead><tbody>` +
    D.pollsTable.map(r => `<tr><td>${esc(r.who)}<span class="m">${esc(r.media)}, ${esc(r.date)}</span></td>
      <td class="${lead(r, "pp")}">${fmt(r.pp)}</td><td class="${lead(r, "psoe")}">${fmt(r.psoe)}</td><td>${fmt(r.vox)}</td><td>${fmt(r.fa)}</td>
      <td>${r.seats ? r.seats.map(fmt).join(" / ") : "—"}</td></tr>`).join("") + "</tbody>";

  /* ---------- Temas ---------- */
  const MK = { si: "Sí", no: "No", mix: "En parte", nd: "Sin dato" };
  let curTopic = D.topics[0].id;
  const DIS = window.DISCAPACIDAD;
  $("#tchips").innerHTML = D.topics.map(t => `<button class="ftab" data-t="${t.id}" aria-pressed="${t.id === curTopic}">${esc(t.name)}</button>`).join("") +
    (DIS ? `<button class="ftab" data-t="discapacidad" aria-pressed="false">Discapacidad</button>` : "");
  const ORD = ["pp", "psoe", "vox", "fa", "iu", "erc", "junts", "podemos", "sector"];
  const PL = { iu: ["IU (Frente Amplio)", "fa"], sector: ["Lo que pide el sector", null] };
  function renderDisability() {
    const who = id => PL[id] ? PL[id][0] : name(id);
    const col = id => PL[id] ? (PL[id][1] ? color(PL[id][1]) : "#9AA1AE") : color(id);
    $("#topic").innerHTML = `
      <div class="dis">
        ${DIS.intro.map(t => `<p class="why">${esc(t)}</p>`).join("")}
        <div class="dis-stats">${DIS.stats.map(([n, l, s]) => `<div><b class="num">${esc(n)}</b><span>${esc(l)}</span><small>${esc(s)}</small></div>`).join("")}</div>
        <div class="dis-law"><h3>${esc(DIS.reform.title)}</h3><p>${esc(DIS.reform.text)}</p><ul>${DIS.reform.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div class="tq">Qué dice cada partido, ámbito por ámbito</div>
        <p class="small" style="margin-top:2px">Toca un ámbito para desplegarlo.</p>
        <div class="dis-areas">${DIS.areas.map(a => `
          <details class="dis-area">
            <summary><span class="da-n">${esc(a.name)}</span><span class="da-w">${esc(a.what)}</span></summary>
            <div class="da-body">
              <div class="da-ley"><h4>Ya es ley</h4><ul>${a.ley.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
              <h4>Qué proponen</h4>
              <ul class="da-prop">${a.prop.slice().sort((x, y) => ORD.indexOf(x[0]) - ORD.indexOf(y[0])).map(([id, t]) => `<li style="--pc:${col(id)}"><strong>${esc(who(id))}</strong><p>${esc(t)}</p></li>`).join("")}</ul>
              <p class="da-none">${esc(a.none)}</p>
              <p class="da-src">Fuentes: ${esc(a.src)}</p>
            </div>
          </details>`).join("")}</div>
        <div class="dis-vote" id="dis-vote"><h3>${esc(DIS.vote.title)}</h3>${DIS.vote.points.map(([t, x]) => `<div><strong>${esc(t)}</strong><p>${esc(x)}</p></div>`).join("")}</div>
        <p class="note">${esc(DIS.method)}</p>
        <h4 style="margin-top:18px">Fuentes</h4>
        <ul class="links">${DIS.sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("")}</ul>
      </div>`;
  }
  function renderTopic() {
    if (curTopic === "discapacidad") return renderDisability();
    const t = D.topics.find(x => x.id === curTopic);
    const isTxt = Object.values(t.answers).every(a => a[0] === "txt");
    $("#topic").innerHTML = `
      <p class="why">${esc(t.why)}</p>
      <div class="tq">${esc(t.question)}</div>
      ${isTxt ? "" : `<div class="marks-key">${["si", "no", "mix", "nd"].map(k => `<span><i class="box sm ${k}"></i>${MK[k]}</span>`).join("")}</div>`}
      <div>${D.parties.map(p => {
        const [k, txt] = t.answers[p.id];
        return `<div class="arow"><i class="box ${k}" aria-label="${MK[k] || ""}"></i><div class="pnm"><i style="background:${p.color}"></i>${esc(p.name)}</div><div class="atx">${esc(txt)}</div></div>`;
      }).join("")}</div>
      <ul class="stances">${D.parties.map(p => `<li style="--pc:${p.color}"><strong>${esc(p.name)}</strong><p>${esc(t.stances[p.id])}</p></li>`).join("")}</ul>`;
  }
  $("#tchips").addEventListener("click", e => {
    const b = e.target.closest("[data-t]"); if (!b) return;
    curTopic = b.dataset.t;
    $$("[data-t]").forEach(x => x.setAttribute("aria-pressed", x === b));
    renderTopic();
  });
  renderTopic();
  function openTopic(id) {
    curTopic = id;
    $$("[data-t]").forEach(x => x.setAttribute("aria-pressed", x.dataset.t === id));
    $$("[data-tm]").forEach(x => x.setAttribute("aria-pressed", x.dataset.tm === "temas"));
    $("#tm-temas").hidden = false; $("#tm-cmp").hidden = true;
    renderTopic();
    go("temas");
    const tab = document.querySelector(`[data-t="${id}"]`);
    if (tab) tab.scrollIntoView({ inline: "center", block: "nearest" });
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-open-topic]"); if (b) openTopic(b.dataset.openTopic); });

  const opts = D.parties.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join("");
  $("#cmpA").innerHTML = opts; $("#cmpB").innerHTML = opts;
  $("#cmpA").value = "pp"; $("#cmpB").value = "psoe";
  function renderCmp() {
    const a = P[$("#cmpA").value], b = P[$("#cmpB").value];
    $("#cmp-out").innerHTML = D.topics.map(t => `
      <div class="cmp-row"><h3>${esc(t.name)}</h3>
      <div class="cmp-cols"><div style="--pc:${a.color}"><strong>${esc(a.name)}</strong>${esc(t.stances[a.id])}</div>
      <div style="--pc:${b.color}"><strong>${esc(b.name)}</strong>${esc(t.stances[b.id])}</div></div></div>`).join("");
  }
  $("#cmpA").addEventListener("change", renderCmp); $("#cmpB").addEventListener("change", renderCmp);
  renderCmp();
  $$("[data-tm]").forEach(b => b.addEventListener("click", () => {
    $$("[data-tm]").forEach(x => x.setAttribute("aria-pressed", x === b));
    $("#tm-temas").hidden = b.dataset.tm !== "temas";
    $("#tm-cmp").hidden = b.dataset.tm !== "cmp";
  }));

  /* ---------- Tu voto: Barcelona D'Hondt simulator ---------- */
  const BASE = [ // Barcelona, Congreso 2023 (Vox y otros aproximados)
    { id: "psoe", label: "PSC", v: 35.7 },
    { id: "fa", label: "Front Ampli", v: 15.2 },
    { id: "pp", label: "PP", v: 13.7 },
    { id: "erc", label: "ERC", v: 12.3 },
    { id: "junts", label: "Junts", v: 9.7 },
    { id: "vox", label: "Vox", v: 7.3 },
    { id: "otros", label: "Otros", v: 4.5, c: "#B6BCC6" },
    { id: "blanco", label: "En blanco", v: 1.5, c: "#FFFFFF" }
  ];
  let LAB = BASE.map(x => ({ ...x }));
  const labColor = x => x.c || color(x.id);
  $("#lab-sliders").innerHTML = LAB.map((x, i) => `
    <div class="sl"><label for="sl${i}">${esc(x.label)}</label>
    <input id="sl${i}" type="range" min="0" max="45" step="0.1" value="${x.v}" style="--c:${x.id === "blanco" ? "#7D8594" : labColor(x)}" data-i="${i}">
    <output id="o${i}">${fmt1(x.v)}%</output></div>`).join("");
  function dhondt() {
    const valid = LAB.reduce((a, x) => a + x.v, 0);
    const bar = 0.03 * valid;
    const lists = LAB.filter(x => x.id !== "otros" && x.id !== "blanco");
    const el = lists.filter(x => x.v >= bar && x.v > 0);
    const out = lists.filter(x => x.v < bar && x.v > 0);
    const s = Object.fromEntries(el.map(x => [x.id, 0]));
    let last = null, lastQ = 0;
    for (let k = 0; k < 32; k++) {
      let best = null, bq = -1;
      el.forEach(x => { const q = x.v / (s[x.id] + 1); if (q > bq) { bq = q; best = x; } });
      if (!best) break;
      s[best.id]++; last = best; lastQ = bq;
    }
    // who was closest to the 32nd seat
    let near = null, gap = Infinity;
    el.forEach(x => { if (x === last) return; const need = lastQ * (s[x.id] + 1) - x.v; if (need < gap) { gap = need; near = x; } });
    return { s, last, near, gap, out, bar };
  }
  function renderLab() {
    const r = dhondt();
    const ids = LAB.filter(x => r.s[x.id]).map(x => x.id);
    const dots = ids.flatMap(id => Array(r.s[id]).fill(color(id)));
    $("#lab-seats").innerHTML = dots.map(c => `<i style="background:${c}"></i>`).join("") +
      Array(Math.max(0, 32 - dots.length)).fill('<i style="background:#E1E4E9"></i>').join("");
    let msg = `<span class="lab-sum">${LAB.filter(x => r.s[x.id]).map(x => `<span><i style="background:${color(x.id)}"></i>${esc(x.label)} <b>${r.s[x.id]}</b></span>`).join("")}</span>`;
    if (r.last && r.near) msg += `<br>El escaño 32 es para ${esc(r.last.label)}. A ${esc(r.near.label)} le faltan unos ${fmt1(Math.max(0.1, r.gap))} puntos para quitárselo.`;
    if (r.out.length) msg += `<br>${r.out.map(x => esc(x.label)).join(", ")} no ${r.out.length > 1 ? "llegan" : "llega"} al listón del 3% (${fmt1(r.bar)}%) y no ${r.out.length > 1 ? "entran" : "entra"} en el reparto.`;
    $("#lab-msg").innerHTML = msg;
  }
  $("#lab-sliders").addEventListener("input", e => {
    const i = +e.target.dataset.i; if (isNaN(i)) return;
    LAB[i].v = +e.target.value; $("#o" + i).textContent = fmt1(LAB[i].v) + "%"; renderLab();
  });
  $("#lab-reset").addEventListener("click", () => {
    LAB = BASE.map(x => ({ ...x }));
    LAB.forEach((x, i) => { $("#sl" + i).value = x.v; $("#o" + i).textContent = fmt1(x.v) + "%"; });
    renderLab();
  });
  renderLab();

  const heads = [["psoe", "PSC", "Jordi Hereu"], ["pp", "PP", "Xavier García Albiol"], ["vox", "Vox", "Juan José Aizcorbe"], ["fa", "Front Ampli", "Ada Colau"], ["erc", "ERC", "Gabriel Rufián"], ["junts", "Junts", "Míriam Nogueras"]];
  $("#heads").innerHTML = heads.map(([id, n, c]) => `<li><i style="background:${color(id)}"></i><strong>${n}</strong><span>${c}</span></li>`).join("") +
    `<li><i style="background:${P.podemos.color}"></i><strong>Podemos</strong><span>No se presenta (pide el voto para ERC)</span></li>`;
  const sources = [
    ["Web oficial de las elecciones (Ministerio del Interior)", "https://29neleccionesgenerales.es"],
    ["Calendario electoral (Junta Electoral Central)", "https://www.juntaelectoralcentral.es/cs/jec/documentos/eg2026_calendario.pdf"],
    ["Voto por correo (Correos)", "https://www.correos.es/es/es/particulares/para-el-ciudadano/voto-por-correo"],
    ["Guía básica del 29N (La Moncloa)", "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/interior/paginas/guia-dudas-elecciones-generales-29n.aspx"],
    ["Encuestas y medias (Mapa Electoral)", "https://mapaelectoral.es/encuestas/"],
    ["Encuesta de las encuestas (Demócrata)", "https://www.democrata.es/encuestas/elecciones-generales/encuesta-de-las-encuestas-29n-pp-vox-192-escanos/"],
    ["Programas resumidos (Política Electoral)", "https://www.politicaelectoral.com/es/espana/generales-2026/nacional/psoe"],
    ["Partidos y candidatos en Cataluña (Catalan News)", "https://www.catalannews.com/29-n-election/item/spains-2026-general-election-a-whos-who-guide-to-parties-and-candidates-in-catalonia"],
    ["Resultados de 2023 en Barcelona, Congreso y Senado (Última Hora)", "https://www.ultimahora.es/elecciones/23j/congreso/barcelona.html"],
    ["Mayoría del PP en el Senado y senadores designados (3Cat)", "https://www.3cat.cat/3catinfo/el-pp-aconsegueix-majora-absoluta-al-senat/noticia/3242642/"],
    ["Preocupaciones de los españoles (GAD3 vía Demócrata)", "https://www.democrata.es/encuestas/elecciones-generales/ranking-preocupaciones-espanoles-gad3-noviembre/"]
  ];
  $("#sources").innerHTML = sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("");

  /* ---------- Aviso de novedad ---------- */
  const NEWS_KEY = "29n-novedad-discapacidad";
  let seen = false;
  try { seen = localStorage.getItem(NEWS_KEY) === "1"; } catch (e) {}
  const banner = $("#novedad");
  if (banner && !seen) banner.hidden = false;
  if (banner) banner.addEventListener("click", e => {
    if (e.target.closest("[data-open-topic], .nov-x")) {
      banner.hidden = true;
      try { localStorage.setItem(NEWS_KEY, "1"); } catch (err) {}
    }
  });

  /* ---------- Navigation ---------- */
  const screens = ["inicio", "partidos", "encuestas", "temas", "voto"];
  let current = "inicio";
  function go(s, push = true) {
    if (s === "votar") s = "voto";
    if (!screens.includes(s)) s = "inicio";
    screens.forEach(x => $("#s-" + x).classList.toggle("on", x === s));
    $$("nav [data-go]").forEach(b => b.dataset.go === s ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current"));
    window.scrollTo(0, 0);
    if (push) history.pushState({ screen: s }, "", "#" + s);
    current = s;
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b) go(b.dataset.go); });
  window.addEventListener("popstate", e => {
    const st = e.state || {};
    if (sheet.classList.contains("open") && !st.party) closeParty();
    if (st.party) openParty(st.party, false);
    else if (st.screen && st.screen !== current) go(st.screen, false);
  });
  const h0 = location.hash.slice(1);
  if (h0.startsWith("partido-")) { go("partidos", false); history.replaceState({ screen: "partidos" }, "", "#partidos"); openParty(h0.slice(8)); }
  else if (h0 === "temas-discapacidad") { go("inicio", false); history.replaceState({ screen: "inicio" }, "", "#inicio"); openTopic("discapacidad"); }
  else { go(h0 || "inicio", false); history.replaceState({ screen: current }, "", "#" + current); }

  const top = $("#top");
  addEventListener("scroll", () => top.classList.toggle("scrolled", scrollY > 4), { passive: true });

  if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
})();
