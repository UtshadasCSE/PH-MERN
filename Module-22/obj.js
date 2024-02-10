let country = {
  name: "Bangladesh",
  population: "170 million",
  language: "Bangla",
  about: function () {
    console.log("Hello");
  },
  Division: {
    Barishal: "1 January 1993",
    Chittagong: "1 January 1829",
    Dhaka: "1 January 1829",
    Khulna: "1 October 1960",
    Mymensingh: "14 September 2015",
    Rajshahi: "1 January 1829",
    Rangpur: "25 January 2010",
    Sylhet: "1 August 1995",
  },
  River: ["padma", "megna"],
};
country.about();

function print(a, b) {
  console.log(a, b);
  console.log(arguments);
}
print(12, 12, 34, 56, 67, 22);
