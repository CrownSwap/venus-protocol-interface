/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import { Cell, CellGroup, Notice, Spinner } from 'components';
import config from 'config';
import React, { useMemo } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'translation';
import { Pool } from 'types';
import { formatCentsToReadableValue } from 'utilities';

import { useGetPool } from 'clients/api';
import PLACEHOLDER_KEY from 'constants/placeholderKey';
import { routes } from 'constants/routing';
import { useAuth } from 'context/AuthContext';

import Table from './Table';
import { useStyles } from './styles';

export interface PoolUiProps {
  pool?: Pool;
}

export const PoolUi: React.FC<PoolUiProps> = ({ pool }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const cells: Cell[] = useMemo(() => {
    const { totalSupplyCents, totalBorrowCents } = (pool?.assets || []).reduce(
      (acc, item) => ({
        totalSupplyCents: acc.totalSupplyCents + item.supplyBalanceCents,
        totalBorrowCents: acc.totalBorrowCents + item.borrowBalanceCents,
      }),
      {
        totalSupplyCents: 0,
        totalBorrowCents: 0,
      },
    );

    return [
      {
        label: t('pool.header.totalSupplyLabel'),
        value: formatCentsToReadableValue({
          value: totalSupplyCents,
        }),
      },
      {
        label: t('pool.header.totalBorrowLabel'),
        value: formatCentsToReadableValue({
          value: totalBorrowCents,
        }),
      },
      {
        label: t('pool.header.availableLiquidityLabel'),
        value: formatCentsToReadableValue({
          value: totalSupplyCents - totalBorrowCents,
        }),
      },
      {
        label: t('pool.header.assetsLabel'),
        value: pool?.assets.length || PLACEHOLDER_KEY,
      },
    ];
  }, [pool]);

  return pool ? (
    <>
      <div css={styles.header}>
        {config.featureFlags.isolatedPools && (
          <Typography variant="small2" component="div" css={styles.headerDescription}>
            {pool.description}
          </Typography>
        )}

        <CellGroup cells={cells} />
      </div>

      {pool.isIsolated && (
        <Notice
          css={styles.isolatedPoolWarning}
          variant="warning"
          description={t('pool.isolatedPoolWarning')}
        />
      )}

      <Table pool={pool} />
    </>
  ) : (
    <Spinner />
  );
};

export type PoolPageProps = RouteComponentProps<{ poolComptrollerAddress: string }>;

const PoolPage: React.FC<PoolPageProps> = ({
  match: {
    params: { poolComptrollerAddress },
  },
}) => {
  const { accountAddress } = useAuth();

  const { data: getPoolData, isLoading: isGetPoolLoading } = useGetPool({
    accountAddress,
    poolComptrollerAddress,
  });

  // Redirect to Dashboard page if pool Comptroller address is incorrect
  if (!isGetPoolLoading && !getPoolData?.pool) {
    <Redirect to={routes.dashboard.path} />;
  }

  return <PoolUi pool={getPoolData?.pool} />;
};

export default PoolPage;
