
import feed from "../assets/images/services/feed.webp";
import civilStructural from '../assets/images/services/civil.webp';
import mechanical from "../assets/images/services/mechanical-piping.webp"
import tankVessel from '../assets/images/services/tank-vessel.webp';
import civilWorks from '../assets/images/services/civil-works.webp';
import structuralWorks from '../assets/images/services/structural-works.webp';
import pipingTankWorks from '../assets/images/services/piping-tank-works.webp'


const serviceCategories = [
    {
        number: "01",
        title: "FEED",
        subtitle: "Front-End Engineering Design",
        description:
            "Complete front-end engineering support to establish project feasibility, technical direction, cost and planning requirements.",
        image: feed,
        items: [
            "Feasibility Studies",
            "Concept Development",
            "Design Basis",
            "Cost Estimation",
            "Project Planning",
        ],
    },

    {
        number: "02",
        title: "Civil & Structural Design",
        subtitle: "Civil & Structural Engineering",
        description:
            "Engineering solutions for structural systems, foundations, industrial buildings and infrastructure requirements.",
        image: civilStructural,
        items: [
            "Structural Analysis",
            "Foundation Design",
            "Reinforced Concrete Design",
            "Pipe Rack Design",
            "Industrial Buildings",
            "Infrastructure Design",
        ],
    },

    {
        number: "03",
        title: "Mechanical & Piping Design",
        subtitle: "Mechanical & Piping Engineering",
        description:
            "Detailed mechanical and piping engineering covering plant layouts, process systems, utilities and fabrication requirements.",
        image: mechanical,
        items: [
            "Plant Layout",
            "Process Piping Design",
            "Utility Piping Design",
            "Pipe Stress Analysis",
            "Equipment Layout",
            "Fabrication Drawings",
        ],
    },

    {
        number: "04",
        title: "Tank & Vessel Design",
        subtitle: "Tank & Vessel Engineering",
        description:
            "Engineering support for storage tanks, pressure vessels, foundations, structural supports and installation requirements.",
        image: tankVessel,
        items: [
            "Storage Tanks",
            "Pressure Vessels",
            "Tank Foundations",
            "Installation Engineering",
            "Structural Supports",
        ],
    },

    {
        number: "05",
        title: "Civil Works",
        subtitle: "Civil Construction",
        description:
            "Complete civil construction capabilities covering buildings, foundations, roads, drainage and underground infrastructure.",
        image:civilWorks,
        items: [
            "Buildings",
            "Concrete Structures",
            "Foundations",
            "Roads & Asphalt",
            "Drainage Systems",
            "Underground Utilities",
            "Trench Construction",
        ],
    },

    {
        number: "06",
        title: "Structural Works",
        subtitle: "Structural Construction",
        description:
            "Structural fabrication, erection and modification works for industrial facilities and supporting structures.",
        image: structuralWorks,
        items: [
            "Steel Fabrication",
            "Steel Erection",
            "Pipe Rack Structures",
            "Equipment Platforms",
            "Industrial Buildings",
            "Structural Modifications",
        ],
    },

    {
        number: "07",
        title: "Piping & Tank Works",
        subtitle: "Piping & Mechanical Works",
        description:
            "End-to-end piping and tank execution from fabrication and installation through testing, completion and pre-commissioning.",
        image: pipingTankWorks,
        items: [
            "Pipe Fabrication",
            "Pipe Installation",
            "Hydrotesting",
            "Pressure Testing",
            "Tank Installation",
            "Mechanical Completion",
            "Pre-Commissioning Support",
        ],
    },
];

export default serviceCategories;