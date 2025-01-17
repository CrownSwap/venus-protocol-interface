import BigNumber from 'bignumber.js';
import { MutationObserverOptions, useMutation, useQuery } from 'react-query';

import fakeAddress from '__mocks__/models/address';
import { assetData } from '__mocks__/models/asset';
import fakeContractReceipt from '__mocks__/models/contractReceipt';
import { poolData } from '__mocks__/models/pools';
import proposals from '__mocks__/models/proposals';
import voters from '__mocks__/models/voters';
import FunctionKey from 'constants/functionKey';

import { GetBalanceOfInput } from '../queries/getBalanceOf';

// Queries
export const getBlockNumber = jest.fn();
export const useGetBlockNumber = () => useQuery(FunctionKey.GET_BLOCK_NUMBER, getBlockNumber);

export const getVaiCalculateRepayAmount = jest.fn();
export const useGetVaiCalculateRepayAmount = () =>
  useQuery(FunctionKey.GET_VAI_CALCULATE_REPAY_AMOUNT, getVaiCalculateRepayAmount);

export const getVaiRepayAmountWithInterests = jest.fn();
export const useGetVaiRepayAmountWithInterests = () =>
  useQuery(FunctionKey.GET_VAI_REPAY_AMOUNT_WITH_INTERESTS, getVaiRepayAmountWithInterests);

export const getVaiTreasuryPercentage = jest.fn();
export const useGetVaiTreasuryPercentage = () =>
  useQuery(FunctionKey.GET_VAI_TREASURY_PERCENTAGE, getVaiTreasuryPercentage);

export const getMainAssetsInAccount = jest.fn();
export const useGetMainAssetsInAccount = () =>
  useQuery(FunctionKey.GET_MAIN_ASSETS_IN_ACCOUNT, getMainAssetsInAccount);

export const getHypotheticalAccountLiquidity = jest.fn();

export const getMainMarkets = jest.fn();
export const useGetMainMarkets = () => useQuery(FunctionKey.GET_MAIN_MARKETS, getMainMarkets);

export const getMarketHistory = jest.fn();
export const useGetMarketHistory = () => useQuery(FunctionKey.GET_MARKET_HISTORY, getMarketHistory);

export const getVTokenBalancesAll = jest.fn();
export const useGetVTokenBalancesAll = jest.fn(() =>
  useQuery(FunctionKey.GET_V_TOKEN_BALANCES_ALL, getVTokenBalancesAll),
);

export const getMintedVai = jest.fn();
export const useGetMintedVai = () => useQuery(FunctionKey.GET_MINTED_VAI, getMintedVai);

export const getMintableVai = jest.fn();
export const useGetMintableVai = () => useQuery(FunctionKey.GET_MINTABLE_VAI, getMintableVai);

export const getPendingRewards = jest.fn();
export const useGetPendingRewards = () =>
  useQuery(FunctionKey.GET_PENDING_REWARDS, getPendingRewards);

export const getVTokenBalanceOf = jest.fn();
export const useGetVTokenBalanceOf = () =>
  useQuery(FunctionKey.GET_V_TOKEN_BALANCE, getVTokenBalanceOf);

export const getAllowance = jest.fn();
export const useGetAllowance = () => useQuery(FunctionKey.GET_TOKEN_ALLOWANCE, getAllowance);

export const getBalanceOf = jest.fn();
export const useGetBalanceOf = (input: Omit<GetBalanceOfInput, 'signer'>) =>
  useQuery(
    [
      FunctionKey.GET_BALANCE_OF,
      {
        accountAddress: input.accountAddress,
        tokenAddress: input.token.address,
      },
    ],
    () => getBalanceOf(input),
  );

export const getTokenBalances = jest.fn();
export const useGetTokenBalances = () => useQuery(FunctionKey.GET_TOKEN_BALANCES, getTokenBalances);

export const getVrtConversionEndTime = jest.fn();
export const useGetVrtConversionEndTime = () =>
  useQuery(FunctionKey.GET_VRT_CONVERSION_END_TIME, getVrtConversionEndTime);

export const getVrtConversionRatio = jest.fn();
export const useGetVrtConversionRatio = () =>
  useQuery(FunctionKey.GET_VRT_CONVERSION_RATIO, getVrtConversionRatio);

export const getXvsWithdrawableAmount = jest.fn();
export const useGetXvsWithdrawableAmount = () =>
  useQuery(FunctionKey.GET_XVS_WITHDRAWABLE_AMOUNT, getXvsWithdrawableAmount);

export const getVTokenInterestRateModel = jest.fn();
export const useGetVTokenInterestRateModel = () =>
  useQuery(FunctionKey.GET_V_TOKEN_INTEREST_RATE_MODEL, getVTokenInterestRateModel);

export const getVTokenApySimulations = jest.fn();
export const useGetVTokenApySimulations = () =>
  useQuery(FunctionKey.GET_V_TOKEN_APY_SIMULATIONS, getVTokenApySimulations);

export const getVTokenSupplyRate = jest.fn();

export const getVTokenBorrowRate = jest.fn();

export const getVenusVaiVaultDailyRate = jest.fn();
export const useGetVenusVaiVaultDailyRate = () =>
  useQuery(FunctionKey.GET_VENUS_VAI_VAULT_DAILY_RATE, getVenusVaiVaultDailyRate);

export const getTransactions = jest.fn();
export const useGetTransactions = jest.fn(() =>
  useQuery([FunctionKey.GET_TRANSACTIONS, {}], getTransactions),
);

export const getXvsVaultPoolCount = jest.fn();
export const useGetXvsVaultPoolCount = () =>
  useQuery(FunctionKey.GET_XVS_VAULT_POOLS_COUNT, getXvsVaultPoolCount);

export const getXvsVaultPendingWithdrawalsFromBeforeUpgrade = jest.fn();
export const useGetXvsVaultPendingWithdrawalsFromBeforeUpgrade = () =>
  useQuery(
    FunctionKey.GET_XVS_VAULT_PENDING_WITHDRAWALS_FROM_BEFORE_UPGRADE,
    getXvsVaultPendingWithdrawalsFromBeforeUpgrade,
  );

export const useGetTreasuryTotals = jest.fn();

export const useGetMainPoolTotalXvsDistributed = jest.fn();

export const useGetIsolatedPools = jest.fn(() => ({
  isLoading: false,
  data: {
    pools: poolData.slice(1),
  },
}));

export const useGetMainPool = jest.fn(() => ({
  isLoading: false,
  data: {
    pool: poolData[0],
  },
}));

export const useGetPool = jest.fn(() => ({
  isLoading: false,
  data: {
    pool: poolData[0],
  },
}));

export const useGetPools = jest.fn(() => ({
  isLoading: false,
  data: {
    pools: poolData,
  },
}));

export const useGetMainAssets = jest.fn(() => ({
  isLoading: false,
  data: {
    assets: assetData,
  },
}));

export const useGetAsset = jest.fn(() => ({
  isLoading: false,
  data: {
    assets: assetData[0],
  },
}));

export const getXvsVaultPoolInfo = jest.fn();
export const useGetXvsVaultPoolInfo = () =>
  useQuery(FunctionKey.GET_XVS_VAULT_POOL_INFOS, getXvsVaultPoolInfo);

export const getXvsVaultRewardPerBlock = jest.fn();
export const useGetXvsVaultRewardPerBlock = () =>
  useQuery(FunctionKey.GET_XVS_VAULT_REWARD_PER_BLOCK, getXvsVaultRewardPerBlock);

export const getXvsVaultTotalAllocationPoints = jest.fn();
export const useGetXvsVaultTotalAllocationPoints = () =>
  useQuery(FunctionKey.GET_XVS_VAULT_TOTAL_ALLOCATION_POINTS, getXvsVaultTotalAllocationPoints);

export const getXvsVaultLockedDeposits = jest.fn();
export const useGetXvsVaultLockedDeposits = () =>
  useQuery(FunctionKey.GET_XVS_VAULT_WITHDRAWAL_REQUESTS, getXvsVaultLockedDeposits);

export const getXvsVaultUserInfo = jest.fn();
export const useGetXvsVaultUserInfo = () =>
  useQuery(FunctionKey.GET_XVS_VAULT_USER_INFO, getXvsVaultUserInfo);

export const getCurrentVotes = jest.fn(() => new BigNumber(100000000000000000));
export const useGetCurrentVotes = () => useQuery(FunctionKey.GET_CURRENT_VOTES, getCurrentVotes);

