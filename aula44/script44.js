const caixaCursos=document.querySelector('#caixaCursos')
const btn_c=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML','CSS','JAVASCRIPT','PHP','REACT','MYSQL','RECTNATIVE']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
cursos.map((el,chave)=>{
    const novoEleneto=document.createElement('div')
    novoEleneto.setAttribute('id','c' + chave)
    novoEleneto.setAttribute('class' ,'curso c1')
    novoEleneto.innerHTML=el
    const comandos=document.createElement('div')
    comandos.setAttribute('class','comandos')
    const rb=document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')
    comandos.appendChild(rb)
    novoEleneto.appendChild(comandos)
    caixaCursos.appendChild(novoEleneto)
})
btnCursoSelecionado.addEventListener('click',()=>{
    let todososradios=[...document.querySelectorAll('input[type=radio]')]
    let radio_selecionado=todososradios.filter((ele,ind,arr)=>{
        return ele.checked
    })
     radio_selecionado=radio_selecionado[0]
    let cursoselecionado=radio_selecionado.parentNode.parentNode.firstChild.textContent
alert('curso selecionado ' + cursoselecionado)
})