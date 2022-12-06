var string="";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
           try{
             string=eval(string);
             document.querySelector('input').value=string; 
             string="";
           }
           catch{
            string="Invalid";
             document.querySelector('input').value = string; 
           }
        }
        else if(e.target.innerHTML=='C'){
           string="";
           document.querySelector('input').value=string; 
           document.querySelector('input').value=0; 
        }
        else if(e.target.innerHTML=='DEL'){
            document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
            if (document.querySelector('input').value == ""){
                string="";
                document.querySelector('input').value = 0; 
            }
        //    document.querySelector('input').value=0; 
        }
        else {
            string=string+e.target.innerHTML;
            document.querySelector('input').value = string; 
        }
//         console.log(e.target.innerHTML);
    })
})
