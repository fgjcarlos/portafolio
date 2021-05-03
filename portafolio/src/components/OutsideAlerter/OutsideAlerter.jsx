/**
 * Component that alerts if you click outside of it
 * by Ben Budnevich
 */
import PropTypes from "prop-types";
import { useEffect, useRef} from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";


 function OutsideAlerter(props, {isClickOutside}) {

    const wrapperRef = useRef(null);
    const {isClicked} =  useOutsideAlerter(wrapperRef);

    useEffect(() =>{
        console.log(isClicked);
    }, [isClicked]);

   
  
    return <div ref={wrapperRef} onClick={isClickOutside}>{props.children}</div>;
  }
  
  OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
  };
  
  export default OutsideAlerter;
  