
export function sum(...data:number[]):number{
    let result:number =0;
    data.forEach(element => {
        result = result + element;
    });
    return result;
}
console.log(sum(1,2,3,4,5));
console.log(sum(2,4,6))
console.log(sum())