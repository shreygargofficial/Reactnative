export let dateExtractor=function(str){
    return new Date(str);
}

export let dateStringClear =function(str){
    let date = new Date(str);
    let month = date.getMonth()+1;
    let mainDate = date.getDate();
    let year = date.getFullYear();
    return `${year}-${month}-${mainDate}`
}