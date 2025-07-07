'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Avatar,
  TextField,
} from '@mui/material';

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface Post {
  id: number;
  title: string;
  image: string;
}

interface PreviewCardProps {
  post: Post | null;
  comment: string;
  dm: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ post, comment, dm }) => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      {/* Phone Frame */}
      <Box
        sx={{
          width: 280,
          border: '16px solid black',
          borderRadius: '36px',
          backgroundColor: '#000',
          overflow: 'hidden',
          minHeight: 550,
        }}
      >
        {/* ========== TAB: POST ========== */}
        {tab === 0 && (
          <Box sx={{ backgroundColor: '#fff' }}>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" px={2} py={1} bgcolor="#000">
              <Typography color="white" fontWeight="bold">BOTSPACEHQ</Typography>
              <Typography color="white">⋮</Typography>
            </Box>

            {/* Post Header */}
            <Box display="flex" alignItems="center" px={2} py={1}>
              <Avatar src="/avatar.png" />
              <Typography fontWeight="bold" ml={1}>botspacehq</Typography>
            </Box>

            {/* Post Image */}
            {post?.image ? (
              <img src={post.image} alt={post.title} style={{ width: '100%' }} />
            ) : (
              <Typography px={2} py={4} textAlign="center">
                No post selected
              </Typography>
            )}

            {/* Action Buttons */}
            <Box display="flex" justifyContent="space-between" px={2} py={1}>
              <Box display="flex" gap={1}>
                <FavoriteBorderIcon fontSize="small" />
                <ChatBubbleOutlineIcon fontSize="small" />
                <SendIcon fontSize="small" />
              </Box>
              <BookmarkBorderIcon fontSize="small" />
            </Box>

            {/* Likes */}
            <Typography px={2} fontWeight="bold" fontSize="14px">
              18 likes
            </Typography>

            {/* Caption */}
            <Typography px={2} pb={2} fontSize="13px">
              <strong>botspacehq</strong> WhatsApp now connects 3 billion users, a milestone reflecting its influence in messaging...
            </Typography>

            {/* Bottom Navigation */}
            <Box display="flex" justifyContent="space-around" borderTop="1px solid #ddd" py={1}>
              <HomeOutlinedIcon fontSize="small" />
              <SearchOutlinedIcon fontSize="small" />
              <VideoLibraryOutlinedIcon fontSize="small" />
              <ShoppingBagOutlinedIcon fontSize="small" />
              <AccountCircleOutlinedIcon fontSize="small" />
            </Box>
          </Box>
        )}

        {/* ========== TAB: COMMENTS ========== */}
        {tab === 1 && (
          <Box sx={{ backgroundColor: '#121212', color: '#fff', height: '100%' }}>
            <Box display="flex" justifyContent="center" py={1}>
              <Typography fontWeight="bold">Comments</Typography>
            </Box>

            <Box px={2} py={1}>
              <Box display="flex" alignItems="center" mb={1}>
                <Avatar sx={{ width: 30, height: 30 }} />
                <Box ml={1}>
                  <Typography fontWeight="bold" fontSize="13px">Username</Typography>
                  <Typography fontSize="13px">{comment || 'No comment entered'}</Typography>
                  <Typography variant="caption" color="gray">Reply</Typography>
                </Box>
              </Box>

              {/* Emoji row */}
              <Box display="flex" justifyContent="space-around" py={1}>
                {['❤️', '🙌', '🔥', '🍌', '😮', '😢', '😂'].map((emoji) => (
                  <Typography key={emoji}>{emoji}</Typography>
                ))}
              </Box>

              {/* Comment input */}
              <Box display="flex" alignItems="center" px={1} py={1} borderTop="1px solid #333">
                <Avatar sx={{ width: 28, height: 28 }} />
                <TextField
                  variant="standard"
                  placeholder="Add a comment for username..."
                  fullWidth
                  InputProps={{ disableUnderline: true, sx: { color: 'white', ml: 1 } }}
                />
              </Box>
            </Box>
          </Box>
        )}

        {/* ========== TAB: DM ========== */}
        {tab === 2 && (
          <Box sx={{ backgroundColor: '#000', color: '#fff', height: '100%' }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" px={2} py={1}>
              <Typography fontWeight="bold">botspacehq</Typography>
              <Box display="flex" gap={1}>
                <Typography>📞</Typography>
                <Typography>📷</Typography>
              </Box>
            </Box>

            <Box px={2} py={1}>
              <Box
                sx={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  p: 1,
                  mb: 1,
                  fontSize: '13px',
                }}
              >
                Hey there! I'm so happy you're here, thanks so much for your interest 😊
                <br />
                Click below and I'll send you the link in just a sec ✨
              </Box>

              <Box
                sx={{
                  backgroundColor: '#262626',
                  borderRadius: '10px',
                  p: 1,
                  width: 'fit-content',
                  fontSize: '13px',
                }}
              >
                Send me the link
              </Box>

              {/* User reply */}
              <Box textAlign="right" mt={1}>
                <Box
                  sx={{
                    backgroundColor: '#4f46e5',
                    borderRadius: '10px',
                    color: '#fff',
                    px: 2,
                    py: 1,
                    display: 'inline-block',
                    fontSize: '13px',
                  }}
                >
                  {dm || 'Send me the link'}
                </Box>
              </Box>
            </Box>

           
          </Box>
        )}
      </Box>

      {/* Tabs */}
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
          borderRadius: '30px',
          px: 2,
        }}
      >
        <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Post" />
          <Tab label="Comments" />
          <Tab label="DM" />
        </Tabs>
      </Paper>
    </Box>
  );
};

export default PreviewCard;
