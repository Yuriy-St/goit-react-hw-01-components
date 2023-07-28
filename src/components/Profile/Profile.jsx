import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Name,
  Tag,
  Location,
  StatsContainer,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled';

import Avatar from 'components/Avatar';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <Card>
      <Description>
        <Avatar imgSrc={avatar} altText="User avatar" imgWidth="150px" />
        <Name>{username}</Name>
        <Tag>&#64;{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsContainer className="stats">
        {Object.keys(stats).map(key => (
          <StatItem key={key}>
            <Label>{key}</Label>
            <Quantity>{stats[key]}</Quantity>
          </StatItem>
        ))}
      </StatsContainer>
    </Card>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

// ---------------- CSS
