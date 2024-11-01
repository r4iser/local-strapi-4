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
                <h2>Select a User</h2>
                <select>
                    {users.map((user: any) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        </DesignSystemProvider>
    );
};

export default SelectorFieldTest;
