import styled from '@emotion/styled';
import { flex, flexCol } from 'components/Base/Flex.styled';
import { color, text, space } from 'constants/theme';

export const Container = styled.section`
  ${flexCol}
  label: statContainer;
  background-color: ${color.white};
  min-width: ${space(100)};
  box-shadow: 0 ${space(1)} ${space(1)} ${color.grey_600};
  border: 1px solid ${color.grey_600};
  border-radius: ${space(1)};
  background-color: ${color.white};
  overflow: hidden;

  padding-top: ${space(6)};

  gap: ${space(6)};
`;

export const Title = styled.h2`
  label: title;
  font-size: ${text.xl};
  font-weight: 700;
`;

export const StatList = styled.ul`
  ${flex}
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StatItem = styled.li`
  ${flexCol}
  label: statItem;
  padding: ${space(6)} 0;
  width: 100%;
  flex-wrap: wrap;
  color: ${color.grey_300};
  background-color: ${({ bg }) => bg};
  gap: ${space(2)};
`;

export const Label = styled.span`
  label: label;
`;

export const Percentage = styled.span`
  label: percentage;
  font-size: ${text.l};
`;
