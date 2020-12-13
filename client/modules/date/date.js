export const getCurrentDateString = function(){
    let now = new Date();

    let dd = now.getDate();
    if(dd < 10){
        dd = '0' + dd;
    }

    let mm = now.getMonth() + 1;
    if(mm < 10){
        mm = '0' + mm;
    }

    let yy = now.getFullYear();

    return `${dd}.${mm}.${yy}`
}

export const getDateFromISOString = function(date){

    let dd = date.getDate();
    if(dd < 10){
        dd = '0' + dd;
    }

    let mm = date.getMonth() + 1;
    if(mm < 10){
        mm = '0' + mm;
    }

    let yyyy = date.getFullYear();

    return `${yyyy}-${mm}-${dd}`
}

export const stringToDate = function(str){
    if(!str) {
        return new Date(2020, 10, 1)
    }
    return new Date(
        +str.split('.')[2],
        +str.split('.')[1] - 1,
        +str.split('.')[0]
    )
}

export const stringISOToDate = function(str){
    if(!str) {
        return new Date(2020, 10, 1)
    }
    return new Date(
        +str.split('-')[0],
        +str.split('-')[1] - 1,
        +str.split('-')[2],
    )
}
