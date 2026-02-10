
export function fnDisplayDateinTH(date) {
    
    if (!date) return;

    date = new Date(date);
    
    return ('0').concat(date.getDay()).slice(-2) 
            + '/' + ('0').concat(date.getMonth()).slice(-2) 
            + '/' + (date.getFullYear() + 543);
}