function clock(){
    let time=new Date().toLocaleDateString("en",{timeZone:'Asia/Gaza'})
    console.log(time)
}
clock()