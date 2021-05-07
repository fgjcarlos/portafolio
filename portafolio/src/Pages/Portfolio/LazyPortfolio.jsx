import {Suspense, useContext, useState,useEffect, lazy} from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from 'context/themeContext';
import './portfolio.css';

const Portfolio = lazy(() => import('./Portfolio'));

const PortfolioLazy = () => {

    const {store} = useContext(ThemeContext);
    const [stateSkip,setStateSkip] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '100px',
        skip: stateSkip,
        triggerOnce: true
      });

    useEffect(() => {

        if(store.linkActive === 'portfolio'){
            setStateSkip(false);
        }
        
        if(inView && (store.linkActive !== 'portfolio')){
            setStateSkip(true);
        }
    },[store.linkActive,inView]);

    return(
        <div ref={ref} className="lazy-common">
            <Suspense fallback={'Loading..'}>
           { inView && <Portfolio />}
           </Suspense>
        </div>
    )
}


export default PortfolioLazy;