import React, { useEffect, useState } from 'react'
import CharacterCard from '../../components/CharacterCard';
import styles from './homePage.module.css'
import axios from 'axios';
import withLoader from '../../HOC/withLoader';


const HomePage = ({setLoading}) => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6');
        setCharacters(data);
        setLoading(false)
    };

    useEffect(() => {
        fetchCharacters();
    }, [])
    return (
        <div>
            <div className={styles.hero}>
                <h1 className={styles['hero-title']}>
                    Rick and Morty
                </h1>
            </div>
            <div className="showcase">
                {characters.map(({id, name,species, status, location, image, created }) => (
                <CharacterCard
                id={id}
                name={name}
                species={species}
                status={status}
                location={location}
                created={created}
                image={image}
                
                />
                ))}
            </div>
            
        </div>
    )
}

export default withLoader(HomePage, 'Loading...');
