const startDate = new Date("2024-04-24");
const endDate = new Date("2026-12-31");

const countries = [
  { name: "Greece", maxStay: 90, climate: [{ start: "05-01", end: "06-30" }] },
  {
    name: "Turkey",
    maxStay: 90,
    climate: [
      { start: "04-01", end: "05-31" },
      { start: "09-01", end: "10-31" },
    ],
  },
  {
    name: "Georgia",
    maxStay: 365,
    climate: [
      { start: "05-01", end: "06-30" },
      { start: "09-01", end: "10-31" },
    ],
  },
  {
    name: "Armenia",
    maxStay: 180,
    climate: [{ start: "06-01", end: "10-15" }],
  },
  {
    name: "Azerbaijan",
    maxStay: 30,
    climate: [
      { start: "05-01", end: "05-31" },
      { start: "10-01", end: "10-31" },
    ],
  },
  {
    name: "Iran",
    maxStay: 30,
    climate: [
      { start: "04-01", end: "04-30" },
      { start: "10-01", end: "10-31" },
    ],
  },
  {
    name: "Turkmenistan",
    maxStay: 30,
    climate: [
      { start: "04-01", end: "04-30" },
      { start: "10-01", end: "10-31" },
    ],
  },
  {
    name: "Kazakhstan",
    maxStay: 30,
    climate: [
      { start: "04-15", end: "05-15" },
      { start: "09-15", end: "10-15" },
    ],
  },
  {
    name: "Tajikistan",
    maxStay: 45,
    climate: [
      { start: "04-01", end: "05-31" },
      { start: "09-01", end: "10-31" },
    ],
  },
  {
    name: "Kyrgyzstan",
    maxStay: 60,
    climate: [
      { start: "04-01", end: "05-31" },
      { start: "09-01", end: "10-31" },
    ],
  },
  {
    name: "Pakistan",
    maxStay: 90,
    climate: [{ start: "10-01", end: "03-31" }],
  },
  { name: "India", maxStay: 90, climate: [{ start: "10-01", end: "03-31" }] },
  {
    name: "Nepal",
    maxStay: 90,
    climate: [
      { start: "03-01", end: "04-30" },
      { start: "10-01", end: "12-31" },
    ],
  },
  {
    name: "Sri Lanka",
    maxStay: 30,
    climate: [
      { start: "12-01", end: "03-31" },
      { start: "05-01", end: "09-30" },
    ],
  },
  {
    name: "Bangladesh",
    maxStay: 30,
    climate: [{ start: "11-01", end: "03-31" }],
  },
  { name: "Myanmar", maxStay: 28, climate: [{ start: "11-01", end: "02-28" }] },
  {
    name: "Thailand",
    maxStay: 60,
    climate: [{ start: "11-01", end: "02-28" }],
  },
  {
    name: "Cambodia",
    maxStay: 30,
    climate: [{ start: "12-01", end: "02-28" }],
  },
  { name: "Laos", maxStay: 30, climate: [{ start: "11-01", end: "02-28" }] },
  {
    name: "Vietnam",
    maxStay: 45,
    climate: [
      { start: "03-01", end: "04-30" },
      { start: "09-01", end: "11-30" },
    ],
  },
  {
    name: "Malaysia",
    maxStay: 90,
    climate: [
      { start: "12-01", end: "03-31" },
      { start: "04-01", end: "10-31" },
    ],
  },
  {
    name: "Indonesia",
    maxStay: 30,
    climate: [{ start: "05-01", end: "09-30" }],
  },
  {
    name: "Philippines",
    maxStay: 30,
    climate: [{ start: "12-01", end: "04-30" }],
  },
  {
    name: "Taiwan",
    maxStay: 90,
    climate: [
      { start: "02-01", end: "04-30" },
      { start: "10-01", end: "12-15" },
    ],
  },
  {
    name: "South Korea",
    maxStay: 90,
    climate: [
      { start: "04-01", end: "05-31" },
      { start: "09-01", end: "11-30" },
    ],
  },
  {
    name: "Japan",
    maxStay: 90,
    climate: [
      { start: "03-25", end: "04-30" },
      { start: "10-01", end: "11-30" },
    ],
  },
  {
    name: "China",
    maxStay: 30,
    climate: [
      { start: "04-01", end: "05-31" },
      { start: "09-01", end: "10-31" },
    ],
  },
  {
    name: "Mongolia",
    maxStay: 30,
    climate: [{ start: "07-01", end: "08-31" }],
  },
  { name: "Russia", maxStay: 30, climate: [{ start: "06-01", end: "08-31" }] },
  { name: "Alaska", maxStay: 90, climate: [{ start: "06-01", end: "08-31" }] },
  { name: "Canada", maxStay: 180, climate: [{ start: "06-01", end: "08-31" }] },
  { name: "Mexico", maxStay: 180, climate: [{ start: "12-01", end: "04-30" }] },
  {
    name: "Nicaragua",
    maxStay: 90,
    climate: [{ start: "12-01", end: "04-30" }],
  },
  { name: "Cuba", maxStay: 30, climate: [{ start: "12-01", end: "02-28" }] },
  {
    name: "Costa Rica",
    maxStay: 90,
    climate: [{ start: "12-01", end: "04-30" }],
  },
  {
    name: "Colombia",
    maxStay: 90,
    climate: [{ start: "12-01", end: "03-31" }],
  },
  {
    name: "Venezuela",
    maxStay: 90,
    climate: [{ start: "12-01", end: "04-30" }],
  },
  { name: "Ecuador", maxStay: 90, climate: [{ start: "06-01", end: "09-30" }] },
  { name: "Peru", maxStay: 90, climate: [{ start: "05-01", end: "09-30" }] },
  { name: "Bolivia", maxStay: 90, climate: [{ start: "06-01", end: "08-31" }] },
  { name: "Chile", maxStay: 90, climate: [{ start: "12-01", end: "02-28" }] },
  {
    name: "Argentina",
    maxStay: 90,
    climate: [
      { start: "10-01", end: "11-30" },
      { start: "12-01", end: "02-28" },
    ],
  },
  {
    name: "Paraguay",
    maxStay: 90,
    climate: [{ start: "06-01", end: "08-31" }],
  },
  { name: "Uruguay", maxStay: 90, climate: [{ start: "12-01", end: "03-31" }] },
  { name: "Brazil", maxStay: 90, climate: [{ start: "05-01", end: "09-30" }] },
];

