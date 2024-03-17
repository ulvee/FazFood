const menus = document.getElementById("menus");

fetch("http://127.0.0.1:5502/products.json")
  .then((res) => res.json())
  .then((data) => {
    let li = "";
    data.map((item) => {
      li += `
            <div class="cardss col-12 col-sm-6 col-md-3">
            <div class="card shadow" >
                <img height="300" style="object-fit:contain" src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <a href="" class="card-title ">${item.title}</a>
                  <p class="stars">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i> <span>(5)</span>
                </p>
                  
                  <p>${item.description}</p>
                  
                  <p>${item.price}</p>
                  
                  <a href="#" class="btn shopcart btn-success "><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
              </div>
        </div>`;
    });

    document.getElementById("menus").innerHTML = li;
  })
  .catch((err) => console.log(err));

const mode = document.querySelector("#mode");
const btn = document.querySelector("#btn-dark");
if (localStorage.getItem("dark") === null) {
  localStorage.setItem("dark", "Light");
} else {
  btn.onclick = () => {
    if (mode.className == "light") {
      mode.className = "dark";
      localStorage.setItem("dark", "Dark");
      btn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
      mode.className = "light";
      localStorage.setItem("dark", "Light");
      btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
  };
}

if (localStorage.getItem("dark") === "Dark") {
  mode.className = "dark";
  btn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
} else {
  mode.className = "light";
  btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}

// =========================    Langs        ======================================

const langData = {
  az: [
    "ANA SƏHİFƏ",
    "MENYU",
    "SƏHİFƏLƏR",
    "Haqqımızda",
    "Komandamız",
    "Rezervasiya",
    "MAĞAZA",
    "MƏQALƏ",
    "ƏLAQƏ",
    "<i class='fa-regular fa-user'></i>DAXİL OL",
    "<i class='fa-regular fa-user'></i> QEYDİYYAT",
    "AXTAR",
    "<i class='fa-solid fa-motorcycle'></i> SİFARİŞ",
    
    "IZGARA <br>  MAL ƏTİ BURGER",
    "Gizli ailə reseptləri əfsanələrin və  <br>  Stackin materialıdır burger qarışığı istisna deyil.",
    "İNDİ SİFARİŞ EDİN <i class='fa-solid fa-arrow-right'></i>",
    "YEMƏKLƏRİMİZ HAQQINDA",
    "BÜTÜN DÜNYADAN <br> YAXŞI BURGER FİKİRLƏRİ <br> VƏ ƏNƏNƏLƏR",
    "Faz food-un britaniyalı qurucuları olan üç qardaşın <br> axtarışları sayəsində cızıltılı burgerlərin ağız sulandıran  ətri <br> indi Birmingem küçələrini doldurur. <br> Onların arasında kulinariya sənayesində 50 ildən çox təcrübədən sonra, onlar ən yaxşı burger <br> kəşf etmək üçün səyahətə çıxdılar.",
    "YEMƏKLƏRİMİZ HAQQINDA  <i class='fa-solid fa-arrow-right'></i>",
    "BUGÜN BİR <br> YÜKLƏMƏ GÜNÜDÜR",
    "ORTA 4-ÜZÜ* BURGER",
    "*Premium yağlar üçün əlavə ödəniş. Minimum 2 tələb olunur.",
    "İNDİ ALIŞ-VERİŞ EDİN  <i class='fa-solid fa-arrow-right'></i>",
    "MƏŞHUR QABLAR - MƏŞHUR QABLAR -",
    "ƏN ÇOX SATAN YEMƏKLƏR",
    "Fazfood unikal və müstəqil sürətli xidmət brendidir. Fazfood burgerləri və kokteylləri olduqca isti və dadlı hazırlanır. Ən son 'Ağzınızda əriyir' təcrübəsi. <br> Biz nahar və götürmə elementləri ilə sürətli təsadüfi əməliyyatıq.",
    "HAMISINA BAX <i class='fa-solid fa-arrow-right'></i>",
    "FASH FOOD YEMƏKLƏRİ",
    "YENİ FENOMEN<br> BURGER DADI",
    "İNDİ SİFARİŞ EDİN  <i class='fa-solid fa-arrow-right'></i>",
    "MAL ƏTİ <br> BURGER",
    "YENİ FENOMEN<br> BURGER DADI",
    "İNDİ SİFARİŞ EDİN  <i class='fa-solid fa-arrow-right'></i>",
    "PENDİRLİ <br> PİZZA",
    "YENİ FENOMEN<br> BURGER DADI",
    "İNDİ SİFARİŞ EDİN  <i class='fa-solid fa-arrow-right'></i>",
    "HƏR ŞEYİ EDİN  MÜMKÜNDÜR",
    "İFADƏLƏR - İFADƏLƏR - İFADƏLƏR -",
    "MÜŞTƏRİLƏRİNİZ NƏ DEYİR",
    "Unikal interaktiv musiqi quran xəyalpərəstlər və icraçılar <br> komandası və incəsənət festivalları.",
    "Dizayn",
    "Dizayn",
    "Dizayn",
    "SUPER <br> DADLI",
    "İNDİ BİZƏ ZƏNG EDİN:",
    "İNDİ SİFARİŞ EDİN  <i class='fa-solid fa-arrow-right'></i>",
    "30 DƏQİQƏ <br> ÇATDIRILMA!",
    "Görüş keçirirsinizsə, gec işləyin <BR> gecə və əlavə təkan lazımdır.",
    "SİFARİŞ EDİN  <i class='fa-solid fa-arrow-right'></i>",
    "ABUNƏ OLUN - İZLƏYİN - XƏBƏRLƏR",
    "TƏKLİFLƏR ÜÇÜN QOŞULUN",
    "Hamısını işə götürsək... Biz bunu yaxşı edirik! Bülletenə abunə olun <br> ən eksklüziv promosyonları əldə edin.",
    "ABUNƏ OLUN  <i class='fa-solid fa-arrow-right'></i>",
    "MƏHSULLAR",
    "BURGER",
    "KING DELIGHT MƏHSULLARI",
    "XIRTILDAYAN DADLAR",
    "SƏHƏR YEMƏYİ MƏHSULLARI",
    "UŞAQ MENYUSU",
    "DESERTLƏR",
    "İÇKİLƏR",
    "SOSLAR",
    "TEZ LİNKLƏR",
    "ANA SƏHİFƏ",
    "MENYU",
    "HAQQIMIZDA",
    "ƏLAQƏ",
    "AÇILIŞ SAATLARI",
    "Bazar ertəsi-Cümə: <span  style='color: rgb(167, 32, 32)' >8am-4pm</span> ",
    "Şənbə: <span style='color: rgb(167, 32, 32)'>8am-12am</span>",
    "Copyright © 2023 <span style='color: rgb(167, 32, 32)'>Fazfood</span>. Bütün hüquqlar qorunur"
  ],
  en: [
    "HOME",
    "MENU",
    "PAGES",
    "About Us",
    "Our Teams",
    "Reservation",
    "SHOP",
    "BLOG",
    "CONTACT US",
    "<i class='fa-regular fa-user'></i> LOGIN",
    "<i class='fa-regular fa-user'></i> REGISTER",
    "SEARCH",
    "<i class='fa-solid fa-motorcycle'></i> ORDER NOW",
    "GRILLED  <br> BEEF  <br> BURGER",
    "Secret family recipes are the stuff of legends and Stack <br> burger blend is no exception.",
    "ORDER NOW <i class='fa-solid fa-arrow-right'></i>",
    "ABOUT OUR FOOD",
    " BEST BURGER IDEAS & <br />TRADITIONS FROM THE <br /> WHOLE WORLD",
    "The mouth-watering aroma of sizzling burgers now fills the streets of Birmingham <br />thanks to the passionate pursuit of three brothers, the British founders of Faz food. <br /> After over 50 years of experience in the culinary industry between them, they set <br /> out on a journey to discover the ultimate burger.",
    "ABOUT OUR FOOD  <i class='fa-solid fa-arrow-right'></i>",
    "TODAY'S A <br /> STACKIN' DAY",
    "MEDIUM 4-TOPPING* BURGER",
    "*Additional charge for premium toppings. Minimum of 2 <br /> required.",
    "SHOP NOW <i class='fa-solid fa-arrow-right'></i>",
    "POPULAR DISHES - POPULAR DISHES -",
    "BEST SELLING DISHES",
    "Fazfood is a unique and independent quick service brand. Fazfood burgers and shakes are made pretty hot and tasty. The ultimate “melt <br />in your mouth” experience. We are a fast-casual operation with dine in and take-away elements.",
    " VIEW ALL <i class='fa-solid fa-arrow-right'></i>",
    "FASH FOOD <br /> MEALS",
    "NEW PHENOMENON <br /> BURGER TASTE",
    "ORDER NOW <i class='fa-solid fa-arrow-right'></i>",
    "BEEF <br> BURGER",
    "NEW PHENOMENON <br /> BURGER TASTE",
    "ORDER NOW <i class='fa-solid fa-arrow-right'></i>",
    "CHEESE <br> PIZZA",
    "NEW PHENOMENON <br /> BURGER TASTE",
    "ORDER NOW <i class='fa-solid fa-arrow-right'></i>",
    "MAKE THE THING ANYTHING <br /> IS POSSIBLE",
    "TESTIMONIALS - TESTIMONIALS -",
    "WHAT YOUR CLIENT SAYS",
    "A team of dreamers and doers building unique interactive music <br> and art festivals.",
    "Design",
    "Design",
    "Design",
    "SUPER <br> DELICIOUS",
    "CALL US NOW:",
    "ORDER NOW <i class='fa-solid fa-arrow-right'></i>",
    "30 MINUTES <br /> DELIVERY!",
    "If you’re having a meeting, working late <br /> at night and need an extra push.",
    "MAKE AN ORDER <i class='fa-solid fa-arrow-right'></i>",
    "SUBSCRIBE - FOLLOW - NEWSLETTER",
    "JOIN FOR HOT OFFERS",
    "If we go all out… We do it well! Subscribe to the newsletter <br /> to get the most exclusive promos.",
    " SUBSCRIBE <i class='fa-solid fa-arrow-right'></i>",
    "PRODUCTS",
    "BURGER",
    "KING DELIGHT PRODUCTS",
    "CRISPY FLAVORS",
    "BREAKFAST PRODUCTS",
    "KIDS MENU",
    "DESSERTS",
    "BEVERAGES",
    "SAUCES",
    "QUICK LINKS",
    "HOME",
    "MENU",
    "ABOUT US",
    "CONTACTS",
    "OPENING HOURS",
    "Monday-Friday:<span  style='color: rgb(167, 32, 32)'>8am-4pm</span>",
    "Saturday:  <span style='color: rgb(167, 32, 32)'>8am-12am</span>",
    "Copyright © 2023 <span style='color: rgb(167, 32, 32)'>Fazfood</span>. All rights reserved"
  ],
};

const langBtn = document.querySelector("#btn-lang");
const langItem = document.querySelectorAll(".lang");
if (localStorage.getItem("btn") === null) {
  localStorage.setItem("btn", "En");
} else {
  langBtn.onclick = () => {
    if (langBtn.innerHTML == "Az") {
      for (let i in langData.az) {
        langItem[i].innerHTML = langData.az[i];
      }
      localStorage.setItem("btn", "Az");
      langBtn.innerHTML = "En";
    } else {
      for (let i in langData.en) {
        langItem[i].innerHTML = langData.en[i];
      }
      localStorage.setItem("btn", "En");
      langBtn.innerHTML = "Az";
    }
  };
}

if (localStorage.getItem("btn") === "Az") {
  for (let i in langData.az) {
    langItem[i].innerHTML = langData.az[i];
  }
  langBtn.innerHTML = "En";
} else {
  for (let i in langData.en) {
    langItem[i].innerHTML = langData.en[i];
  }
  langBtn.innerHTML = "Az";
}
