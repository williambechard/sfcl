import { Card, CardBody, Tab, Tabs } from "@nextui-org/react"
import { CardRow } from "../../components/CardRow/CardRow"

import { XYPlot, LineSeries, VerticalBarSeries } from "react-vis"

export const Competition = () => {
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

  return (
    <div className="bg-bg-2">
      <div className="flex flex-col p-6 h-screen ">
        <div className="flex w-full flex-col  h-screen mb-16">
          <Tabs aria-label="Options" placement={"start"}>
            <Tab key="leaderBoard" title="Leader Board">
              <Card>
                <CardBody>
                  <XYPlot height={300} width={300}>
                    <VerticalBarSeries data={data} barWidth={0.75} />
                  </XYPlot>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="teams" title="Teams">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="members" title="Members">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
