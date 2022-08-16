class ResultsCalculator {

    constructor(sectionID) {
        let sectionInputs = Array.from(document.querySelectorAll(`${sectionID} input`));

        this.vataInputs = sectionInputs.filter(input => input.name.includes('vata'));
        this.pittaInputs = sectionInputs.filter(input => input.name.includes('pitta'));
        this.kaphaInputs = sectionInputs.filter(input => input.name.includes('kapha'));

        this.result = document.querySelector(`${sectionID} output`);

        for (let input of sectionInputs) {
            input.addEventListener('change', this.calcResults.bind(this));
        }
    }

    isChecked(input) {
        return input.checked;
    }

    calcResults() {
        let vata = Math.round(this.vataInputs.filter(this.isChecked).length / this.vataInputs.length * 100);
        let pitta = Math.round(this.pittaInputs.filter(this.isChecked).length / this.pittaInputs.length * 100);
        let kapha = Math.round(this.kaphaInputs.filter(this.isChecked).length / this.kaphaInputs.length * 100);

        let resultTemplate = `<strong>Итог:</strong> Вата ${vata}%, Питта ${pitta}%, Капха ${kapha}%.`;
        this.result.innerHTML = resultTemplate;
    }
}

new ResultsCalculator('#prakriti');
new ResultsCalculator('#vikriti');
new ResultsCalculator('#intelligence');
new ResultsCalculator('#emotions');
