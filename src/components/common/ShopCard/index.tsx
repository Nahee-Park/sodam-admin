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
    <Card sx={{ width: 200, 'box-shadow': '1px 1px 10px #D3D3D3' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="shop data" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {shopName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ShopCard;
