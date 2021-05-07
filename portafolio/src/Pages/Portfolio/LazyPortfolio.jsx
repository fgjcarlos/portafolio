import {Suspense, useState,lazy} from 'react';
import './portfolio.css';
import { useActiveLink } from 'hooks/useActiveLink';
import { List } from 'react-content-loader';

const Portfolio = lazy(() => import('./Portfolio'));

const PortfolioLazy = () => {

    const [onLoad, setOnLoad] = useState(false);
    const marginRoot = '100px';
    const section = 'portfolio';

    const [ref, inView] = useActiveLink(onLoad, section, marginRoot);

    return(
        <div ref={ref} className="lazy-common">
            <Suspense fallback={<List />}>
                { inView && <Portfolio portfolioLoad={()=> setOnLoad(true)} />}
           </Suspense>
        </div>
    )
}

export default PortfolioLazy;