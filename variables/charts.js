export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

export const pieChartOptions = {
  labels: ["Your files", "System", "Empty"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
  },
};

export const pieChartData = [63, 25, 12];
//"#B469EE", "#FFBEAE", "#9ED9BB", "#79D2FF"
export const trafficData = [
  {
    name: "Facebook",
    data: [10000, 32000, 13000, 31000, 30000, 32000, 16000],
    color: "#B469EE",
  },
  {
    name: "X",
    data: [40000, 25000, 9000, 25000, 41000, 15000, 25000],
    color: "#FFBEAE",
  },
  {
    name: "Instagram",
    data: [30000, 21000, 32000, 21000, 21000, 9000, 21000],
    color: "#9ED9BB",
  },
  {
    name: "Tiktok",
    data: [21000, 24000, 22000, 22000, 22000, 45000, 9000],
    color: "#79D2FF",
  }
];

export const trafficBarchart = {
  chart: {
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  // colors:['#ff3322','#faf']
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    theme: 'dark',
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
  },
  xaxis: {
    categories: ["Nov 10", "Nov 11", "Nov 12", "Nov 13", "Nov 14", "Nov 15", "Nov 16"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#B469EE", "#FFBEAE", "#9ED9BB", "#79D2FF"],
  },
  legend: {
    show: false,
  },
  colors: ["#B469EE", "#FFBEAE", "#9ED9BB", "#79D2FF"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 5
    },
  },
};

export const avgOverviewChartData = [
  {
    name: "Impression",
    data: [50, 64, 48, 66, 49, 68, 33],
    color: "#C386F1",
  }
];

export const avgOverviewChartOption = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
  },
  grid: {
    show: true,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500"
      },
    },
    type: "text",
    range: undefined,
    categories: ['Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16'],
    show: false,
  },

  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },
};

export const followerTrendChartOption = {
  chart: { background: 'transparent', stacked: false, toolbar: { show: false } },
  colors: ["#B469EE"],
  dataLabels: { enabled: false },
  fill: { opacity: 1, type: 'solid' },
  grid: {
    borderColor: "#333",
    strokeDashArray: 2,
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
  },
  legend: { show: false },
  plotOptions: { bar: { columnWidth: '40px' } },
  stroke: { colors: ['transparent'], show: true, width: 2 },
  theme: { mode: 'dark' },
  xaxis: {
    axisBorder: { color: "#B469EE", show: true },
    axisTicks: { color: "#B469EE", show: true },
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: { offsetY: 5, style: { colors: "#888" } },
  },
  yaxis: {
    labels: {
      offsetX: -10,
      style: { colors: "#888" },
    },
  },
}