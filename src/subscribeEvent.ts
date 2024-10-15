import connection from "./db";
import Web3 from "web3";

export const subscribeEvent = async (url:string) => {
    // flexir 컨트랙트 세팅
    const web3 = new Web3(url);

    var c_addr = "0x48EfDb7b1995432fb733FadE4Aa4b7CB03e6cF03";
    var c_abi = [
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "target",
                    type: "address",
                },
            ],
            name: "AddressEmptyCode",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "AddressInsufficientBalance",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
            ],
            name: "cancelOffer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
            ],
            name: "createPoints",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "originalOrderId",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    internalType: "uint8",
                    name: "reofferStatus",
                    type: "uint8",
                },
            ],
            name: "createResaleOffer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "FailedInnerCall",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "fillOffer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "enum PointMarket.OfferType",
                    name: "offerType",
                    type: "uint8",
                },
                {
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "exchangeToken",
                    type: "address",
                },
            ],
            name: "newOffer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "token",
                    type: "address",
                },
            ],
            name: "SafeERC20FailedOperation",
            type: "error",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "refundValue",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "refundFee",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "doer",
                    type: "address",
                },
            ],
            name: "CancelOffer",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "doer",
                    type: "address",
                },
            ],
            name: "CancelOrder",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "refundAmount",
                    type: "uint256",
                },
            ],
            name: "CloseOffer",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "resaleOfferId",
                    type: "uint256",
                },
            ],
            name: "fillResaleOffer",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
            ],
            name: "forceCancelOrder",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "enum PointMarket.OfferType",
                    name: "offerType",
                    type: "uint8",
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "exchangeToken",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "collateral",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "fullMatch",
                    type: "bool",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "doer",
                    type: "address",
                },
            ],
            name: "NewOffer",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "seller",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "buyer",
                    type: "address",
                },
            ],
            name: "NewOrder",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "originalOrderId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint8",
                    name: "reofferStatus",
                    type: "uint8",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "seller",
                    type: "address",
                },
            ],
            name: "NewResaleOffer",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "settleDuration",
                    type: "uint256",
                },
            ],
            name: "NewToken",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "resaleOfferId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "buyer",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "seller",
                    type: "address",
                },
            ],
            name: "ResaleOfferFilled",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "address[]",
                    name: "tokenAddresses",
                    type: "address[]",
                },
                {
                    internalType: "bool",
                    name: "isAccepted",
                    type: "bool",
                },
            ],
            name: "setAcceptedTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "bytes32",
                    name: "hash",
                    type: "bytes32",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "doer",
                    type: "address",
                },
            ],
            name: "Settle2Steps",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
            ],
            name: "settleCancelled",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "fee",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "doer",
                    type: "address",
                },
            ],
            name: "SettleCancelled",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
            ],
            name: "settleFilled",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "fee",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "doer",
                    type: "address",
                },
            ],
            name: "SettleFilled",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
            ],
            name: "tokenForceCancelSettlePhase",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
            ],
            name: "TokenForceCancelSettlePhase",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
            ],
            name: "tokenToggleActivation",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                },
                {
                    internalType: "uint152",
                    name: "settleRate",
                    type: "uint152",
                },
            ],
            name: "tokenToSettlePhase",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "token",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "settleRate",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "settleTime",
                    type: "uint256",
                },
            ],
            name: "TokenToSettlePhase",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address[]",
                    name: "tokens",
                    type: "address[]",
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "isAccepted",
                    type: "bool",
                },
            ],
            name: "UpdateAcceptedTokens",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "feeWallet_",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "feeSettle_",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "feeRefund_",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "pledgeRate_",
                    type: "uint256",
                },
            ],
            name: "updateConfig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "oldFeeWallet",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "oldFeeSettle",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "oldFeeRefund",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "oldPledgeRate",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "newFeeWallet",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "newFeeSettle",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "newFeeRefund",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "newPledgeRate",
                    type: "uint256",
                },
            ],
            name: "UpdateConfig",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    indexed: false,
                    internalType: "uint48",
                    name: "oldValue",
                    type: "uint48",
                },
                {
                    indexed: false,
                    internalType: "uint48",
                    name: "newValue",
                    type: "uint48",
                },
            ],
            name: "UpdateTokenSettleDuration",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    indexed: false,
                    internalType: "enum PointMarket.TokenStatus",
                    name: "oldValue",
                    type: "uint8",
                },
                {
                    indexed: false,
                    internalType: "enum PointMarket.TokenStatus",
                    name: "newValue",
                    type: "uint8",
                },
            ],
            name: "UpdateTokenStatus",
            type: "event",
        },
        {
            stateMutability: "payable",
            type: "fallback",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
                {
                    internalType: "uint48",
                    name: "newValue",
                    type: "uint48",
                },
            ],
            name: "updateSettleDuration",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_token",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
            ],
            name: "withdrawStuckToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            stateMutability: "payable",
            type: "receive",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
            ],
            name: "getOffer",
            outputs: [
                {
                    components: [
                        {
                            internalType: "enum PointMarket.OfferType",
                            name: "offerType",
                            type: "uint8",
                        },
                        {
                            internalType: "bytes32",
                            name: "tokenId",
                            type: "bytes32",
                        },
                        {
                            internalType: "address",
                            name: "exchangeToken",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "collateral",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "filledAmount",
                            type: "uint256",
                        },
                        {
                            internalType: "enum PointMarket.OfferStatus",
                            name: "status",
                            type: "uint8",
                        },
                        {
                            internalType: "address",
                            name: "offeredBy",
                            type: "address",
                        },
                        {
                            internalType: "bool",
                            name: "fullMatch",
                            type: "bool",
                        },
                        {
                            internalType: "uint256",
                            name: "originalOrderId",
                            type: "uint256",
                        },
                        {
                            internalType: "uint8",
                            name: "reofferStatus",
                            type: "uint8",
                        },
                    ],
                    internalType: "struct PointMarket.Offer",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
            ],
            name: "getOrder",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "offerId",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "value",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "seller",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "buyer",
                            type: "address",
                        },
                        {
                            internalType: "enum PointMarket.OrderStatus",
                            name: "status",
                            type: "uint8",
                        },
                    ],
                    internalType: "struct PointMarket.Order",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "tokenId",
                    type: "bytes32",
                },
            ],
            name: "getToken",
            outputs: [
                {
                    components: [
                        {
                            internalType: "address",
                            name: "tokenAddr",
                            type: "address",
                        },
                        {
                            internalType: "uint48",
                            name: "settleTime",
                            type: "uint48",
                        },
                        {
                            internalType: "uint48",
                            name: "settleDuration",
                            type: "uint48",
                        },
                        {
                            internalType: "uint152",
                            name: "settleRate",
                            type: "uint152",
                        },
                        {
                            internalType: "enum PointMarket.TokenStatus",
                            name: "status",
                            type: "uint8",
                        },
                    ],
                    internalType: "struct PointMarket.Token",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
            ],
            name: "offerAmount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
            ],
            name: "offerOfferedBy",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
            ],
            name: "offerOriginalOrderId",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
            ],
            name: "offerStatus",
            outputs: [
                {
                    internalType: "enum PointMarket.OfferStatus",
                    name: "",
                    type: "uint8",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "offerId",
                    type: "uint256",
                },
            ],
            name: "offertype",
            outputs: [
                {
                    internalType: "enum PointMarket.OfferType",
                    name: "",
                    type: "uint8",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "oneDay",
            outputs: [
                {
                    internalType: "uint48",
                    name: "",
                    type: "uint48",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
            ],
            name: "orderBuyer",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
            ],
            name: "orderSeller",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "orderId",
                    type: "uint256",
                },
            ],
            name: "orderStatus",
            outputs: [
                {
                    internalType: "enum PointMarket.OrderStatus",
                    name: "",
                    type: "uint8",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ];
    
    // var c_addr = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    // var c_abi=[
    //     {
    //         "inputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "constructor"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "target",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "AddressEmptyCode",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "account",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "AddressInsufficientBalance",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "FailedInnerCall",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "OwnableInvalidOwner",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "account",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "OwnableUnauthorizedAccount",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "ReentrancyGuardReentrantCall",
    //         "type": "error"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "token",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "SafeERC20FailedOperation",
    //         "type": "error"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "CancelOffer",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "doer",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "CancelOrder",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "refundAmount",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "CloseOffer",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "commonId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint64",
    //                 "name": "amount",
    //                 "type": "uint64"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "address",
    //                 "name": "doer",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "FillOffer",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "partialOrderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bool",
    //                 "name": "isBuy",
    //                 "type": "bool"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "commonId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint64",
    //                 "name": "amount",
    //                 "type": "uint64"
    //             }
    //         ],
    //         "name": "FillPartialOffer",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "address",
    //                 "name": "doer",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "FillResaleOffer",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "commonId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint128",
    //                 "name": "collateral",
    //                 "type": "uint128"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint64",
    //                 "name": "amount",
    //                 "type": "uint64"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "address",
    //                 "name": "exchangeToken",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bool",
    //                 "name": "fullMatch",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "NewCommon",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint128",
    //                 "name": "collateral",
    //                 "type": "uint128"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bool",
    //                 "name": "isBuy",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "NewOffer",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bool",
    //                 "name": "isBuy",
    //                 "type": "bool"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "commonId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint64",
    //                 "name": "amount",
    //                 "type": "uint64"
    //             }
    //         ],
    //         "name": "NewOrder",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "settleDuration",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "NewToken",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "previousOwner",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "newOwner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "OwnershipTransferred",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bytes32",
    //                 "name": "hash",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "address",
    //                 "name": "doer",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "Settle2Steps",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "SettleCancelled",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "SettleFilled",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             }
    //         ],
    //         "name": "TokenForceCancelSettlePhase",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "address",
    //                 "name": "token",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "settleRate",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "settleTime",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "TokenToSettlePhase",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "address[]",
    //                 "name": "tokens",
    //                 "type": "address[]"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "bool",
    //                 "name": "isAccepted",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "UpdateAcceptedTokens",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "address",
    //                 "name": "oldFeeWallet",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "oldFeeSettle",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "oldFeeRefund",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "oldPledgeRate",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "address",
    //                 "name": "newFeeWallet",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "newFeeSettle",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "newFeeRefund",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "newPledgeRate",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "UpdateConfig",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint48",
    //                 "name": "oldValue",
    //                 "type": "uint48"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint48",
    //                 "name": "newValue",
    //                 "type": "uint48"
    //             }
    //         ],
    //         "name": "UpdateTokenSettleDuration",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": false,
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "enum PointMarket.TokenStatus",
    //                 "name": "oldValue",
    //                 "type": "uint8"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "enum PointMarket.TokenStatus",
    //                 "name": "newValue",
    //                 "type": "uint8"
    //             }
    //         ],
    //         "name": "UpdateTokenStatus",
    //         "type": "event"
    //     },
    //     {
    //         "stateMutability": "payable",
    //         "type": "fallback"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "cancelOffer",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             }
    //         ],
    //         "name": "createPoints",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "uint128",
    //                 "name": "value",
    //                 "type": "uint128"
    //             },
    //             {
    //                 "internalType": "bool",
    //                 "name": "isBuyerSelling",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "createResaleOffer",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "uint64",
    //                 "name": "amount",
    //                 "type": "uint64"
    //             }
    //         ],
    //         "name": "fillOffer",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "forceCancelOrder",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "commonId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getCommon",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "bytes32",
    //                         "name": "tokenId",
    //                         "type": "bytes32"
    //                     },
    //                     {
    //                         "internalType": "uint128",
    //                         "name": "collateral",
    //                         "type": "uint128"
    //                     },
    //                     {
    //                         "internalType": "uint64",
    //                         "name": "amount",
    //                         "type": "uint64"
    //                     },
    //                     {
    //                         "internalType": "address",
    //                         "name": "exchangeToken",
    //                         "type": "address"
    //                     },
    //                     {
    //                         "internalType": "bool",
    //                         "name": "fullMatch",
    //                         "type": "bool"
    //                     }
    //                 ],
    //                 "internalType": "struct PointMarket.OrderCommon",
    //                 "name": "",
    //                 "type": "tuple"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getCommonByOfferId",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "bytes32",
    //                         "name": "tokenId",
    //                         "type": "bytes32"
    //                     },
    //                     {
    //                         "internalType": "uint128",
    //                         "name": "collateral",
    //                         "type": "uint128"
    //                     },
    //                     {
    //                         "internalType": "uint64",
    //                         "name": "amount",
    //                         "type": "uint64"
    //                     },
    //                     {
    //                         "internalType": "address",
    //                         "name": "exchangeToken",
    //                         "type": "address"
    //                     },
    //                     {
    //                         "internalType": "bool",
    //                         "name": "fullMatch",
    //                         "type": "bool"
    //                     }
    //                 ],
    //                 "internalType": "struct PointMarket.OrderCommon",
    //                 "name": "",
    //                 "type": "tuple"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getCommonByOrderId",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "bytes32",
    //                         "name": "tokenId",
    //                         "type": "bytes32"
    //                     },
    //                     {
    //                         "internalType": "uint128",
    //                         "name": "collateral",
    //                         "type": "uint128"
    //                     },
    //                     {
    //                         "internalType": "uint64",
    //                         "name": "amount",
    //                         "type": "uint64"
    //                     },
    //                     {
    //                         "internalType": "address",
    //                         "name": "exchangeToken",
    //                         "type": "address"
    //                     },
    //                     {
    //                         "internalType": "bool",
    //                         "name": "fullMatch",
    //                         "type": "bool"
    //                     }
    //                 ],
    //                 "internalType": "struct PointMarket.OrderCommon",
    //                 "name": "",
    //                 "type": "tuple"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getOffer",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "uint256",
    //                         "name": "orderId",
    //                         "type": "uint256"
    //                     },
    //                     {
    //                         "internalType": "uint128",
    //                         "name": "value",
    //                         "type": "uint128"
    //                     },
    //                     {
    //                         "internalType": "bool",
    //                         "name": "isBuy",
    //                         "type": "bool"
    //                     }
    //                 ],
    //                 "internalType": "struct PointMarket.Offer",
    //                 "name": "",
    //                 "type": "tuple"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "bool",
    //                 "name": "isBuy",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "getOrder",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "uint256",
    //                         "name": "commonId",
    //                         "type": "uint256"
    //                     },
    //                     {
    //                         "internalType": "address",
    //                         "name": "owner",
    //                         "type": "address"
    //                     },
    //                     {
    //                         "internalType": "uint64",
    //                         "name": "amount",
    //                         "type": "uint64"
    //                     },
    //                     {
    //                         "internalType": "enum PointMarket.OrderStatus",
    //                         "name": "status",
    //                         "type": "uint8"
    //                     }
    //                 ],
    //                 "internalType": "struct PointMarket.Order",
    //                 "name": "",
    //                 "type": "tuple"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "offerId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getOrderByOfferId",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "uint256",
    //                         "name": "commonId",
    //                         "type": "uint256"
    //                     },
    //                     {
    //                         "internalType": "address",
    //                         "name": "owner",
    //                         "type": "address"
    //                     },
    //                     {
    //                         "internalType": "uint64",
    //                         "name": "amount",
    //                         "type": "uint64"
    //                     },
    //                     {
    //                         "internalType": "enum PointMarket.OrderStatus",
    //                         "name": "status",
    //                         "type": "uint8"
    //                     }
    //                 ],
    //                 "internalType": "struct PointMarket.Order",
    //                 "name": "",
    //                 "type": "tuple"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "exchangeToken",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint64",
    //                 "name": "amount",
    //                 "type": "uint64"
    //             },
    //             {
    //                 "internalType": "uint128",
    //                 "name": "value",
    //                 "type": "uint128"
    //             },
    //             {
    //                 "internalType": "bool",
    //                 "name": "isBuy",
    //                 "type": "bool"
    //             },
    //             {
    //                 "internalType": "bool",
    //                 "name": "fullMatch",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "newOffer",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "oneDay",
    //         "outputs": [
    //             {
    //                 "internalType": "uint48",
    //                 "name": "",
    //                 "type": "uint48"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "owner",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "renounceOwnership",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address[]",
    //                 "name": "tokenAddresses",
    //                 "type": "address[]"
    //             },
    //             {
    //                 "internalType": "bool",
    //                 "name": "isAccepted",
    //                 "type": "bool"
    //             }
    //         ],
    //         "name": "setAcceptedTokens",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "settleCancelled",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "orderId",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "settleFilled",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             }
    //         ],
    //         "name": "tokenForceCancelSettlePhase",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "tokenAddress",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint152",
    //                 "name": "settleRate",
    //                 "type": "uint152"
    //             }
    //         ],
    //         "name": "tokenToSettlePhase",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             }
    //         ],
    //         "name": "tokenToggleActivation",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "newOwner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "transferOwnership",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "feeWallet_",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "feeSettle_",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "uint128",
    //                 "name": "feeRefund_",
    //                 "type": "uint128"
    //             },
    //             {
    //                 "internalType": "uint128",
    //                 "name": "pledgeRate_",
    //                 "type": "uint128"
    //             }
    //         ],
    //         "name": "updateConfig",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "bytes32",
    //                 "name": "tokenId",
    //                 "type": "bytes32"
    //             },
    //             {
    //                 "internalType": "uint48",
    //                 "name": "newValue",
    //                 "type": "uint48"
    //             }
    //         ],
    //         "name": "updateSettleDuration",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "stateMutability": "payable",
    //         "type": "receive"
    //     }
    // ]
    
    var contract = new web3.eth.Contract(c_abi, c_addr);

    //NewToken
    contract.events.NewToken().on("data", function (event) {
        const query = "INSERT INTO token (token_id, settle_duration) VALUES (?,?)";
        connection.query(query, [Number(event.returnValues.tokenId), Number(event.returnValues.settleDuration)],(err) => {
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
        const query = `INSERT INTO order_common (common_id, token_id, collateral, amount, exchange_token, full_match) VALUES (?,?,?,?,?,?)`;
        connection.query(query, [Number(event.returnValues.commonId), Number(event.returnValues.tokenId), BigInt(event.returnValues.collateral as bigint).toString(), BigInt(event.returnValues.amount as bigint), event.returnValues.exchangeToken, event.returnValues.fullMatch],(err, result) => {
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
        var query = "";
        if(event.returnValues.isBuy){
            query = `INSERT INTO order_buy (order_id, common_id, owner, amount, status) VALUES (?,?,?,?,?)`;
        }
        else{
            query = `INSERT INTO order_sell (order_id, common_id, owner, amount, status) VALUES (?,?,?,?,?)`;
        }
        
        connection.query(query, [Number(event.returnValues.orderId), Number(event.returnValues.commonId), event.returnValues.owner, BigInt(event.returnValues.amount as bigint), event.returnValues.isBuy ? 1 : 0],(err, result) => {
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
        const query = `INSERT INTO offer (offer_id, order_id, value, status) VALUES (?,?,?,?)`;
        connection.query(query, [Number(event.returnValues.offerId), Number(event.returnValues.orderId), BigInt(event.returnValues.collateral as bigint).toString(), event.returnValues.isBuy ? 1 : 0],(err, result) => {
            if(err){
                console.error("NewOffer 저장 중 오류 발생:", err);
            }else{
                console.log("NewOffer 저장 성공");
            }
        });
    });

    //FillPartialOffer
    contract.events.FillPartialOffer().on("data", function (event) {
        console.log("FillPartialOffer event: ", event);
    });

    //FillOffer
    contract.events.FillOffer().on("data", function (event) {
        console.log("FillOffer event: ", event);
    });

    //FillResaleOffer
    contract.events.FillResaleOffer().on("data", function (event) {
        console.log("FillResaleOffer event: ", event);
    });

    //SettleFilled
    contract.events.SettleFilled().on("data", function (event) {
        //확인 - order_buy/sell 기준 order_id가 고유한가? -> event에서 commonId를 넘겨줘야하는거 아닌가?
        const query = `update order_buy set status = 2 where order_id = ?`;
        connection.query(query, [Number(event.returnValues.orderId)],(err) => {
            if(err){
                console.error("SettleFilled 중 오류 발생:", err);
            }else{
                console.log("SettleFilled 성공");
            }
        });
        console.log("SettleFilled event: ", event);
    });

    contract.events.SettleCancelled().on("data", function (event) {
        //확인 - SettleFilled와 동일한지?
        console.log("SettleCancelled event: ", event);
    });

    //CancelOrder
    contract.events.CancelOrder().on("data", function (event) {
        connection.beginTransaction((err) => {
            //order_buy 처리
            const queryBuy = `update order_buy set status = 5 where order_id = ?`;
            connection.query(queryBuy, [Number(event.returnValues.orderId)], (err) => {
                if (err) {
                    //실패 시 롤백
                    return connection.rollback(() => {
                        console.error("CancelOrder order_buy 중 오류 발생 :", err);
                    });
                }

                //order_sell 처리
                const querySell = `update order_sell set status = 5 where order_id = ?`;
                connection.query(querySell, [Number(event.returnValues.orderId)], (err) => {
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
        //확인 - order_id가 중복될 수 있을 수도?
        //확인 - order_id는 21억을 넘을 수 있을까?
        const query = `update offer set status = ? where order_id = ?`;
        connection.query(query, [Number(event.returnValues.status), Number(event.returnValues.orderId)],(err) => {
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
        //확인 - 테이블에 old, new 컬럼 둘다 필요한건가?
        //확인 - DECIMAL(6,3), DECIMAL(13,10) 으로 받는 이유?
        //관리자 지갑주소 1개만 있다는 전제 -> id=1
        const query = `update config set old_fee_wallet = ?, old_fee_settle = ?, old_fee_refund = ?, old_pledge_rate = ?, mod_date = ? where id=1`;
        const date = new Date();
        const modDate = date.toISOString().slice(0, 19).replace('T', ' ');
        connection.query(query, [event.returnValues.newFeeWallet, event.returnValues.newFeeSettle, event.returnValues.newFeeRefund, event.returnValues.newPledgeRate, modDate],(err) => {
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
        //확인 - settleRate가 1M point 당 토큰 개수 -> DB에서 DECIMAL(65,16)으로 받아야 되는건가? + uint152(57자리)라서 DECIMAL(65,16)이 부족할듯?
        const query = `update token set token_addr = ?, settle_rate = ?, settle_time = ? where token_id = ?`;
        const date = new Date(Number(event.returnValues.settleTime) * 1000);
        const settleTime = date.toISOString().slice(0, 19).replace('T', ' ');
        connection.query(query, [event.returnValues.token, event.returnValues.settleRate, settleTime, parseInt(event.returnValues.tokenId as string,16)],(err) => {
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
        const query = `update token set status = ? where token_id = ?`;
        connection.query(query, [Number(event.returnValues.newValue), parseInt(event.returnValues.tokenId as string,16)],(err) => {
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
        const query = `update token set status = 2 where token_id = ?`;
        connection.query(query, [parseInt(event.returnValues.tokenId as string,16)],(err) => {
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
        const query = `update token set settle_duration = ? where token_id = ?`;
        connection.query(query, [Number(event.returnValues.newValue), parseInt(event.returnValues.tokenId as string,16)],(err) => {
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
// await contract.events.NewOffer().unsubscribe();
// await contract.events.NewToken().unsubscribe();
// await contract.events.NewOrder().unsubscribe();
// await contract.events.SettleFilled().unsubscribe();
// await contract.events.SettleCancelled().unsubscribe();
// await contract.events.CancelOrder().unsubscribe();
// await contract.events.CancelOffer().unsubscribe();
// await contract.events.UpdateAcceptedTokens().unsubscribe();
// await contract.events.CloseOffer().unsubscribe();
// await contract.events.TokenToSettlePhase().unsubscribe();
// await contract.events.UpdateTokenStatus().unsubscribe();
// await contract.events.TokenForceCancelSettlePhase().unsubscribe();
// await contract.events.Settle2Steps().unsubscribe();
// await contract.events.UpdateTokenSettleDuration().unsubscribe();
// await contract.events.NewResaleOffer().unsubscribe();
// await contract.events.ResaleOfferFilled().unsubscribe();