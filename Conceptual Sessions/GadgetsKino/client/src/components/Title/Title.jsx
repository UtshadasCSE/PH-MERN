import { SiBrandfolder } from "react-icons/si";

const Title = () => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-3 text-2xl text-[#F72585] font-semibold">
          <SiBrandfolder />
          <h2>Top Brands</h2>
        </div>
        <h2 className="text-4xl text-[#7209B7] font-bold">Browse by Brand</h2>
      </div>
    </div>
  );
};

export default Title;
