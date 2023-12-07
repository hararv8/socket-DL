import { ChainSlug } from "./chainSlug";
import { HardhatChainName } from "./hardhatChainName";

export const ChainSlugToKey = {
  [ChainSlug.ARBITRUM]: HardhatChainName.ARBITRUM,
  [ChainSlug.ARBITRUM_GOERLI]: HardhatChainName.ARBITRUM_GOERLI,
  [ChainSlug.ARBITRUM_SEPOLIA]: HardhatChainName.ARBITRUM_SEPOLIA,
  [ChainSlug.OPTIMISM]: HardhatChainName.OPTIMISM,
  [ChainSlug.OPTIMISM_GOERLI]: HardhatChainName.OPTIMISM_GOERLI,
  [ChainSlug.OPTIMISM_SEPOLIA]: HardhatChainName.OPTIMISM_SEPOLIA,
  [ChainSlug.BSC]: HardhatChainName.BSC,
  [ChainSlug.BSC_TESTNET]: HardhatChainName.BSC_TESTNET,
  [ChainSlug.MAINNET]: HardhatChainName.MAINNET,
  [ChainSlug.GOERLI]: HardhatChainName.GOERLI,
  [ChainSlug.SEPOLIA]: HardhatChainName.SEPOLIA,
  [ChainSlug.POLYGON_MAINNET]: HardhatChainName.POLYGON_MAINNET,
  [ChainSlug.POLYGON_MUMBAI]: HardhatChainName.POLYGON_MUMBAI,
  [ChainSlug.AEVO_TESTNET]: HardhatChainName.AEVO_TESTNET,
  [ChainSlug.AEVO]: HardhatChainName.AEVO,
  [ChainSlug.HARDHAT]: HardhatChainName.HARDHAT,
  [ChainSlug.AVALANCHE]: HardhatChainName.AVALANCHE,
  [ChainSlug.LYRA_TESTNET]: HardhatChainName.LYRA_TESTNET,
  [ChainSlug.LYRA]: HardhatChainName.LYRA,
  [ChainSlug.XAI_TESTNET]: HardhatChainName.XAI_TESTNET,
  [ChainSlug.SX_NETWORK_TESTNET]: HardhatChainName.SX_NETWORK_TESTNET,
  [ChainSlug.MODE_TESTNET]: HardhatChainName.MODE_TESTNET,
  [ChainSlug.VICTION_TESTNET]: HardhatChainName.VICTION_TESTNET,
  [ChainSlug.CDK_TESTNET]: HardhatChainName.CDK_TESTNET,
};
