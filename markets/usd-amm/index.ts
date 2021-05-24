import {
  MOCK_CHAINLINK_AGGREGATORS_USD_CURVE_AMM_PRICES,
  ZERO_ADDRESS,
} from '../../helpers/constants';
import { eEthereumNetwork, IUsdAmmConfiguration } from '../../helpers/types';

import {
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyWETH,
  strategyWBTC,
  strategySUSD,
  strategyCurveLP,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AmmConfig: IUsdAmmConfiguration = {
  MarketId: 'Aave AMM market',
  ProviderId: 3,
  ATokenNamePrefix: 'Aave USD AMM Market',
  StableDebtTokenNamePrefix: 'Aave USD AMM Market stable debt',
  VariableDebtTokenNamePrefix: 'Aave USD AMM Market variable debt',
  SymbolPrefix: 'usdAmm',
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '10000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_USD_CURVE_AMM_PRICES,
    },
  },
  LendingRateOracleRatesCommon: {},
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderlyMain]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.buidlerevm]: undefined,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderlyMain]: undefined,
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eEthereumNetwork.kovan]: '0x1E40B561EC587036f9789aF83236f057D1ed2A90',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '0x52D306e36E3B6B02c153d0266ff0f85d18BCD413',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderlyMain]: '0x52D306e36E3B6B02c153d0266ff0f85d18BCD413',
  },
  ProviderRegistryOwner: {
    [eEthereumNetwork.kovan]: '0x85e4A467343c0dc4aDAB74Af84448D9c45D8ae6F',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '0xB9062896ec3A615a4e4444DF183F0531a77218AE',
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.tenderlyMain]: '0xB9062896ec3A615a4e4444DF183F0531a77218AE',
  },
  LendingRateOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '', // Updated to match Kovan deployment
    [eEthereumNetwork.kovan]: '0xd00Bd28FAdDa9d5658D1D4e0c151973146C7A533', //'0xE48F95873855bfd97BF89572DDf5cBC44D9c545b'
    [eEthereumNetwork.ropsten]: '0x05dcca805a6562c1bdd0423768754acb6993241b',
    [eEthereumNetwork.main]: '', //'0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D',  // Need to re-deploy because of onlyOwner
    [eEthereumNetwork.tenderlyMain]: '0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D',
  },
  LendingPoolCollateralManager: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x9269b6453d0d75370c4c85e5a42977a53efdb72a',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '0xbd4765210d4167CE2A5b87280D9E8Ee316D5EC7C',
    [eEthereumNetwork.tenderlyMain]: '0xbd4765210d4167CE2A5b87280D9E8Ee316D5EC7C',
  },
  LendingPoolConfigurator: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x36eB31800aa67a9c50df1d56EE01981A6E14Cce5',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  LendingPool: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x78142De7a1930412E9e50dEB3b80dB284c2dFa3A',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  WethGateway: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x1c4A1cC35A477aa1cF35DF671d93ACc04d8131E0',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  TokenDistributor: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.kovan]: '0x971efe90088f21dc6a36f610ffed77fc19710708',
    [eEthereumNetwork.ropsten]: '0xeba2ea67942b8250d870b12750b594696d02fc9c',
    [eEthereumNetwork.main]: '0xe3d9988f676457123c5fd01297605efdd0cba1ae',
    [eEthereumNetwork.tenderlyMain]: '0xe3d9988f676457123c5fd01297605efdd0cba1ae',
  },
  AaveOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x8fb777d67e9945e2c01936e319057f9d41d559e6', // Need to re-deploy because of onlyOwner
    [eEthereumNetwork.ropsten]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: '', //'0xA50ba011c48153De246E5192C8f9258A2ba79Ca9',  // Need to re-deploy because of onlyOwner
    [eEthereumNetwork.tenderlyMain]: '0xA50ba011c48153De246E5192C8f9258A2ba79Ca9',
  },
  FallbackOracle: {
    [eEthereumNetwork.coverage]: '',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.buidlerevm]: '',
    [eEthereumNetwork.kovan]: '0x50913E8E1c650E790F8a1E741FF9B1B1bB251dfe',
    [eEthereumNetwork.ropsten]: '0xAD1a978cdbb8175b2eaeC47B01404f8AEC5f4F0d',
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderlyMain]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.main]: {
      WETH: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      DAI: ZERO_ADDRESS,
      SUSD: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      '3Crv': ZERO_ADDRESS,
      'cDAI+cUSDC': ZERO_ADDRESS,
      a3CRV: ZERO_ADDRESS,
      saCRV: ZERO_ADDRESS,
    },
    [eEthereumNetwork.tenderlyMain]: {
      WETH: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      DAI: ZERO_ADDRESS,
      SUSD: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      '3Crv': ZERO_ADDRESS,
      'cDAI+cUSDC': ZERO_ADDRESS,
      a3CRV: ZERO_ADDRESS,
      saCRV: ZERO_ADDRESS,
    },
  },
  ATokenDomainSeparator: {
    [eEthereumNetwork.coverage]:
      '0x95b73a72c6ecf4ccbbba5178800023260bad8e75cdccdb8e4827a2977a37c820',
    [eEthereumNetwork.hardhat]:
      '0xbae024d959c6a022dc5ed37294cd39c141034b2ae5f02a955cce75c930a81bf5',
    [eEthereumNetwork.buidlerevm]:
      '0xbae024d959c6a022dc5ed37294cd39c141034b2ae5f02a955cce75c930a81bf5',
    [eEthereumNetwork.kovan]: '',
    [eEthereumNetwork.ropsten]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderlyMain]: '',
  },
  WETH: {
    [eEthereumNetwork.coverage]: '', // deployed in local evm
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.buidlerevm]: '', // deployed in local evm
    [eEthereumNetwork.kovan]: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    [eEthereumNetwork.ropsten]: '0xc778417e063141139fce010982780140aa0cd5ab',
    [eEthereumNetwork.main]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.tenderlyMain]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  WrappedNativeToken: {
    [eEthereumNetwork.coverage]: '', // deployed in local evm
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.buidlerevm]: '', // deployed in local evm
    [eEthereumNetwork.kovan]: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    [eEthereumNetwork.ropsten]: '0xc778417e063141139fce010982780140aa0cd5ab',
    [eEthereumNetwork.main]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.tenderlyMain]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.coverage]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.hardhat]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.buidlerevm]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.kovan]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.ropsten]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.main]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.tenderlyMain]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
  },
  IncentivesController: {
    [eEthereumNetwork.coverage]: ZERO_ADDRESS,
    [eEthereumNetwork.hardhat]: ZERO_ADDRESS,
    [eEthereumNetwork.buidlerevm]: ZERO_ADDRESS,
    [eEthereumNetwork.kovan]: ZERO_ADDRESS,
    [eEthereumNetwork.ropsten]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderlyMain]: ZERO_ADDRESS,
  },
  ReservesConfig: {
    WETH: strategyWETH,
    WBTC: strategyWBTC,
    DAI: strategyDAI,
    SUSD: strategySUSD,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    '3Crv': strategyCurveLP,
    'cDAI+cUSDC': strategyCurveLP,
    a3CRV: strategyCurveLP,
    saCRV: strategyCurveLP,
  },
  ReserveAssets: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.main]: {
      WETH: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      DAI: ZERO_ADDRESS,
      SUSD: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      '3Crv': ZERO_ADDRESS,
      'cDAI+cUSDC': ZERO_ADDRESS,
      a3CRV: ZERO_ADDRESS,
      saCRV: ZERO_ADDRESS,
    },
    [eEthereumNetwork.tenderlyMain]: {
      WETH: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      DAI: ZERO_ADDRESS,
      SUSD: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      '3Crv': ZERO_ADDRESS,
      'cDAI+cUSDC': ZERO_ADDRESS,
      a3CRV: ZERO_ADDRESS,
      saCRV: ZERO_ADDRESS,
    },
  },
};

export default AmmConfig;
