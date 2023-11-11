import './BannerSection.css';
import seacrhIcon from "./img/searchIcon.svg";

export function BannerSection() {
    return( 
            <div className='banner-home'>
                <div className='container-home'>
                    <div className='wrapper-home'>
                        <div className='text-home'>
                            <h1 className='title-home'>We create trips you love</h1>
                            <p>Trips you couldn't plan, even if you wanted to.</p>
                            <div className='input-area'>
                                <input type='text' placeholder='Where do you want to go?'/>
                                <img src={seacrhIcon} alt="search" className='searchIcon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}