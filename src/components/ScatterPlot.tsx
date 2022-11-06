import ReactEcharts from "echarts-for-react"
import { dataListProps } from "../types"

const ScatterPlot = (props: dataListProps) => {
  const tempData = props.data.sort((a, b) => a["Color intensity"] - b["Color intensity"])
  const Intensities: number[] = tempData.map((item) => {
    return item['Color intensity'];
  })
  const Hues: number[] = tempData.map((item) => {
    return item['Hue'];
  })

  return (
    <ReactEcharts
      option={{
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
          type: "category",
          data: Intensities,
          axisLabel: {
            show: true,
            interval: 15
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: true,
          name: "Hues",
          nameLocation: "middle",
          nameTextStyle: {
            padding: [10, 10, 10, 10]
          }
        },
        series: [
          {
            data: Hues,
            type: "scatter",
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

export default ScatterPlot