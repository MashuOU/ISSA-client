import ReactApexChart from "react-apexcharts";

export default function LineChart(props) {
  const { data } = props
  const Scoresname = data.map(each => each.category)
  const scores = data.map(each => each.value)

  const series = {
    monthDataSeries1: {
      name: Scoresname,
      value: scores,
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
        foreColor: "#fff",
        fontFamily: "montserrat"
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ['#a033c4'],
      },
      title: {
        // text: "Fundamental Analysis of Stocks",
        align: "left",
      },
      subtitle: {
        text: "Overview",
        align: "left",
      },

      grid: {
        show: false,
        borderColor: '#ccc',
        strokeDashArray: 5,
        position: 'back',
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        },
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
      {/* <div id="chart" className="grid mt-4   justify-center max-w-screen-xl mx-auto border border-red-400 "> */}
      <ReactApexChart className="border text-white border-black"
        options={state.options}
        series={state.series}
        type="area"
        height={250}
        width={340}
      />
      {/* </div> */}
    </>
  );
}