import {useEffect, useState} from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 * by Ben Budnevich
 */
export default function useOutsideAlerter(ref) {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => { /**
       * Alert if clicked on outside of element
       */
        function handleClickOutside(event) {

            const condClickOutside = ref.current && ! ref.current.contains(event.target);

            setIsClicked(condClickOutside);
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return() => { // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);

         return ({isClicked});
    }
