
var numero ="";

function insert(num)

        {
            var aux;
            if(num==="+"||num==="-"||num==="*"||num==="/"){
                aux=document.getElementById('resultado').innerHTML;
                clean();
                numero=aux+num;
                document.getElementById('resultado').innerHTML = num;
                return;
            }
            
            numero = numero+ num;
            document.getElementById('resultado').innerHTML = numero;



        }
        function clean()
        {
            document.getElementById('resultado').innerHTML = "";
            numero ="";
        }
        function calcular()
        {
            console.log(numero)
            
            if(numero)
            {
                document.getElementById('resultado').innerHTML = eval(numero);
            }
             if(!isFinite(eval(numero))){
                document.getElementById('resultado').innerHTML ="Não Permitido ";
                
            }
            
            
            
        }