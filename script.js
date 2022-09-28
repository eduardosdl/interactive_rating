const button = document.querySelector('button');
const main = document.querySelector('main');
const mainThankYou = document.querySelector('#thank-you-main');

button.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');
  const paragraph = document.querySelector("#note");

  inputs.forEach(input => {
    if(input.checked) {
      const note = input.value
      paragraph.innerHTML = `You selected ${note} out of 5`;
    }
  });

  main.style.display = 'none';
  mainThankYou.removeAttribute('hidden', 'false');

});