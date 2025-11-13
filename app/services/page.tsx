const ServicesPage = () => {
  return (
    <section>
      <header>
        <>
          <div className="px-5 md:px-20 pt-16 md:pt-20 mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl leading-[1.3] mb-3 w-full md:w-[80%]">
              Our Comprehensive{" "}
              <span className="font-bold"> Digital Solutions</span>{" "}
            </h1>
            <p className="text-base leading-loose md:leading-loose w-full md:w-[50%]">
              We operate a decentralized organizational structure in order to
              harness individual skills and expertise with the aim of executing
              any project professionally, on time, within budget and in
              conformity with specifications.
            </p>
          </div>
        </>
      </header>
      <section className="cover-bg px-5 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-14">
            <div>
              <h4 className="text-white text-xl mb-3">Mechanical</h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Industrial Refrigeration and Air conditioning.
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Sales, Leasing and Maintenance of Room/Split/Central
                  Air-Conditioners and Cold room.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl mb-3">Oil and Gas Services</h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Supply of Petroleum products
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Distribution of petroleum products to various locations
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Supply of Oil tools</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl mb-3">
                Facility Management Services
              </h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">Carpentry</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Renovations</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Plumbing</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Electrical Services</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Painting</li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">Janitorial Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl mb-3">
                Electrical / Telecommunications
              </h4>
              <ul className="space-y-3 list-disc">
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Distribution of Generators – Sales, Leasing and Maintenance.
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Supply of Electrical Materials and OEM spares.
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Installation of Electrical Equipment
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Telecoms Cell Site Maintenance
                </li>
                <li className="text-white opacity-70 leading-loose md:leading-loose">
                  Installation of Batteries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesPage;
