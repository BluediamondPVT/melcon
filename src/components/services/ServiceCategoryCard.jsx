function ServiceCategoryCard({
    number,
    title,
    subtitle,
    description,
    image,
    items,
}) {
    return (
        <article className="service-category-card">

            {/* Image */}

            <div className="service-category-image">

                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                />

                <div className="service-category-overlay"></div>

                <span className="service-category-number">
                    {number}
                </span>

            </div>


            {/* Content */}

            <div className="service-category-content">

                <span className="service-category-subtitle">
                    {subtitle}
                </span>

                <h3>
                    {title}
                </h3>

                {description && (
                    <p className="service-category-description">
                        {description}
                    </p>
                )}


                {/* Service Items */}

                <ul className="service-category-list">

                    {items.map((item, index) => (
                        <li key={index}>
                            <span className="service-list-marker"></span>
                            <span>{item}</span>
                        </li>
                    ))}

                </ul>

            </div>

        </article>
    );
}

export default ServiceCategoryCard;