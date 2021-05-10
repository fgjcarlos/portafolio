import { useContext, useEffect } from "react";
import ThemeContext from 'context/themeContext';
import { useInView } from "react-intersection-observer";

export const useLandingInView = () => {

    const {setStore} = useContext(ThemeContext);
    const {ref, inView, entry = false} = useInView({threshold: 0, rootMargin: '-100px'});

    useEffect(() => {
        entry && setStore(prev =>({...prev,isLandingInView: entry.isIntersecting}));
    }, [entry.isIntersecting, entry, setStore]);

    return [ref,inView,entry];
}