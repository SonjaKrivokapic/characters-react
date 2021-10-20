import React, { useState } from 'react'
import Loader from '../../components/Loader';


const withLoader = (WrappedComponent, message) => {
    
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);
        
        return(
            <>   
                {isLoading && <Loader message = {message}/> }
                <WrappedComponent {...props} setLoading={(isLoadingDone) => setIsLoading(isLoadingDone)}  />
            </>
        );
    }
}

export default withLoader
