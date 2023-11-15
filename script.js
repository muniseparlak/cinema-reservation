const container = document.querySelector(".container");
let money = document.querySelector(".money"); // parayı ekrana yazdırmak için html seçtik
let number = document.querySelector(".number"); // kaç koltuk görmek için html kodunu seçtik
let seatPrice = document.querySelector("#seatPrice"); // select kısmını seçtik
let payContain = document.querySelector(".pay"); // en altta fiyat ve koltuk sayısının text i

// koltukların selected=toggle olması için
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("chair") &&
    !e.target.classList.contains("exampleSeat")
  ) {
    e.target.classList.toggle("selected");

    // business koltuk seçildiğinde option da prime ı seçmek için
    if (e.target.classList.contains("business")) {
      document.getElementById("prime").selected = "true";
    }

    //rezerve koltuk seçildiğinde alert için
    if (e.target.classList.contains("reserved")) {
      alert("Bu koltuk rezerve, lütfen başka koltuk seçiniz");
      !e.target.classList.toggle("selected");
    }

    calculate();
  }
});

function calculate() {
  let price = seatPrice.value; // bilet fiyatı için
  let selectedChair = container.querySelectorAll(".chair.selected").length - 1; // seçili koltuk sayısı
  number.innerHTML = selectedChair;
  money.innerHTML = selectedChair * price;

  if(selectedChair > 0){
    payContain.style.display = 'block'
  }else{
    payContain.style.display = 'none'
  }
}

