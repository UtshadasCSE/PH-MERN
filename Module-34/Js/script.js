const phoneLoad = async (searchText = "13") => {
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
  // show all button condition
  // const showAllContainer = document.getElementById("show-all-button");
  // if (phones.length > 12) {
  //   showAllContainer.classList.remove("hidden");
  // } else {
  //   showAllContainer.classList.add("hidden");
  // }
  // how many product will be shown
  phones = phones.slice(0, 12);
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
          onclick="showDetails('${phones.slug}')"
          class="btn bg-[#0D6EFD] text-white font-poppins font-medium rounded-lg"
        >
          Show Details
        </button>
    `;
    // appendChild
    phoneContainer.appendChild(phoneCard);
  });
  // hide loading bar
  loadingSppiner(false);
};
// show details area
const showDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  console.log(data);
  showPhoneDetails(phone);
};
// show phone details modal
const showPhoneDetails = (phone) => {
  const showDetailsPhoneName = document.getElementById("show-detail-phoneName");
  showDetailsPhoneName.innerText = phone.name;
  const showDetailContainer = document.getElementById("show-detail-container");
  showDetailContainer.innerHTML = `
  <div>
      <div class="flex justify-center items-center my-5">
      <img src="${phone.image}" alt=""/>
      </div>
      <div class="flex flex-col justify-start  gap-3">

      <p class="font-poppins font-medium text-black text-sm">Brand:${phone.brand}</p>
      <p class="font-poppins font-medium text-black text-sm">Release Date:${phone.releaseDate}</p>
      <p class="font-poppins font-medium text-black text-sm">Storage:${phone.mainFeatures.storage}</p>
      <p class="font-poppins font-medium text-black text-sm">Display Size:${phone.mainFeatures.displaySize}</p>
      <p class="font-poppins font-medium text-black text-sm">Memory:${phone.mainFeatures.memory}</p>
      <p class="font-poppins font-medium text-black text-sm">Bluetooth:${phone.others.Bluetooth}</p>
      </div>
    
  </div>
      
   
  `;
  show_details_modal.showModal();
};
// search function
const handleSearch = () => {
  loadingSppiner(true);
  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  console.log(searchText);
  phoneLoad(searchText);
};

const loadingSppiner = (isLoading) => {
  const loadingBar = document.getElementById("loading-sppiner");
  if (isLoading) {
    loadingBar.classList.remove("hidden");
  } else {
    loadingBar.classList.add("hidden");
  }
};
