
import './css/styles.css'

import Top from './layer/Top'
import Header from './layer/Header'
import Hot from './layer/Hot'

import Footer from './layer/Footer'
import Copy from './layer/Copy'
import HomeWrapper from './layer/HomeWrapper'

export default function App() {
    return (
        <>
            <Top />

            <Header />

            <Hot />

            <HomeWrapper />
            
            <Footer />
            
            <Copy />
        </>
    )
}