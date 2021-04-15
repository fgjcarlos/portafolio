import { useEffect } from "react";
import {useDispach} from 'redux';

export const useStateHeader = (state) => {

    const dispach = useDispach();

    useEffect(() => {
        dispach({type: state});
    },[])

}


