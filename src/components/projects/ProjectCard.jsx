function ProjectCard(
    {number,title, description, image, category}
){

    return (
        <article className="project-card">

            <div className="project-card-image">

                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                />

                <div className="project-card-overlay"></div>

                <div className="project-card-meta">

                    <span>{number}</span>

                    <span>{category}</span>

                </div>

            </div>


            <div className="project-card-content">

                <div>

                    <span className="project-card-label">
                        {category}
                    </span>

                    <h3>
                        {title}
                    </h3>

                    <p>
                        {description}
                    </p>

                </div>

                <div className="project-card-line"></div>

            </div>

        </article>
    );

}
export default ProjectCard;