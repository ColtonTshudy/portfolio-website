import PropTypes from 'prop-types';
import { styled, keyframes } from '@mui/material';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components using object notation
const Overlay = styled('div')(({ isLoading }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: isLoading ? 1 : 0,
  transition: 'opacity 0.5s ease',
  pointerEvents: isLoading ? 'all' : 'none',
}));

const Spinner = styled('div')({
  border: '16px solid #f3f3f3',
  borderTop: '16px solid black',
  borderRadius: '50%',
  width: '120px',
  height: '120px',
  animation: `${spin} 2s linear infinite`,
});

// Main component
const LoadingOverlay = ({ isLoading }) => {
  return (
    <Overlay isLoading={isLoading}>
      <Spinner />
    </Overlay>
  );
};

LoadingOverlay.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingOverlay;