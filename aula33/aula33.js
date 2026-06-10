const divTodos=[...document.getElementsByTagName('div')]
const cursoTodos=[...document.getElementsByClassName('curso')]

const cursoC1=[...document.getElementsByClassName('c1')]
const cursoC2=[...document.getElementsByClassName('c2')]
const cursoespecial=document.getElementById('c1')
const query_div_todas=[...document.querySelectorAll('div >p')]
const quary_cursos_todos=[...document.querySelectorAll('.curso')]
const querycursoC1=[...document.querySelectorAll('.c1,p')]
const querycursoC2=[...document.querySelectorAll('.c2')]
const querycursoespecial=document.querySelector('#c1')
console.log(query_div_todas)
// console.log(quary_cursos_todos)
// console.log(querycursoC1)
// console.log(querycursoC2)
// console.log(querycursoespecial)
// console.log(cursoTodos)

// console.log(divTodos)
// console.log(cursoC1)
// console.log(cursoC2)
// console.log(cursoespecial)

// cursoC2.map((el)=>{
//     el.classList.add('destaque')
// })