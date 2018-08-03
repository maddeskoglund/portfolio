import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        const { data, displayData } = this.props;

        const dataList = data.map((item, i) => {
            return (
                <div className='col-md-4 portfolio-items'
                    id={item.id}
                    key={i}
                    info={item}
                    onClick={() => displayData(item)}
                >
                    <div className='img-box'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='portfolio-bottom'>
                        <h4>{item.name}</h4>
                        <p className='caption'>{item.caption}</p>
                    </div>
                    <div className='hidden-desktop'><p>{item.info}</p></div>
                </div>
            )
        })

        return (
            <div id='portfolio' >
                <div className='container portfolio'>
                    <h1>Portfolio</h1>
                    <p className='portfolio-info'>Min portfolio innehåller inte så många projekt för tillfället. Började studera frontend hösten 2017, och knappt ett år senare bygger jag min portfolio själv i React. Är faktiskt lite imponerad och stolt över mig själv. Mina allra första projekt hittar du längst ner på listan, det är ganska så stor skillnad på kvalitet och framförallt hastigheten jag bygger i nu. Fler hopp- och lekprojekt finns på Github. Har några pågående projekt på min praktikplats just nu också.</p>
                </div >
                <div className='row top-level container'>
                    {dataList}
                </div>
            </div>
        );
    }
}

export default Portfolio;
