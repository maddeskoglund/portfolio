import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';


class Cv extends Component {
    render() {
        return (
            <div className='cv'>
                <div className='footer-adj'>
                    <Header />

                    <div className='container-fluid'>
                        <img src="/images/cv.jpg" alt="" />
                    </div>

                    <div className='container'>
                        <h1>CV</h1>
                        <div className='row'>
                            <div className='cv-left col-md-6'>
                                <h2 className='work-exp'>Arbetserfarenhet</h2>

                                <h3>Smode Webbyrå, <i>Praktik</i></h3>
                                <p className='date'>Juni 2018 - </p>
                                <p className='work-p'>Har nyligen påbörjat min praktik på Smode webbyrå i Enköping. Blir otroligt bra omhändertagen och känner att jag får testa vingarna själv och ta mig an riktiga saker. Kim som är min handledare är otroligt kunnig och jag suger åt mig allt jag kan.</p>

                                <h3>Rönnmarks Undertak, <i>Kalkylator</i></h3>
                                <p className='date'>Oktober 2013 - Augusti 2017</p>
                                <p className='work-p'>Arbete som kalkylator med undertak. Arbetet innebär mängning och sortering av undertak i programmet Geometra, kalkylering av dessa för kompletta entreprenader. Granskning av förfrågningsunderlag, såsom AF-delar, ritningar, detaljritningar samt kontraktsförslag. Kontakt med  anbudsförfrågande, såsom inköpare och kalkylatorer på andra byggföretag.
                                    Jag har under denna tidsperiod även varit föräldraledig.
                            </p>
                                <h3>Hantverkarn Mark &amp; Smide, <i>Projektledare</i></h3>
                                <p className='date'>September 2012 - Augusti 2013</p>
                                <p className='work-p'>Arbete inom koncernen som innefattar bolagen Hantverkarn Mark & Smide AB, Mel’s Drive-In samt Sweden Hot Rod. Projektledning, kalkylering, beställning och alla val gällande några småhus på spekulation. Även viss projektledning av de anställda för både bilplåtslageri och snickare. Uppdrivning och planering av Mel’s Drive-In, ett 50-talsställe för fik/evenemang i Fjärdhundra. Byggnation av hemsidor samt kontinuerlig uppdatering av dessa saker sociala medier.
                                    Har även lagt upp bildelsprodukter från USA på hemsidan och översatt dem till svenska.
                                    Arbetat med bilder, folders, försäljningsprospekt samt evenemangsplanscher i Adobe CS.
                                </p>
                                <h3>Björklidenhus, <i>Kalkylator</i></h3>
                                <p className='date'>Maj 2005 - September 2012</p>
                                <p className='work-p'>Tjänsten innefattade, i mindre utsträckning de tre senaste åren, ansvar för kalkylering av konstruktion, stomme och entreprenader. Allt från stommar, delentreprenader och kompletta småhus, till större projekt med såväl småhus som radhus/lägenhetshus. Vilket från och med årsskiftet 2011/2012 kom att vara mitt huvudsakliga ansvarsområde.
                                    Fram till årsskiftet 2011/2012 bestod mitt huvudsakliga arbete av kundansvar och säljsupport, länken mellan det interna kontoret och säljare externt. Det dagliga arbetet innefattade att tillgodose säljare och kunder med information och handlingar. Vilket i praktiken innebar godkännanden av kontrakt, ta fram bygglov, granska ritningar, kundval, sammanställa slitskikt och rumsbeskrivningar.
                                    Arbetet har även innefattat att ta fram originalhandlingar, såsom kontraktshandlingar samt mallar, ta fram sortiment för tillval och priser samt tillvalskataloger.
                                </p>

                            </div>
                            <div className='cv-right col-md-6'>
                                <h2>Kompetenser</h2>
                                <ul className='competence'>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Javascript, nybörjare</li>
                                    <li>React &amp; Redux, nybörjare</li>
                                    <li>JSX</li>
                                    <li>ES6</li>
                                    <li>UI</li>
                                    <li>UX</li>
                                    <li>SEO</li>
                                    <li>Google Analytics</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe Photoshop &amp; InDesign, grundläggande kunskap</li>
                                </ul>
                                <h3>Kompetenser, utanför frontend</h3>
                                <ul className='competence'>
                                    <li>Geometra</li>
                                    <li>Excel</li>
                                </ul>

                                <h3>Diplom</h3>
                                <ul className='competence'>
                                    <li>Certifierad trähussäljare, 2011</li>

                                </ul>

                                <h3>Utbildning</h3>
                                <ul className='training'>
                                    <li>Mobil Handel, Skåne Yrkeshögskola, 2017 - pågående</li>
                                    <li>Läst upp till slutbetyg, studerade 50% på kvällstid utöver mitt vanliga arbete. Läste bland annat programmet Logistik och Ekonomi-programmet, 2013-2015</li>
                                    <li>Kvällskurs Excel, 2008</li>
                                    <li>Kurs Grundläggande försäljning, November 2007</li>
                                    <li>Naturvetenskapligaprogrammet, 2002 - 2004</li>

                                </ul>


                                <p></p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        )
    }
}

export default Cv;
