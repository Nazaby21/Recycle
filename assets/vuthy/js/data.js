// DataChart
const ctx = document.getElementById("barChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "អ្នកចុះឈ្មោះចូលរួមព្រឺត្តិការណ៍",
      "អ្នកចូលរួមបរិចា្ចគ",
      "អ្នកចូលរួមព្រឺត្តិការណ៍",
      "អ្នកទស្សនាវីដេអូ",
      "អត្រាលក់ចេញ",
    ],
    datasets: [
      {
        label: "ចំនួនទិន្នន័យ",
        data: [1500, 1900, 3000, 2500, 2000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Hanuman",
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "Hanuman",
            size: 13,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
          font: {
            family: "Hanuman",
            size: 13,
          },
        },
      },
    },
  },
});
