import { React, useState, useEffect } from 'react';
import WeaponItem from './components/WeaponItem';

const url = "https://valorant-api.com/v1/weapons/skins"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weapons, addWeapon] = useState([])

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    let response = await (
      await fetch(url)
    ).json();
    addWeapon(response.data);
    setIsLoading(false);
    console.table(response.data);
  };

  return ( 
  <div>
    {isLoading ? <h1 className='loader'>Loading</h1>
     : <div className='container'>
        {weapons.map(weapon => {
          return <WeaponItem name={weapon.displayName} image={weapon.displayIcon}/>
        })}
      </div>}
  </div>
  )
  }

export default App;