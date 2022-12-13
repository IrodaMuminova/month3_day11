function number(a){
    let b=a.slice(-4).padStart(16,'*')
    console.log(b);
    console.log(a)
}
number('9860678987654321')