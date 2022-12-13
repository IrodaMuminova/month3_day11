function yosh(e) {
    e.preventDefault();
    let input = document.getElementById("input").value;
    let date = new Date();
    let date_two = new Date(input)
    let b = date.getTime() - date_two.getTime();
    let age = new Date(b);
    let c = age.getFullYear() - 1970;
    console.log(c)
}
