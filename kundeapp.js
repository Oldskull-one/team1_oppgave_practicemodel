const model = {

    app: {

        loggedInUserID: null,
        app: document.getElementById("app"),
        pages: ["mainPage", "minProfilpage", "filmProfilPage", "filmListerPage", "minePreferanserPage"],
        currentPage: "mainPage",
    },

    input: {


    /*
    
    Ting vi trenger her:

    Side nummer 1
    - Søkefelt - OK
    - Film Preferanse - Ok
    - 

    Side nummer 2
    - User Profil Page (data.profil)
    - rated films (data.profil.rated films)
    - fav sjanger (data.profil.fav sjanger)
    - komenteter films (data.profil.komenteter films)

    Side nummer 3
    - Film Profil Page (data.filmer)
    - lage rating
    - legg til kommentar

    Side nummer 4
    - Film preferanser
    (data.filmer)
    (data.sjanger)

    Side nummer 5
    - input.search
    - data.filmer

    Side nummer 6
    - Film lister


    */ 
        
        pageOneSearch: null,
        moviePreferences: {
            favoriteGenre: [],
            favoriteDirector: [],
            favoriteActor: [],
        },

        addedUserProfilePage: {
            profilePage: null,
        },


        addedMoviePreference: {
            moviePreference: null,
        },

        addedMovieProfilePage: {
            movie: null,
        },
    },

    data: {

        film: [
            {
                id: 1,
                name: "Gone Wild",
                director:"",
                synopsis:"Det var en gang osv osv...",
                image:"./images/gonewild.jpg",
                year:2001,
                genre: "drama",
                rating: 50,
                comments:[
                    {
                        id: 27,
                        userId: 2,
                        rating: 70,
                       comment: "veldig bra film",
                    },
                    {
                        id: 87,
                        userId: 8,
                        rating: 10,
                       comment: "syntes ikke det var bra effekter",
                    },
                  
                ]
            },
            {
                id: 2,
                name: "The Matrix",
                director:"",
                synopsis:"Det var en gang osv osv...",
                image:"./images/the_matrix.jpg",
                year:1999,
                genre: "action",
                rating: 50,
                comments:[
                    {
                        id: 27,
                        userId: 2,
                        rating: 70,
                       comment: "veldig bra film",
                    },
                    {
                        id: 87,
                        userId: 8,
                        rating: 10,
                       comment: "syntes ikke det var bra effekter",
                    },
                  
                ]
            },
            {
                id: 3,
                name: "Forest Gump",
                director:"",
                synopsis:"",
                image:"./images/forest_gump.jpg",
                year:2001,
                genre: "drama",
                rating: 50,
                comments:[
                    {
                        id: 27,
                        userId: 2,
                        rating: 70,
                       comment: "veldig bra film",
                    },
                    {
                        id: 87,
                        userId: 8,
                        rating: 10,
                       comment: "syntes ikke det var bra effekter",
                    },
                  
                ]
            },
            {
                id: 4,
                name: "Gone Wild",
                director:"",
                synopsis:"",
                image:"./images/gonewild.jpg",
                year:2001,
                genre: "action",
                rating: 50,
                comments:[
                    {
                        id: 27,
                        userId: 2,
                        rating: 70,
                       comment: "veldig bra film",
                    },
                    {
                        id: 87,
                        userId: 8,
                        rating: 10,
                       comment: "syntes ikke det var bra effekter",
                    },
                  
                ]
            },
        ],
        profiles:[
            {
                id:1,
                userName:"Kaja",
                alder:25,
                userImage:"image.jpg",
                ratedFilms:["film1","film2"],
                favoriteGenre:["acion","drama","anime"],
                comments:[commentId1,commentId2]

            },{},{}],

            
        genres:[
            {id:1,
            name: "Action",
        },
            {id:2,
            name: "Komedie",
        },
            {id:3,
            name: "Drama",
        },
            {id:4,
            name: "Skrekk",
        }

        ]
        


    }
}