import ServiceCard from "./ServiceCard";

const services = [
    {
        number: "01",
        icon: "⌂",
        title: "Design & Drawing of Building Construction",
    },
    {
        number: "02",
        icon: "⌁",
        title: "Piping",
    },
    {
        number: "03",
        icon: "▦",
        title: "Steel Structures",
    },
    {
        number: "04",
        icon: "▤",
        title: "Warehouses",
    },
    {
        number: "05",
        icon: "◫",
        title: "Tanks and Vessels",
    },
    {
        number: "06",
        icon: "⌂",
        title: "High-Rise Residential and Commercial Building Construction",
    },
    {
        number: "07",
        icon: "╱",
        title: "Road Construction",
    },
    {
        number: "08",
        icon: "▥",
        title: "PEB Construction",
    },
    {
        number: "09",
        icon: "◉",
        title: "Industrial Coating",
    },
    {
        number: "10",
        icon: "▧",
        title: "Structural Steel Fabrication and Erection",
    },
    {
        number: "11",
        icon: "▤",
        title: "Warehouse Fabrication and Erection",
    },
    {
        number: "12",
        icon: "⚙",
        title: "Mechanical Plant Installation",
    },
    {
        number: "13",
        icon: "⌁",
        title: "Piping Fabrication and Erection",
    },
];

function HomeServices() {
    return (
        <section className="home-services section-dark">

            <div className="container-custom">

                {/* Section Header */}
                <div className="services-header">

                    <div>
                        <span className="eyebrow">
                            What We Do
                        </span>

                        <h2 className="section-title">
                            Our Services
                        </h2>
                    </div>

                    <p className="section-description">
                        Comprehensive engineering and construction
                        capabilities for demanding industrial and
                        infrastructure projects.
                    </p>

                </div>


                {/* Services Grid */}
                <div className="services-grid">

                    {services.map((service) => (
                        <ServiceCard
                            key={service.number}
                            {...service}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default HomeServices;