import {config} from "https://deno.land/x/dotenv/mod.ts";

console.log(config);

const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(1, 2));