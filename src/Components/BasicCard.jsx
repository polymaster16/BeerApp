import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function BasicCard(props) {
  return (
    <div className=' my-3' onClick={props.sub}>
    <Card sx={{ minHeight: 320, width: '100%' }}>
      <CardCover>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/media-personality-kim-kardashian-west-attends-the-wsj-news-photo-1665673553.jpg?crop=0.709xw:1.00xh;0.104xw,0&resize=640:*"
          srcSet="https://variety.com/wp-content/uploads/2022/11/kim-kardashian-baby2baby.jpg?w=681&h=383&crop=1"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Candidate no 
        </Typography>
        <Typography
          
          textColor="#D3D3D3"
        >
          name of miss
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
