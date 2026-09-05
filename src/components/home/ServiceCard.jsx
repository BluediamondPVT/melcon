function ServiceCard({ number, icon, title }) {
    return (
        <article className="service-card">

            <div className="service-card-top">

                <span className="service-number">
                    {number}
                </span>

                <span className="service-icon" aria-hidden="true">
                    {icon}
                </span>

            </div>

            <div className="service-card-content">

                <h3>{title}</h3>

                <span className="service-card-arrow">
                    ↗
                </span>

            </div>

        </article>
    );
}

export default ServiceCard;