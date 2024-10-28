import { Parallax } from 'react-parallax';
import Picture2 from '../assets/Taj_Mahal.jpg'

const ParallaxTwo = () => (
    <Parallax className='parallax' bgImage={Picture2} bgImageAlt="the cat" strength={800}>
        <div className='content'>
            <span className='span-text'>Taj Mahal</span>
        </div>
    </Parallax>
);

export default ParallaxTwo