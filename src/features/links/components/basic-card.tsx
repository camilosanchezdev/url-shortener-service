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
import { UrlType } from '@/features/links/types/url.type';

const styles = {
  card: { minWidth: 275 },
  cardContent: { display: 'flex', justifyContent: 'space-between' },
  button: { display: 'flex', gap: 1, height: '40px' },
};

export default function BasicCard({
  id,
  title,
  originalUrl,
  shortCode,
  createdAt,
  clicks,
}: UrlType) {
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
            {createdAt}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            sx={{ mb: 1.5, cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
            color="#0e60c8"
          >
            bit.ly/{shortCode}
          </Typography>

          <Typography variant="body2">{originalUrl}</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="text"
            sx={styles.button}
            onClick={() => handleCopyLink(`https://bit.ly/${shortCode}`)}
          >
            <FaRegCopy /> Copy link
          </Button>
          <Button variant="text" sx={styles.button} onClick={() => handleEditItem(id)}>
            <GoPencil /> Edit
          </Button>
          <Button variant="text" sx={styles.button} onClick={() => handleRemoveItem(id)}>
            <MdOutlineDeleteOutline /> Delete
          </Button>
        </Box>
      </CardContent>
      <CardActions>
        <Chip label={`${clicks} clicks`} variant="outlined" />
      </CardActions>
    </Card>
  );
}
