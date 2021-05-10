import {useContext, useEffect, useState} from "react";
import ThemeContext from 'context/themeContext';
import useOutsideAlerter from "./useOutsideAlerter";

export const useStateMenuDevice = (wrapperRef) => {

    const [showMenu, setShowMenu] = useState(false);
    const [prevStateLink, setPrevStateLink] = useState('');
    const {store, setStore} = useContext(ThemeContext);
    const {isClicked} = useOutsideAlerter(wrapperRef);

    useEffect(() => {

        // Reset menu, clicked out
        if(isClicked && showMenu ){
            setShowMenu(false);
            setStore(prev => ({...prev,headerBackColor: false}));
        } 

        // Change color header, menu ham active
        store.isLandingInView  &&  setStore(prev => ({...prev,headerBackColor: showMenu}));

        // Reset menu, click in link
        if (store.linkActive !== prevStateLink){
            setShowMenu(false);
            setPrevStateLink(store.linkActive);
        }

    }, [isClicked, showMenu,setStore,store.linkActive, store.isLandingInView,prevStateLink]);

    return [showMenu, setShowMenu];
}