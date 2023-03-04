import ReactApexChart from "react-apexcharts";

export default function LineChart() {
  const series = {
    monthDataSeries1: {
      name: [
        "Ujian 1",
        "Ujian 2",
        "Ujian 3",
        "Ujian 4",
        "Ujian 5",
        "Ujian 6",
        "Ujian 7",
        "Ujian 8",
        "Ujian 9",
        "Ujian 10",
      ],
      value: [10, 20, 45, 30, 20, 40, 25, 70, 80, 90],
    },
  };


  const state = {
    series: [
      {
        name: "Math",
        data: series.monthDataSeries1.value,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        width: 800,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        // colors: ['#a033c4'],
      },
      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left",
      },
      subtitle: {
        text: "Price Movements",
        align: "left",
      },
      labels: series.monthDataSeries1.name,
      xaxis: {
        type: "category",
      },
      yaxis: {
        opposite: true,
        min: 0,
        max: 100,
      },
      legend: {
        horizontalAlign: "left",
      },
      annotations: {
        yaxis: [
          {
            y: 70, // nilai batas
            borderColor: "#a61f31", // warna garis batas
            label: {
              borderColor: "#a61f31",
              style: {
                color: "#fff",
                background: "#a61f31",
              },
              text: "KKM",
            },
          },
        ],
      },
    },
  };

  return (
    <>
      <div id="chart" className="w-[640px] h-[330px] ">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </>
  );
}