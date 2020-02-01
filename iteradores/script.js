var ganados = 0;
var perdidos = 0;
function volado(){
    var random = Math.random() * 100;
    if(random >=50){
        return 1
    } else{
        return 0
    }
}

var i=0;
do{
    var volados = volado();
    if(volados === 1){
        ganados += 1;
    } else{
        perdidos += 1;
    }
    i++
}
/*
var i = 0;
while (i <=365){
    var volados = volado();
    if (volados === 1){
        ganados += 1;
    } else{
        perdidos += 1;
    }
    i++
}

____________________________________________________________________________________________


for(var i = 1; i <= 365; i++){
    var volados = volado();
    console.log(volados)
    if(volados ===1){
        ganados += 1;
    } else{
        perdidos += 1;
    }
}
console.log(ganados);
console.log(perdidos);*/


