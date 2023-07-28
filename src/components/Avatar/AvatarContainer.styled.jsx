import styled from '@emotion/styled';

export const AvatarContainer = styled.div`
  label: avatar;
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgWidth }) => imgWidth};
  overflow: hidden;
  border-radius: 50%;
`;
