function* contador(){
    let i=0
    while(true){
        yield i++
    }
}
const itc=contador()
for(let c of itc){
    console.log(c)
}