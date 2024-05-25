import { CardRow } from "../../components/CardRow/CardRow"
import { Leaderboard } from "../../components/Leaderboard/Leaderboard"
import { TeamTable } from "../../components/TeamTable/TeamTable"

export const Competition = () => {
  return (
    <div className="bg-bg-2">
      <CardRow>
        <div>
          <p className={"text-pri-1 text-xl font-extrabold"}>
            Space Force Creator's League 2024 Competition
          </p>
          <p className="text-pri-2 text-xl font-extrabold transform translate-x-[2px] -translate-y-[26px]">
            Space Force Creator's League 2024 Competition
          </p>
        </div>
      </CardRow>
      <div className="flex justify-evenly p-6 h-screen w-full">
        <div className={"w-1/3 p-2"}>
          <Leaderboard />
        </div>
        <div className={"flex-grow p-2"}>
          <TeamTable />
        </div>
      </div>
    </div>
  )
}
