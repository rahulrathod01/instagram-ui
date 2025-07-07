'use client';
import React from 'react';
import { Box, Button } from '@mui/material';

interface StepNavigatorProps {
  step: number;
  handleBack: () => void;
  handleNext: () => void;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({ step, handleBack, handleNext }) => (
  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
    <Button disabled={step === 0} onClick={handleBack}>Back</Button>
    {step < 2 ? (
      <Button variant="contained" onClick={handleNext}>Next</Button>
    ) : (
      <Button variant="contained" color="success">Go Live</Button>
    )}
  </Box>
);

export default StepNavigator;
