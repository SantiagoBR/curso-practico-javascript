function calcArithmeticAverage(list) {
  const sumList = list.reduce(function (acumValue = 0, newElement) {
    return acumValue + newElement;
  });
  const averageList = sumList / list.length;
  return averageList;
}

function calcMedian(list) {
  const listArray = list.split(',')

  function isPair(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  const ordainedList = listArray.sort((a, b) => a - b)

  const listMiddle = parseInt(ordainedList.length / 2);
  let median;
  
  if (isPair(ordainedList.length)) {
    const element1 = parseInt(ordainedList[listMiddle - 1]);
    const element2 = parseInt(ordainedList[listMiddle]);

    const average_Element1_Element2 = calcArithmeticAverage([
      element1,
      element2,
    ]);

    median = average_Element1_Element2;
  } else {
    median = ordainedList[listMiddle];
  }

  return median;
}

function calcMedianBtn () {
  const inputMedian = document.getElementById('inputMedian')
  const outputMedian = document.getElementById('outputMedian')

  const list = inputMedian.value

  const median = calcMedian(list)

  outputMedian.innerText = `La mediana de tu lista es ${median}`
}
