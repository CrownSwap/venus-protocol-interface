/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography';
import config from 'config';
import React from 'react';
import { useTranslation } from 'translation';
import { generateBscScanUrl } from 'utilities';

import { useGetBlockNumber } from 'clients/api';
import { Icon } from 'components/Icon';
import { TOKENS } from 'constants/tokens';

import {
  VENUS_DISCORD_URL,
  VENUS_GITHUB_URL,
  VENUS_MEDIUM_URL,
  VENUS_TWITTER_URL,
} from './constants';
import { useStyles } from './styles';

export interface FooterUiProps {
  currentBlockNumber: number | undefined;
}

export const FooterUi: React.FC<FooterUiProps> = ({ currentBlockNumber }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div css={styles.container}>
      {!!currentBlockNumber && (
        <Typography
          component="a"
          variant="small2"
          css={styles.blockInfo}
          href={config.bscScanUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t('footer.latestNumber')}
          <br css={styles.blockInfoMobileLineBreak} />
          <span css={styles.blockInfoNumber}>{currentBlockNumber}</span>
        </Typography>
      )}

      <div css={styles.links}>
        <a
          css={styles.link}
          href={generateBscScanUrl(TOKENS.xvs.address, 'token')}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="venus" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={VENUS_MEDIUM_URL} target="_blank" rel="noreferrer">
          <Icon name="medium" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={VENUS_DISCORD_URL} target="_blank" rel="noreferrer">
          <Icon name="discord" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={VENUS_TWITTER_URL} target="_blank" rel="noreferrer">
          <Icon name="twitter" color={styles.theme.palette.text.primary} size="12px" />
        </a>

        <a css={styles.link} href={VENUS_GITHUB_URL} target="_blank" rel="noreferrer">
          <Icon name="github" color={styles.theme.palette.text.primary} size="12px" />
        </a>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { data: getBlockNumberData } = useGetBlockNumber();

  return <FooterUi currentBlockNumber={getBlockNumberData?.blockNumber} />;
};

export default Footer;
