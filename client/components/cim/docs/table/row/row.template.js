
export const template = function (row, flag) {
    console.log(row,flag)
    let children = row[1].map((arg)=>{
        return {
            tagName: flag === 1?'th':'td',
            classList: flag === 1?['row__headCell', 'headCell']:['row__cell','cell'],
            attributes: {
                style: ''
            },
            textContent: arg[1],
        }
    })
    function showForm(button) {
        // let table = document.getElementsByClassName('docs__table')[0];
        // let childNodes = [];
        // for (let i = 0; i < button.target.parentNode.childNodes.length; i++) {
        //     childNodes.push(button.target.parentNode.childNodes[i]);
        // }
        // let row = document.createElement('tr');
        // row.classList.add('table__row','row');
        //
        // childNodes.map((node)=>{
        //     let cell = document.createElement('input');
        //     cell.type = 'text';
        //     cell.classList.add('row__cell','input');
        //     cell.innerText = node.innerText;
        //     row.appendChild(cell);
        // })
        //
        // table.appendChild(row);
        let rowData = document.getElementsByClassName('table__rowData')[0];
        rowData.style.display = 'table-row';
    }
     if (flag !== 1)
        children.push({
            tagName: 'button',
            classList: ['row__button'],
            events:{
              onclick: showForm
            },
            attributes: {
                id: row[0],
                style: 'height:20px;'
            },
            textContent: 'Delete',
            children: []
        })
    console.log(children)

    return {
        tagName: 'tr',
        classList: ['table__row','row'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: children
    }
}