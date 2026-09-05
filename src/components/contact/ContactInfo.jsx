import contactInfo from "../../data/contactData";

function ContactInfo() {
    return (
        <div className="contact-info-grid">

            {contactInfo.map((item, index) => (

                <article
                    className="contact-info-card"
                    key={item.label}
                >

                    <div className="contact-info-top">

                        <span className="contact-info-number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="contact-info-icon">
                            {item.icon === "phone" && "☎"}
                            {item.icon === "email" && "✉"}
                            {item.icon === "website" && "◎"}
                            {item.icon === "office" && "⌖"}
                        </span>

                    </div>


                    <div className="contact-info-content">

                        <span className="contact-info-label">
                            {item.label}
                        </span>

                        {item.href ? (

                            <a
                                href={item.href}
                                target={
                                    item.icon === "website"
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    item.icon === "website"
                                        ? "noreferrer"
                                        : undefined
                                }
                            >
                                {item.value}
                            </a>

                        ) : (

                            <p>
                                {item.value}
                            </p>

                        )}

                    </div>

                </article>

            ))}

        </div>
    );
}

export default ContactInfo;