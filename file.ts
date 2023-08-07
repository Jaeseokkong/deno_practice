async function readPrivate() : Promise<void> {
    const key: string = await Deno.readTextFile("key.txt");
    console.log(key);
}

readPrivate();

console.log(Deno.env.get("TEST"))

Deno.writeTextFile("key.txt", "악성코드 심기")