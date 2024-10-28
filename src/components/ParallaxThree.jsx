import { Parallax } from 'react-parallax';
import Picture1 from '../assets/Golden_Temple.jpg'

const ParallaxOne = () => (
    <Parallax className='parallax' bgImage={Picture1} strength={400}>
        <div className='content'>
            <span className='span-text'>Golden Temple</span>
        </div>
    </Parallax>
);

export default ParallaxOne