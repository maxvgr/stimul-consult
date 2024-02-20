import IMask from "imask/holder";

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.phone') // ищем input с нужным классом
  const maskOptions = { // создаем объект параметров
    mask: '+{7}(000)-000-00-00' // задаем единственный параметр mask
  }
  IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами

})