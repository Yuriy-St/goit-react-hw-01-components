import styled from '@emotion/styled';
import { flexCol, flex } from 'components/Base/Flex.styled';
import { color, text, space } from 'constants/theme';

export const Card = styled.div`
  ${flexCol}
  label: card;
  margin: 0 auto;
  min-width: ${space(100)};
  overflow: hidden;
  box-shadow: 0 ${space(1)} ${space(1)} ${color.grey_600};
  border: 1px solid ${color.grey_600};
  border-radius: ${space(1)};
  background-color: ${color.white};
`;

export const Description = styled.div`
  ${flexCol}
  label: description;
  width: 100%;
  row-gap: ${space(5)};
  padding-top: ${space(10)};
  padding-bottom: ${space(10)};
`;

export const Name = styled.p`
  label: name;
  color: ${color.grey_900};
  font-size: ${text.xxl};
  font-weight: 700;
`;

export const Tag = styled.p`
  label: tag;
  color: ${color.grey_500};
  font-size: ${text.l};
  font-weight: 600;
`;

export const Location = styled(Tag)`
  label: location;
`;

export const StatsContainer = styled.ul`
  ${flex}
  label: statsContainer;
  width: 100%;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  label: statItem;
  --border: 2px solid ${color.grey_400};

  padding: ${space(8)} 0;
  flex-basis: calc(100% / 3);
  text-align: center;
  border-top: var(--border);
  background-color: ${color.grey_100};

  :not(:last-child) {
    border-right: var(--border);
  }
`;

export const Label = styled.span`
  color: ${color.grey_600};
  text-transform: capitalize;
  font-size: ${text.m};
  display: block;
  padding-bottom: ${space(4)};
`;

export const Quantity = styled.span`
  display: block;
  font-size: ${text.xl};
  font-weight: 700;
`;
