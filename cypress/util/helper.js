export const  getTodayDate=() => {
var today = new Date();
var dd = today.getDate();

if(dd<10){
    dd="0"+dd;
}
return dd;
}

export const getFutureDate = (val) => {
const today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() +val);
var dd = tomorrow.getDate();

}