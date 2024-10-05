const BASE_URL = "https://freetestapi.com/api/v1/currencies";


const dropdowns =document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for (code in countryList){
//     console.log(code,countryList[code]);
// }

for(let select of dropdowns) {
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name == "from" && currCode == "USD"){
            newOption.selected = "selected";
        }else if(select.name == "to" && currCode == "BDT"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

//update Flag
const updateFlag=(element)=>{
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

   let img = element.parentElement.querySelector("img");
   img.src = newSrc;
};




btn.addEventListener("click",async (evt)=>{
     evt.preventDefault();
     let amount = document.querySelector(".amount input");
     let amtVal = amount.value;
    //  console.log(amtVal);
    if (amtVal === "" || amtVal <1){
        amtVal =1;
        amount.value = "1"
    }
    // console.log(fromCurr.value,toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    console.log(URL);


    // console.log(URL);
    let response = await fetch(URL);
    // console.log(response);
    
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    console.log(data);


    

});