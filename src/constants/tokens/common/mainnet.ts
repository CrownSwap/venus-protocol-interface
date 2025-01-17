import { Token } from 'types';

import aave from 'assets/img/tokens/aave.svg';
import ada from 'assets/img/tokens/ada.svg';
import bch from 'assets/img/tokens/bch.svg';
import beth from 'assets/img/tokens/beth.svg';
import bnb from 'assets/img/tokens/bnb.svg';
import btcb from 'assets/img/tokens/btcb.svg';
import busd from 'assets/img/tokens/busd.svg';
import cake from 'assets/img/tokens/cake.svg';
import dai from 'assets/img/tokens/dai.svg';
import doge from 'assets/img/tokens/doge.svg';
import dot from 'assets/img/tokens/dot.svg';
import eth from 'assets/img/tokens/eth.svg';
import fil from 'assets/img/tokens/fil.svg';
import link from 'assets/img/tokens/link.svg';
import ltc from 'assets/img/tokens/ltc.svg';
import luna from 'assets/img/tokens/luna.svg';
import matic from 'assets/img/tokens/matic.svg';
import sxp from 'assets/img/tokens/sxp.svg';
import trx from 'assets/img/tokens/trx.svg';
import tusd from 'assets/img/tokens/tusd.svg';
import usdc from 'assets/img/tokens/usdc.svg';
import usdt from 'assets/img/tokens/usdt.svg';
import ust from 'assets/img/tokens/ust.svg';
import vai from 'assets/img/tokens/vai.svg';
import vrt from 'assets/img/tokens/vrt.svg';
import xrp from 'assets/img/tokens/xrp.svg';
import xvs from 'assets/img/tokens/xvs.svg';

export const MAINNET_TOKENS = {
  bnb: {
    address: '',
    decimals: 18,
    symbol: 'BNB',
    asset: bnb,
    isNative: true,
  } as Token,
  sxp: {
    address: '0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A',
    decimals: 18,
    symbol: 'SXP',
    asset: sxp,
  } as Token,
  usdc: {
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    decimals: 18,
    symbol: 'USDC',
    asset: usdc,
  } as Token,
  usdt: {
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimals: 18,
    symbol: 'USDT',
    asset: usdt,
  } as Token,
  busd: {
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    decimals: 18,
    symbol: 'BUSD',
    asset: busd,
  } as Token,
  xvs: {
    address: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    decimals: 18,
    symbol: 'XVS',
    asset: xvs,
  } as Token,
  btcb: {
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    decimals: 18,
    symbol: 'BTCB',
    asset: btcb,
  } as Token,
  eth: {
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    decimals: 18,
    symbol: 'ETH',
    asset: eth,
  } as Token,
  ltc: {
    address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    decimals: 18,
    symbol: 'LTC',
    asset: ltc,
  } as Token,
  xrp: {
    address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
    decimals: 18,
    symbol: 'XRP',
    asset: xrp,
  } as Token,
  bch: {
    address: '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf',
    decimals: 18,
    symbol: 'BCH',
    asset: bch,
  } as Token,
  dot: {
    address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    decimals: 18,
    symbol: 'DOT',
    asset: dot,
  } as Token,
  link: {
    address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    decimals: 18,
    symbol: 'LINK',
    asset: link,
  } as Token,
  dai: {
    address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    decimals: 18,
    symbol: 'DAI',
    asset: dai,
  } as Token,
  fil: {
    address: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
    decimals: 18,
    symbol: 'FIL',
    asset: fil,
  } as Token,
  beth: {
    address: '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
    decimals: 18,
    symbol: 'BETH',
    asset: beth,
  } as Token,
  ada: {
    address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    decimals: 18,
    symbol: 'ADA',
    asset: ada,
  } as Token,
  doge: {
    address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    decimals: 8,
    symbol: 'DOGE',
    asset: doge,
  } as Token,
  matic: {
    address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    decimals: 18,
    symbol: 'MATIC',
    asset: matic,
  } as Token,
  cake: {
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    decimals: 18,
    symbol: 'CAKE',
    asset: cake,
  } as Token,
  aave: {
    address: '0xfb6115445Bff7b52FeB98650C87f44907E58f802',
    decimals: 18,
    symbol: 'AAVE',
    asset: aave,
  } as Token,
  tusd: {
    address: '0x14016e85a25aeb13065688cafb43044c2ef86784',
    decimals: 18,
    symbol: 'TUSD',
    asset: tusd,
  } as Token,
  trx: {
    address: '0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3',
    decimals: 6,
    symbol: 'TRX',
    asset: trx,
  } as Token,
  trxold: {
    address: '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B',
    decimals: 18,
    symbol: 'TRXOLD',
    asset: trx,
  } as Token,
  vai: {
    address: '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7',
    decimals: 18,
    symbol: 'VAI',
    asset: vai,
  } as Token,
  vrt: {
    address: '0x5f84ce30dc3cf7909101c69086c50de191895883',
    decimals: 18,
    symbol: 'VRT',
    asset: vrt,
  } as Token,
  ust: {
    address: '0x3d4350cD54aeF9f9b2C29435e0fa809957B3F30a',
    decimals: 6,
    symbol: 'UST',
    asset: ust,
  } as Token,
  luna: {
    address: '0x156ab3346823B651294766e23e6Cf87254d68962',
    decimals: 6,
    symbol: 'LUNA',
    asset: luna,
  } as Token,
};
