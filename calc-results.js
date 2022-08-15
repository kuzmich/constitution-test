const prakritiInputs = Array.from(document.querySelectorAll('#prakriti input'));
const vataInputs = prakritiInputs.filter(input => input.name.includes('vata'));
const pittaInputs = prakritiInputs.filter(input => input.name.includes('pitta'));
const kaphaInputs = prakritiInputs.filter(input => input.name.includes('kapha'));
const prakritiResult = document.querySelector('#prakriti output');

function calcPrakritiResults(event) {
    let isChecked = input => input.checked;
    let vataResult = Math.round(vataInputs.filter(isChecked).length / vataInputs.length * 100);
    let pittaResult = Math.round(pittaInputs.filter(isChecked).length / pittaInputs.length * 100);
    let kaphaResult = Math.round(kaphaInputs.filter(isChecked).length / kaphaInputs.length * 100);
    let resultText = `Вата - ${vataResult}%, Питта - ${pittaResult}%, Капха - ${kaphaResult}%.`;
    prakritiResult.textContent = resultText;
}

for (let input of prakritiInputs) {
    input.addEventListener('change', calcPrakritiResults);
}