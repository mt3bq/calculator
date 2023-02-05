let calc={
    
 
    clear:document.getElementById('clear'),
    number:document.querySelectorAll('.number'),
    op:document.querySelectorAll('.op'),
    eql:document.querySelector('.eql'),
    
    res:'',
    first:document.querySelector('.first'),
    opee:document.querySelector('.opee'),
    sec:document.querySelector('.sec'),
    proses:document.querySelector('.proses p'),




  

    clear_number:function(){
        this.clear.onclick=()=>{
            this.first.innerText='';
            this.opee.innerText='';
            this.sec.innerText='';
            this.proses.innerText='';
        }
    },

    //get number

    get_number:function(){
        this.number.forEach(n=>{
         
           n.addEventListener('click',num=>{
               console.log(num.target.className);
               if(this.opee.innerText ==''){
                this.first.innerText+=num.target.innerText;
               }if(this.opee.innerText=='+'||this.opee.innerText=='-'||this.opee.innerText=='*'||this.opee.innerText=='/'||this.opee.innerText=='%'){
                this.sec.innerText+=num.target.innerText;
               }
            
               
               
            
        
               
           })
           
        })

    },

    get_op:function(){
        this.op.forEach(op=>{
            op.addEventListener('click',o=>{
                if(this.opee.innerText==''){
                    this.opee.innerText+=o.target.innerText;
                }
               
            })
        })
    },
    equl:function(){

        this.eql.onclick=()=>{
            let x=Number(this.first.innerText);
            let y=Number(this.sec.innerText);
            switch(this.opee.innerText){
                case'+':
            
            this.res=x+y;
            break;
            case'*':
            
            this.res=x*y;
            break;
            case'-':
            
            this.res=x-y;
            break;
            case'/':
            
            this.res=x/y;
            break; 

            default:
                console.log('err');
                this.res='error'
            }
            
            this.proses.innerText=this.first.innerText + this.opee.innerText +this.sec.innerText ;
            this.first.innerText=this.res;
            this.opee.innerText='';
            this.sec.innerText='';
        }
    }
};


calc.clear_number();
calc.get_number();
calc.get_op();
calc.equl();






