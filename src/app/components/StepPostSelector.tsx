'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface Post {
  id: number;
  title: string;
  image: string;
}

interface StepPostSelectorProps {
  post: Post | null;
  setPost: (post: Post) => void;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Reel: New Launch!',
    image: 'https://imgs.search.brave.com/rr1RZ4JiDLnvwZmr-SOPMZMIserFEJeOeEj5djfhats/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bGF1cmV3YW5kZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNy9OYXR1/cmUtMDA0LTY4M3gx/MDI0LmpwZw',
  },
  {
    id: 2,
    title: 'BTS Clip',
    image: 'https://imgs.search.brave.com/dezSJEUKWR8IOQFmU97jQtdyp5x3Kvx7tR_LR5eRW0s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9xdW90/ZXNwcmluY2UubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA5L05hdHVyZS1Q/aG90b2dyYXBoeS1D/YXB0aW9ucy01NzV4/MTAyNC53ZWJw',
  },
  {
    id: 3,
    title: 'Funny Moment',
    image: 'https://imgs.search.brave.com/AChpQN_Ao5hVTB4U-WvftOGTHTXgPU_twmpTPnNkj9A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2VkcmVhbW9mdHJh/dmVsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNi9O/YXR1cmUtUXVvdGVz/LWZvci1JbnN0YWdy/YW0tNi5qcGc',
  },
];

const StepPostSelector: React.FC<StepPostSelectorProps> = ({ post, setPost }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Select a Post or Reel</Typography>
      <Box display="flex" gap={2} flexWrap="wrap" mt={2}>
        {mockPosts.map((p) => (
          <Card
            key={p.id}
            sx={{
              width: 150,
              cursor: 'pointer',
              border: post?.id === p.id ? '2px solid blue' : '1px solid #ddd',
            }}
            onClick={() => setPost(p)}
          >
            <CardMedia
              component="img"
              height="140"
              image={p.image}
              alt={p.title}
            />
            <CardContent>
              <Typography variant="body2" noWrap>
                {p.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default StepPostSelector;
