function ContactMap() {
    return (
        <section className="contact-map-section">

            <div className="container-custom">

                <div className="contact-map-header">

                    <div>

                        <span className="eyebrow">
                            Our Locations
                        </span>

                        <h2>
                            Find us in
                            <span> Djibouti & Dubai.</span>
                        </h2>

                    </div>

                    <p>
                        MEL-CON maintains a strategic presence
                        in Djibouti and Dubai.
                    </p>

                </div>


                <div className="contact-maps-grid">

                    {/* Djibouti */}

                    <div className="contact-map-card">

                        <div className="contact-map-title">
                            <span>01</span>

                            <div>
                                <strong>
                                    Head Office
                                </strong>

                                <small>
                                    Djibouti
                                </small>
                            </div>
                        </div>

                        <iframe
                            title="MEL-CON Head Office Djibouti"
                            src="https://www.google.com/maps?q=Djibouti&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>


                    {/* Dubai */}

                    <div className="contact-map-card">

                        <div className="contact-map-title">
                            <span>02</span>

                            <div>
                                <strong>
                                    Regional Office
                                </strong>

                                <small>
                                    Dubai, United Arab Emirates
                                </small>
                            </div>
                        </div>

                        <iframe
                            title="MEL-CON Regional Office Dubai"
                            src="https://www.google.com/maps?q=Dubai%2C%20United%20Arab%20Emirates&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ContactMap;