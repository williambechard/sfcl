import { supabase } from "../../db/supabaseClient"

// Function to restructure competition data
const restructureCompetitionData = (data: any) => {
  return data.map((competition: any) => ({
    ...competition,
    competitionTeams: competition.competitionTeams.map((team: any) => ({
      id: team.id,
      compID: team.compID,
      teamID: team.teamID,
      name: team.teams.name,
      points: team.teams.points,
      members: team.teams.members,
    })),
  }))
}

export const getCompetitionData = async () => {
  try {
    // Fetch data from competitions table, including competitionTeams, teams, and users (members)
    const { data, error, status } = await supabase.from("competitions").select(`
        *,
        competitionTeams (
          *,
          teams (
            *,
            members (
              *
            )
          )
        )
      `)

    if (error) {
      console.error("Error fetching competition data:", error)
      return { data: [], error, status }
    }

    // Restructure the data
    const restructuredData = restructureCompetitionData(data)
    console.log("Competition data with teams and members:", restructuredData)

    return { data: restructuredData, error, status }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { data: [], error, status: 500 }
  }
}
