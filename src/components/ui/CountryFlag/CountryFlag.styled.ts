import { styled } from '@mui/material/styles';

type FlagImageProps = {
  readonly size: number;
};

export const FlagImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'size',
})<FlagImageProps>(({ size }) => ({
  width: size,
  height: size,
  flex: '0 0 auto',
  display: 'block',
  borderRadius: '50%',
  objectFit: 'cover',
}));