export const getProposals = jest.fn();
export const useGetProposals = () => useQuery(FunctionKey.GET_PROPOSALS, getProposals);

export const getProposal = jest.fn(() => proposals[0]);
export const useGetProposal = () => useQuery(FunctionKey.GET_PROPOSAL, getProposal);

export const getVoters = jest.fn(() => voters);
export const useGetVoters = jest.fn(() => useQuery(FunctionKey.GET_VOTERS, getVoters));

export const getVoterHistory = jest.fn();
export const useGetVoterHistory = () => useQuery(FunctionKey.GET_VOTER_HISTORY, getVoterHistory);

export const getVoterDetails = jest.fn();
export const useGetVoterDetails = () => useQuery(FunctionKey.GET_VOTER_DETAILS, getVoterDetails);

export const getVoteReceipt = jest.fn();
export const useGetVoteReceipt = () => useQuery(FunctionKey.GET_VOTE_RECEIPT, getVoteReceipt);

export const useGetVaults = jest.fn();

export const getVaiVaultUserInfo = jest.fn();
export const useGetVaiVaultUserInfo = () =>
  useQuery([FunctionKey.GET_VAI_VAULT_USER_INFO, fakeAddress], getVaiVaultUserInfo);

export const useGetVestingVaults = jest.fn();

export const getVoteDelegateAddress = jest.fn();
export const useGetVoteDelegateAddress = () =>
  useQuery([FunctionKey.GET_VOTE_DELEGATE_ADDRESS, fakeAddress], getVoteDelegateAddress);

export const getLatestProposalIdByProposer = jest.fn();
export const useGetLatestProposalIdByProposer = () =>
  useQuery(
    [FunctionKey.GET_LATEST_PROPOSAL_ID_BY_PROPOSER, fakeAddress],
    getLatestProposalIdByProposer,
  );
export const useGetActiveProposal = jest.fn();

export const getVrtVaultInterestRatePerBlock = jest.fn();
export const useGetVrtVaultInterestRatePerBlock = () =>
  useQuery(FunctionKey.GET_VRT_VAULT_INTEREST_RATE_PER_BLOCK, getVrtVaultInterestRatePerBlock);

export const getVrtVaultUserInfo = jest.fn();
export const useGetVrtVaultUserInfo = () =>
  useQuery([FunctionKey.GET_VRT_VAULT_USER_INFO, fakeAddress], getVrtVaultUserInfo);

export const getVoterAccounts = jest.fn();
export const useGetVoterAccounts = () => useQuery(FunctionKey.GET_VOTER_ACCOUNTS, getVoterAccounts);

export const getProposalThreshold = jest.fn(() => new BigNumber('10000000000000000000000'));
export const useGetProposalThreshold = () =>
  useQuery(FunctionKey.GET_PROPOSAL_THRESHOLD, getProposalThreshold);

export const getProposalState = jest.fn();
export const useGetProposalState = () => useQuery(FunctionKey.GET_PROPOSAL_STATE, getProposalState);

export const getProposalEta = jest.fn();
export const useGetProposalEta = () => useQuery(FunctionKey.GET_PROPOSAL_ETA, getProposalEta);

export const getPancakeSwapPairs = jest.fn();
export const useGetPancakeSwapPairs = () =>
  useQuery(FunctionKey.GET_PANCAKE_SWAP_PAIRS, getPancakeSwapPairs);

export const getVaiRepayApy = jest.fn();
export const useGetVaiRepayApy = () => useQuery(FunctionKey.GET_VAI_REPAY_APY, getVaiRepayApy);

// Mutations
export const approveToken = jest.fn();
export const useApproveToken = (_variables: never, options?: MutationObserverOptions) =>
  useMutation(FunctionKey.APPROVE_TOKEN, approveToken, options);

export const convertVrt = jest.fn();
export const useConvertVrt = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CONVERT_VRT, convertVrt, options);

export const mintVai = jest.fn();
export const useMintVai = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.MINT_VAI, mintVai, options);

export const repayVai = jest.fn();
export const useRepayVai = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.REPAY_VAI, repayVai, options);

export const enterMarkets = jest.fn();
export const useEnterMarkets = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.ENTER_MARKETS, enterMarkets, options);

