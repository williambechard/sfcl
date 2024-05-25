import React from "react"

const Leaderboard = () => {
  return null
}

/*
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react"

import { CardRow } from "../../components/CardRow/CardRow"
import {
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LabelSeries,
} from "react-vis"
import { useTheme } from "../../hooks/useTheme"
import { useContext, useMemo } from "react"
import { ThemeContext } from "../../hooks/useTheme"

export const Leaderboard = () => {
  const theme = useContext(ThemeContext)

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ]

  const barColor = () => {
    switch (theme) {
      case "dark":
        return "#51bcf6"
      case "light":
        return "#0d2540"
      default:
        return "#51bcf6"
    }
  }

  const axisColor = () => {
    switch (theme) {
      case "dark":
        return "#ADDDE1"
      case "light":
        return "#6b6b76"
      default:
        return "#ADDDE1"
    }
  }

  return (
    <Card className={"h-96 bg-bg-1"}>
      <CardBody>
        <Card className={"bg-bg-2"}>
          <CardBody>
            <XYPlot height={300} width={400}>
              <XAxis
                style={{
                  line: { stroke: axisColor() },
                  text: {
                    stroke: "none",
                    fill: "#6b6b76",
                    fontWeight: 600,
                  },
                }}
              />
              <YAxis
                style={{
                  line: { stroke: axisColor() },
                  ticks: { stroke: axisColor() },
                  text: {
                    stroke: "none",
                    fill: "#6b6b76",
                    fontWeight: 600,
                  },
                }}
              />
              <VerticalBarSeries data={data} barWidth={0.75} color={barColor()} />
              <LabelSeries />
            </XYPlot>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}


  <XYPlot height={400} width={800}>
                    <VerticalBarSeries data={data} barWidth={0.75} />
                  </XYPlot>
 */
