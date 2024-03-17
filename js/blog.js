const blog = document.getElementById("blogs");

fetch("http://127.0.0.1:5502/blog.json")
  .then((res) => res.json())
  .then((data) => {
    let li = "";
    data.map((item) => {
      li += `
            <div class="col-12">
            <div class="card "  >
                <img  style="object-fit:contain" src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <p>${item.category} <span>- ${item.date} - ${item.comment}</span></p>
                
                
                  <h5 class="card-title ">${item.title}</h5>
                  
                  
                  <p>${item.description}</p>

                </div>
              </div>
        </div>`;
    });
  
    document.getElementById("blogs").innerHTML = li;
  })
  .catch((err) => console.log(err));