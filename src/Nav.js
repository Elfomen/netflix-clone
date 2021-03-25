import React , {useEffect , useState}from 'react';
import './Nav.css';

export default function NavBar(){

    const [scroll , setScroll] = useState(false);
        useEffect(() => {
            window.addEventListener("scroll" , () => {
                if(window.scrollY > 100){
                    setScroll(true);
                }else{
                    setScroll(false);
                }
            });

            return () => window.removeEventListener("scroll" , null); 
        } , []);
    


    return(
        <div className={`nav ${scroll&&"nav-logo-dark"}`}>
            <img className="nav-logo" alt="Netflix-logo"  src="https://png2.cleanpng.com/sh/18f63a093073ae04e5924902cc490e39/L0KzQYm3WcIxN6l6fZH0aYP2gLBuTfxwb5CyjtttZXAwfrb7hvxqgF55fd5udnn2ebF1TfZqdJ4yhtd9ZnzsiH78jvJtd5RwRdNAc4T1cb3wgb12dl5sfdHrbHBme37vgv8udpD8RadrYUS1dIm9hcliOZY8RqgAMkS8SIOBUcU0P2U9TqQ6NEm4R3B3jvc=/kisspng-logo-video-netflix-television-film-netflix-unblock-australia-un-geoblock-hbo-now-5ba42d86e9a1e7.652498281537486214957.png"/>
        </div>
    );
}