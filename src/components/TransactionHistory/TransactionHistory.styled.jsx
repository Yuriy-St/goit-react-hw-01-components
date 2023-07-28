import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color, text, space } from 'constants/theme';
import { flex } from 'components/Base/Flex.styled';

const border = `2px solid ${color.grey_400}`;

const dataCell = css`
  :not(:last-child) {
    border-right: ${border};
  }

  :nth-of-type(1) {
    padding-left: ${space(15)};
    text-align: left;
  }

  :nth-of-type(2) {
    padding-right: ${space(15)};
    text-align: right;
  }
`;

export const TableContainer = styled.div`
  box-shadow: 0 ${space(1)} ${space(1)} ${color.grey_600};
  border-radius: ${space(1)};
  width: ${space(150)};
  overflow: hidden;
`;

export const TransactionsTable = styled.table`
  label: transactions;
  table-layout: fixed;
  width: 100%;
  // min-width: ${space(100)};
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  label: tHeader;
  padding: ${space(2)};
  font-size: ${text.xxs};
  text-align: center;
  text-transform: uppercase;
  color: ${color.grey_100};
  background-color: ${color._4};
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  label: hCell;
  padding: ${space(2)} 0;

  ${dataCell}
`;

export const TableBody = styled.tbody`
  label: tBody;
  background-color: ${color.grey_100};
`;

export const TableRow = styled.tr`
  label: tRow;
  font-size: ${text.xs};
  text-transform: capitalize;

  :nth-of-type(even) {
    background-color: ${color.grey_200};
  }
`;

export const Cell = styled.td`
  label: tCell;
  padding: ${space(2)};
  text-align: center;

  ${dataCell}
`;
