import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DesignSystemProvider, lightTheme } from '@strapi/design-system';
import axios from 'axios';

const SelectorFieldTest: React.FC<any> = ({ name, value, onChange }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange({ target: { name, value: event.target.value } });
    };

    return (
        <DesignSystemProvider locale="en-GB" theme={lightTheme}>
            <div>
                <h2>Select a User</h2>
                <select value={value || ''} onChange={handleSelectChange}>
                    <option value="" disabled>Select a user</option>
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

SelectorFieldTest.defaultProps = {
    value: '',
};

SelectorFieldTest.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default SelectorFieldTest;
