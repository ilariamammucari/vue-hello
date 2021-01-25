// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.

var app = new Vue({
    el: '#root',
    data: {
        messaggio: 'Ciao da Vue.js',
        urlLogo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvuejs.org%2Fimages%2Flogo.png&f=1&nofb=1',
        formattazioneImg: 'dimensioni-img',
        font: 'formattazione-span',
        colore: 'nero'
    },
    methods: {
        coloraScritta() {
            (this.colore == 'nero') ? this.colore = 'verde' : this.colore = 'nero'
        }
    }
});