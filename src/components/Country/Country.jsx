import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    
    const {name, flags}  = country;

    const [visited, setVisited] = useState(false);

    const handleButton = () => {
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h1 style={{color: visited ? 'purple' : 'white' }}>{name?.common}</h1>
            <img src={flags.png} alt="flag" />
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={handleButton}>{visited ? 'Visited' : 'Not Visited'}</button>
            <hr />
            
        </div>
    );
};

export default Country;