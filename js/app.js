
let memberDetail = [
    
    {
        name: "Simple Soul",
        image: "img/simple.jpg",
        bestfood: "Eba and Egusi",
        track: "Front End",
        bestmovie: "Hercules",
        complexion: "Chocolate",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    
    },

    {
        name: "Cyntia",
        image: "img/cynthia.jpg",
        bestfood: "Spagetti",
        track: "Front End",
        bestmovie: "BBF",
        complexion: "Fair",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    
    },

    {
        name: "Tolu",
        image: "img/tolu.jpg",
        bestfood: "Pounded Yam",
        track: "Front End",
        bestmovie: "The Irishman",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    
    },

    {
        name: "Khalid",
        image: "img/khalid.jpg",
        bestfood: "Marinated coochie",
        track: "Front End",
        bestmovie: "Queen of the damned",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",
    
    },

    {
        name: "Oreoluwa",
        image: "img/oreoluwa.jpg",
        bestfood: "Egusi Soup/ Amala",
        track: "Front End",
        bestmovie: "None",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    
    },

    {
        name: "Adejoke",
        image: "img/adejoke.jpg",
        bestfood: "Spaghetti",
        track: "Front End",
        bestmovie: "Smart Money Woman",
        complexion: "Light Skinned",
        learnt: "HTML, CSS, Javascript",
        age: "28",
    
    },

    {
        name: "Tijani",
        image: "img/tj.jpg",
        bestfood: "Spagetti/Okro",
        track: "Front End",
        bestmovie: "Game of Throne",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    
    },

    {
        name: "Paul",
        image: "img/paul.jpg",
        bestfood: "Pounded Yam",
        track: "Front End",
        bestmovie: "The Irishman",
        complexion: "dark",
        learnt: "HTML, CSS, JS",
        age: "27",
    
    },

    {
        name: "Mavdavis",
        image: "img/mavdavis.jpg",
        bestfood: "Rice",
        track: "Front End",
        bestmovie: "Teen Wolf",
        complexion: "dark",
        learnt: "HTML, CSS, JS",
        age: "22",
    
    },

    {
        name: "Etinosa",
        image: "img/etinosa.jpg",
        bestfood: "Pounded Yam",
        track: "Front End",
        bestmovie: "The Irishman",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    
    },
]
         
let row = document.querySelector(".row");

for (let i = 0; i < memberDetail.length; i++) {
    let card = '<div class="col-lg-4 col-md-6 col-12">' +
                    '<div class="card">' +
                        '<img class="image-fluid" src="' + memberDetail[i].image + '" alt="" width="25%">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title text-light">'+'Name: ' + memberDetail[i].name + '</h5>' +
                            '<p class="card-info text-light">'+'Best Food: ' + memberDetail[i].bestfood + '</p>' +
                            '<p class="card-info text-light">'+'Track: ' + memberDetail[i].track + '</p>' +
                            '<p class="card-info text-light">'+'Best Movie: ' + memberDetail[i].bestmovie + '</p>' +
                            '<p class="card-info text-light">'+'Complexion: ' + memberDetail[i].complexion + '</p>' +
                            '<p class="card-info text-light">'+'Learnt: ' + memberDetail[i].learnt + '</p>' +
                            '<p class="card-info text-light">'+'Age: ' + memberDetail[i].age + '</p>' +
                            '<button onclick="clickMe(' + i + ')">Click Me</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';

                

    row.innerHTML += card;
   
};
let funnyMessage = "Damn! You just knocked"

function clickMe(i) {
    
    alert(funnyMessage + " " + memberDetail[i].name + " " + "on the head!");


}
