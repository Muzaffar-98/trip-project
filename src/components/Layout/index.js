import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header1 from '../Header/TopHeader';
import Header2 from '../Header/BottomHeader';


export function Layout({children}) {
    return(
        <>
        <Header1/>
        <Header2/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}