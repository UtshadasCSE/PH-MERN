import Title from "../../../components/Title/Title";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdPolicy } from "react-icons/md";
import { SiAuthentik } from "react-icons/si";

const WhyUs = () => {
  return (
    <div>
      <div className="py-8 w-11/12 mx-auto">
        <div>
          <Title
            heading={"Why Us"}
            subHeading={"Want to make an informed decision?"}
          />
        </div>
        <div className="py-4">
          <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5 font-poppins">
            {/* child 1 */}
            <div className="border-2  flex flex-col justify-center items-center  rounded-lg py-7 px-4 bg-[#7209B7] text-[#4CC9F0] text-center">
              <CiDeliveryTruck className="text-6xl text-[#F72585]" />
              <h2 className="text-4xl font-semibold">Fast & Secure Delivery</h2>
            </div>
            {/* child 1 */}
            <div className="border-2  flex flex-col justify-center items-center  rounded-lg py-7 px-4 bg-[#7209B7] text-[#4CC9F0] text-center">
              <FaMoneyBill1Wave className="text-6xl text-[#F72585]" />
              <h2 className="text-4xl font-semibold">Money Back Guarantee</h2>
            </div>
            {/* child 1 */}
            <div className="border-2  flex flex-col justify-center items-center rounded-lg py-7 px-4 bg-[#7209B7] text-[#4CC9F0] text-center">
              <MdPolicy className="text-6xl text-[#F72585]" />
              <h2 className="text-4xl font-semibold">
                24 Hour <br />
                Return Policy
              </h2>
            </div>
            {/* child 1 */}
            <div className="border-2  flex flex-col justify-center items-center  rounded-lg py-7 px-4 bg-[#7209B7] text-[#4CC9F0] text-center">
              <SiAuthentik className="text-6xl text-[#F72585]" />
              <h2 className="text-4xl font-semibold">
                {" "}
                Next Level <br /> Pro Quality
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
