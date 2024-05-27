function toggleReport() {
  var div = document.getElementById("reportDiv");
  var dropdownImg = document.querySelector(".dropdown1");

  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
    dropdownImg.classList.add("rotate");
  } else {
    div.style.display = "none";
    dropdownImg.classList.remove("rotate");
  }
}

function toggleUser() {
  var div = document.getElementById("userDiv");
  var dropdownImg = document.querySelector(".dropdown2");

  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
    dropdownImg.classList.add("rotate");
  } else {
    div.style.display = "none";
    dropdownImg.classList.remove("rotate");
  }
}

var options = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 500, 87, 89],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: "#ff0000",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    title: {
      text: "Sales in crore",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
  series: [
    {
      name: "Total sales",
      data: [44, 55, 57, 56, 61, 58, 60],
    },
    {
      name: "Active Inventory",
      data: [76, 85, 101, 98, 87, 105, 91],
    },
    {
      name: "Total  Transaction",
      data: [35, 41, 36, 26, 45, 48, 52],
    },
    {
      name: "Total  Purchase",
      data: [35, 41, 36, 26, 45, 48, 52],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["#89CFF0", "transparent"],
  },
  xaxis: {
    categories: [
      "Priyank Sharma",
      "Rohit Tyagi",
      "Varun Mishra",
      "Rohit Tyagi",
      "Priyank Sharma",
      "Varun Mishra",
      "Rohit Tyagi",
    ],
  },
  yaxis: {
    title: {
      text: "Value",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "Value",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

var options = {
  series: [44, 55, 13, 43],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Unknown", "18-28", "28-40", "40+"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

var options = {
  series: [44, 55, 13, 43],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Unknown", "Male", "Female", "Transgender"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();

var options = {
  series: [
    {
      name: "Rejected",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 87, 89],
    },
    {
      name: "Modify",
      data: [87, 41, 35, 51, 65, 62, 69, 91, 48, 400, 87, 89],
    },
    {
      name: "Approved",
      data: [120, 41, 75, 53, 55, 26, 50, 91, 81, 200, 78, 98],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: ["#ff0000", "#000", "#bf00ff"],
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    title: {
      text: "Sales in crore",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart-promotion"), options);
chart.render();

var options = {
  series: [
    {
      name: "Sales",
      data: [35, 41, 36, 26, 45, 48, 52],
    },
    {
      name: " Purchase",
      data: [35, 41, 36, 26, 45, 48, 52],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["#89CFF0", "transparent"],
  },
  xaxis: {
    categories: ["Sold", "Purchase"],
  },
  yaxis: {
    title: {
      text: "Value",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart-invent"), options);
chart.render();
