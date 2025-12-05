class Calcular {
    constructor(p, a) {
        this.peso = p;
        this.altura = a;
    }

    calcularimc() {
        return (this.peso / (this.altura * this.altura)).toFixed(1);

    }

    categoria() {

        const imc = parseFloat(this.calcularimc());
        let categoria = '';
        let imagen = '';

        if (imc < 18.5) {
            categoria = 'Bajo Peso';
            
        } else if (imc < 24.9) {
            categoria = 'Normal';
           
        } else if (imc < 30) {
            categoria = 'Sobrepeso';
            
        } else if (imc < 40) {
            categoria = 'Obesidad';
            
        }

        return `Tu IMC es: <strong>${imc}</strong> <br>
                Categoría: ${categoria} <br> <br>`
                

    }
}

document.getElementById('forma').addEventListener('submit', function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;



    const objCalcular = new Calcular(peso, altura);

    document.getElementById('resumen').innerHTML = objCalcular.categoria();
})