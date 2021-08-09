function calcArithmeticAverage(list) {
    // let sumList = 0
    
    // for (let i=0; i<list.length; i++) {
    //     sumList = sumList + list[i]
    // }
    
    const sumList = list.reduce(
        function (acumValue = 0, newElement) {
            return acumValue + newElement
        }
    )

    const averageList = sumList / list.length

    return averageList
}