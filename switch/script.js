// siempre es igual igual a

var tuSigno = prompt('Escribe tu signo zodiacal').toLowerCase;

switch(tuSigno){
    case 'aries':
        alert('Amor. Febrero empezará con toda una declaración de intenciones. Verás muy claramente qué camino es el que debes tomar. Se acabaron las inversiones de tiempo y esfuerzos sin recompensas. No estés más al lado de alguien que sabes que no te favorece. Busca la atención necesaria de una persona que de verdad sepa valorarte.')
        break;
    case 'tauro':
        alert('Amor. Estás en manos de una persona que juega con tu corazón. Cuidado con esta actitud un tanto destructiva a la que estás expuesto, no es bueno seguir los deseos de alguien sin recibir nada a cambio. La relación está tan descompensada que nunca sabes cómo o cuándo puede terminar. Una ráfaga de viento puede tumbarte del todo.')
        break;
    case 'geminis':
        alert('Amor. Es tiempo de tomar decisiones y especialmente de hacerlo cuando se trata de una forma nueva de amar. No es necesario estar ligado a alguien que parece que no te merezca. Si pruebas a desligarte un poco de ciertas obligaciones podrás mantener la relación de una forma mucho más duradera. El amor no debe ser una carga, sino una liberación.')
        break;
    case 'cancer':
        alert('Amor. Estás haciendo lo imposible para poder convencer a una persona de tu entorno que te haga caso. No eres un experto en relaciones, pero en cierta manera sabes que es una forma de conseguir lo que necesitas. Hablando y vendiendo un producto que, en este caso, serás tú mismo. Deja que las palabras y los gestos marquen la diferencia.')
        break;
    default:
        alert('No hay signo zodiacal para ti')
}