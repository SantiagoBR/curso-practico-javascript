function calcArithmeticAverage(list) {    
    const sumList = list.reduce(
        function (acumValue = 0, newElement) {
            return acumValue + newElement
        }
    )

    const averageList = sumList / list.length

    return averageList
}