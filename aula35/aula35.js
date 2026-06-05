const caixa1=document.getElementById('caixa1')
const caixa2=document.getElementById('caixa2')
const btn=document.getElementById('bnt_copiar')
const todoscursos=[...document.querySelectorAll('.curso')]
todoscursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso=evt.target
        curso.classList.toggle('selecionado')

    })
})
btn.addEventListener('click',()=>{
    const cursosselecionados=[...document.querySelectorAll('.selecionado')]
    cursosselecionados.map((el)=>{
        caixa2.appendChild(el)

    })
})