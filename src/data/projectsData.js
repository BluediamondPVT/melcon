import commercialBuilding from "../assets/images/projects/commercial-building.webp";
import residentialVillas from "../assets/images/projects/residential-villas.webp";
import industrialWarehouse from '../assets/images/projects/industrial-warehouse.webp';
import infrastructureDevelopment from '../assets/images/projects/infrastructure-Development.webp';


const projects = [
    {
        number:"01",
        title:"Commercial Building",
        description:"High-rise office complex completed in record time with modern architecture and energy-efficient systems.",
        image:commercialBuilding,
        category:"Commercial"
    },
    {
        number:"02",
        title:"Residential Villas",
        description:"Luxury residential villas designed with elegance, durability, and client lifestyle in mind.",
        image: residentialVillas,
        category:"Residential",
    },
    {
        number:"03",
        title:"Industrial Warehouse",
        description:"Large-scale warehouse built to international safety standards, equipped for heavy-duty operations",
        image: industrialWarehouse,
        category:"Industrial",
    },
    {
        number:"04",
        title:"Infrastructure Development",
        description:"Roads and utilities built to support growing communities and sustainable urban development.",
        image: infrastructureDevelopment,
        category:"Infrastructure",
    }
];

export default projects;