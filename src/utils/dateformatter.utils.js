
export function fnDisplayDateinTH(date) {
    
    if (!date) return;

    date = new Date(date);
    
    return ('0').concat(date.getDate()).slice(-2) 
            + '/' + ('0').concat(date.getMonth()+1).slice(-2) 
            + '/' + (date.getFullYear() + 543);
}