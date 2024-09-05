// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <p>
        What should I put here
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Fully Responsible</h3>
                <p className="lead mb-0">
                  This theme will look great on Aaron!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Bootstrap 55 Ready</h3>
                <p className="lead mb-0">
                  Featuring the Aaron!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Easy to Orange Juice</h3>
                <p className="lead mb-0">
                  Ready to use with Aaron!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        not that much experience :( but I own a dog!
      </p>
    </div>
  );
}
