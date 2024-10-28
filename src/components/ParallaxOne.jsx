import { Parallax } from 'react-parallax';
import Picture1 from '../assets/Kerala_boat.jpg'

const ParallaxOne = () => (
    <Parallax className='parallax' bgImage={Picture1} strength={400}>
        <div className='content'>
            <span className='span-text'>Kerala Boat</span>
        </div>
    </Parallax>
);

export default ParallaxOne