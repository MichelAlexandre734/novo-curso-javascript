const caixaCursos=document.querySelector('#caixaCursos')
const btn_c=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML','CSS','JAVASCRIPT','PHP','REACT','MYSQL','RECTNATIVE']
const btnCursoSelecionado=document.getElementById('btnCursoSelecionado')
const btnRemoverCurso=document.getElementById('btnRemoverCurso')
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
const radioselecionado=()=>{
     let todososradios=[...document.querySelectorAll('input[type=radio]')]
    let radio_selecionado=todososradios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radio_selecionado[0]
  
}
btnCursoSelecionado.addEventListener('click',()=>{
    const rs=radioselecionado()
    try{
             let cursoselecionado=rs.parentNode.parentNode.firstChild.textContent
alert('curso selecionado ' + cursoselecionado)

    }catch(err){
        window.alert('selecione um curso')
    }
      
   
     
 
})
btnRemoverCurso.addEventListener('click',()=>{
    const rs=radioselecionado()
    if(rs!=undefined){
          let cursoselecionado=rs.parentNode.parentNode
cursoselecionado.remove()

    }else{
        window.alert('selecione o curso')
    }
   
     
  
})