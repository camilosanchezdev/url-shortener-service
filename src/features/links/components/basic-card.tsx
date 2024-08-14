'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import { FaRegCopy } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import useQueryParams, { IParams } from '@/hooks/params';

const styles = {
  card: { minWidth: 275 },
  cardContent: { display: 'flex', justifyContent: 'space-between' },
  button: { display: 'flex', gap: 1, height: '40px' },
};

export default function BasicCard() {
  const { setParams } = useQueryParams();
  const handleCopyLink = (str: string) => {
    navigator.clipboard.writeText(str).then(() => {
      const params: IParams[] = [
        {
          key: 'toast',
          value: 'true',
        },
      ];
      setParams(params);
    });
  };
  const handleEditItem = (val: number) => {
    const params: IParams[] = [
      {
        key: 'show',
        value: 'true',
      },
      {
        key: 'item',
        value: val.toString(),
      },
    ];
    setParams(params);
  };
  const handleRemoveItem = (val: number) => {
    const params: IParams[] = [
      {
        key: 'remove',
        value: 'true',
      },
      {
        key: 'item',
        value: val.toString(),
      },
    ];
    setParams(params);
  };
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            15/04/2024
          </Typography>
          <Typography variant="h5" component="div">
            Some title
          </Typography>
          <Typography
            sx={{ mb: 1.5, cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
            color="#0e60c8"
          >
            bit.ly/abc123
          </Typography>

          <Typography variant="body2">https://google.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="text" sx={styles.button} onClick={() => handleCopyLink('some link')}>
            <FaRegCopy /> Copy link
          </Button>
          <Button variant="text" sx={styles.button} onClick={() => handleEditItem(1)}>
            <GoPencil /> Edit
          </Button>
          <Button variant="text" sx={styles.button} onClick={() => handleRemoveItem(1)}>
            <MdOutlineDeleteOutline /> Delete
          </Button>
        </Box>
      </CardContent>
      <CardActions>
        <Chip label="0 clicks" variant="outlined" />
      </CardActions>
    </Card>
  );
}
