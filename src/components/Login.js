import { useState } from 'react';
import { Block, Label, TextBox, Row, Button} from '../styles/styles'
import { Colors } from '../styles/consts';

export default function (props){
  const [userName, setUserName] = useState('');

  const onLogin =() => {
    const user = userName.trim();
    if(!user){
      alert('Please enter a valid User Name');
      setUserName('');
      return;
    }

    props.onLogin && props.onLogin(userName);
  }

  return (
    <Block>
      <Row>
        <Label size={20} color='blue' bold={false}>User Name</Label>
        <TextBox onChange={(e) => setUserName(e.target.value)} value={userName}/>
      </Row>
      <Button bgcolor={Colors.Green} onClick={onLogin}>Login</Button>
    </Block>
  );
}

