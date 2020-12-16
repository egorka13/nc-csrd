
export const template = function (loc, index) {
    let classNames = [
        'default__name','default__postcode', 'default__district', 'default__city', 'default__street', 'default__houseNumber', 'default__flatNumber'
    ];
    let classNamesSmall = ['default__name','default__city','default__street']
    let children = (arr) => {
        let result = [];
        if (arr.length === 8) {
            for (let i = 0; i < 7; i++) {
                result.push({
                    tagName: 'div',
                    classList: [`${classNames[i]}`],
                    attributes: {
                        style: 'display:inline-block'
                    },
                    textContent: arr[i],
                })
            }
            return result;
        } else if (arr.length === 4) {
            for (let i = 0; i < 3; i++) {
                result.push({
                    tagName: 'div',
                    classList: [`${classNamesSmall[i]}`],
                    attributes: {
                        style: 'display:inline-block'
                    },
                    textContent: arr[i],
                })
            }
            return result
        }
    }

    let insertButtons = ()=> {
        let buttons = []
        buttons.push({
            tagName: 'button',
            classList: ['update'],
            attributes: {
                name: index,
                style: 'height:20px'
            },
            events:{
               onclick: updateLocation
            },
            textContent: 'U',
        },
            {
                tagName: 'button',
                classList: ['delete'],
                attributes: {
                    name: index,
                    style: 'height:20px'
                },
                textContent: 'D',
            })

        return buttons;
    }

    function createUpdFields(button) {
        let wrapper;
        if (document.getElementsByClassName('default__locs-update')[0] !== undefined) {
            wrapper = document.getElementsByClassName('default__locs-update')[0];
            while (wrapper.firstChild) {
                wrapper.removeChild(wrapper.firstChild);
            }
        } else {
            wrapper = document.createElement('div');
            wrapper.classList.add('default__locs-update');
        }
        let parent = document.getElementsByClassName('location__default')[0];
        let result = [];
        let placeholders = ['Name', 'Postcode', 'Region', 'City', 'Street', 'House', 'Flat'];
        let placeholdersSmall = ['Name', 'City', 'Street'];
        if (button.target.parentNode.childNodes.length === 9) {
            placeholders.forEach((arg)=>{
                result.push(document.createElement('input'));
                result[result.length - 1].type = 'text';
                result[result.length - 1].style.width = '50px';
                result[result.length - 1].placeholder = arg;
                result[result.length - 1].classList.add('locs-update__' + arg.toLowerCase())

            })
            result.push(document.createElement("button"));
            result[result.length - 1].classList.add('locs-update__submit');
            result[result.length - 1].style.height = '20px';
            result[result.length - 1].onclick = function (button) {
                console.log(button.target.parentNode)
                button.target.parentNode.parentNode.removeChild(button.target.parentNode.parentNode.lastChild)
            }
            result[result.length - 1].innerText = 'Submit';
        } else if (button.target.parentNode.childNodes.length === 5) {
            placeholdersSmall.forEach((arg)=>{
                result.push(document.createElement('input'));
                result[result.length - 1].type = 'text';
                result[result.length - 1].style.width = '50px';
                result[result.length - 1].placeholder = arg;
                result[result.length - 1].classList.add('locs-update__' + arg.toLowerCase())

            })
            result.push(document.createElement("button"));
            result[result.length - 1].classList.add('locs-update__submit');
            result[result.length - 1].style.height = '20px';
            result[result.length - 1].onclick = function (button) {
                button.target.parentNode.parentNode.removeChild(button.target.parentNode.parentNode.lastChild)
            }
        }
        result.forEach((arg)=>{
            wrapper.appendChild(arg);
        })
        parent.appendChild(wrapper);
    }

    function updateLocation(button) {
        let parent = button.target.parentNode;
        let children = parent.childNodes;
        createUpdFields(button);
    }
    let style = loc[loc.length - 1] === '1'?'background:#e8f2ff':'';

    return {
        tagName: 'div',
        classList: ['default__locs'],
        attributes: {
            style: style
        },
        textContent: '',
        children: children(loc).concat(insertButtons()).concat()
    }
}