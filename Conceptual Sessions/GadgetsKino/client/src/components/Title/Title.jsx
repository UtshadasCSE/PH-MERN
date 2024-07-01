import { SiBrandfolder } from "react-icons/si";

const Title = ({ heading, subHeading }) => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-3 text-2xl text-[#F72585] font-semibold">
          <SiBrandfolder />
          <h2>{heading}</h2>
        </div>
        <h2 className="text-4xl text-[#7209B7] font-bold">{subHeading}</h2>
      </div>
    </div>
  );
};

export default Title;
