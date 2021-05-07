import {Suspense, lazy} from 'react';
import { useInView } from 'react-intersection-observer';
import './footer.css';

const Footer = lazy(() => import('./Footer'));

const FooterLazy = () => {

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '100px',
        triggerOnce: true
      });

    return(
        <div ref={ref} >
            <Suspense fallback={'Loading..'}>
           { inView && <Footer />}
           </Suspense>
        </div>
    )
}


export default FooterLazy;