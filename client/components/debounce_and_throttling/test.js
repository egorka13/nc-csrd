
function debounce(func, time) {
    let timer;
    return function (...args) {
        let result = () => {
            return func.apply(this,args);
        }
        clearTimeout(timer);
        timer = setTimeout(result, time);
    }
}

window.addEventListener('resize', debounce(function () {
    console.log('Debounce: ' + document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight);
},500));

function throttle(func, time) {
    let timer;
    let flag;
    return function (...args) {
        if (!flag) {
            flag = true;
            timer = setTimeout(()=>{
                flag = false;
                return func.apply(this,...args);
            }, time)
        }
    }
}

window.addEventListener('resize', throttle(function () {
    console.log('Throttle: ' + document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight);
},800));