'use client';
import React from 'react';
import { TextField, Typography } from '@mui/material';

interface StepDMProps {
  dm: string;
  setDM: (value: string) => void;
}

const StepDM: React.FC<StepDMProps> = ({ dm, setDM }) => (
  <div>
    <Typography variant="h6" gutterBottom>Compose DM Message</Typography>
    <TextField
      label="Message"
      multiline
      rows={4}
      variant="outlined"
      fullWidth
      value={dm}
      onChange={(e) => setDM(e.target.value)}
    />
  </div>
);

export default StepDM;
