import LazyFooter from 'components/Footer/LazyFooter';
import Header from 'components/Header/Header';
import AboutLazy from 'Pages/About/LazyAbout';
import ContactLazy from 'Pages/Contact/LazyContact';
import Landing from 'Pages/Landing/Landing';
import LazyPortfolio from 'Pages/Portfolio/LazyPortfolio';
import {useInView} from 'react-intersection-observer';
import './root.css';

const Root = () => {

    const {ref, inView} = useInView({threshold: 0, rootMargin: '-100px'});

    const landinHeader = inView ? 'h-landing' : '';

    return (
        <div className="root-container">
            <Header landingStyle={landinHeader}/>

            <section ref={ref}
                id="landing"
                className="root-section section-landing">
                <Landing/>
            </section>

            <section id="about" className="root-section section-about section-common">
                <AboutLazy/>
            </section>

            <section id="portfolio" className="root-section section-portfolio section-common">
                <LazyPortfolio/>
            </section>

            {/* 
            
            <section id="blog" className="root-section section-blog section-common">
            </section> 
            
            */}
            <section id="contact" className="root-section section-contact section-common">
                <ContactLazy/>
            </section>

            <LazyFooter/>
        </div>
    );

}

export default Root;
