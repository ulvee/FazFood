const menum = document.getElementById("menum");

fetch("http://127.0.0.1:5502/menu.json")
  .then((res) => res.json())
  .then((data) => {
    let li = "";
    data.map((item) => {
      li += `
            <div class="col-12 col-sm-6 col-md-3">
            <div class="card shadow"  >
                <img  style="object-fit:contain" src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <a href="" class="card-title ">${item.title}</a>
                  <p class="stars">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i> <span>(5)</span>
                </p>
                  
                  <p>${item.description}</p>
                  
                  <p>${item.price}</p>
                  
                  <a href="#" class="btn btn-success "><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
              </div>
        </div>`;
    });
    
    const burger=document.getElementById("burger");
    const filtered = data.filter(item=>{
      return item.category=='Burger'
    }
    );
   
   
      console.log(filtered);
  

   


    document.getElementById("menum").innerHTML = li;
  })
  .catch((err) => console.log(err));


// ==============================================================
// const langData={
//   az:[
//     "ana",""
//   ],
//   en:[
//     "home",
//   ]
// };




// const langBtn = document.querySelector("#menu-lang");
// const langItem = document.querySelectorAll(".lang");
// if (localStorage.getItem("btn") === null) {
//   localStorage.setItem("btn", "En");
// } else {
//   langBtn.onclick = () => {
//     if (langBtn.innerHTML == "Az") {
//       for (let i in langData.az) {
//         langItem[i].innerHTML = langData.az[i];
//       }
//       localStorage.setItem("btn", "Az");
//       langBtn.innerHTML = "En";
//     } else {
//       for (let i in langData.en) {
//         langItem[i].innerHTML = langData.en[i];
//       }
//       localStorage.setItem("btn", "En");
//       langBtn.innerHTML = "Az";
//     }
//   };
// }

// if (localStorage.getItem("btn") === "Az") {
//   for (let i in langData.az) {
//     langItem[i].innerHTML = langData.az[i];
//   }
//   langBtn.innerHTML = "En";
// } else {
//   for (let i in langData.en) {
//     langItem[i].innerHTML = langData.en[i];
//   }
//   langBtn.innerHTML = "Az";
// }

