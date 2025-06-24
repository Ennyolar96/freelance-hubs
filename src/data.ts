import type { Site } from "./interface";
import * as img from "./assets";

export const sites: Site[] = [
  {
    id: 1,
    name: "Upwork",
    url: "https://www.upwork.com/",
    categories: ["design", "writing", "development"],
    image: img.upwork,
  },
  {
    id: 2,
    name: "Fiverr",
    url: "https://www.fiverr.com/",
    categories: ["design", "writing", "development"],
    image: img.fiverr,
  },
  {
    id: 3,
    name: "Toptal",
    url: "https://www.toptal.com/",
    categories: ["development"],
    image: img.toptal,
  },
  {
    id: 4,
    name: "99designs",
    url: "https://99designs.com/",
    categories: ["design"],
    image: img.Design99,
  },
  {
    id: 5,
    name: "Dribbble",
    url: "https://dribbble.com/jobs",
    categories: ["Design"],
    image: img.Dribble,
  },
  {
    id: 6,
    name: "Contently",
    url: "https://contently.com/",
    categories: ["writing"],
    image: img.Contently,
  },
  {
    id: 7,
    name: "Guru",
    url: "https://www.guru.com/",
    categories: ["design", "development"],
    image: img.guru,
  },
  {
    id: 8,
    name: "WriterAccess",
    url: "https://www.writeraccess.com/",
    categories: ["Writing"],
    image: img.writeAccess,
  },
  {
    id: 9,
    name: "Freelancer.com",
    url: "https://www.freelancer.com",
    categories: ["Design", "Writing", "Development"],
    image: img.freelance,
  },
  {
    id: 10,
    name: "PeoplePerHour",
    url: "https://www.peopleperhour.com",
    categories: ["Design", "Writing", "Development"],
    image: img.peoplePerHour,
  },
  {
    id: 11,
    name: "ProBlogger Jobs",
    url: "https://problogger.com/jobs/",
    categories: ["Writing"],
    image: img.proBlogger,
  },
  {
    id: 12,
    name: "We Work Remotely",
    url: "https://weworkremotely.com/",
    categories: ["Design", "Development"],
    image: img.weWorkRemotely,
  },
];
