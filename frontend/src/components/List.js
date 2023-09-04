import React, {  } from "react";

const List = () => {
    return(
        <div className="container">
            <h3>User Detail</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default List;