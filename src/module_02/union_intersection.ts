type NoobDeveloper = {
    name: string
}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}
// it will the name value fron noobdeveloper

const newDeveloper: NoobDeveloper | JuniorDeveloper =
{
    name: 'juhi',
    experience: 1,
    expertise: 'kichu na'
}

enum Level {
    junior = "junior",
    mid = "mid",
    senior = "senior"
}

type NextDeveloper = JuniorDeveloper & {
    leadershipExpe: number,
    // level: "junior" | "mid" | "senior",
    level: Level
}

const nextlevelDeveloper: NextDeveloper = {
    name: 'dipa',
    expertise: "jani na",
    experience: 1,
    leadershipExpe: 0,
    level: Level.senior
}