import Title from "../../../components/Title/Title";

const Services = () => {
  return (
    <div>
      <div>
        <Title
          heading={"Compellingly orchestrate innovative outsourcing."}
          subHeading={
            "Progressively reconceptualize ethical channels for next-generation experiences. Authoritatively architect backward-compatible networks vis-a-vis process-centric architectures. Competently cultivate quality systems vis-a-vis installed base e-services. Authoritatively customize virtual intellectual capital without backward-compatible sources."
          }
        />
        <div className="py-5">
          <div className="grid grid-cols-3 gap-6 font-semibold">
            {/* chhild 1  */}
            <div className="flex flex-col justify-center items-center gap-3 border-2 p-6 rounded-lg">
              <div className="w-28 h-28">
                <img
                  src="https://th.bing.com/th/id/OIP.ijOl04coRqPGE9JsCNjHPgHaE1?rs=1&pid=ImgDetMain"
                  alt="hello"
                  className="w-full h-full rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold">Why Us</h2>
              <p className="text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                excepturi eos porro quos iure recusandae culpa ab quas possimus
                aut.
              </p>
            </div>
            {/* chhild 1  */}
            <div className="flex flex-col justify-center items-center gap-3 border-2 p-6 rounded-lg">
              <div className="w-28 h-28">
                <img
                  src="https://th.bing.com/th/id/OIP.ijOl04coRqPGE9JsCNjHPgHaE1?rs=1&pid=ImgDetMain"
                  alt="Job1 "
                  className="w-full h-full rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold">Why Us</h2>
              <p className="text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                excepturi eos porro quos iure recusandae culpa ab quas possimus
                aut.
              </p>
            </div>
            {/* chhild 1  */}
            <div className="flex flex-col justify-center items-center gap-3 border-2 p-6 rounded-lg">
              <div className="w-28 h-28">
                <img
                  src="https://www.openenglish.com.tr/blog/wp-content/uploads/2023/05/ingilizce-job-ile-kurulan-ornek-cumleler.jpg"
                  alt="Job2"
                  className="w-full h-full rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold">Why Us</h2>
              <p className="text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                excepturi eos porro quos iure recusandae culpa ab quas possimus
                aut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
