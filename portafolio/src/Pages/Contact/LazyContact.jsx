import {Suspense, useContext, useState,useEffect, lazy} from 'react';
import { useInView } from 'react-intersection-observer';
import ThemeContext from 'context/themeContext';
import './contact.css';

const Contact = lazy(() => import('./Contact'));

const ContactLazy = () => {

    const {store} = useContext(ThemeContext);
    const [stateSkip,setStateSkip] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '100px',
        skip: stateSkip,
        triggerOnce: true
      });

    useEffect(() => {

        if(store.linkActive === 'contact'){
            setStateSkip(false);
        }
        
        if(inView && (store.linkActive !== 'contact')){
            setStateSkip(true);
        }
    },[store.linkActive,inView]);

    return(
        <div ref={ref} className="lazy-common-contact">
            <Suspense fallback={'Loading..'}>
           { inView && <Contact />}
           </Suspense>
        </div>
    )
}

export default ContactLazy;