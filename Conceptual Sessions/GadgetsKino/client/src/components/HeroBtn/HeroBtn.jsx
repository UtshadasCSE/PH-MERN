const HeroBtn = ({ text }) => {
  return (
    <div>
      <div className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#F72585] to-[#7209B7] group-hover:from-[#3A0CA3] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white">{text}</span>
        </span>
      </div>
    </div>
  );
};

export default HeroBtn;
