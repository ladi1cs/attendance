import { useState } from 'react';
import { Label, TextBox} from '../styles/styles'
import {toTimeString, to24HTimeString, strTimeToDate } from '../utils/datetime';

export default function (props){
  const [edit, setEdit] = useState(false);
  const [time,setTime] = useState(props.time);

  const onTimeChanged = (strTime) => {
    const tm = strTimeToDate(strTime);
    if(tm){
      setTime(tm);
      props.onTimeUpdate && props.onTimeUpdate(tm, props.id);
    }
  }
  
  return (
    <div>
      {edit ? 
      <TextBox type='time' 
            value={to24HTimeString(time || props.time)} 
            onBlur={()=> setEdit(false)}
            onChange={(e)=>onTimeChanged(e.target.value)}/> : 
      <Label size={14} onClick={()=>{setEdit(true)}}>
        {toTimeString(time || props.time) || ""}
      </Label>}
    </div> 
  );
}

