import { sum } from "./sum.ts";

import _ from "lodash";

export function isNumber(value: unknown): value is number {
    return typeof value === "number" && !Number.isNaN(value);
}

export class Calculator {
    private readonly values: number[];
    private readonly rejected: unknown[];

    constructor(input: unknown[])
    {
        this.values = _.filter(input, isNumber);
        this.rejected = _.filter(input, (element) => !isNumber(element));
        if (this.rejected.length > 0) {
            this.rejected.forEach((element) => {
                console.log(`Argument is not a number `, element);
            });
        }
    }

    add(): number{
        if (this.values.length === 0) return 0;
        return sum(...this.values)
    }
    subtract():number{
        if (this.values.length === 0) return 0;
        return _.reduce(this.values,(acc, cur) => acc - cur ) as number;
    }
    multiply():number{
        if (this.values.length === 0) return 0;
        return _.reduce(this.values, (acc, cur) => acc * cur) as number;
    }
    divide():number{
        if (this.values.length === 0) return 0;
        if (this.values.slice(1).includes(0))
            {
                console.log("nie dzielimy przez 0")
                return 0;
            }
        return _.reduce(this.values, (acc, cur) => acc / cur) as number;
    }
}

// W tym zadaniu Lodash nie dał nam nic, bo zwykły JavaScript ma już wbudowane filter i reduce, więc dokładanie zewnętrznej biblioteki tylko sztucznie powiększa kod projektu.