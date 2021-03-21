import { useState } from 'react';
import { Block, Table, TableHdr, TableData,} from '../styles/styles'
import TimeCell from './TimeCell';

export default function (props){
  const [date, setDate] = useState(props.date || new Date());
  const {times} = props;

  const onUpdate =(tm, id) => {
    console.log(`onUpdate ${id}[${tm.toString()}]`);
    // ToDo add validation of time   
  }

  const getId =(index, isStart) => {
    if(!isNaN(index) && index >= 0){
      return `${isStart ? 's' : 'e'}${index}`;
    }
    return null;
  }

  return (
    <Block>
      { times && 
      <Table>
        <tr>
          <TableHdr>Shift Start</TableHdr>
          <TableHdr>Shift End</TableHdr>
        </tr>
        {times.map((t, index) => (
          <tr key={index}> 
            <TableData>
              <TimeCell id={getId(index, true)} time={t.start} onTimeUpdate={onUpdate}/>
            </TableData> 
            <TableData>
              <TimeCell id={getId(index, false)} time={t.end} onTimeUpdate={onUpdate}/>
            </TableData>
          </tr>))}
      </Table>}
    </Block>
  );
}

