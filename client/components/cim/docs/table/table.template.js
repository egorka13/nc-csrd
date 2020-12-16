import Row from "./row/row.component";

export const template = function () {
    let data = Object.entries(this.props.store.state.cim.responseCD);
    // let children = data.map((arg)=>{
    //     return new Row([arg[0],Object.entries(arg[1])], 0).render()
    // });

    return {
        tagName: 'table',
        classList: ['docs__table','table'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
           new Row(['0',[['','Name'], ['','Status'], ['','Last updating'], ['','Attachment']]], 1).render()
        ].concat(data.map((arg)=>{
            return new Row([arg[0],Object.entries(arg[1])], 0).render()
        })).concat(
        //     {
        //     tagName: 'tr',
        //     classList: ['table__rowData','rowData'],
        //     attributes: {
        //         style: 'display:none;'
        //     },
        //     textContent: '',
        //     children: [
        //         {
        //             tagName: 'td',
        //             classList: ['row__dataCell','dataCell'],
        //             attributes: {
        //                 style: ''
        //             },
        //             textContent: '',
        //             children: [
        //                 {
        //                     tagName: 'input',
        //                     classList: ['dataCell-input'],
        //                     attributes: {
        //                         type: 'text',
        //                         style: ''
        //                     },
        //                     textContent: '',
        //                 },
        //             ]
        //         },
        //         {
        //             tagName: 'td',
        //             classList: ['row__dataCell','dataCell'],
        //             attributes: {
        //                 style: ''
        //             },
        //             textContent: '',
        //             children: [
        //                 {
        //                     tagName: 'input',
        //                     classList: ['dataCell-input'],
        //                     attributes: {
        //                         type: 'text',
        //                         style: ''
        //                     },
        //                     textContent: '',
        //                 },
        //             ]
        //         },
        //         {
        //             tagName: 'td',
        //             classList: ['row__dataCell','dataCell'],
        //             attributes: {
        //                 style: ''
        //             },
        //             textContent: '',
        //             children: [
        //                 {
        //                     tagName: 'input',
        //                     classList: ['dataCell-input'],
        //                     attributes: {
        //                         type: 'text',
        //                         style: ''
        //                     },
        //                     textContent: '',
        //                 },
        //             ]
        //         },
        //         {
        //             tagName: 'td',
        //             classList: ['row__dataCell','dataCell'],
        //             attributes: {
        //                 style: ''
        //             },
        //             textContent: '',
        //             children: [
        //                 {
        //                     tagName: 'input',
        //                     classList: ['dataCell-input'],
        //                     attributes: {
        //                         type: 'text',
        //                         style: ''
        //                     },
        //                     textContent: '',
        //                 },
        //             ]
        //         },
        //         {
        //             tagName: 'td',
        //             classList: ['row__dataCell','dataCell'],
        //             attributes: {
        //                 style: ''
        //             },
        //             textContent: '',
        //             children: [
        //                 {
        //                     tagName: 'button',
        //                     classList: ['dataCell-button'],
        //                     attributes: {
        //                         style: 'height:20px'
        //                     },
        //                     textContent: '',
        //                 }
        //             ]
        //         },
        //
        //     ]
        // }
        )
    }
}

/*
<table class="table3">
    <tbody>
        <tr>
            <th>Company</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
        </tr>
        <tr>
            <td>Microsoft</td>
            <td>20.3</td>
            <td>30.5</td>
            <td>23.5</td>
            <td>40.3</td>
        </tr>
        <tr>
            <td>Google</td>
            <td>50.2</td>
            <td>40.63</td>
            <td>45.23</td>
            <td>39.3</td>
        </tr>
        <tr>
            <td>Apple</td>
            <td>25.4</td>
            <td>30.2</td>
            <td>33.3</td>
            <td>36.7</td>
        </tr>
        <tr>
            <td>IBM</td>
            <td>20.4</td>
            <td>15.6</td>
            <td>22.3</td>
            <td>29.3</td>
        </tr>
    </tbody>
</table>
 */