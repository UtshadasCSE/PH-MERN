import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymPricing = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$29.99",
      features: [
        "Access to basic gym equipment",
        "Limited access to group fitness classes",
        "No personal training sessions included",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "$49.99",
      features: [
        "Access to full gym facilities",
        "Unlimited group fitness classes",
        "2 personal training sessions per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$79.99",
      features: [
        "Access to full gym facilities",
        "Unlimited group fitness classes",
        "4 personal training sessions per month",
        "Nutritional counseling included",
      ],
    },
  ];

  return (
    <div className=" grid grid-cols-3 gap-4 p-5 my-9 ">
      {gymPricing.map((option) => (
        <PriceOption key={option.id} option={option} />
      ))}
    </div>
  );
};

export default PriceOptions;
