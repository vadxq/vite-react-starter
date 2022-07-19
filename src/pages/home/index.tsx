import { Box, Button } from '@mui/material';

const Home = (): JSX.Element => {
  return (
    <Box>
      <div className="flex items-center">
        <div className="g-parallax-container">home</div>
        <Button
          sx={{
            width: '2rem',
            height: '1rem'
          }}
          variant="primary"
        >
          xxx
        </Button>
      </div>
    </Box>
  );
};

export default Home;
