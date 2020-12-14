import Title from "./title/title.component";
import Table from "./table/table.component";
export const template = function () {
    return {
        tagName: 'div',
        classList: ['cim__docs','docs'],
        attributes: {
            style: ''
        },
        textContent: '',
        children: [
            new Title().render(),
            new Table().render()
        ]
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