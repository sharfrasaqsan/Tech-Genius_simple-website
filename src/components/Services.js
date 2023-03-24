import Card from "./Card";
function Services() {
  return (
    <>
      <div className="container services" id="services-scroll">
        <h2 className="main-title text-center">Services</h2>
        <div className="card-cover">
          <div className="col-md-12">
            <div className="row card-row">
              <div className="col-md-4 mb-2">
                <Card
                  title="Web Development"
                  text="Create a professional website that is optimized for your business goals."
                />
              </div>
              <div className="col-md-4 mb-2">
                <Card
                  title="Graphic Design"
                  text="Craft stunning visuals and graphics to communicate your message effectively."
                />
              </div>
              <div className="col-md-4 mb-2">
                <Card
                  title="Digital marketing"
                  text="Reach your target audience and drive conversions with data-driven marketing strategies."
                />
              </div>
              <div className="col-md-4 mb-2">
                <Card
                  title="SEO Optimization"
                  text="Optimize your website to rank higher on search engines and attract organic traffic."
                />
              </div>
              <div className="col-md-4 mb-2">
                <Card
                  title="Mobile App Development"
                  text="Create a custom mobile application that meets your business needs and enhances user experience."
                />
              </div>
              <div className="col-md-4 mb-2">
                <Card
                  title="E-commerce Solutions"
                  text="Build an online store that is secure, user-friendly, and optimized for conversions."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
