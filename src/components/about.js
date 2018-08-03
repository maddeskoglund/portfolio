import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='footer-adj'>
                    <Header />

                    <div className='container-fluid'>
                        <img src="/images/about.jpg" alt="" />
                    </div>

                    <div className='container'>
                        <h1>Om mig</h1>
                        <p className='about-info'>
                            Här är jag, en fartfylld och härlig tjej som kallar sig för Madde. Påbörjade min
                                arbetskarriär i unga tonåren år inom restaurang. Efter gymnasiet fick jag jobb på
                                ett husföretag som receptionist/säljstöd för utesäljarna. Ganska snabbt
                                utökades det med större ansvar som att göra kontraktshandlingar, beställa ritningar,
                                se till att kundernas val var inne i rätt tid, hjälpa säljarna med offerter, ta fram
                                tillval, inkl. kataloger och prislistor. De sista åren arbetade jag mestadels med
                                kalkylering. Efter det har jag arbetat som projektledare och kalkylator för undertak.
                        <br /><br />
                            Efter mina 12 år i byggbranschen och några småbarnsår hemma beslutade jag mig för att
                                jag skulle göra något annat. Jag hamnade på Mobil Handel vid Skåne Yrkeshögskola, en
                                frontend-utbilning med inriktning på Mobil Handel. Jag stormtrivs med att koda och ångrar
                                mig inte för en sekund. Det finns så mycket att lära sig och jag stöter dagligen på nya
                                saker att utforska. Just den här hemsidan är mitt första möte med bootstrap, herregud så
                                smidigt!
                        <br /><br />
                            Sammanfattningsvis är jag en tjej med skinn på näsan, älskar att lära, ser gärna utanför
                                boxen och räds inte av att ta i och göra ett ordentligt jobb.
                        <br /><br />



                            Är gift och har 2 barn, pojkar. Vi bor i ett hus på landet mellan Enköping
                            och Västerås med skog och åkrar som
                            grannar i ett hus som vi själva byggt för snart tio år sen. Innan barnen var vi
                            flitiga i garaget, det intresset har av naturliga skäl svalnat. För tillfället
                            sitter jag oftast vid datorn och labbar när barnen somnat, annars spenderar jag
                        en del tid i trädgården och växthuset.  <br /><br />


                        </p>
                        <p className='sign'>Madelein Skoglund</p>
                    </div>
                    <Footer />
                </div >
            </div >
        )
    }
}

export default About;
