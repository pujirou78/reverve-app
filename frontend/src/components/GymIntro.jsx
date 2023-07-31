import React from 'react';
import { Box, Typography, Button, Grid, Paper, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <Box p={8}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            トレーニングジム「FitGym」
          </Typography>
          <Typography variant="body1" gutterBottom>
            FitGymは、健康的な生活をサポートし、理想の体を手に入れるための最高の場所です。プロのトレーナーがあなたの目標に合ったトレーニングプランを提供します。
          </Typography>
          <Button component={Link} to="/login" variant="contained" color="primary">
            予約する
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Avatar src="/gym.jpg" alt="Gym" sx={{ width: '100%', height: 'auto' }} />
          </Paper>
          <Typography variant="body2" color="textSecondary" align="center" mt={2}>
            当ジムの様子
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
