import { useContext, useEffect } from "react";
import ThemeContext from 'context/themeContext';
import { useInView } from "react-intersection-observer";

export const useLandingInView = () => {

    const {setStore} = useContext(ThemeContext);
    const {ref, inView} = useInView({threshold: 0, rootMargin: '-100px'});

    useEffect(() => {
        setStore({isLandinInView: inView});
    }, [inView,setStore]);

    return [ref];
}