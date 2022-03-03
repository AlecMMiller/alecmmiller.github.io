import {IPosition} from "../interfaces"
import { getDateString } from "../utils/date"
import {pastRoles} from "../contents/roles"

function Position(props: IPosition) {
    const details = props.notes.map((note) =>
        <li>{note}</li>
    );

    return <div className="Position">
        <div className="RoleOverview">
            <div className="Role">{props.company} | {props.role}</div>
            <div className="Dates">{getDateString(props.start)} - {getDateString(props.end)}</div>
        </div>
        <div className="Info"><ul>{details}</ul></div>
    </div>
}

export function Experience() {
    let positionItems = [];

    for (let i = 0; i < pastRoles.length; i++) {
        const positionInfo = pastRoles[i];
        const positionItem = <Position {...positionInfo} />
        positionItems.push(positionItem);
    }

    return <div className="Experience">
        {positionItems}
    </div>
}