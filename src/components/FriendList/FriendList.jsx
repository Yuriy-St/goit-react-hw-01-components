import PropTypes from 'prop-types';

import {
  FriendsContainer,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsContainer>
      {friends.map(({ id, avatar, name: fName, isOnline }) => {
        return (
          <FriendListItem key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{fName}</Name>
          </FriendListItem>
        );
      })}
    </FriendsContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      fName: PropTypes.string.isRequired.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
