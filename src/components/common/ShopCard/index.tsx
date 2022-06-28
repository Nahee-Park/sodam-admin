import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface ShopCardProps {
  shopName: string;
  image: string;
  category: string;
}

function ShopCard({ shopName, image, category }: ShopCardProps) {
  return (
    <CardActionArea>
      <Card
        sx={{
          width: '100%',
          height: 260,
          'box-shadow': '1px 1px 10px #D3D3D3',
          'border-radius': '16px',
        }}
      >
        <CardMedia component="img" height="140" image={image} alt="shop data" />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {shopName}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

export default ShopCard;
