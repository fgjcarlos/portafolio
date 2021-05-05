import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import About from 'Pages/About/About';
import Contact from 'Pages/Contact/Contact';
import Landing from 'Pages/Landing/Landing';
import Portfolio from 'Pages/Portfolio/Portfolio';
import { useInView } from 'react-intersection-observer';
import './root.css';

const Root = () => {

    const { ref, inView} = useInView({
        threshold: 0,
        rootMargin: '-100px',
      });

    const landinHeader = inView ? 'h-landing' : '';

    return (
        <div className="root-container">

            <Header landingStyle={landinHeader}/>

            <section ref={ref} id="landing" className="root-section section-landing">
                <Landing/>
            </section>

            <section id="about" className="root-section section-about section-common">
                <About/>
            </section>

            <section id="portfolio" className="root-section section-portfolio section-common">
                <Portfolio/>
            </section>

            {/* <section id="blog" className="root-section section-blog section-common">
                <h2>Blog</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quia impedit animi perferendis culpa nam, laboriosam ad itaque, quod fugit magnam sunt quae molestias nihil. Fuga atque iusto reiciendis aliquam.
                                                            Vel voluptatibus quod quos atque fuga assumenda cum, accusantium, laudantium, totam facere ullam mollitia voluptas odio sit officiis explicabo? Iure minus mollitia illum architecto molestiae totam placeat. Voluptate, sed earum.
                                                            Rerum, non tenetur pariatur expedita nemo dignissimos ad vitae temporibus maxime aut labore quisquam adipisci dolorem, perspiciatis consectetur inventore consequatur fugiat neque odit. Consequuntur quos repellat totam illum consequatur at!
                                                            At sed corrupti adipisci, atque deserunt impedit assumenda itaque dignissimos consequuntur magnam veritatis reprehenderit fugiat aliquam quia, minus doloremque magni inventore esse suscipit earum eveniet! Corporis omnis recusandae aperiam accusantium?
                                                            
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore delectus blanditiis quo voluptatum facere? Culpa molestiae iure ipsa vitae exercitationem ab rem quos. Aliquid voluptatibus amet illum rerum iure.
                                                            Consequuntur vel, qui tenetur numquam tempore at iure molestias fugit, rem perspiciatis reprehenderit quia aliquam. Neque id molestias corrupti, inventore veritatis eaque, minus nisi sunt, blanditiis magnam deleniti magni ipsa!
                                                            Nihil non accusantium error. Voluptatem, reiciendis explicabo impedit alias ratione voluptas illo quod temporibus quibusdam voluptates minima velit. Distinctio a quisquam facere suscipit nostrum magnam consequatur architecto facilis earum iure.
                                                            Illum enim harum numquam quibusdam sint ut, dolores fugiat ipsam quod laborum dignissimos repellat! Quis hic recusandae beatae laboriosam officiis, sit quia suscipit velit tenetur est ad delectus eligendi iure?
                                                            Quod qui iusto, cum deleniti rem quo aliquam aut quasi maxime optio a unde ea excepturi, autem ipsam cumque illo omnis consectetur pariatur atque totam amet debitis ab fugit. Nulla?
                </p>
            </section> */}

            <section id="contact" className="root-section section-contact section-common">
                <Contact/>
            </section>

            <Footer/>

        </div>
    );

}

export default Root;