import { connection } from "../db_connection.js";
import Web3 from "web3";

export const subscribeEvent = async (url, c_addr) => {
    // flexir 컨트랙트 세팅
    const web3 = new Web3(url);

    var c_abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                }
            ],
            "name": "cancelOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                }
            ],
            "name": "createPoints",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint128",
                    "name": "value",
                    "type": "uint128"
                },
                {
                    "internalType": "bool",
                    "name": "isBuyerSelling",
                    "type": "bool"
                }
            ],
            "name": "createResaleOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                }
            ],
            "name": "fillOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "exchangeToken",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                },
                {
                    "internalType": "uint128",
                    "name": "value",
                    "type": "uint128"
                },
                {
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "fullMatch",
                    "type": "bool"
                }
            ],
            "name": "newOffer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "enum PointMarket.OrderStatus",
                    "name": "status",
                    "type": "uint8"
                }
            ],
            "name": "CancelOffer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "doer",
                    "type": "address"
                }
            ],
            "name": "CancelOrder",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "refundAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseOffer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "commonId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "FillOffer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "partialOrderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "commonId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                }
            ],
            "name": "FillPartialOffer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                }
            ],
            "name": "FillResaleOffer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "forceCancelOrder",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "commonId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint128",
                    "name": "collateral",
                    "type": "uint128"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "exchangeToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "fullMatch",
                    "type": "bool"
                }
            ],
            "name": "NewCommon",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint128",
                    "name": "collateral",
                    "type": "uint128"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                }
            ],
            "name": "NewOffer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "commonId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                }
            ],
            "name": "NewOrder",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "settleDuration",
                    "type": "uint256"
                }
            ],
            "name": "NewToken",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "tokenAddresses",
                    "type": "address[]"
                },
                {
                    "internalType": "bool",
                    "name": "isAccepted",
                    "type": "bool"
                }
            ],
            "name": "setAcceptedTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "hash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "doer",
                    "type": "address"
                }
            ],
            "name": "Settle2Steps",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "settleCancelled",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "SettleCancelled",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "settleFilled",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "SettleFilled",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                }
            ],
            "name": "tokenForceCancelSettlePhase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                }
            ],
            "name": "TokenForceCancelSettlePhase",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                }
            ],
            "name": "tokenToggleActivation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint152",
                    "name": "settleRate",
                    "type": "uint152"
                }
            ],
            "name": "tokenToSettlePhase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "settleRate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "settleTime",
                    "type": "uint256"
                }
            ],
            "name": "TokenToSettlePhase",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address[]",
                    "name": "tokens",
                    "type": "address[]"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isAccepted",
                    "type": "bool"
                }
            ],
            "name": "UpdateAcceptedTokens",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "oldFeeWallet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "oldFeeSettle",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "oldFeeRefund",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "oldPledgeRate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newFeeWallet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newFeeSettle",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newFeeRefund",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newPledgeRate",
                    "type": "uint256"
                }
            ],
            "name": "UpdateConfig",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint48",
                    "name": "oldValue",
                    "type": "uint48"
                },
                {
                    "indexed": false,
                    "internalType": "uint48",
                    "name": "newValue",
                    "type": "uint48"
                }
            ],
            "name": "UpdateTokenSettleDuration",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "enum PointMarket.TokenStatus",
                    "name": "oldValue",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "enum PointMarket.TokenStatus",
                    "name": "newValue",
                    "type": "uint8"
                }
            ],
            "name": "UpdateTokenStatus",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "feeWallet_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "feeSettle_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint128",
                    "name": "feeRefund_",
                    "type": "uint128"
                },
                {
                    "internalType": "uint128",
                    "name": "pledgeRate_",
                    "type": "uint128"
                }
            ],
            "name": "updateConfig",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "tokenId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint48",
                    "name": "newValue",
                    "type": "uint48"
                }
            ],
            "name": "updateSettleDuration",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "commonId",
                    "type": "uint256"
                }
            ],
            "name": "getCommon",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "tokenId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint128",
                            "name": "collateral",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint64",
                            "name": "amount",
                            "type": "uint64"
                        },
                        {
                            "internalType": "address",
                            "name": "exchangeToken",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "fullMatch",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct PointMarket.OrderCommon",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                }
            ],
            "name": "getCommonByOfferId",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "tokenId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint128",
                            "name": "collateral",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint64",
                            "name": "amount",
                            "type": "uint64"
                        },
                        {
                            "internalType": "address",
                            "name": "exchangeToken",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "fullMatch",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct PointMarket.OrderCommon",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "getCommonByOrderId",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "tokenId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint128",
                            "name": "collateral",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint64",
                            "name": "amount",
                            "type": "uint64"
                        },
                        {
                            "internalType": "address",
                            "name": "exchangeToken",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "fullMatch",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct PointMarket.OrderCommon",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                }
            ],
            "name": "getOffer",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "orderId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint128",
                            "name": "value",
                            "type": "uint128"
                        },
                        {
                            "internalType": "bool",
                            "name": "isBuy",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct PointMarket.Offer",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                }
            ],
            "name": "getOrder",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "commonId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint64",
                            "name": "amount",
                            "type": "uint64"
                        },
                        {
                            "internalType": "enum PointMarket.OrderStatus",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct PointMarket.Order",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "offerId",
                    "type": "uint256"
                }
            ],
            "name": "getOrderByOfferId",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "commonId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint64",
                            "name": "amount",
                            "type": "uint64"
                        },
                        {
                            "internalType": "enum PointMarket.OrderStatus",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct PointMarket.Order",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "oneDay",
            "outputs": [
                {
                    "internalType": "uint48",
                    "name": "",
                    "type": "uint48"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    
    var contract = new web3.eth.Contract(c_abi, c_addr);
    var chainId = 1;

    //NewToken
    contract.events.NewToken().on("data", function (event) {
        const query = "INSERT INTO token (token_id, chain_id, settle_duration) VALUES (?,?,?)";
        connection.query(query, [Number(event.returnValues.tokenId), Number(chainId), Number(event.returnValues.settleDuration)],(err) => {
            if(err){
                console.error("NewToken 저장 중 오류 발생:", err);
            }else{
                console.log("NewToken 저장 성공");
            }
        });
        console.log("NewToken event: ", event);
    });

    //NewCommon
    contract.events.NewCommon().on("data", function (event) {
        const query = `INSERT INTO order_common (common_id, chain_id, token_id, collateral, amount, exchange_token, full_match) VALUES (?,?,?,?,?,?,?)`;
        connection.query(query, [Number(event.returnValues.commonId), Number(chainId), Number(event.returnValues.tokenId), BigInt(event.returnValues.collateral).toString(), BigInt(event.returnValues.amount), event.returnValues.exchangeToken, event.returnValues.fullMatch],(err, result) => {
            if(err){
                console.error("NewCommon 저장 중 오류 발생:", err);
            }else{
                console.log("NewCommon 저장 성공");
            }
        });
        console.log("NewCommon event: ", event);
    });

    //NewOrder
    contract.events.NewOrder().on("data", function (event) {
        //확인 - isbuy여부
        var query = "";
        if(event.returnValues.isBuy){
            query = `INSERT INTO order_buy (order_id, chain_id, common_id, owner, amount, is_buy) VALUES (?,?,?,?,?,?)`;
        }
        else{
            query = `INSERT INTO order_sell (order_id, chain_id, common_id, owner, amount, is_buy) VALUES (?,?,?,?,?,?)`;
        }
        
        connection.query(query, [Number(event.returnValues.orderId), Number(chainId), Number(event.returnValues.commonId), event.returnValues.owner, BigInt(event.returnValues.amount), event.returnValues.isBuy],(err, result) => {
            if(err){
                console.error("NewOrder 저장 중 오류 발생:", err);
            }else{
                console.log("NewOrder 저장 성공");
            }
        });
        console.log("NewOrder event: ", event);
    });

    // NewOffer
    contract.events.NewOffer().on("data", function (event) {
        const query = `INSERT INTO offer (offer_id, chain_id, order_id, value, is_buy) VALUES (?,?,?,?,?)`;
        connection.query(query, [Number(event.returnValues.offerId), Number(chainId), Number(event.returnValues.orderId), BigInt(event.returnValues.collateral).toString(), event.returnValues.isBuy],(err, result) => {
            if(err){
                console.error("NewOffer 저장 중 오류 발생:", err);
            }else{
                console.log("NewOffer 저장 성공");
            }
        });
    });

    //FillPartialOffer
    contract.events.FillPartialOffer().on("data", function (event) {
        const isBuy = event.returnValues.isBuy;

        const query =
            isBuy === true
            ? `
                UPDATE order_buy SET amount = ? WHERE order_id = ? and chain_id = ?
            `
            : `
                UPDATE order_sell SET amount = ? WHERE order_id = ? and chain_id = ?
            `;

        connection.query(query, [BigInt(event.returnValues.amount), Number(event.returnValues.orderId), Number(chainId)],(err) => {
            if(err){
                console.error("FillPartialOffer 중 오류 발생:", err);
            }else{
                console.log("FillPartialOffer 성공");
            }
        });
        console.log("FillPartialOffer event: ", event);
    });

    //FillOffer
    contract.events.FillOffer().on("data", function (event) {
        const isBuy = event.returnValues.isBuy;

        const query =
            isBuy === true
            ? `
                UPDATE order_buy SET status = 1 WHERE order_id = ? and chain_id = ?
            `
            : `
                UPDATE order_sell SET status = 1 WHERE order_id = ? and chain_id = ?
            `;

        connection.query(query, [Number(event.returnValues.orderId), Number(chainId)],(err) => {
            if(err){
                console.error("FillOffer 중 오류 발생:", err);
            }else{
                console.log("FillOffer 성공");
            }
        });
        console.log("FillOffer event: ", event);
    });

    //FillResaleOffer
    contract.events.FillResaleOffer().on("data", function (event) {
        //확인 - 동작되는지
        const isBuy = event.returnValues.isBuy;

        var query =
            "UPDATE offer SET order_id = 0 WHERE offer_id = ? AND chain_id = ? ";
        var query =
            query + isBuy === true
            ? `
                UPDATE order_buy SET owner = ?, status = 1 WHERE order_id = ? and chain_id = ?
            `
            : `
                UPDATE order_sell SET owner = ?, status = 1 WHERE order_id = ? and chain_id = ?
            `;
        
        connection.query(query, [Number(event.returnValues.offerId), Number(chainId), event.returnValues.owner, Number(event.returnValues.orderId), Number(chainId)],(err) => {
            if(err){
                console.error("FillResaleOffer 중 오류 발생:", err);
            }else{
                console.log("FillResaleOffer 성공");
            }
        });
        console.log("FillResaleOffer event: ", event);
    });

    //SettleFilled
    contract.events.SettleFilled().on("data", function (event) {
        //확인 - 동작되는지
        var query = `UPDATE order_buy SET status = 2 WHERE order_id = ? and chain_id = ? `;
        var query =
            query +
            `UPDATE order_sell SET status = 2 WHERE order_id = ? and chain_id = ?`;

        connection.query(query, [Number(event.returnValues.orderId), Number(chainId), Number(event.returnValues.orderId), Number(chainId)],(err) => {
            if(err){
                console.error("SettleFilled 중 오류 발생:", err);
            }else{
                console.log("SettleFilled 성공");
            }
        });
        console.log("SettleFilled event: ", event);
    });

    contract.events.SettleCancelled().on("data", function (event) {
        var query = `UPDATE order_buy SET status = 4 WHERE order_id = ? and chain_id = ? `;
        var query =
            query +
            "UPDATE order_sell SET status = 4 WHERE order_id = ? and chain_id = ?";

        connection.query(query, [Number(event.returnValues.orderId), Number(chainId), Number(event.returnValues.orderId), Number(chainId)],(err) => {
            if(err){
                console.error("SettleCancelled 중 오류 발생:", err);
            }else{
                console.log("SettleCancelled 성공");
            }
        });
        console.log("SettleCancelled event: ", event);
    });

    //CancelOrder
    contract.events.CancelOrder().on("data", function (event) {
        connection.beginTransaction((err) => {
            //order_buy 처리
            const queryBuy = `update order_buy set status = 5 where order_id = ? and chain_id = ?`;
            connection.query(queryBuy, [Number(event.returnValues.orderId), Number(chainId)], (err) => {
                if (err) {
                    //실패 시 롤백
                    return connection.rollback(() => {
                        console.error("CancelOrder order_buy 중 오류 발생 :", err);
                    });
                }

                //order_sell 처리
                const querySell = `update order_sell set status = 5 where order_id = ? and chain_id = ?`;
                connection.query(querySell, [Number(event.returnValues.orderId), Number(chainId)], (err) => {
                    if (err) {
                        // 두 번째 쿼리 실패 시 롤백
                            return connection.rollback(() => {
                            console.error("CancelOrder order_sell 중 오류 발생 :", err);
                        });
                    }

                    connection.commit((err) => {
                        if (err) {
                            //실패 시 롤백
                            return connection.rollback(() => {
                                console.error("커밋 중 오류 발생:", err);
                            });
                        }
                        console.log("CancelOrder 성공");
                    });
                });
            });
        });
    });

    //CancelOffer
    contract.events.CancelOffer().on("data", function (event) {
        const isBuy = event.returnValues.isBuy;

        var query =
            isBuy === true
            ? `
                UPDATE order_buy SET status = ? WHERE order_id = ? and chain_id = ?
            `
            : `
                UPDATE order_sell SET status = ? WHERE order_id = ? and chain_id = ?
            `;

        connection.query(query, [Number(event.returnValues.status), Number(event.returnValues.orderId), Number(chainId)],(err) => {
            if(err){
                console.error("CancelOffer 중 오류 발생:", err);
            }else{
                console.log("CancelOffer 성공");
            }
        });
        console.log("CancelOffer event: ", event);
    });

    //UpdateConfig
    contract.events.UpdateConfig().on("data", function (event) {
        const query = `UPDATE config SET old_fee_wallet = ?, old_fee_settle = ?, old_fee_refund = ?, old_pledge_rate = ?, new_fee_wallet = ?, new_fee_settle = ?, new_fee_refund = ?, new_pledge_rate = ? WHERE config_id = 1 `;
        const date = new Date();
        const modDate = date.toISOString().slice(0, 19).replace('T', ' ');
        connection.query(query, [event.returnValues.oldFeeWallet, event.returnValues.oldFeeSettle, event.returnValues.oldFeeRefund, event.returnValues.oldPledgeRate, event.returnValues.newFeeWallet, event.returnValues.newFeeSettle, event.returnValues.newFeeRefund, event.returnValues.newPledgeRate, modDate],(err) => {
            if(err){
                console.error("UpdateConfig 중 오류 발생:", err);
            }else{
                console.log("UpdateConfig 성공");
            }
        });
        console.log("UpdateConfig event: ", event);
    });

    //TokenToSettlePhase
    contract.events.TokenToSettlePhase().on("data", function (event) {
        const query = `update token set token_addr = ?, settle_rate = ?, settle_time = ?, status = 3 where token_id = ? and chain_id = ?`;

        const date = new Date(Number(event.returnValues.settleTime) * 1000);
        const settleTime = date.toISOString().slice(0, 19).replace('T', ' ');
        connection.query(query, [event.returnValues.token, event.returnValues.settleRate, settleTime, Number(event.returnValues.tokenId), Number(chainId)],(err) => {
            if(err){
                console.error("TokenToSettlePhase 중 오류 발생:", err);
            }else{
                console.log("TokenToSettlePhase 성공");
            }
        });
        console.log("TokenToSettlePhase event: ", event);
    });

    //UpdateTokenStatus
    contract.events.UpdateTokenStatus().on("data", function (event) {
        const query = `update token set status = ? where token_id = ? and chain_id = ?`;
        connection.query(query, [Number(event.returnValues.newValue), Number(event.returnValues.tokenId), Number(chainId)],(err) => {
            if(err){
                console.error("UpdateTokenStatus 중 오류 발생:", err);
            }else{
                console.log("UpdateTokenStatus 성공");
            }
        });
        console.log("UpdateTokenStatus event: ", event);
    });

    //TokenForceCancelSettlePhase
    contract.events.TokenForceCancelSettlePhase().on("data", function (event) {
        const query = `update token set status = 2 where token_id = ? and chain_id = ?`;
        connection.query(query, [Number(event.returnValues.tokenId), Number(chainId)],(err) => {
            if(err){
                console.error("TokenForceCancelSettlePhase 중 오류 발생:", err);
            }else{
                console.log("TokenForceCancelSettlePhase 성공");
            }
        });
        console.log("TokenForceCancelSettlePhase event: ", event);
    });

    //UpdateTokenSettleDuration
    contract.events.UpdateTokenSettleDuration().on("data", function (event) {
        const query = `update token set settle_duration = ? where token_id = ? and chain_id = ?`;
        connection.query(query, [Number(event.returnValues.newValue), Number(event.returnValues.tokenId), Number(chainId)],(err) => {
            if(err){
                console.error("UpdateTokenSettleDuration 중 오류 발생:", err);
            }else{
                console.log("UpdateTokenSettleDuration 성공");
            }
        });
        console.log("UpdateTokenSettleDuration event: ", event);
    });
}


// 이벤트 구독 해지
await eth_contract.events.NewToken().unsubscribe();
await eth_contract.events.NewCommon().unsubscribe();
await eth_contract.events.NewOrder().unsubscribe();
await eth_contract.events.NewOffer().unsubscribe();
await eth_contract.events.FillPartialOffer().unsubscribe();
await eth_contract.events.FillOffer().unsubscribe();
await eth_contract.events.FillResaleOffer().unsubscribe();
await eth_contract.events.SettleFilled().unsubscribe();
await eth_contract.events.SettleCancelled().unsubscribe();
await eth_contract.events.CancelOrder().unsubscribe();
await eth_contract.events.CancelOffer().unsubscribe();
// await eth_contract.events.UpdateAcceptedTokens().unsubscribe();
// await eth_contract.events.CloseOffer().unsubscribe();
await eth_contract.events.UpdateConfig().unsubscribe();
await eth_contract.events.TokenToSettlePhase().unsubscribe();
await eth_contract.events.UpdateTokenStatus().unsubscribe();
await eth_contract.events.TokenForceCancelSettlePhase().unsubscribe();
// await eth_contract.events.Settle2Steps().unsubscribe();
await eth_contract.events.UpdateTokenSettleDuration().unsubscribe();