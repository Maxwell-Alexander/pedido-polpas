// Selecionando todos inputs do tipo checkbox
let checkbox = document.querySelectorAll("input[type='checkbox']");
// Selecionando todos inputs do tipo number
let numbers = document.querySelectorAll("input[type='number']");

// querySelectorAll retorna uma lista 
for (let i = 0; i < checkbox.length; i++) {
	// Desabilitando todos os inputs do tipo number por padrão
	numbers[i].disabled = true;

	// Evento que dispara a função quando houver mudança no input checkbox
	checkbox[i].addEventListener('change', function () {
		// Se o input checkbox estiver marcado, habilitar input number
		if (checkbox[i].checked) {
			numbers[i].disabled = false;
		} else { // Se o input checkbox não estiver marcado, desabilitar input number
			numbers[i].disabled = true;
		}
	});
}


// Dropdown da lista de sabores
function click_down() {
	const mostrar = document.getElementById("lista_secundaria");
	if (mostrar.style.display == "block") {
		mostrar.style.display = "none";
	} else {
		mostrar.style.display = "block";
	}
}

//Script para primeiro grafico
let graficoPrimario = document.getElementById('graficoPrimario').getContext('2d');

let graficoMenor = new Chart(graficoPrimario, {
	type: 'doughnut',

	data: {
		labels: ['Janeiro', 'Fevereiro', 'Março', 'Abriu'],

		datasets: [{
			label: 'Meses como mais pedidos',

			data: [1, 2, 3, 4,],

		}]
	}
});

//Script para segundo grafico
let graficoSecundario = document.getElementById('graficoSecundario').getContext('2d');

let graficoMenorSegundo = new Chart(graficoSecundario, {
	type: 'line',

	data: {
		labels: ['SABOR-1', 'SABOR-2', 'SABOR-3', 'SABOR-4', 'SABOR-5', 'SABOR-6', 'SABOR-7'],

		datasets: [{
			label: 'Sabor com mais saída',

			data: [1, 8, 3, 4, 5, 6, 7, 8]
		}]
	}
});


//Script para graficoMaior
let graficoVendasMes = document.getElementById('graficoVendasMes').getContext('2d');
//Type, Data (dados) e options
let chart = new Chart(graficoVendasMes, {
	type: 'bar',

	data: {
		labels: ['PESSOA-1', 'PESSOA-2', 'PESSOA-3', 'PESSOA-4', 'PESSOA-5'],

		datasets: [{
			label: 'Pessoas que mais compraram',

			data: [1, 2, 3, 4, 5],

			backgroundColor: '#FF6200',

		}]
	}
});