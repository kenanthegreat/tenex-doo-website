export const projects = [
  {
    title: "Miniranje i iskop za apartmane na Bjelašnici",
    category: "Iskopi i miniranje",
    location: "Bjelašnica",
    description: "Priprema terena i iskop za temelje apartmanskih objekata.",
    image: "/miniranje-iskop-bjelasnica.jpg",
  },
  {
    title: "Čišćenje na hidrocentrali u Trnovu",
    category: "Čišćenje terena",
    location: "Trnovo",
    description: "Uklanjanje materijala i uređenje radne zone.",
    image: "/ciscenje-hidrocentrala-trnovo.jpg",
  },
  {
    title: "Uređivanje lokacije za parking na Stupu",
    category: "Uređenje terena",
    location: "Stup, Sarajevo",
    description: "Nivelacija i priprema površine za parking.",
    image: "/uredjivanje-parking-stup.jpg",
  },
  {
    title: "Iskop za stambeni objekat na Grbavici",
    category: "Iskopi",
    location: "Grbavica, Sarajevo",
    description: "Iskop i priprema gradilišta za stambeni objekat.",
    image: "/iskop-stambeni-grbavica.jpg",
  },
] as const

export const servicePages = [
  {
    slug: "iskopi-sarajevo",
    title: "Iskopi i priprema terena u Sarajevu",
    shortTitle: "Iskopi i priprema terena",
    description: "Iskop temelja, nivelacija i odvoz materijala uz procjenu lokacije i jasan plan izvođenja.",
    image: "/excavator-digging-construction-site-professional.jpg",
    benefits: ["Iskop temelja i građevinskih jama", "Nivelacija i priprema podloge", "Utovar i odvoz iskopanog materijala", "Rad na pristupačnim i zahtjevnim lokacijama"],
  },
  {
    slug: "prevoz-materijala",
    title: "Prevoz materijala i odvoz šuta",
    shortTitle: "Prevoz materijala",
    description: "Organizovan dovoz i odvoz materijala za gradilišta u Sarajevu i širem području BiH.",
    image: "/dump-truck-construction-transporting-gravel.jpg",
    benefits: ["Dostava agregata i nasipnog materijala", "Odvoz šuta i zemlje", "Usklađivanje termina s dinamikom gradilišta", "Transport za manje i veće zahvate"],
  },
  {
    slug: "rusenje-objekata",
    title: "Rušenje objekata i uklanjanje materijala",
    shortTitle: "Rušenja i uklanjanje",
    description: "Kontrolisano rušenje, sortiranje i uklanjanje materijala uz pripremu lokacije za narednu fazu radova.",
    image: "/controlled-demolition-heavy-machinery-building.jpg",
    benefits: ["Planiranje redoslijeda radova", "Mašinsko rušenje i uklanjanje", "Sortiranje i odvoz materijala", "Čišćenje i predaja lokacije"],
  },
  {
    slug: "niskogradnja-sarajevo",
    title: "Niskogradnja u Sarajevu",
    shortTitle: "Niskogradnja",
    description: "Priprema podloge, uređenje pristupa, odvodnja i zemljani radovi za privatne i poslovne projekte.",
    image: "/road-construction-asphalt-heavy-machinery.jpg",
    benefits: ["Priprema i stabilizacija podloge", "Uređenje pristupnih površina", "Zemljani radovi i odvodnja", "Finalno nivelisanje terena"],
  },
] as const

export type ServicePage = (typeof servicePages)[number]
