import React from 'react'

const CharacterForm = ({name,setName,location,setLocation,created,setCreated}) => {
    
    
    
    return (
        <div className="search-params">
            <form>
                <label htmlFor="name">
                    name
                <input type = "text" name="name" id="name" value={name}
                onChange={(e) => {setName(e.target.value)}}/>
                </label>
                <label htmlFor="location">
                    Location
                <input type = "text" name="location" id="location" value={location}/>
                </label>
                <label htmlFor="created">
                    Created
                <input type = "text" name="created" id="created" value={created}/>
                </label>
            </form>
        </div>
    )
}

export default CharacterForm
