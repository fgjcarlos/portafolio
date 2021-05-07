import {Suspense, lazy} from 'react';
import { useInView } from 'react-intersection-observer';
import './footer.css';
import { List } from 'react-content-loader';

const Footer = lazy(() => import('./Footer'));

const FooterLazy = () => {

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '100px',
        triggerOnce: true
      });

    return(
        <div ref={ref} >
            <Suspense fallback={<List />}>
           { inView && <Footer />}
           </Suspense>
        </div>
    )
}

export default FooterLazy;