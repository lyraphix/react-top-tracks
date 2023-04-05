import User from './_lobbyuser';
import * as React from "react";

const Lobbylist = ({ users }) => {


    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <User avatar={user.avatar} id={user.id}/>
                    &nbsp;
                </div>
            ))}
        </div>

    );
}
export default Lobbylist;
