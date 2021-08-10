const list = [1, 2, 3, 1, 1, 2, 2, 3, 2, 2, 4, 5, 500];

function calcMode (list) {

	const listArray = list.split(',')
	const listCount = {}
	
	listArray.map(
		function (element) {
			if(listCount[element]){
				listCount[element] += 1
			} else {
				listCount[element] = 1
			}
		}
	)
	
	const listNewArray = Object.entries(listCount).sort((a,b) => a[1] - b[1])
	
	const mode = listNewArray[listNewArray.length - 1]

	return `La moda de tu lista es ${mode[0]}, porque se repite ${mode[1]} veces.`
}

function calcModeBtn () {
	const inputMode = document.getElementById('inputMode')
	const outputMode = document.getElementById('outputMode') 

	const list = inputMode.value

	let mode = calcMode(list)

	outputMode.innerHTML = mode
}


