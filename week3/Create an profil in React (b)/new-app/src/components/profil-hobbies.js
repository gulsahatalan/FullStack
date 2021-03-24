export default function Hobbies(){
    return(
        <fieldset className="table">
        <legend>MY HOBBIES</legend>

        <table>
            
            <tr>
                <th>Hobby Name</th>
                <th>Start date</th>
                <th>frequency</th>
                <th>Allotted hour</th>
            </tr>
            <tr>
                <td>Badminton</td>
                <td>2007</td>
                <td>2 times a week</td>
                <td>2 h</td>
            </tr>
            <tr>
                <td>jogging</td>
                <td>2009</td>
                <td>every day</td>
                <td>1 h</td>
            </tr>
            <tr>
                <td>Hobby garden</td>
                <td>2015</td>
                <td>2 times a week </td>
                <td>3 h</td>
            </tr>

        </table>
    </fieldset>
    )
}