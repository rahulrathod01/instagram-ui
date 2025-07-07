'use client';
import React from 'react';
import { TextField, Typography } from '@mui/material';

interface StepCommentProps {
  comment: string;
  setComment: (value: string) => void;
}

const StepComment: React.FC<StepCommentProps> = ({ comment, setComment }) => (
  <div>
    <Typography variant="h6" gutterBottom>Enter Trigger Comment</Typography>
    <TextField
      label="Comment Keyword"
      variant="outlined"
      fullWidth
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
  </div>
);

export default StepComment;
