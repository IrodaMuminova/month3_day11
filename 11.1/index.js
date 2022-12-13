function current(a) {
    let date = new Date();
    console.log(date.getDate() + a + date.getMonth() + a + date.getFullYear())
}
current('-');
current('.')