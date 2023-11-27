//local ve session storage
/*
localStorage.setItem("ad","Terane");
localStorage.setItem("yas","22");

sessionStorage.setItem("seher","Baki");

console.log(localStorage.getItem("ad"));

localStorage.removeItem("yas"); //1 deyeri silir
localStorage.clear(); //butun deyerleri silir
*/

//yalniz 1 deyer gondermek olur, array gondermek ucun:

const ulListesi = document.querySelector(".liste");
const isimDizisi = JSON.parse(localStorage.getItem("isimlistesi"));
if (isimDizisi != null) {
  isimDizisi.foreach(function (isim) {
    const yeniLi = document.createElement("li");
    yeniLi.textContent = isim;
    ulListesi.appendChild(yeniLi);
  });
}

document.querySelector("form").addEventListener("submit", function (e) {
  const yeniIsim = document.querySelector(".isim").value;

  let isimDizisi;
  if (localStorage.getItem("isimlistesi" === null)) {
    isimDizisi = [];
  } else {
    isimDizisi = JSON.parse(localStorage.getItem("isimlistesi"));
  }

  isimDizisi.push(yeniIsim);
  localStorage.setItem("isimlistesi", JSON.stringify(isimDizisi));
  const yeniLi = document.createElement("li");
  yeniLi.textContent = yeniIsim;
  ulListesi.appendChild(yeniLi);
  //localStorage.setItem("isimlistesi",isimDizisi); //her defe evvelki deyerin uzerine yazdirir bunun ucun json-dan istifade olunur
  //JSON.parse(); //string-i JSON-a cevirir
  //JSON.stringify(); //JSON-u stringe cevirir
  e.preventDefault(); //basqa sehifeye kecmenin qarsini alir
});
