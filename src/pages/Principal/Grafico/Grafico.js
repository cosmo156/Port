import './grafico.css'
import './graresp.css'
import ApexChart from 'react-apexcharts'



export default function Grafico() {



  const options = {

    "plotOptions": {
      "bar": {
        "borderRadius": 10
      },
      "radialBar": {
        "hollow": {
          "background": "#fff"
        },
        "dataLabels": {
          "name": {},
          "value": {},
          "total": {}
        }
      },
      "pie": {

        "donut": {
          "size": "66%",
          "labels": {
            "show": true,
            "name": {
              "fontSize": 35
            },
            "value": {
              "fontSize": 35
            },
            "total": {
              "show": true,
              "fontSize": 35,
              "color": "#FFFFFF"
            }
          }
        }
      }
    },
    "colors": [
      "#91209B",
      "#1FA49C"
    ],
    "dataLabels": {
      "enabled": false,
      "style": {
        "fontWeight": 700
      }
    },
    "fill": {
      "opacity": 10
    },
    "grid": {
      "padding": {
        "right": 0,
        "bottom": 0,
        "left": 0
      }
    },
    "labels": [
      "Custo",
      "Lucro",
    ],
    "legend": {
      "position": "right",
      "fontSize": 21,
      "offsetX": -35,
      "offsetY": 97,
      "markers": {
        "width": 20,
        "height": 20,
        "radius": 50
      },
      "itemMargin": {
        "horizontal": 0
      },

    },
    "tooltip": {
      "enabled": false,
      "onDatasetHover": {
        "highlightDataSeries": false,
      },

    },

    "chart": {
      "foreColor": '#fff'
    },

  };
 
  const series = [22, 3];


  return (

    <main>
      <ApexChart options={options} series={series} type="donut" style={{ width:'100%'}} />
    </main>
  )
}