const msPerDay = 24 * 60 * 60 * 1000;
const svg = d3.select("#timeline");
const margin = { top: 60, right: 40, bottom: 60, left: 160 };
const rowHeight = 32;
const innerHeight = countries.length * rowHeight;
const width = Math.max(2200, ((endDate - startDate) / msPerDay) * 4); // 4px per day approx
svg
  .attr("width", width + margin.left + margin.right)
  .attr("height", innerHeight + margin.top + margin.bottom);

const x = d3
  .scaleTime()
  .domain([startDate, endDate])
  .range([margin.left, width + margin.left]);

// Month axis (top)
svg
  .append("g")
  .attr("class", "axis")
  .attr("transform", `translate(0,${margin.top - 25})`)
  .call(
    d3
      .axisTop(x)
      .ticks(d3.timeMonth.every(1))
      .tickFormat(d3.timeFormat("%b %Y"))
  )
  .selectAll("text")
  .style("font-size", "12px")
  .attr("dy", "-0.4em");

// Week axis (bottom)
svg
  .append("g")
  .attr("class", "axis")
  .attr("transform", `translate(0,${innerHeight + margin.top + 10})`)
  .call(
    d3
      .axisBottom(x)
      .ticks(d3.timeWeek.every(1))
      .tickFormat((d) => "W" + d3.timeFormat("%U")(d))
  )
  .selectAll("text")
  .style("font-size", "10px")
  .attr("dy", "0.7em")
  .attr("text-anchor", "middle");

// Vertical gridlines for each week (light gray)
svg
  .append("g")
  .attr("class", "week-grid")
  .selectAll("line")
  .data(x.ticks(d3.timeWeek.every(1)))
  .enter()
  .append("line")
  .attr("x1", (d) => x(d))
  .attr("x2", (d) => x(d))
  .attr("y1", margin.top)
  .attr("y2", innerHeight + margin.top)
  .attr("stroke", "#f1f1f1")
  .attr("stroke-width", 1);

// Zebra row background
svg
  .append("g")
  .attr("class", "row-zebra")
  .selectAll("rect")
  .data(countries)
  .enter()
  .append("rect")
  .attr("x", margin.left) // inizia alla timeline
  .attr("y", (d, i) => margin.top + i * rowHeight)
  .attr("width", width) // tutta la larghezza
  .attr("height", rowHeight)
  .attr("fill", (d, i) => (i % 2 ? "#f1f1f1" : "transparent"));

// Country labels
svg
  .selectAll(".country-label")
  .data(countries)
  .enter()
  .append("text")
  .attr("class", "country-label")
  .attr("x", margin.left - 10)
  .attr("y", (d, i) => margin.top + i * rowHeight + rowHeight / 2)
  .text((d) => d.name);

// Tooltip
const tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

function showTooltip(html, xPos, yPos) {
  tooltip
    .html(html)
    .style("left", `${xPos + 15}px`)
    .style("top", `${yPos + 15}px`)
    .transition()
    .duration(200)
    .style("opacity", 1);
}
function hideTooltip() {
  tooltip.transition().duration(200).style("opacity", 0);
}

// For each country we will compute entry/exit initial
let current = new Date(startDate);
countries.forEach((c, i) => {
  c.entry = new Date(current);
  c.exit = new Date(+current + 29 * msPerDay);
  current = new Date(+current + 20 * msPerDay); // shift 20 days per country
});

