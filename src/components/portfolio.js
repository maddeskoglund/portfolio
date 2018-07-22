import React, { Component } from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';


class Portfolio extends Component {
    constructor(props) {
        super(props);

        const posts = [
            {
                id: "1",
                name: "Madelein Skoglund",
                caption: "React PWA JSX CSS Javascript ES6",
                info: "Du ser den live nu! Kul att få jobba med React igen, jag gillar det. Inte så avancerat den här gången, men mycket snabbare och smidigare den här gången.",
                // image: '',
                // url: ''
            },
            {
                id: "2",
                name: "Väderapp",
                caption: "React Redux PWA API JSX CSS Javascript ES6",
                info: "En väderapp byggd för skolarbete. Riktigt roligt och svårt att som nybörjare komma in i både Javascript och React samtidigt, efterhand las Redux till också. Appen visar högsta och lägsta temperaturen för tre dagar, icon för typen av väder, nederbörd och medelhastigheten för vindstyrka. API:t hämtar data från SMHI. Du hittar den på mitt Github-konto.",
                image: '/images/weather-app.gif',
                // url: ''                
            },
            {
                id: "3",
                name: "Trähusarkitekten",
                caption: "Logotyp Grafisk profil Webbdesign WordPress",
                info: "Arkitektbyrå som behövde en ny hemsida. Jag har tagit fram den grafiska designen, logotypen och gjort webbdesignen till dem. Byggd i WordPress.",
                image: '/images/responsive-trahusarkitekten.gif',
                url: 'https://trahusarkitekten.se'
            },
            {
                id: "4",
                name: "Nyckelhus",
                caption: "Logotyp Grafisk profil Webbdesign WordPress",
                info: "Hustillverkare som delvis ska utöka sin verksamhet och behövde därför en ny hemsida. Jag har tagit fram den grafiska designen, logotypen och gjort webbdesignen till dem. Jag har även skrivit en hel del av texterna. Husmodeller kommer att läggas till inom kort. Byggd i WordPress.",
                image: '/images/responsive-nyckelhus.gif',
                url: 'https://nyckelhus.se'

            },
            {
                id: "5",
                name: "Lilla Gilbert",
                caption: "Logotyp Grafisk profil Webbdesign WordPress",
                info: "Skolprojekt. Uppdrag; Bygg en webbshop med minst en produkt. Slutligen hamnade mitt val på posters för barn, då jag tycker att det saknas söta posters på marknaden. Gjorde en del illustrationer i Adobe Illustrator. Tyvärr väldigt seg, lägger skulden på webbhotellet. Byggd i WordPress.",
                image: '/images/responsive-lillagilbert.gif',
                url: 'https://www.lillagilbert.se'
            },
            {
                id: "6",
                name: "Blogg i HTML / CSS",
                caption: "HTML CSS Responsive Resposive-images",
                info: "Skolprojekt. Uppdraget var att bygga en blogg i HTML och CSS. Självklart responsiv.",
                image: '/images/responsive-blogg.jpg',
                // url: 'http://nyckelhus.se'
            },
            {
                id: "7",
                name: "Bokhandel i HTML / CSS",
                caption: "HTML CSS Responsive",
                info: "Skolprojekt. Mitt första projekt, kommer ihåg hur ingenting blev som jag ville till en början. Byggd i HTML och CSS. Uppdraget var att bygga en bokhandel, likt bokus.",
                image: '/images/responsive-min-bok.jpg',
                // url: 'https://nyckelhus.se'
            },
        ];

        this.state = { posts };

        // post.url = true : div.style.display = 'inline' ? div.style.display = 'none';


    }

    render() {
        return (

            <div id='portfolio' className='container portfolio'>
                <h1>Portfolio</h1>
                <p className='portfolio-info'>Min portfolio innehåller inte så många projekt för tillfället. Började studera frontend hösten 2017, och knappt ett år senare bygger jag min portfolio själv i React. Är faktiskt lite imponerad och stolt över mig själv. Mina allra första projekt hittar du längst ner på listan, det är ganska så stor skillnad på kvalitet och framförallt hastigheten jag bygger i nu. Fler hopp- och lekprojekt finns på Github. Har några pågående projekt på min praktik-plats just nu också.</p>
                <div >
                    {this.state.posts.map((post) =>
                        <div key={post.id} className='row'>
                            <div className='col-md-6'>
                                <h3>{post.name}</h3>

                                <p className='caption'>{post.caption}</p>
                                <p className='info'>{post.info}</p>
                                {/* <button type="button" className="btn btn-default"><Link to='{post.url}'> Besök </Link> </button> */}
                                <button type="button" className="btn btn-default"><a href={post.url} target="_blank"> Besök </a> </button>
                            </div>
                            <div className='col-md-6'>
                                <div className='portfolio-img'>
                                    <img src={post.image} alt=''></img>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Portfolio;
