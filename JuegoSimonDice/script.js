const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const naranja = document.getElementById('naranja');
const verdeC = document.getElementById('verdeC');
const rosa = document.getElementById('rosa');
const verdeO = document.getElementById('verdeO');
const azulO = document.getElementById('azulO');
const azulC = document.getElementById('azulC');
const azul = document.getElementById('azul');
const btnEmpezar = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 10;

class Juego{
    constructor(){
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }
    inicializar(){
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            rojo,
            amarillo,
            naranja,
            verdeC,
            rosa,
            verdeO,
            azulO,
            azulC,
            azul
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }
    siguienteNivel(){
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick()
        console.log('Siguiente movimiento')
    }
    transformarNumeroAColor(numero){
        switch(numero){
            case 0:
                return 'rojo'
            case 1:
                return 'amarillo'
            case 2:
                return 'naranja'
            case 3:
                return 'verdeC'
            case 4:
                return 'rosa'
            case 5:
                return 'verdeO'
            case 6:
                return 'azulO'
            case 7:
                return 'azulC'
            case 8:
                return 'azul'
        }
    }
    transformarColorANumero(numero){
        switch(numero){
            case 'rojo':
                return 0
            case 'amarillo':
                return 1
            case 'naranja':
                return 2
            case 'verdeC':
                return 3
            case 'rosa':
                return 4
            case 'verdeO':
                return 5
            case 'azulO':
                return 6
            case 'azulC':
                return 7
            case 'azul':
                return 8
        }
    }
    iluminarSecuencia(){
        for(let i= 0; i< this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i]);
            setTimeout(()=> this.iluminarColor(color),1000 * i)
        }
    }
    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(()=> this.apagarColor(color), 350);
    }
    apagarColor(color){
        this.colores[color].classList.remove('light');
    }
    agregarEventosClick(){
        this.colores.rojo.addEventListener('click', this.elegirColor)
        this.colores.amarillo.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verdeC.addEventListener('click', this.elegirColor)
        this.colores.rosa.addEventListener('click', this.elegirColor)
        this.colores.verdeO.addEventListener('click', this.elegirColor)
        this.colores.azulO.addEventListener('click', this.elegirColor)
        this.colores.azulC.addEventListener('click', this.elegirColor)
        this.colores.azul.addEventListener('click', this.elegirColor)
    }
    elegirColor(e){
        const nombreColor = e.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++
                if(this.nivel === ULTIMO_NIVEL){
                    alert('GANASTE')
                }else{
                    setTimeout(this.siguienteNivel,1500)
                }
            }
        }else{
            alert('perdiste looser')
        }
        
    }
}
function empezarJuego(){
	window.juego = new Juego;
}