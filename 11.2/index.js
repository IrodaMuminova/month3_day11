function isWeekend(e) {
    e.preventDefault();
    let input = document.getElementById("input").value;
    let date = new Date(input);
    let day;
    if (date.getDay() == 5 || date.getDay() == 6) {
        day = true;
    }
    else {
        day = false;
    }
    console.log(day)
}
isWeekend(input)

