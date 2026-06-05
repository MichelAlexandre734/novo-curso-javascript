const cursostodos=[...document.getElementsByClassName('curso')]
const cursosc1=[...document.getElementsByClassName('c1')]
const cursosc2=[...document.getElementsByClassName('c2')]
const cursoespecial=document.getElementsByClassName('curso')[6]
console.log(cursostodos)
console.log(cursosc1)
console.log(cursosc2)
console.log(cursoespecial)

cursosc2.map((el)=>{
    el.classList.add('destaque')

})