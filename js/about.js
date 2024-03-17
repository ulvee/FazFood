const langData={
  az:[
    "ana",""
  ],
  en:[
    "home",
  ]
};




const langBtn = document.querySelector("#about-lang");
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