import {Suspense, useState, lazy} from 'react';
import './about.css';
import {useActiveLink} from 'hooks/useActiveLink';
import { List } from 'react-content-loader';

const About = lazy(() => import('./About'));

const AboutLazy = () => {

    const [onLoad, setOnLoad] = useState(false);
    const marginRoot = '-100px';
    const section = 'about';

    const [ref, inView] = useActiveLink(onLoad, section, marginRoot);

    return(
        <div ref={ref} className="lazy-common">
           <Suspense fallback={<List />}>
                { inView && <About aboutLoad={()=> setOnLoad(true)}/>}
           </Suspense>
        </div>
    )
}

export default AboutLazy;