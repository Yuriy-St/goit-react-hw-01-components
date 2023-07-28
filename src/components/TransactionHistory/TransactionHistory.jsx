import PropTypes from 'prop-types';

import {
  TableContainer,
  TransactionsTable,
  TableHeader,
  HeaderRow,
  HeaderCell,
  TableBody,
  TableRow,
  Cell,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TableContainer>
      <TransactionsTable>
        <TableHeader>
          <HeaderRow>
            <HeaderCell>Type</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Currency</HeaderCell>
          </HeaderRow>
        </TableHeader>

        <TableBody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <Cell>{type}</Cell>
              <Cell>{amount}</Cell>
              <Cell>{currency}</Cell>
            </TableRow>
          ))}
        </TableBody>
      </TransactionsTable>
    </TableContainer>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
