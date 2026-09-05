import { useState } from "react";

function ContactForm() {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);
    };

    return (
        <div className="contact-form-wrapper">

            <div className="contact-form-heading">

                <span className="eyebrow">
                    Send an Enquiry
                </span>

                <h2>
                    Tell us about
                    <br />
                    your project.
                </h2>

                <p>
                    Fill in the form and our team will get
                    back to you.
                </p>

            </div>


            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <div className="contact-form-row">

                    <div className="form-field">

                        <label htmlFor="name">
                            Full Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                        />

                    </div>


                    <div className="form-field">

                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                        />

                    </div>

                </div>


                <div className="contact-form-row">

                    <div className="form-field">

                        <label htmlFor="phone">
                            Phone Number
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+253..."
                        />

                    </div>


                    <div className="form-field">

                        <label htmlFor="subject">
                            Subject
                        </label>

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Project enquiry"
                            required
                        />

                    </div>

                </div>


                <div className="form-field">

                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Tell us about your project..."
                        required
                    ></textarea>

                </div>


                <button
                    type="submit"
                    className="contact-submit"
                >
                    Send Message
                    <span>↗</span>
                </button>


                {submitted && (
                    <p className="form-success">
                        Thank you. Your enquiry has been recorded.
                    </p>
                )}

            </form>

        </div>
    );
}

export default ContactForm;