export const exitMarket = jest.fn();
export const useExitMarket = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.EXIT_MARKET, exitMarket, options);

export const repay = jest.fn();
export const useRepay = (_variables: never, options?: MutationObserverOptions) =>
  useMutation(FunctionKey.REPAY, repay, options);

export const supply = jest.fn();
export const useSupply = (_variables: never, options?: MutationObserverOptions) =>
  useMutation(FunctionKey.SUPPLY, supply, options);

export const redeem = jest.fn();
export const useRedeem = (_variables: never, options?: MutationObserverOptions) =>
  useMutation(FunctionKey.REDEEM, redeem, options);

export const redeemUnderlying = jest.fn();
export const useRedeemUnderlying = (_variables: never, options?: MutationObserverOptions) =>
  useMutation(FunctionKey.REDEEM, redeemUnderlying, options);

export const borrow = jest.fn();
export const useBorrow = (_variables: never, options?: MutationObserverOptions) =>
  useMutation(FunctionKey.BORROW, borrow, options);

export const withdrawXvs = jest.fn();
export const useWithdrawXvs = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.WITHDRAW_XVS, withdrawXvs, options);

export const setVoteDelegate = jest.fn();
export const useSetVoteDelegate = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.SET_VOTE_DELEGATE, setVoteDelegate, options);

export const createProposal = jest.fn();
export const useCreateProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CREATE_PROPOSAL, createProposal, options);

export const cancelProposal = jest.fn(async () => fakeContractReceipt);
export const useCancelProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CANCEL_PROPOSAL, cancelProposal, options);

export const executeProposal = jest.fn(async () => fakeContractReceipt);
export const useExecuteProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.EXECUTE_PROPOSAL, executeProposal, options);

export const queueProposal = jest.fn(async () => fakeContractReceipt);
export const useQueueProposal = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.QUEUE_PROPOSAL, queueProposal, options);

export const stakeInXvsVault = jest.fn();
export const useStakeInXvsVault = (_variables: never, options?: MutationObserverOptions) =>
  useMutation(FunctionKey.STAKE_IN_XVS_VAULT, stakeInXvsVault, options);

export const stakeInVaiVault = jest.fn();
export const useStakeInVaiVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.STAKE_IN_VAI_VAULT, stakeInVaiVault, options);

export const stakeInVrtVault = jest.fn();
export const useStakeInVrtVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.STAKE_IN_VRT_VAULT, stakeInVrtVault, options);

export const castVote = jest.fn();
export const useCastVote = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CAST_VOTE, castVote, options);

export const castVoteWithReason = jest.fn();
export const useCastVoteWithReason = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CAST_VOTE_WITH_REASON, castVoteWithReason, options);

export const withdrawFromVaiVault = jest.fn();
export const useWithdrawFromVaiVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.WITHDRAW_FROM_VAI_VAULT, withdrawFromVaiVault, options);

export const withdrawFromVrtVault = jest.fn();
export const useWithdrawFromVrtVault = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.WITHDRAW_FROM_VRT_VAULT, withdrawFromVrtVault, options);

export const requestWithdrawalFromXvsVault = jest.fn();
export const useRequestWithdrawalFromXvsVault = (options?: MutationObserverOptions) =>
  useMutation(
    FunctionKey.REQUEST_WITHDRAWAL_FROM_XVS_VAULT,
    requestWithdrawalFromXvsVault,
    options,
  );

export const executeWithdrawalFromXvsVault = jest.fn();
export const useExecuteWithdrawalFromXvsVault = (
  _variables: never,
  options?: MutationObserverOptions,
) =>
  useMutation(
    FunctionKey.EXECUTE_WITHDRAWAL_FROM_XVS_VAULT,
    executeWithdrawalFromXvsVault,
    options,
  );

export const swapTokens = jest.fn();
export const useSwapTokens = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.SWAP_TOKENS, swapTokens, options);

export const claimRewards = jest.fn();
export const useClaimRewards = (options?: MutationObserverOptions) =>
  useMutation(FunctionKey.CLAIM_REWARDS, claimRewards, options);

export const stake = jest.fn();
export const useStakeInVault = () => ({
  stake,
  isLoading: false,
});
