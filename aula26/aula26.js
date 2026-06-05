 const somar=val=>{
        let res=0
        for(v of val){
            res+=v
         
        }
           return res
         
    }
const soma=(...valores)=>{
   
     return somar(valores)
  
}
valor=[10,5,5]
console.log(soma(...valor))