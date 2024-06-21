import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/about/showroom"}>Shoroom</Link>
      <Link href={"/about/client"}>Client</Link>
    </div>
  );
};

export default page;
