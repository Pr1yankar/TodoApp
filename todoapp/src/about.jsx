function AboutHeader({ Heading, Desc }) {
  return (
    <>
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          {Heading}
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          {Desc}
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
    </>
  );
}

function AboutUsBox({ Heading, Desc, SvgElement }) {
  return (
    <>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        {SvgElement}
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            {Heading}
          </h2>
          <p className="leading-relaxed text-base">{Desc}</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <AboutHeader
            Heading="About Us"
            Desc="Through intuitive design and innovative technology, we provide users with a seamless experience to organize their lives effectively. We prioritize simplicity, functionality, and user-centricity, aiming to empower individuals to achieve their goals and lead more balanced lives. With a commitment to continuous improvement and collaboration, we strive to be the go-to solution for anyone seeking to enhance their productivity and well-being."
          />

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <AboutUsBox
              Heading={"Enhancing Life Balance"}
              Desc={
                "We are committed to helping users achieve a healthier work-life balance by offering features that promote prioritization, time management, and mindfulness."
              }
              SvgElement={
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
              }
            />
            <AboutUsBox
              SvgElement={
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              }
            />
            <AboutUsBox
              Heading={"Enhancing Life Balance"}
              Desc={
                "We are committed to helping users achieve a healthier work-life balance by offering features that promote prioritization, time management, and mindfulness."
              }
              SvgElement={
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
              }
            />
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Join Now
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
