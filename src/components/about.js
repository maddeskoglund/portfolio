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
                        <p className='about-info'>Nu kommer vi till den svåra biten, content. Madelein heter jag, kallas för Madde. Är gift och har 2 barn, pojkar. Vi bor i ett hus på landet med skog och åkrar som grannar i ett hus som vi själva byggt för snart tio år sen. Innan barnen var vi flitiga i garaget, det intresset har av naturliga skäl svalnat. För tillfället sitter jag oftast vid datorn och labbar när barnen somnat, annars spenderar jag en hel del tid i trädgården och växthuset. Har kommit på att det är ganska roligt att se saker växa fram. <br /><br /> Så till min karriär i yrkeslivet. Jag har jobbat inom byggbranschen i 12 år. Började som säljstöd till våra utesäljare och fick med tiden mer uppgifter. Bland mina arbetsuppgifter signade jag alla kundkontrakt, beställde och granskade A-ritningar, såg till att vi hade kundens alla val i tid, hade kontakt med kundernas banker och kommuner. Jag var ansvarig för att lämna över projektet till de övriga avdelningarna så snart säljavdelningen hade allt klart. Med andra ord hade en hel del kundkontakt. Jag tog även fram de tillval som kunderna erbjöds och gjorde våra tillvalskataloger. Fick även ansvaret att kalkylera på de tillvalen. Mina sista år inom bygg har jag haft titeln kalkylator, först för småhus och senare för undertak.
                    <br /><br /> Efter min sista föräldraledighet så kände jag att jag behövde göra något annat och av en slump hamnade jag på Mobil Handel på Skåne Yrkeshögskola, en distansutbildning. Jag stormtrivs! Det är verkligen skitkul att koda och jag hittar så mycket saker hela tiden som jag vill lära mig mer av. Just den här hemsidan är mitt första möte med bootstrap, wow vilken grej! Och så till de tråkiga standardgrejerna som man brukar skriva, jag är väldigt analytiskt, nogrann och ser saker utanför boxen.
                                                        Slutledning
                                                        Jag är en tjej som inte är rädd för att hugga i och testa nya saker. Ger jag in i något så ger jag allt jag kan och ger mig inte förrän jag klarar det, oftast. Till mitt slutliga erkännande kan jag säga att jag kan bygga ett hus, jag vet hur man använder en spikpistol och hur man kaklar, hur man spacklar en bil, hur man tapetserar en vägg, hur man syr inredning till en bil, hur man byter bromsar på en bil.
                                                        Men jag kan inte lacka en bil (det blir rinningar), jag kan inte köra cross (man (läs:jag) bryter tummen)
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


