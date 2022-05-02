function show(a) {     
    var input = document.getElementById("result");   
    input.value += a    
}

function operacao(){
    var op = document.getElementById("result").value;
    
    var expression = new String(op);
    console.log(op);
    for(var i= 0; i <  expression.length; i++){        
         console.log("entrou no for")         
         if(expression.charAt(i) == "+"){
                    
            var numbers = new String(expression.split('+'))
            console.log(numbers)
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') +1, numbers.length)
            console.log(n1) 
            console.log(n2)
            var resultadoFinal = parseInt(n1) + parseInt(n2);
            alert(resultadoFinal);
            console.log(resultadoFinal)
            document.getElementById("result").value = resultadoFinal;       
            break;
        }else if (expression.charAt(i) == "-") {                    
            var numbers = new String(expression.split('-'))           
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') +1, numbers.length)            
            var resultadoFinal = parseInt(n1) - parseInt(n2);           
            document.getElementById("result").value = resultadoFinal;  
            alert(resultadoFinal);     
            break;
        } else if (expression.charAt(i) == "*") {                    
            var numbers = new String(expression.split('*'))           
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') +1, numbers.length)            
            var resultadoFinal = parseInt(n1) * parseInt(n2);           
            document.getElementById("result").value = resultadoFinal; 
            alert(resultadoFinal);      
            break;
        } else if (expression.charAt(i) == "/")  {
            var numbers = new String(expression.split('/'))           
            n1 = numbers.substring(0, numbers.indexOf(','));
            n2 = numbers.substring(numbers.indexOf(',') + 1, numbers.length)            
            var resultadoFinal = parseInt(n1) / parseInt(n2);           
            document.getElementById("result").value = resultadoFinal;  
            alert(resultadoFinal);     
            break;
        }
       
    } 
   
     
}



function Clear() {
    var a = document.getElementById('result');
    a.value = 0;
}