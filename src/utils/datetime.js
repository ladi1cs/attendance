export const isValidDate = (date) => {
    return (date && date instanceof Date && !isNaN(date));
}

export const toTimeString = (date) => {
    let timeStr = null;
    
    if(isValidDate(date)){
        timeStr = date.toLocaleTimeString('en-US');
    }

    return timeStr;
}

const twoDigits = (num) => {
    let str = null;
    if(!isNaN(num)){
        str = num.toLocaleString('en-US',{
            minimumIntegerDigits: 2, 
            useGrouping: false
          });
    }
    return str;
}

export const to24HTimeString = (date) => {
    let timeStr = null;
    if(isValidDate(date)){
        timeStr = `${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}:${twoDigits(date.getSeconds())}`;
    }

    return timeStr;
}

export const strTimeToDate = (time, date) => {
    if(time){
        const dt = date ? new Date(date) : new Date(); 
        if(dt && dt instanceof Date){
            return new Date(`${dt.toDateString()} ${time}`);
        }
    }

    return null;
}

export const toDateString = (date) => {
    if(isValidDate(date)){
        return date.toDateString();
    }

    return null;
}