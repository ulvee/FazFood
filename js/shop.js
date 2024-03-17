const menum = document.getElementById("shop");

fetch("http://127.0.0.1:5502/shop.json")
  .then((res) => res.json())
  .then((data) => {
    let li = "";
    data.map((item) => {
      li += `
            <div class="col-12 col-sm-6 col-md-4">
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


    document.getElementById("shop").innerHTML = li;
  })
  .catch((err) => console.log(err));