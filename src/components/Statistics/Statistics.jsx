import PropTypes from 'prop-types';

import {
  Title,
  Container,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} bg={getRandomHexColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}&#37;</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
		}).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
