function farq(e) {
    e.preventDefault();
    let a = document.getElementById("input").value;
    let b = document.getElementById("input2").value;
    c = new Date(a);
    d = new Date(b);
    let ayirma = c.getTime() - d.getTime();
    let day = ayirma / 3600 / 24 / 1000;
    // Date(ayirma);
    console.log(day)
}

