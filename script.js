function suma (variableA,variableB){
    if (variableB===''){
        variableA = 0;
        return variableA;
    }else{
        variableA=Number(variableA);
        variableB=Number(variableB);
        return variableA+variableB;
    } 
}

function resta (variableA, variableB){
    if (variableB==''){
        variableA = 0;
        return variableA;
    }else{
        return variableA-variableB;
    } 
}

function multiplicacion (variableA, variableB){
    if (variableB==''){
        variableA = 0;
        return variableA;
    }else{
        return variableA*variableB;
    }
}

function división (variableA, variableB){
    if (variableB===''){
        variableA = 0;
        return variableA;
    }else{
        if(variableB != 0){
            return variableA/variableB;
        }else{
            alert('La división entre 0 no esta definida');
            return variableA
        }
    }  
}


let variableA = '0';
let variableB = '';
let operator = '0';
let banderaPunto = true;
let banderaBorrado = true;
const resultados = document.querySelector('#resultados');
const botones = document.querySelector('#botones');
const back = document.querySelector('#backSpace');
const ce = document.querySelector('#ce');


function AccionNumero(valor){
    if(operator === '0'){
        if(variableA === '0'){
            variableA = `${valor}`;
        }else{
            variableA += `${valor}`;
        }
        resultados.textContent=`${variableA}`;
    }else{
            variableB += `${valor}`;
            resultados.textContent=`${variableA}${operator}${variableB}`;
        }
}


function AccionOperador(valor){
    if(operator==='0'){
        operator=valor;
        banderaPunto=true;
        resultados.textContent=`${variableA}${operator}`;
    }else{
        if(variableB===''){
            resultados.textContent=`${variableA}`;
            operator = '0';
        }else{
            AccionIgual(false);
            operator=valor;
            banderaPunto=true;
            resultados.textContent=`${variableA}${operator}`;
        }
    }
}

function AccionPunto(){
    if(operator == '0'){
        if(banderaPunto){
            variableA += '.';
            banderaPunto = false;
            resultados.textContent=`${variableA}`;
        }
    }else{
        if(banderaPunto){
            if(variableB === ''){
                variableB = '0.'
            }else{
                variableB += '.';
            }
            banderaPunto = false;
            resultados.textContent=`${variableA}${operator}${variableB}`;
        }
    }
}

function AccionIgual(band){
    switch(operator){
        case '+':
            variableA = `${suma(variableA,variableB)}`;
            operator = '0';
            variableB = '';
            resultados.textContent = `${variableA}`;
            if(band){
                variableA ='0';
            }
            break;
        case '-':
            variableA = `${resta(variableA,variableB)}`;
            operator = '0';
            variableB = '';
            resultados.textContent = `${variableA}`;
            if(band){
                variableA ='0';
            }
            break;
        case '*':
            variableA = `${multiplicacion(variableA,variableB)}`;
            operator = '0';
            variableB = '';
            resultados.textContent = `${variableA}`;
            if(band){
                variableA ='0';
            }
            break;
        case '/':
            variableA = `${división(variableA,variableB)}`;
            operator = '0';
            variableB = '';
            resultados.textContent = `${variableA}`;
            if(band){
                variableA ='0';
            }
            break;
        case '0':
            resultados.textContent = `${variableA}`;
            break;
    }
}

function AccionBackErase(){
    if(operator === '0'){
        let lenght= variableA.length;
        if(variableA.charAt(variableA.length-1)==='.'){
            banderaPunto = true;
        }
        variableA = variableA.substring(0,lenght-1);
        if(variableA === ''){
            variableA = '0';
        }
        resultados.textContent = `${variableA}`;
    }else if(variableB === ''){
        operator = '0';
        resultados.textContent = `${variableA}`;
    }else{
        let lenght= variableB.length;
        if(variableB.charAt(variableB.length-1)==='.'){
            banderaPunto = true;
        }
        variableB = variableB.substring(0,lenght-1);
        if(variableB === ''){
            variableB = '';
        }
        resultados.textContent = `${variableA}${operator}${variableB}`;
    }
    }

