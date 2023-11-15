const container = document.querySelector('.container')
let money = document.querySelector('.money');
let number = document.querySelector('.number');
let seatPrice = document.querySelector('#seatPrice')
// let payContain = document.querySelector('.pay')


// koltukların selected=toggle olması için
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('chair') && (!e.target.classList.contains('exampleSeat'))){
    e.target.classList.toggle('selected')
    
 // business koltuk seçildiğinde option da prime ı seçmek için
  if(e.target.classList.contains('business')){
        document.getElementById("prime").selected = "true";
    }

//rezerve koltuk seçildiğinde alert için 
  if(e.target.classList.contains('reserved')){
    alert('Bu koltuk rezerve, lütfen başka koltuk seçiniz')
    !e.target.classList.toggle('selected')
  }

    calculate()
    showPay()
    
  }
})

function calculate() {
    let price = seatPrice.value;
    selectedChair = container.querySelectorAll('.chair.selected').length-1
    number.innerHTML = selectedChair;
    money.innerHTML = selectedChair * price

}





