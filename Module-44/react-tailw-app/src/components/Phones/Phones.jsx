import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
      });
  }, []);
  console.log(phones);
  return (
    <div>
      <BarChart width={730} height={250} data={phones}>
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;
