const phoneLoad = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phone = data.data;
  displayPhones(phone);
};
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  // clearing previous phoneContainer
  phoneContainer.textContent = "";
  // how many product will be shown
  phones = phones.slice(0, 15);
  phones.forEach((phones) => {
    console.log(phones);
    // create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `p-5 max-sm:w-10/12 mx-auto lg:w-max border-2 border-[#CFCFCF] rounded-lg flex flex-col justify-center items-center gap-4`;
    //  set innerHTML
    phoneCard.innerHTML = `
          <div
          class="bg-cardImgBg flex justify-center py-4 items-center w-full rounded-lg"
        >
          <img
            class="w-3/5 lg:w-[150px] lg:h-[250px]"
            src="${phones.image}"
            alt=""
          />
        </div>
        <h2 class="text-2xl font-poppins font-semibold">
          ${phones.phone_name}
        </h2>
        <p class="w-72 text-center font-poppins text-[#706F6F] text-lg">
          There are many variations of passages of available, but the
          majority have suffered
        </p>
        <h3 class="font-poppins text-2xl font-bold">$999</h3>
        <button
          class="btn bg-[#0D6EFD] text-white font-poppins font-medium rounded-lg"
        >
          Show Details
        </button>
    `;
    // appendChild
    phoneContainer.appendChild(phoneCard);
  });
};

const handleSearch = () => {
  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  console.log(searchText);
  phoneLoad(searchText);
};
