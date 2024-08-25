import React, { useState } from "react"
import {
  Tabs,
  Card,
  Table,
  Tab,
  CardBody,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Accordion,
  AccordionItem,
} from "@nextui-org/react"
import { Competition, CompetitionTeam, Member } from "../../../types/competition"

// Define the interface for your props
interface CompetitionTabsProps {
  competitionData: Competition[]
}

const CompetitionTabs: React.FC<CompetitionTabsProps> = ({ competitionData }) => {
  // State to manage which row is expanded
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  // Toggle row expansion
  const handleRowClick = (rowId: number) => {
    setExpandedRow(expandedRow === rowId ? null : rowId)
  }

  return (
    <Tabs aria-label="Competition Years Tab Navigator" variant={"solid"}>
      {competitionData.map((competition: Competition) => (
        <Tab
          key={competition.id}
          title={`${competition.year}`}
          aria-label={`Competition Year ${competition.year}`}
        >
          <Table
            aria-label={`Teams for ${competition.year}`}
            style={{ minWidth: "100%" }}
            isStriped
            className={" border-4 border-foreground-200 rounded-2xl"}
          >
            <TableHeader>
              <TableColumn>Name</TableColumn>
              <TableColumn># Members</TableColumn>
              <TableColumn>Ranking</TableColumn>
              <TableColumn>Members</TableColumn>
            </TableHeader>
            <TableBody>
              {competition.competitionTeams.map((team: CompetitionTeam) => (
                <TableRow key={team.id}>
                  <TableCell>{team.name}</TableCell>
                  <TableCell>{team.members.length}</TableCell>
                  <TableCell>{team.points}</TableCell>
                  <TableCell>
                    <Accordion className={"border-none"}>
                      <AccordionItem
                        aria-label={`Members of ${team.name}`}
                        title={`Team ${team.name} members`}
                        key={team.id}
                        style={{ cursor: "pointer" }}
                        className={"border-none"}
                      >
                        <Table
                          aria-label={`Members of ${team.name}`}
                          style={{ minWidth: "100%" }}
                          className={"border-4 border-foreground-200 rounded-2xl"}
                          isStriped
                        >
                          <TableHeader>
                            <TableColumn>First Name</TableColumn>
                            <TableColumn>Last Name</TableColumn>
                            <TableColumn>Military</TableColumn>
                          </TableHeader>
                          <TableBody>
                            {team.members.map((member: Member) => (
                              <TableRow key={member.id}>
                                <TableCell>{member.fName}</TableCell>
                                <TableCell>{member.lName}</TableCell>
                                <TableCell>
                                  {member.isMilitary ? "Yes" : "No"}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AccordionItem>
                    </Accordion>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Tab>
      ))}
    </Tabs>
  )
}

export default CompetitionTabs
