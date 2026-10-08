import { sum } from "./sum.ts";

function isNumber(value: unknown): value is number {
    return typeof value === "number" && !Number.isNaN(value);
}

export class Calculator {
    private readonly values: number[];
    private readonly rejected: unknown[];

    constructor(input: unknown[])
    {
        this.values = input.filter(isNumber);
        this.rejected = input.filter(element => !isNumber(element));

        if (this.rejected.length > 0) {
            console.log("Odrzucone elementy:", this.rejected);
        }
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