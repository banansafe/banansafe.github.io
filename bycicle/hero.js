let films = [
    {
        name: ' ARDIS SCHULTZ 29',
        duration: 7300,
    
      
        image: "68.png",
        about: "1",
    },
    {
        name: 'Велосипед Ardis Varvar 29',
        duration: 11000,
     
     
        image: "67.png",
        about: "1",
    },
    {
        name: 'BMX Haro 2019',
        duration: 11000,
        
      
        image: "61.png",
        about: "1",
    },
    {
        name: '     Велосипед ardis fort 26',
        duration: 6500,
     
      
        image: "63.png",
        about: "1",
    },
    {
        name: 'Ardis Extreme FW МТВ ',
        duration:8000,
        
      
        image: "64.png",
        about: "1",
    },
    {
        name: ' Flightline One 13',
        duration: 6000,
       
       
        image: "60.png",
        about: "1",
    },
    {
        name: 'Prairie Рама 13',
        duration: 7100,
       
      
        image: "59.png",
        about: "1",
    },
    {
        name: 'PRAIRIE COMP FS ',
        duration: 9000,
      
      
        image: "58.png",
        about: "1",
    },
    {
        name: 'Comanche Prairie Comp',
        duration: 13000,

       
        image: "48.png",
        about: "1",
    },
    {
        name: 'Comanche Prairie 27.5 ',
        duration: 9500,
    
       
        image: "49.png",
        about: "1",
    },
    {
        name: '  PRAIRIE COMP 26',
        duration: 9000,
    
        
        image: "50.png",
        about: "1",
    },
    {
        name: 'Comanche Prairie Comp',
        duration: 9000,
 
       
        image: "51.png",
        about: "1",
    },
    {
        name: 'Comanche Tomahawk',
        duration: 9000,
    
       
        image: "54.png",
        about: "1",
    },
    {
        name: 'Comanche Indigo Fs',
        duration: 8000,
    
        
        image: "53].png",
        about: "1",
    },
    {
        name: 'Comanche Indigo Fs',
        duration: 8800,
 
       
        image: "52.png",
        about: "1",
    },
    {
        name: 'Comanche MOTO SIX',
        duration: 7500,
    
       
        image: "55.png",
        about: "1",
    },
    {
        name: 'Comanche Niagara Fs',
        duration: 10000,
    
        
        image: "56.png",
        about: "1",
    },
    {
        name: 'Comanche Tabo',
        duration: 8400,
 
       
        image: "57.png",
        about: "1",
    },
    
];

let app = {
    data() {
        return {
            films: films,
            searchString: '',
            currentIndex: -1,
            modalNum: -1,
            showPage: false,
        }
    },
    mounted(){
this.showPageFunc();
    },
    methods: {
        showPageFunc(){
            setTimeout(()=>{this.showPage= true;}  , 1000)

        },
        showDetails(index) {
            this.currentIndex = index;
        },
        hideDetails() {
            this.currentIndex = -1;
        },
    
        showModal(index){
        this.modalNum = index;
    },
    hideModal(){
        this.modalNum = -1;
    }
},
    computed: {
        myFilter() {
            let search = this.searchString;//скорочуємо змінну
            if (!search) {//якщо змінна пуста
                return this.films;//показуємо всі фільми
            }
            search = search.trim().toLowerCase();//обрізаємо пробіли і малі букви робимо

            return this.films.filter(//запускаємо фільтр
                item => {//кожен асоціативний масивчик (один фільм)
                    if (item.name.toLowerCase().indexOf(search) != -1) {
                        return item;//фільми, що підходять
                    }
                })
        }
    },


}

Vue.createApp(app).mount("#film-app")