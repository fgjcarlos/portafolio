import {Suspense, useState, lazy} from 'react';
import './contact.css';
import { useActiveLink } from 'hooks/useActiveLink';
import { List } from 'react-content-loader';

const Contact = lazy(() => import('./Contact'));

const ContactLazy = () => {

    const [onLoad, setOnLoad] = useState(false);
    const marginRoot = '100px';
    const section = 'contact';


    const [ref, inView] = useActiveLink(onLoad, section, marginRoot);

    return(
        <div ref={ref} className="lazy-common-contact">
            <Suspense fallback={<List />}>
           { inView && <Contact contactLoad={()=> setOnLoad(true)} />}
           </Suspense>
        </div>
    )
}

export default ContactLazy;