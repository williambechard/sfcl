import { CardRow } from "../../components/CardRow/CardRow"
// import { Leaderboard } from "../../components/Leaderboard/Leaderboard"
import { TeamTable } from "../../components/TeamTable/TeamTable"
import React, { useEffect, useState } from "react"
import { Event } from "../../components/EventsDisplay/EventsDisplay"
import { getCompetitionData } from "./getCompetitionData"
import CompetitionTabs from "./CompetitionTabs/CompetitionTabs"
import { Card } from "@nextui-org/react"

export const Competition = () => {
  const [competitionData, setCompetitionData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCompetitionData = async () => {
      const { data, error } = await getCompetitionData()
      if (!error) {
        setCompetitionData(data)
        setLoading(false)
        console.log("data ", data)
      } else {
        console.error("Error fetching competition data:", error)
      }
    }

    fetchCompetitionData()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div className="bg-bg-2 flex-col" style={{ height: "93.6%" }}>
      <Card className="flex-grow p-8 rounded-none">
        <CompetitionTabs competitionData={competitionData} />
      </Card>
    </div>
  )
}
