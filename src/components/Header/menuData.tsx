import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "COMO COMEÇAR",
    path: "/start",
    newTab: false,
  },
  {
    id: 2,
    title: "COMUNIDADE",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "FORÚM",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "STREAMERS",
        path: "/streams",
        newTab: false,
      },
      {
        id: 43,
        title: "APOIO PSICOLÓGICO",
        path: "/apoio",
        newTab: false,
      },
      {
        id: 44,
        title: "TUTORIAIS",
        path: "/",
        newTab: false,
      },
    ]
  },
  {
    id: 33,
    title: "JOGOS",
    path: "/",
    newTab: false
  },
  {
    id: 3,
    title: "DENÚNCIAS",
    path: "/report",
    newTab: false,
  },
];
export default menuData;
