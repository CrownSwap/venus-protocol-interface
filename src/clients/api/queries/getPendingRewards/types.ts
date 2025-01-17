import BigNumber from 'bignumber.js';
import { Multicall } from 'ethereum-multicall';
import { Token } from 'types';

export interface GetPendingRewardGroupsInput {
  mainPoolComptrollerAddress: string;
  isolatedPoolComptrollerAddresses: string[];
  xvsVestingVaultPoolCount: number;
  multicall: Multicall;
  accountAddress: string;
}

export type GetPendingRewardGroupsOutput = {
  pendingRewardGroups: PendingRewardGroup[];
};

export interface IsolatedPoolPendingReward {
  rewardToken: Token;
  rewardAmountWei: BigNumber;
  vTokenAddressesWithPendingReward: string[];
  rewardsDistributorAddress: string;
}

export interface IsolatedPoolPendingRewardGroup {
  type: 'isolatedPool';
  comptrollerAddress: string;
  pendingRewards: IsolatedPoolPendingReward[];
}

export interface MainPoolPendingRewardGroup {
  type: 'mainPool';
  comptrollerAddress: string;
  rewardToken: Token;
  rewardAmountWei: BigNumber;
  vTokenAddressesWithPendingReward: string[];
}

export interface VaultPendingRewardGroup {
  type: 'vault';
  stakedToken: Token;
  rewardToken: Token;
  rewardAmountWei: BigNumber;
}

export interface XvsVestingVaultPendingRewardGroup {
  type: 'xvsVestingVault';
  poolIndex: number;
  rewardToken: Token;
  rewardAmountWei: BigNumber;
}

export type PendingRewardGroup =
  | MainPoolPendingRewardGroup
  | IsolatedPoolPendingRewardGroup
  | VaultPendingRewardGroup
  | XvsVestingVaultPendingRewardGroup;
