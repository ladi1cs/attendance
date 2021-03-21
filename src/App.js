import {Container, Block, Label, Button} from './styles/styles'
import Login from './components/Login';
import Clock from './components/Clock';
import Shift from './components/Shift';
import { useState } from 'react';
import { Colors } from './styles/consts';
import { isValidArray } from './utils/common';

function App() {
  const [data, setData] = useState({});
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [shiftDate, setShiftDate] = useState(new Date());
  
  const onLogin = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const onLogout = () => {
    setUser("");
    setLoggedIn(false);
  };

  const onStart = () => {
    const segment = {start: new Date(), end: null};
    const userData = data[user] ? [...data[user]] : [];
    userData.push(segment);
    
    const newData = {...data, [user]:userData};

    setData(newData);
  };

  const onEnd = () => {
    const userData = [...data[user]];
    
    if(!isValidArray(userData)){
      return;
    }

    userData[userData.length -1]['end'] = new Date();

    const newData = {...data, [user]:userData};

    setData(newData);
    
  };

  return (
    <Container>
      <Label size={30} color='white' bold={true}>{`Timesheet ${user || ""}`}</Label>
      {!loggedIn && <Login onLogin={onLogin}/>}
      {loggedIn && 
      <Block>
        <Clock 
          onStart={() => onStart()} 
          onEnd={() => onEnd()} 
          shiftDate={shiftDate}/>
        <Shift times={data[user]}/>  
        <Button bgcolor={Colors.Red} onClick={() => onLogout()}>Logout</Button>
      </Block>}
    </Container>
  );
}

export default App;
