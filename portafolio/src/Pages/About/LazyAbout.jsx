import {Suspense, useContext, useState,useEffect, lazy} from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from 'context/themeContext';
import './about.css';


const About = lazy(() => import('./About'));


const AboutLazy = () => {


    const {store} = useContext(ThemeContext);
    const [stateSkip,setStateSkip] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '-100px',
        skip: stateSkip,
        triggerOnce: true
      });


    useEffect(() => {


        if(store.linkActive === 'about'){
            setStateSkip(false);
        }
        
        if(inView && (store.linkActive !== 'about')){
            setStateSkip(true);
        }


    },[store.linkActive, inView]);

    return(
        <div ref={ref} className="lazy-common">
            <Suspense fallback={'Loading..'}>
           { inView && <About />}
           </Suspense>
        </div>
    )
}


export default AboutLazy;