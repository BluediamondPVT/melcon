function WhyChooseCard({ number, title, description }) {
    return (
        <article className="why-choose-card">

            <div className="why-choose-card-number">
                {number}
            </div>

            <div className="why-choose-card-content">

                <h3>{title}</h3>

                <p>{description}</p>

            </div>

            <span className="why-choose-card-arrow">
                ↗
            </span>

        </article>
    );
}

export default WhyChooseCard;