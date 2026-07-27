const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelectorAll('.curso') // Corrigido: querySelectorAll retorna uma lista
const  c1_2=document.getElementById('c1_2')
const cursos=['html','css','javascript','php','react','mysql','react native']
cursos.map((el,chave)=>{
const novo_elemento=document.createElement('div')
novo_elemento.setAttribute('id','c' + chave+1)
novo_elemento.setAttribute('class','curso c1')
novo_elemento.innerHTML=el
const btn_lixeira=document.createElement('img')
btn_lixeira.setAttribute('src','images.png')
novo_elemento.appendChild(btn_lixeira)
btn_lixeira.setAttribute('class','btn_lixeira') 
novo_elemento.addEventListener('click',(evt)=>{
    console.log(evt.target)
    caixa1.removeChild(evt.target.parentNode)

})
novo_elemento.appendChild(btn_lixeira)
caixa1.appendChild(novo_elemento)


   
    
})







