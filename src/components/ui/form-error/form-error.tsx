import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/system';

const errorStyle: SxProps<Theme> = {
  margin: '8px 0 0 0',
  color: '#fd3131',
};

type Props = {
  message?: string;
};
export default function FormError({ message }: Props) {
  return (
    <Typography variant="body2" component="span" noWrap sx={errorStyle}>
      {message}
    </Typography>
  );
}
