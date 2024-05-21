let customer = JSON.parse(localStorage.getItem("users")) || [
   
];

const form = document.querySelector("#formAddCar");
const tbody = document.querySelector(".result");
const inputFristname = document.querySelector("#addNameCar");
const inputLastName = document.querySelector("#addNameModel");
const inputPhoneNumber = document.querySelector("#idNumber");
const inputRegion = document.querySelector("#addColor");
const inputBudget = document.querySelector("#addPrice");
const formAdd = document.querySelector("#formAddCar");
const formAddBtn = document.querySelector("#addCarBtn");
const formAddNone = document.querySelector("#formNone");



///---------------------------------------------------------//
const inputAdd = () =>{
    formAdd.style.display = "flex";
}
formAddBtn.addEventListener("click",inputAdd);

const inputNone = () =>{
    formAdd.style.display = "none";
}
formAddNone.addEventListener("click",inputNone);
//------------------------------------------------------------//

const searchdiv = document.querySelector("#inputDisplaySearch");
const searchdivBtnNone = document.querySelector("#noneSearch");
const searchBtn = document.querySelector("#searchModelBtn");
const inputSearch = () =>{
    searchdiv.style.display = "flex";
}
searchBtn.addEventListener("click",inputSearch)

const inputSearchNone = () =>{
    searchdiv.style.display = "none";
}
searchdivBtnNone.addEventListener("click",inputSearchNone)
//-------------------------------------------------------------//
const sortDiv = document.querySelector("#inputSortedDiv");
const sortDivNone = document.querySelector("#noneSort");
const sortDivBtn = document.querySelector("#sortBtn");

const sortDisplay = ()=>{
    sortDiv.style.display = "flex";
}
sortDivBtn.addEventListener("click",sortDisplay);

const sortDisplayNone = ()=>{
    sortDiv.style.display = "none";
}
sortDivNone.addEventListener("click",sortDisplayNone);
//-----------------------------------------------------------------//
const delCardImg = document.querySelector("#btncardNone");
const divCardImg = document.querySelector(".resCarde");


// const praductCard = () =>{
//     divCardImg.style.display = "flex"

// }
// delCardImg.addEventListener("click",praductCard);
//-------------------------------------------------------------------//
const swiper = () =>{

}

function mapCustomerTable(mapCustomerInfos) {
    let tr = "";
    mapCustomerInfos.forEach((customerInfo, index) => {
        tr += `
            <div class="resCard">
                <div class="forArt">
                <div class="info">
                <div class="bio">
                <div class="registration__tbody__td">${index + 1}</div>
                <div class="registration__tbody__td">${customerInfo.fname.charAt(0).toUpperCase() + customerInfo.fname.slice(1).toLowerCase()}</div>
                <div class="registration__tbody__td">${customerInfo.lname.charAt(0).toUpperCase() + customerInfo.lname.slice(1).toLowerCase()}</div>
                <div class="registration__tbody__td">${customerInfo.phone}</div>
                <div class="registration__tbody__td">${customerInfo.region.charAt(0).toUpperCase() + customerInfo.region.slice(1).toLowerCase()}</div>
                <div class="registration__tbody__td">$${customerInfo.budget}</div>
                </div>
                <button id="btncardNone"><div class="del"></div></button>
                </div>
                

            </div>
            </div>
        `;
    });
    tbody.innerHTML = `<div class="showResult">${tr}</div>`;
    

}

mapCustomerTable(customer);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!inputFristname.value.trim()) return alert("Iltimos Nameni to'liq kriting");
    if (!inputLastName.value.trim()) return alert("Iltimos Model Nameni to'liq kriting");
    if (!inputPhoneNumber.value.trim()) return alert("Iltimos Id numberni to'liq kriting");
    if (!inputRegion.value.trim()) return alert("Iltimos Mashin rangini to'liq kriting");
    if (!inputBudget.value.trim()) return alert("Iltimos Narxni to'liq kriting");

    let newObject = {
        fname: inputFristname.value,
        lname: inputLastName.value,
        phone: inputPhoneNumber.value,
        region: inputRegion.value,
        budget: parseFloat(inputBudget.value)
    };

    customer.push(newObject);
    localStorage.setItem("users", JSON.stringify(customer));
    mapCustomerTable(customer);
});


//---------------------------------------------------------------------//customer

// const inputIputS = querySelector("#inputDisplaySearch");
// const inputIputResSelection = querySelector("#selection");
// const creatInput = querySelector("#CreatSearch");

// const serchFunction = () =>{
//     const searchRes = customer.find(car => car.fname == inputIputS.value)
//     console.log(searchRes);
//     if(searchRes){
//         inputIputResSelection.innerHTML = `
//         <div class="resSearchInputall">
//         <h3 class="resItem">${searchRes.phone}</h3>
//         <h3 class="resItem">${searchRes.fname}</h3>
//         <h3 class="resItem">${searchRes.lname}</h3>
//         <h3 class="resItem">${searchRes.region}</h3>
//         <h3 class="resItem">${searchRes.budget}</h3>
//         </div>
//         `
//     } else {
//         inputIputResSelection.innerHTML = `
//         <h3>Ma'lumot topilmdi!</h3>
//         `
//         inputIputResSelection.innerHTML += `
//         <div class="resSearchInputall">
//         <h3 class="resItem">${searchRes.phone}</h3>
//         <h3 class="resItem">${searchRes.fname}</h3>
//         <h3 class="resItem">${searchRes.lname}</h3>         -----------------//  USTOZ NIMAGADIR BU fUNKSIYA ISHLAMADI----------------------------------
//         <h3 class="resItem">${searchRes.region}</h3>
//         <h3 class="resItem">${searchRes.budget}</h3>
//         </div>`
//     }

// }
// creatInput.addEventListener("click",serchFunction);