import { Community } from "@/lib/types/community";

export const COMMUNITIES: Community[] = [
  {
    id: "andalucia",
    name: "Andalucía",
    capital: {
      name: "Sevilla",
      population: 684234,
      funFact:
        "Aquí se celebra la famosa Feria de Abril y es donde nació el flamenco.",
    },
    provinces: [
      "Almería",
      "Cádiz",
      "Córdoba",
      "Granada",
      "Huelva",
      "Jaén",
      "Málaga",
      "Sevilla",
    ],
    funFact:
      "Es la comunidad autónoma más poblada de España y posee tres Patrimonios de la Humanidad en Córdoba.",
    regionType: "mainland",
  },
  {
    id: "aragon",
    name: "Aragón",
    capital: {
      name: "Zaragoza",
      population: 675301,
      funFact:
        "Es conocida por la Basílica del Pilar y el río Ebro, uno de los más caudalosos de España.",
    },
    provinces: ["Huesca", "Teruel", "Zaragoza"],
    funFact: "Tiene uno de los desiertos más áridos de Europa: los Monegros.",
    regionType: "mainland",
  },
  {
    id: "asturias",
    name: "Asturias",
    capital: {
      name: "Oviedo",
      population: 216000,
      funFact:
        "Es famosa por su sidra natural, quesos y paisajes verdes espectaculares.",
    },
    provinces: ["Asturias"],
    funFact:
      "Es el único Principado de España con su propio heredero real: la Princesa de Asturias.",
    regionType: "mainland",
  },
  {
    id: "cantabria",
    name: "Cantabria",
    capital: {
      name: "Santander",
      population: 172000,
      funFact:
        "Cuenta con la cueva de Altamira, conocida como la 'Capilla Sixtina del arte rupestre'.",
    },
    provinces: ["Cantabria"],
    funFact:
      "Su costa está salpicada de pueblos marineros con encanto como Comillas o San Vicente de la Barquera.",
    regionType: "mainland",
  },
  {
    id: "castilla_leon",
    name: "Castilla y León",
    capital: {
      name: "Valladolid",
      population: 298000,
      funFact:
        "Aquí se firmaron las primeras leyes contra el maltrato animal en 1272.",
    },
    provinces: [
      "Ávila",
      "Burgos",
      "León",
      "Palencia",
      "Salamanca",
      "Segovia",
      "Soria",
      "Valladolid",
      "Zamora",
    ],
    funFact:
      "Es la comunidad más extensa de España y tiene más castillos que ningún otro lugar del país.",
    regionType: "mainland",
  },
  {
    id: "castilla_mancha",
    name: "Castilla-La Mancha",
    capital: {
      name: "Toledo",
      population: 85400,
      funFact:
        "Fue capital de España y destaca por su herencia cristiana, judía y musulmana.",
    },
    provinces: ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"],
    funFact:
      "Inspiró la novela de Don Quijote, considerada una de las mejores obras literarias de la historia.",
    regionType: "mainland",
  },
  {
    id: "cataluna",
    name: "Cataluña",
    capital: {
      name: "Barcelona",
      population: 1620000,
      funFact: "La Sagrada Familia lleva en construcción más de 140 años.",
    },
    provinces: ["Barcelona", "Girona", "Lleida", "Tarragona"],
    funFact:
      "Tiene una de las economías más fuertes de España y acoge el Mobile World Congress.",
    regionType: "mainland",
  },
  {
    id: "extremadura",
    name: "Extremadura",
    capital: {
      name: "Mérida",
      population: 59174,
      funFact:
        "Fue una de las ciudades más importantes del Imperio romano en Hispania.",
    },
    provinces: ["Cáceres", "Badajoz"],
    funFact:
      "Es tierra de conquistadores como Hernán Cortés y Francisco Pizarro.",
    regionType: "mainland",
  },
  {
    id: "galicia",
    name: "Galicia",
    capital: {
      name: "Santiago de Compostela",
      population: 97000,
      funFact: "Aquí finaliza el famoso Camino de Santiago.",
    },
    provinces: ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
    funFact:
      "Su costa es conocida como la 'Costa da Morte' por sus numerosos naufragios.",
    regionType: "mainland",
  },
  {
    id: "la_rioja",
    name: "La Rioja",
    capital: {
      name: "Logroño",
      population: 150000,
      funFact: "Su vino tiene denominación de origen reconocida mundialmente.",
    },
    provinces: ["La Rioja"],
    funFact:
      "Cuenta con uno de los monasterios más antiguos donde se escribieron las primeras palabras en castellano.",
    regionType: "mainland",
  },
  {
    id: "madrid",
    name: "Madrid",
    capital: {
      name: "Madrid",
      population: 3266000,
      funFact:
        "Es la ciudad más alta de Europa (a 667 metros sobre el nivel del mar).",
    },
    provinces: ["Madrid"],
    funFact: "Es sede de la monarquía y del gobierno central de España.",
    regionType: "mainland",
  },
  {
    id: "murcia",
    name: "Murcia",
    capital: {
      name: "Murcia",
      population: 460000,
      funFact: "Fundada por los árabes como Mursiya en el año 825.",
    },
    provinces: ["Murcia"],
    funFact: "Es conocida por sus huertas, limones y fiestas de primavera.",
    regionType: "mainland",
  },
  {
    id: "navarra",
    name: "Navarra",
    capital: {
      name: "Pamplona",
      population: 201000,
      funFact: "Su fiesta de San Fermín atrae a miles de turistas cada año.",
    },
    provinces: ["Navarra"],
    funFact: "Es una de las comunidades forales, con régimen fiscal propio.",
    regionType: "mainland",
  },
  {
    id: "islas_baleares",
    name: "Islas Baleares",
    capital: {
      name: "Palma de Mallorca",
      population: 409661,
      funFact:
        "Tiene uno de los sistemas de cuevas subacuáticas más largos del mundo.",
    },
    provinces: ["Mallorca", "Menorca", "Ibiza", "Formentera"],
    funFact:
      "Es un destino turístico internacional con un ecosistema único en el Mediterráneo.",
    regionType: "island",
  },
  {
    id: "pais_vasco",
    name: "País Vasco",
    capital: {
      name: "Vitoria",
      population: 252000,
      funFact:
        "Es una de las ciudades más verdes de España y ha sido galardonada por su sostenibilidad.",
    },
    provinces: ["Álava", "Guipúzcoa", "Vizcaya"],
    funFact:
      "Tiene su propio idioma: el euskera, uno de los más antiguos de Europa.",
    regionType: "mainland",
  },
  {
    id: "valencia",
    name: "Valencia",
    capital: {
      name: "Valencia",
      population: 800000,
      funFact:
        "Aquí se celebra la fiesta de las Fallas, Patrimonio de la Humanidad.",
    },
    provinces: ["Castellón", "Valencia", "Alicante"],
    funFact:
      "Es la cuna de la paella y sede de la futurista Ciudad de las Artes y las Ciencias.",
    regionType: "mainland",
  },
];
