import * as React from 'react';
import Paper from '@mui/material/Paper';

/**
 * creates Profile
 * @return {HTML} Profile component
 */
export default function ProfileVolunteer({data}) {
  console.log(data.experience1);
  return (
    <Paper
      className='profile-header'
      elevation={3}
      sx={{
        marginBottom: '3rem',
        width: '50vw',
        height: '500px',
        boxShadow: '0px 0px 50px -14px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
      }}
    >
      <h1>Volunteer Experience</h1>
    </Paper>
  );
}
