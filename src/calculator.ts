import { sum } from "./sum.ts";

export class Calculator {
    private readonly values: number[];
    private readonly rejected: unknown[];

    constructor(input: unknown[])
    {
        this.values =[];
        this.rejected =[];
        input.forEach(element => {
            if(typeof element === "number" && !Number.isNaN(element))
                this.values.push(element)
            else
            {
                this.rejected.push(element)
                console.log(`Argument is not a number `,element)
            }
        });
    }

    add(): number{
        if (this.values.length === 0) return 0;
        return sum(...this.values)
    }
    subtract():number{
        if (this.values.length === 0) return 0;
        return this.values.reduce((acc, cur) => acc - cur)
    }
    multiply():number{
        if (this.values.length === 0) return 0;
        return this.values.reduce((acc,cur) => acc * cur)
    }
    divide():number{
        if (this.values.length === 0) return 0;
        if (this.values.slice(1).includes(0))
            {
                console.log("nie dzielimy przez 0")
                return 0;
            }
        return this.values.reduce((acc,cur) => acc / cur)
    }
}