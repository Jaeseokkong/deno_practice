const result = await fetch("https://catfact.ninja/face")
.then((res) => res.json())
.then((data) => console.log(data)) 