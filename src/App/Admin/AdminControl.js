import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import mock from './mockdata.json';

function AdminControl() {
  return (
    <div>
      <Box>
        <Typography>Erim Emmanuel</Typography>

        <ul className="list-group">
          {mock.data.map((data) => {
            return (
              <li className="list-group-item flex-d flex  justify-between ">
                <span> {data.id}</span>
                <span> {data.fullname}</span>
                <span> {data.email}</span>
              </li>
            );
          })}
        </ul>
      </Box>
    </div>
  );
}

export default AdminControl