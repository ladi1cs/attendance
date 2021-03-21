import { useState } from 'react';
import { Block, Label, Row, Button} from '../styles/styles'
import { Colors } from '../styles/consts';
import {toDateString} from '../utils/datetime';

export default function (props){
  const {onStart, onEnd, shiftDate} = props;
  const [started, setStarted] = useState(false);

  
  const onStartClick = () => {
    onStart && onStart();
    setStarted(true);
  }

  const onEndClick = () => {
    onEnd && onEnd();
    setStarted(false);
  }

  const date = shiftDate || new Date();

  return (
    <Block>
      <Row>
        <Label >{`Shift Date: ${toDateString(date)}`}</Label>
      </Row>
      <Row>
        <Button bgcolor={started ? Colors.Gray : Colors.Blue}
          onClick={onStartClick}
          disabled={started}>Clock-In</Button>
        <Button bgcolor={!started ? Colors.Gray : Colors.Blue}
          onClick={onEndClick}
          disabled={!started}>Clock-Out</Button>
      </Row>
    </Block>
  );
}

