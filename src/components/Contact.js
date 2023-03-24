function Contact() {
  return (
    <div className="container contact" id="contact-scroll">
      <h2 className="main-title text-center">Contact us</h2>
      <div className="center-contact">
        <div className="col-md-10">
          <div className="row contact-text">
            <div className="col-md-12 mb-1">
              <input name="name" placeholder="Name" className="contact-input" />
            </div>

            <div className="col-md-12 mb-1">
              <input
                name="email"
                placeholder="Email"
                className="contact-input"
              />
            </div>

            <div className="col-md-12 mb-1">
              <input
                name="subject"
                placeholder="Subject"
                className="contact-input"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-10">
          <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
          />
        </div>
      </div>
      <div className="row center-contact contact-small">
        <div className="col-md-2">
          <input className="form-btn" type="submit" value="Send Message" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
