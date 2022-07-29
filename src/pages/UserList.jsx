import { useEffect, useState } from "react";
import useFetch from "use-http";

const UserList = () => {

    const [users, setUsers] = useState();
    const { reponse, get } = useFetch();
    const handleGetData = async () => {
        if (Response.ok) {
            await get(`/api/admin/user/all?`)
            setUsers(reponse.data?.users)
        }
    }






    useEffect(() => {

        handleGetData()

    }, [])







    return (<div>

        <table>
            <thead>
                <tr>

                    <th> #</th>
                    <th> Full Name</th>
                    <th> User Name</th>




                </tr>




            </thead>
            <tbody>
                {users.map(
                    (user, index) => <tr key={users._id}>
                        <td>{index + 1}</td>
                        <td> `${user.firstName} + ${user.lastName}`</td>
                        <td> {user.username}</td>
                    </tr>
                )}



            </tbody>





        </table>







    </div>);
}

export default UserList;