'use client';
import React, { useState } from 'react';
import { Container, Stepper, Step, StepLabel, Box } from '@mui/material';

import StepPostSelector from './components/StepPostSelector';
import StepComment from './components/StepComment';
import StepDM from './components/StepDM';
import StepNavigator from './components/StepNavigator';
import PreviewCard from './components/PreviewCard';

interface Post {
  id: number;
  title: string;
  image: string;
}

const steps = ['Select Post', 'Add Comment', 'Send DM'];

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [post, setPost] = useState<Post | null>(null); // updated type
  const [comment, setComment] = useState('');
  const [dm, setDM] = useState('');

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4, display: 'flex', gap: 4 }}>
        {/* Left side - steps */}
        <Box sx={{ flex: 1 }}>
          {activeStep === 0 && <StepPostSelector post={post} setPost={setPost} />}
          {activeStep === 1 && <StepComment comment={comment} setComment={setComment} />}
          {activeStep === 2 && <StepDM dm={dm} setDM={setDM} />}
          <StepNavigator
            step={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </Box>

        {/* Right side - preview */}
        <Box sx={{ flex: 1 }}>
          <PreviewCard post={post} comment={comment} dm={dm} />
        </Box>
      </Box>
    </Container>
  );
}