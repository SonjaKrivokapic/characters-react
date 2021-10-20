import React, { useState } from 'react'
import CharacterForm from '../../components/CharacterForm'
import CharacterCard from '../../components/CharacterCard'


const CreateCaracterPage = () => {
    const [name,  setName] = useState('Sonja Krivokapic');
    const [location, setLocation] = useState('Belgrade');
    const [created, setCreated] = useState('30 01 1988');

    return (
        <div>
           <CharacterForm
           name={name}
           setName={setName}
           location={location}
           setLocation={setLocation}
           created={created}
           setCreated={setCreated}
           />
           <CharacterCard
           name={name}
           setName={setName}
           location={location}
           setLocation={setLocation}
           created={created}
           setCreated={setCreated}
           /> 
        </div>
    )
}

export default CreateCaracterPage
