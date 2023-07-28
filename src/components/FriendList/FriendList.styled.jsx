import styled from '@emotion/styled';
import { flex, flexCol } from 'components/Base/Flex.styled';
import { color, text, space } from 'constants/theme';

export const FriendsContainer = styled.ul`
  ${flexCol}
  label: friends;
  gap: ${space(3)};
`;

export const FriendListItem = styled.li`
  ${flex}
  label: friendItem;
  border-radius: ${space(1)};
  min-width: ${space(70)};
  box-shadow: 0 ${space(1)} ${space(1)} ${color.grey_600};
  overflow: hidden;
  justify-content: flex-start;
  background-color: ${color.white};
`;

export const Status = styled.span`
  label: status;
  display: block;
  margin: 0 ${space(5)};
  min-width: ${space(6)};
  height: ${space(6)};
  border-radius: 50%;
  background-color: ${({ isOnline }) =>
    isOnline ? color.online : color.offline};
`;

export const Avatar = styled.img`
  label: avatar;
  width: ${space(12)};
  margin: ${space(2)};
  padding: ${space(2)};
  border: 1px solid ${color.grey_700};
  border-radius: ${space(1)};
`;

export const Name = styled.p`
  label: name;
  width: 100%;
  padding: 0 ${space(4)};
  font-size: ${text.l};
  font-weight: 600;
`;
