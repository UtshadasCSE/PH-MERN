const apiLoad = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = (await res.json()).data.tools;
  console.log(data);
  displayApiData(data);
};

// api load function call
apiLoad();
// modal open
// https://openapi.programming-hero.com/api/ai/tool/${id}
const modalOpen = () => {
  const modalContainer = document.getElementById("modalContainer");
  const modalcontainerDIv = document.createElement("div");
  modalcontainerDIv.innerHTML = `
      <dialog id="my_modal_3" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
    </div>
    </div>
  `;
  modalContainer.appendChild(modalcontainerDIv);
  my_modal_3.showModal();
};

// Now we create a display function for display API data
const displayApiData = (data) => {
  const dataShowContainer = document.getElementById("cardContainer");

  data.forEach((data) => {
    console.log(data);
    const dataShowDiv = document.createElement("div");
    dataShowDiv.classList = `bg-white max-sm:w-3/4 mx-auto lg:w-[400px] p-3 rounded-2xl border-2 border-[#E7E7E7]`;
    dataShowDiv.innerHTML = `
                <div>
                <img class="w-full rounded-xl" src="${data.image}" alt="" />
              </div>
              <h3 class="my-3 font-workSans font-semibold text-2xl px-5">
                Features
              </h3>
              <ol
                class="list-disc px-9 font-workSans text-base font-normal text-[#585858]"
              >
                <li>${data.features}</li>
                <li>Contextual understanding</li>
                <li>Text generation</li>
              </ol>
              <div class="divider"></div>
              <div class="flex justify-between px-5">
                <div class="flex flex-col gap-3">
                  <h3 class="my-3 font-workSans font-semibold text-2xl">
                    ${data.name}
                  </h3>
                  <div class="flex justify-center items-center">
                    <i class="text-[#585858] fa-regular fa-calendar-days"></i>
                    <p class="text-[#585858] font-workSans text-base font-medium">
                      ${data.published_in}
                    </p>
                  </div>
                </div>
                <div class="flex justify-center items-center">
                  <button onclick="modalOpen()" class="">
                     
                    <i
                      class="text-[#EB5757] fa-solid fa-arrow-right bg-[#FEF7F7] p-5 rounded-full"
                    ></i>
                  </button>
                </div>
              </div>
    `;
    dataShowContainer.appendChild(dataShowDiv);
  });
};
