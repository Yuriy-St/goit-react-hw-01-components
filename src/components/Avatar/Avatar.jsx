import PropTypes from 'prop-types';
import { AvatarContainer } from './AvatarContainer.styled';

export default function Avatar({ imgSrc, altText, imgWidth }) {
  return (
    <AvatarContainer imgWidth={imgWidth}>
      <img src={imgSrc} alt={altText} />
    </AvatarContainer>
  );
}

Avatar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  imgWidth: PropTypes.string.isRequired,
};
