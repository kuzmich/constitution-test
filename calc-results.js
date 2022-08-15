const prakritiInputs = Array.from(document.querySelectorAll('#prakriti input'));
const prakritiVataInputs = prakritiInputs.filter(input => input.name.includes('vata'));
const prakritiPittaInputs = prakritiInputs.filter(input => input.name.includes('pitta'));
const prakritiKaphaInputs = prakritiInputs.filter(input => input.name.includes('kapha'));
const prakritiResult = document.querySelector('#prakriti output');

const vikritiInputs = Array.from(document.querySelectorAll('#vikriti input'));
const vikritiVataInputs = vikritiInputs.filter(input => input.name.includes('vata'));
const vikritiPittaInputs = vikritiInputs.filter(input => input.name.includes('pitta'));
const vikritiKaphaInputs = vikritiInputs.filter(input => input.name.includes('kapha'));
const vikritiResult = document.querySelector('#vikriti output');

function calcPrakritiResults(event) {
    let isChecked = input => input.checked;
    let vataResult = Math.round(prakritiVataInputs.filter(isChecked).length / prakritiVataInputs.length * 100);
    let pittaResult = Math.round(prakritiPittaInputs.filter(isChecked).length / prakritiPittaInputs.length * 100);
    let kaphaResult = Math.round(prakritiKaphaInputs.filter(isChecked).length / prakritiKaphaInputs.length * 100);
    let resultText = `Вата - ${vataResult}%, Питта - ${pittaResult}%, Капха - ${kaphaResult}%.`;
    prakritiResult.textContent = resultText;
}

function calcVikritiResults(event) {
    let isChecked = input => input.checked;
    let vataResult = Math.round(vikritiVataInputs.filter(isChecked).length / vikritiVataInputs.length * 100);
    let pittaResult = Math.round(vikritiPittaInputs.filter(isChecked).length / vikritiPittaInputs.length * 100);
    let kaphaResult = Math.round(vikritiKaphaInputs.filter(isChecked).length / vikritiKaphaInputs.length * 100);
    let resultText = `Вата - ${vataResult}%, Питта - ${pittaResult}%, Капха - ${kaphaResult}%.`;
    vikritiResult.textContent = resultText;
}

for (let input of prakritiInputs) {
    input.addEventListener('change', calcPrakritiResults);
}

for (let input of vikritiInputs) {
    input.addEventListener('change', calcVikritiResults);
}