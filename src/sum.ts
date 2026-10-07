
export function sum(...data:number[]):number{
    let initialValue=0;
    return data.reduce(  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,);
}
console.log(sum(1,2,3,4,5));
console.log(sum(2,4,6))
console.log(sum())