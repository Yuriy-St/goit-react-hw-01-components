import { css } from '@emotion/react';

export const flex = css`
  label: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCol = css`
  ${flex}
  label: flexCol;
  flex-direction: column;
`;
