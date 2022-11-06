import ReactEcharts from "echarts-for-react"
import { dataListProps, dt } from "../types"

const BarGraph = (props: dataListProps) => {
  let tempData: dt = {}

  props.data.map((item) => {
    if (tempData[item['Alcohol']])
      tempData[item['Alcohol']].push(item['Malic Acid']);
    else {
      tempData[item['Alcohol']] = []
      tempData[item['Alcohol']].push(item['Malic Acid']);
    }
  })

  const avg: number[] = Object.values(tempData).map((item) => {
    return item.reduce((a, b) => a + b) / item.length
  })

  return (
    <ReactEcharts
      option={{
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
          type: "category",
          data: Object.keys(tempData),
        },
        yAxis: {
          type: "value",
          name: "Avg, Malic Acid",
          nameLocation: "middle",
          nameTextStyle: {
            padding: [10, 10, 10, 10]
          }
        },
        series: [
          {
            data: avg,
            type: "bar",
            smooth: true
          }
        ],
        tooltip: {
          trigger: "axis"
        }
      }}
      style={{ width: "100%", height: "600px" }}
    ></ReactEcharts>
  )
}

export default BarGraph