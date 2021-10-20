import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';
import { Link } from 'react-router-dom';


const CharacterCard = ({
    id = 2,
    name = 'Sonja Krivokapic', 
    image, 
    status = 'live',
    location = 'earth',
    species = 'Human',
    created = '30.01.1988',
    

}) => {
    const [theme, setTheme] = useContext(ThemeContext);
    const themeClass = theme === 'dark' ? 'character-card dark' : 'character-card light'
    return (
        <article className= {`character-card ${themeClass}`}
        onClick={() => {setTheme(theme==='dark' ? 'light': 'dark')}}>
            <div className="image-wrapper">
                <img src={image} alt="Character"/>
            </div>
            <div className="content-wrapper">
                
                <section>
                    <Link to={`/character/${id}`}>
                        <h2>{name}</h2>
                    </Link>
                    <span className="status">
                        <span className="status-icon"></span>
                        {status} - {species}
                    </span>
                </section>
                
                <section>
                    <span className="text-gray">Last known location:</span>
                    <h5>{location.name}</h5>
                </section>
                
                <section>
                <span className="text-gray">Created:</span>
                    <h5>{created}</h5>  
                </section>
            </div>
        </article>
    )
}

export default CharacterCard




