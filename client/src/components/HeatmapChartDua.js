
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

export default function Heatmap() {
  return <div id="heatmap-chart" className="pointer-events-none border border-black " ></div>;
}


window.onload = function () {
  const chartd = document.getElementById("heatmap-chart");
  const chart = new Chart(chartd, {
    title: "Contoh Heatmap Chart",
    data: {
      dataPoints: {
        // 1577836800: 1, //alfa
        // '1577923200': 20,  
        // '1578009600': 30,
        // '1578096000': 40,
        // '1578182400': 50,
        // '1578268800': 60,
        '1578355200': 1, // alfa
        '1578441600': 50, // // sakit
        '1578528000': 70, // izin
        '1578614400': 100, //hadir
        // '1578700800': 49,
        // '1578787200': 81,
        // '1578873600': 55,
        // '1578960000': 3,
        // '1579046400': 42,
        // '1579132800': 91,
        // '1579219200': 85,
        // '1579305600': 69,
        // '1579392000': 20,
        // '1579478400': 14,
        // '1579564800': 67
      },
      start: new Date("2020-01-01T00:00:00.000Z"),
      end: new Date("2020-12-31T23:59:59.000Z"),
    },
    type: "heatmap",
    radius: 2,
    //         empty      alfa       sakit      izin       hadir
    colors: ['#d9d9d9', '#c7323e', '#73b3f3', '#e6cc4e', '#17459e'],
  });
}