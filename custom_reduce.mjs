
Array.prototype.customReduce = function (reduce_executor, initialValue='default') {

    let a = this
    let accumulator;
    for (let i=0; i<a.length; i++) {
        
        if (i===0 && initialValue === 'default') { 
            accumulator = a[i]
            console.log("accumulator type", typeof accumulator)
            console.log("accumulator", accumulator)
            continue
        } else if (i===0) {
            accumulator = initialValue
        }
        console.log("accumulator_before reduce", accumulator)
        accumulator = reduce_executor(accumulator, a[i])
    }

    return accumulator
}


const array1 = [1, 2, 3, 4];

const sumWithInitial = array1.customReduce((accumulator, currentValue) => accumulator * currentValue, 10);

console.log(sumWithInitial);