function AccionCe(){
    variableA = '0';
    variableB = '';
    operator = '0';
    banderaPunto = true;
    resultados.textContent=`${variableA}`;
}

function TeclaNumero(valor){
    const boton = document.createElement('button');
    boton.classList.add('boton');
    boton.style.flexBasis = `${100/4}%`;
    boton.textContent = `${valor}`;
    botones.appendChild(boton);
    boton.addEventListener('click',()=>{
        AccionNumero(valor);
    });
}

function TeclaOperador(valor){
    const boton = document.createElement('button');
    boton.classList.add('boton');
    boton.style.flexBasis = `${100/4}%`;
    boton.textContent = `${valor}`;
    botones.appendChild(boton);
    boton.addEventListener('click',()=>{
        AccionOperador(valor);
    });
}

function TeclaPunto(){
    const boton = document.createElement('button');
    boton.classList.add('boton');
    boton.style.flexBasis = `${100/4}%`;
    boton.textContent = '.';
    botones.appendChild(boton);
    boton.addEventListener('click',()=>{
        AccionPunto();
    });
}

function TeclaIgual(){
    const boton = document.createElement('button');
    boton.classList.add('boton');
    boton.style.flexBasis = `${100/4}%`;
    boton.textContent = '=';
    botones.appendChild(boton);
    boton.addEventListener('click',()=>{
        AccionIgual(true);
    });
}


for(i=0;i<16;i++){
    switch(i){
        case 0:
            TeclaNumero(7);
            break;
        case 1:
            TeclaNumero(8);
            break;
        case 2:
            TeclaNumero(9);
            break;
        case 4:
            TeclaNumero(4);
            break;
        case 5:
            TeclaNumero(5);
            break;
        case 6:
            TeclaNumero(6);
            break;
        case 8:
            TeclaNumero(1);
            break;
        case 9:
            TeclaNumero(2);
            break;
        case 10:
            TeclaNumero(3);
            break;
        case 13:
            TeclaNumero(0);
            break;
        case 12:
            TeclaPunto();
            break;
        case 14:
            TeclaIgual();
            break;
        case 3:
            TeclaOperador('*');
            break;
        case 7:
            TeclaOperador('/');
            break;
        case 11:
            TeclaOperador('+');
            break;
        case 15:
            TeclaOperador('-');
            break;
    }
    if(banderaBorrado){
        ce.addEventListener('click',AccionCe);
        back.addEventListener('click',AccionBackErase);
        banderaBorrado=false;
        document.addEventListener('keydown',(event)=>{
            let key = event.key;
            console.log(`${event.key}`)
            switch(key){
                case '0':
                    AccionNumero(0);
                    break;
                case '1':
                    AccionNumero(1);
                    break;
                case '2':
                    AccionNumero(2);
                    break;
                case '3':
                    AccionNumero(3);
                    break;
                case '4':
                    AccionNumero(4);
                    break;
                case '5':
                    AccionNumero(5);
                    break;
                case '6':
                    AccionNumero(6);
                    break;
                case '7':
                    AccionNumero(7);
                    break;
                case '7':
                    AccionNumero(7);
                    break;
                case '8':
                    AccionNumero(8);
                    break;
                case '9':
                    AccionNumero(9);
                    break;
                case '.':
                    AccionPunto();
                    break;
                case 'Backspace':
                    AccionBackErase();
                    break;
                case 'Delete':
                    AccionCe();
                    break;
                case '/':
                    AccionOperador('/');
                    break;
                case '*':
                    AccionOperador('*');
                    break;
                case '+':
                    AccionOperador('+');
                    break;
                case '-':
                    AccionOperador('-');
                    break;
                case 'Enter':
                    AccionIgual(true);
                    break;
            }
        })
    }
    
}

