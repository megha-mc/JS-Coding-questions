const str = "meghatony";

const reverestr = (str) => {
    const revStr = str.split("").reverse().join('');
    return revStr 
};

console.log(reverestr(str))