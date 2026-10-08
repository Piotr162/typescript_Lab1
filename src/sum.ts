
export function sum(...values:unknown[]):number{
    let result =0;
    for (let i = 0; i < values.length; i++) {
        let element = values[i];
        if(typeof element ==="number" && !Number.isNaN(element))
            result = result+element;
        else
            console.log(`Argument ${i+1} is not a number `,element)
    }
    return result;
}
// console.log(sum(1,2,'text',4,'string'));
// console.log(sum(2,{},6))
// console.log(sum())

// Funkcja powinna zebrać wszystkie dane, przetworzyć poprawne argumenty i dokładnie wypisać, co wywołuje problem, zamiast przerywać przy pierwszym błędzie.