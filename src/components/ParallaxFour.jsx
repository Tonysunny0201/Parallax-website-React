import { Parallax } from 'react-parallax';
import Picture4 from '../assets/Charminar.jpg'

const ParallaxOne = () => (
    <Parallax className='parallax' bgImage={Picture4} bgImageAlt="the cat" strength={800}>
        <div className='content'>
            <span className='span-text'>Charminar</span>
        </div>
    </Parallax>
);

export default ParallaxOne