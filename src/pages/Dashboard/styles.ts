import { css } from '@emotion/react';
import { useTheme } from '@mui/material';
import config from 'config';

export const useStyles = () => {
  const theme = useTheme();

  return {
    header: css`
      margin-bottom: ${theme.spacing(6)};

      ${!config.featureFlags.isolatedPools && theme.breakpoints.down('xl')} {
        margin-bottom: 0;
      }
    `,
    headerBottomRow: css`
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${theme.breakpoints.down('md')} {
        display: block;
      }
    `,
    rightColumn: css`
      display: flex;
      align-items: center;
      margin-left: auto;
    `,
    tabletButtonGroup: css`
      margin-bottom: ${theme.spacing(6)};
    `,
    tabletSearchTextField: css`
      width: 100%;
      margin-bottom: ${theme.spacing(6)};
    `,
    desktopSearchTextField: css`
      margin-left: ${theme.spacing(8)};
      min-width: ${theme.spacing(75)};
    `,
    banner: css`
      padding: ${theme.spacing(4)};
      margin-bottom: ${theme.spacing(4)};
    `,
    desktopMarketTables: css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: ${theme.spacing(6)};
    `,
  };
};
