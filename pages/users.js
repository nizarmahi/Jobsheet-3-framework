import { useState, useEffect } from "react";
import Link from 'next/link';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users.js');
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Daftar Users</h1>
            <ul>
                {users.map((user) => {
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default UserList;