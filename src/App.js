import { useState } from 'react';
import Footer from './Components/Footer';
import { Forms } from './Components/Forms/Forms';
import Header from './Components/Header';
import Roles from './Components/Roles';


function App() {

  const roles = [
    {name: 'Legião Urbana'},
    {name: 'Programadores Cansados'},
    {name: 'Pedrinho e amigos'}
  ]

  const [players, setPlayers] = useState([])

  const onNewPlayerRegister = (player) => {
    setPlayers([...players, player])
  }

  return (
    <div className='App'>
      <Header/>
      <Forms roles= {roles.map(roles => roles.name)} onPlayerRegister={player => onNewPlayerRegister(player)}/>
      {roles.map(roles =><Roles
        key={roles.name}
        name={roles.name}
        players={players.filter(player => player.role === roles.name)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