// Draw climate rectangles (repeat yearly)
countries.forEach((c, i) => {
  const y = margin.top + i * rowHeight + 4;
  for (let year = 2024; year <= 2026; year++) {
    c.climate.forEach((p) => {
      let s = new Date(`${year}-${p.start}`);
      let e = new Date(`${year}-${p.end}`);
      if (e < startDate || s > endDate) return;

      // ——— TAGLIO AI BORDI DELLA TIMELINE ———
      const startCrop = s < startDate ? startDate : s;
      const endCrop = e > endDate ? endDate : e;

      svg
        .append("rect")
        .attr("class", "climate-rect")
        .attr("x", x(startCrop))
        .attr("y", y)
        .attr("height", rowHeight - 8)
        .attr("width", x(endCrop) - x(startCrop))
        .attr("opacity", 0.25);
    });
  }
});

// Drag + resize behaviour for entry rectangles
const dragRect = d3
  .drag()
  .on("start", function (event, d) {
    d3.select(this).raise().attr("stroke", "#333");
  })
  .on("drag", function (event, d) {
    const dx = event.dx;
    d.x += dx;
    d3.select(this).attr("x", d.x);
    // update handle positions
    d3.select(this.parentNode)
      .selectAll(".handle")
      .filter((h) => h === d)
      .attr("x", (h, i2) => (i2 === 0 ? d.x - 4 : d.x + d.width - 4));
  })
  .on("end", function (event, d) {
    d3.select(this).attr("stroke", null);
    const newEntry = x.invert(d.x);
    const newExit = x.invert(d.x + d.width);
    d.data.entry = newEntry;
    d.data.exit = newExit;
  });

const dragHandle = d3
  .drag()
  .on("drag", function (event, d) {
    const idx = d.handleIndex; //0 left,1 right
    const minWidth = 10;
    if (idx === 0) {
      const newX = d.x + event.dx;
      const diff = d.x - newX;
      d.x = newX;
      d.width += diff;
    } else {
      d.width += event.dx;
      if (d.width < minWidth) d.width = minWidth;
    }
    d3.select(d.rect).attr("x", d.x).attr("width", d.width);
    d3.select(this).attr("x", idx === 0 ? d.x - 4 : d.x + d.width - 4);
  })
  .on("end", function (event, d) {
    const newEntry = x.invert(d.x);
    const newExit = x.invert(d.x + d.width);
    d.data.entry = newEntry;
    d.data.exit = newExit;
  });

// Create groups
const groups = svg
  .selectAll(".country-group")
  .data(countries)
  .enter()
  .append("g")
  .attr("class", "country-group")
  .attr("transform", (d, i) => `translate(0,${margin.top + i * rowHeight})`);

groups.each(function (c, i) {
  const g = d3.select(this);
  const y = 4;
  const entryX = x(c.entry);
  const width = x(c.exit) - entryX;
  // MaxStay rectangle
  const maxWidth = x(new Date(+c.entry + c.maxStay * msPerDay)) - x(c.entry);
  g.append("rect")
    .attr("class", "maxstay-rect")
    .attr("x", entryX)
    .attr("y", y)
    .attr("height", rowHeight - 8)
    .attr("width", maxWidth);

  // Entry rectangle
  const rect = g
    .append("rect")
    .attr("class", "entry-rect")
    .attr("x", entryX)
    .attr("y", y)
    .attr("height", rowHeight - 8)
    .attr("width", width)
    .on("mouseover", (event) => {
      showTooltip(
        `<strong>${c.name}</strong><br>Entry: ${d3.timeFormat("%d-%b-%Y")(
          c.entry
        )}<br>Exit: ${d3.timeFormat("%d-%b-%Y")(c.exit)}<br>Days: ${
          Math.round((c.exit - c.entry) / msPerDay) + 1
        }`,
        event.pageX,
        event.pageY
      );
    })
    .on("mouseout", hideTooltip);

  const dData = { x: entryX, width: width, rect: rect.node(), data: c };
  rect.call(dragRect, dData);

  // Handles
  [0, 1].forEach((idx) => {
    g.append("rect")
      .datum(Object.assign({}, dData, { handleIndex: idx }))
      .attr("class", "handle")
      .attr("x", idx === 0 ? entryX - 4 : entryX + width - 4)
      .attr("y", y)
      .attr("width", 8)
      .attr("height", rowHeight - 8)
      .attr("fill", "transparent")
      .call(dragHandle);
  });
});

// Log final data on key press "l"
document.body.addEventListener("keydown", (e) => {
  if (e.key === "l") {
    console.log(
      JSON.parse(
        JSON.stringify(
          countries.map((c) => ({
            name: c.name,
            entry: d3.timeFormat("%Y-%m-%d")(c.entry),
            exit: d3.timeFormat("%Y-%m-%d")(c.exit),
          }))
        )
      )
    );
  }
});
