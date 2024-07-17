'use client';

import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleChange = (event) => {
    const user = users.find(user => user.name === event.target.value);
    setSelectedUser(user);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'website', headerName: 'Website', width: 150 },
  ];

  return (
    <Box sx={{ width: '100%', height: '100vh', padding: 2 }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="user-select-label">User</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          value={selectedUser?.name || ''}
          onChange={handleChange}
          label="User"
        >
          {users.map(user => (
            <MenuItem key={user.id} value={user.name}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedUser && (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={[selectedUser]}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </Box>
  );
}
