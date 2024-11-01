import React, { useEffect, useState } from 'react';
import { DesignSystemProvider, lightTheme } from '@strapi/design-system';
import axios from 'axios';

const SelectorFieldTest: React.FC = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                console.log('HELLOOOOOOOOOOOOOOOOO', response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <DesignSystemProvider locale="en-GB" theme={lightTheme}>
            <div>
                <h2>User List</h2>
                <ul>
                    {users.map((user: any) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </DesignSystemProvider>
    );
};

export default SelectorFieldTest;
