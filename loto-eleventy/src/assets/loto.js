document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const jokerBtn = document.getElementById("joker-btn");
  const resetBtn = document.getElementById("reset-btn");
  const drawResultEl = document.getElementById("draw-result");
  const historyListEl = document.getElementById("history-list");
  const statsEl = document.getElementById("stats");
  const ctx = document.getElementById("statsChart").getContext("2d");

  let history = JSON.parse(localStorage.getItem("lotoHistory")) || [];
  let stats = {};
  let drawDone = false;

  function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  function recordHistory(newDraw) {
    const timestamp = new Date();
    history.unshift({ draw: newDraw, timestamp });
    if (history.length > 10) history = history.slice(0, 10);
    localStorage.setItem("lotoHistory", JSON.stringify(history));
    updateHistory();
    updateStats();
  }

  function updateHistory() {
    if (history.length === 0) {
      historyListEl.innerHTML = "<p>Nu există extrageri.</p>";
      return;
    }

    const entry = history[0]; // doar ultima extragere
    historyListEl.innerHTML = `
      <div class="history-entry">
        <p style="font-weight: bold;">${entry.draw.join(" - ")}</p>
        <p style="font-size: 0.8rem; color: #718096;">${new Date(entry.timestamp).toLocaleString()}</p>
      </div>
    `;
  }

  function updateStats() {
    stats = {};
    history.forEach((entry) => {
      entry.draw.forEach((num) => {
        stats[num] = (stats[num] || 0) + 1;
      });
    });
    displayStats();
    updateChart();
  }

  function displayStats() {
    statsEl.innerHTML = Object.entries(stats)
      .map(
        ([num, count]) => `
        <p>
          Numărul ${num} a fost extras de 
          <span style="font-weight: bold; color: ${count > 5 ? 'red' : 'green'}">
            ${count}
          </span> ori.
        </p>`
      )
      .join("");
  }

  function updateChart() {
    const labels = Object.keys(stats);
    const data = Object.values(stats);

    window.chart.data.labels = labels;
    window.chart.data.datasets[0].data = data;
    window.chart.update();
  }

  drawBtn.addEventListener("click", () => {
    if (drawDone) return;
    const newDraw = generateNumbers();
    drawResultEl.innerHTML = newDraw.join(" - ");
    recordHistory(newDraw);
    drawDone = true;
  });

  jokerBtn.addEventListener("click", () => {
    if (drawDone) return;
    const newDraw = generateNumbers();
    const joker = Math.floor(Math.random() * 10) + 1;
    drawResultEl.innerHTML = `${newDraw.join(" - ")}<br><span style="font-size:1.125rem; color:#805ad5; font-weight:bold;">Joker: ${joker}</span>`;
    recordHistory(newDraw);
    drawDone = true;
  });

  resetBtn.addEventListener("click", () => {
    history = [];
    stats = {};
    localStorage.removeItem("lotoHistory");
    drawResultEl.innerHTML = "";
    historyListEl.innerHTML = "";
    statsEl.innerHTML = "";
    window.chart.data.labels = [];
    window.chart.data.datasets[0].data = [];
    window.chart.update();
    drawDone = false;
  });

  window.chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Frecvența numerelor",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => ` Extras de ${context.raw} ori`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  });

  // Nu afișa istoric la load, doar update pentru chart & stats
  updateStats();
});
