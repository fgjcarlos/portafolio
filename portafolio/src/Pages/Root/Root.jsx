import AboutLazy from 'Pages/About/LazyAbout';
import ContactLazy from 'Pages/Contact/LazyContact';
import Landing from 'Pages/Landing/Landing';
import LazyPortfolio from 'Pages/Portfolio/LazyPortfolio';
import './root.css';
import { useLandingInView } from 'hooks/useLandingInView';

const Root = () => {

    const [ref] = useLandingInView();

    return (
        <div className="root-container">
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

        </div>
    );

}

export default Root;