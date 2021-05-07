import { useContext, useEffect, useState } from 'react';
import ThemeContext from 'context/themeContext';
import { useInView } from 'react-intersection-observer';

export const useActiveLink = (onLoad, section, marginRoot) => {

    const {store} = useContext(ThemeContext);
    const [stateSkip,setStateSkip] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: marginRoot,
        skip: stateSkip,
        triggerOnce: true
      });

    useEffect(() => {

        const isLinkSection = (store.linkActive === section);

        if(isLinkSection){
            setStateSkip(false);
        }
        
        if(inView && !onLoad && !isLinkSection){
            setStateSkip(true);
        }
    },[store.linkActive, inView, onLoad, section]);

    return [ref, inView];
}