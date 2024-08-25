export interface Competition {
  id: number
  year: string
  winner: Team
  competitionTeams: CompetitionTeam[]
}

export interface CompetitionTeam {
  id: number
  compID: number
  teamID: number
  teams: Team
  name: string
  members: Member[]
  points: number
}

export interface Team {
  id: number
  name: string
  points: number
  competition: Competition
  members: Member[]
}

export interface Member {
  id: number
  fName: string
  lName: string
  isMilitary: boolean
  location: string
  team: Team
}
