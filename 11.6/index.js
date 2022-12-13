function week_day(e) {
    e.preventDefault();
    let input = document.getElementById("input").value;
    let date = new Date(input);
    console.log(date.getDay())
}
