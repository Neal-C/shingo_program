/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/shingo_program.json`.
 */
export type ShingoProgram = {
  "address": "38U3yMh3Av8MH5SxVwwWoPGGXLnCEDXUznXNyDBijabN",
  "metadata": {
    "name": "shingoProgram",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Arcium & Anchor"
  },
  "instructions": [
    {
      "name": "closeSeason",
      "docs": [
        "# Errors",
        "Theoritically may have an arithemic error that cause Overflow",
        "Called multiple times by the trader, at the end a season",
        "Ending a season makes all its signals decryptable by everyone"
      ],
      "discriminator": [
        162,
        198,
        31,
        37,
        77,
        0,
        199,
        152
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "trader",
          "writable": true,
          "signer": true
        },
        {
          "name": "signalCounter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "trader"
              }
            ]
          }
        },
        {
          "name": "traderAccount",
          "writable": true
        },
        {
          "name": "followers",
          "docs": [
            "Address lookup table for season"
          ],
          "relations": [
            "season"
          ]
        },
        {
          "name": "season",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  97,
                  115,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "trader"
              },
              {
                "kind": "account",
                "path": "trader_account.season_count",
                "account": "traderAccount"
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "initShareSignalDataCompDef",
      "docs": [
        "# Errors",
        "Cannot error, fn just initializes the ``comp_def``",
        "Called once by the admin"
      ],
      "discriminator": [
        51,
        22,
        120,
        25,
        190,
        223,
        146,
        160
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mxeAccount",
          "writable": true
        },
        {
          "name": "compDefAccount",
          "docs": [
            "Can't check it here as it's not initialized yet."
          ],
          "writable": true
        },
        {
          "name": "arciumProgram",
          "address": "BpaW2ZmCJnDwizWY8eM34JtVqp2kRgnmQcedSVc9USdP"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeSeason",
      "docs": [
        "# Errors",
        "Theoritically may have an arithemic error that cause Overflow Error",
        "Called multiple times by the trader, at start of a new season"
      ],
      "discriminator": [
        48,
        218,
        111,
        51,
        235,
        207,
        4,
        119
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "trader",
          "writable": true,
          "signer": true
        },
        {
          "name": "signalCounter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "trader"
              }
            ]
          }
        },
        {
          "name": "traderAccount",
          "writable": true
        },
        {
          "name": "followers",
          "docs": [
            "Address lookup table for season"
          ],
          "relations": [
            "season"
          ]
        },
        {
          "name": "season",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  97,
                  115,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "trader"
              },
              {
                "kind": "account",
                "path": "trader_account.season_count.checked_add(1).unwrap_or(trader_account.season_count)",
                "account": "traderAccount"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "subscriptionPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeTraderAccount",
      "docs": [
        "# Errors",
        "Cannot error",
        "Called Once by the trader"
      ],
      "discriminator": [
        128,
        79,
        74,
        249,
        6,
        140,
        106,
        156
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "trader",
          "writable": true,
          "signer": true
        },
        {
          "name": "traderAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  97,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "trader"
              }
            ]
          }
        },
        {
          "name": "signalCounter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "trader"
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "shareSignalData",
      "docs": [
        "# Errors",
        "Errors if ``queue_computation`` fails"
      ],
      "discriminator": [
        64,
        189,
        120,
        164,
        221,
        126,
        227,
        7
      ],
      "accounts": [
        {
          "name": "season"
        },
        {
          "name": "followers",
          "docs": [
            "Address lookup table for season"
          ],
          "relations": [
            "season"
          ]
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signal"
        },
        {
          "name": "signPdaAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  105,
                  103,
                  110,
                  101,
                  114,
                  65,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "mxeAccount"
        },
        {
          "name": "mempoolAccount",
          "writable": true
        },
        {
          "name": "executingPool",
          "writable": true
        },
        {
          "name": "computationAccount",
          "writable": true
        },
        {
          "name": "compDefAccount"
        },
        {
          "name": "clusterAccount",
          "writable": true
        },
        {
          "name": "poolAccount",
          "writable": true,
          "address": "7Siux8am1QYYP6H1kx917GxuuBwV3CedW85wQz7kAdXn"
        },
        {
          "name": "clockAccount",
          "address": "8snfPfMYu3KaueWE79seRqFeYSxzZEgVZ914JfiRvCGP"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "arciumProgram",
          "address": "BpaW2ZmCJnDwizWY8eM34JtVqp2kRgnmQcedSVc9USdP"
        }
      ],
      "args": [
        {
          "name": "computationOffset",
          "type": "u64"
        },
        {
          "name": "receiver",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "receiverNonce",
          "type": "u128"
        },
        {
          "name": "senderPubKey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u128"
        }
      ]
    },
    {
      "name": "shareSignalDataCallback",
      "discriminator": [
        167,
        22,
        102,
        107,
        139,
        84,
        231,
        46
      ],
      "accounts": [
        {
          "name": "arciumProgram",
          "address": "BpaW2ZmCJnDwizWY8eM34JtVqp2kRgnmQcedSVc9USdP"
        },
        {
          "name": "compDefAccount"
        },
        {
          "name": "mxeAccount"
        },
        {
          "name": "computationAccount"
        },
        {
          "name": "clusterAccount"
        },
        {
          "name": "instructionsSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "output",
          "type": {
            "defined": {
              "name": "signedComputationOutputs",
              "generics": [
                {
                  "kind": "type",
                  "type": {
                    "defined": {
                      "name": "shareSignalDataOutput"
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "name": "storeSignalData",
      "docs": [
        "# Errors",
        "Cannot error, fn just converts data types"
      ],
      "discriminator": [
        46,
        177,
        114,
        22,
        173,
        210,
        69,
        72
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "season"
        },
        {
          "name": "signal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  105,
                  103,
                  110,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "payer"
              },
              {
                "kind": "account",
                "path": "season.id",
                "account": "season"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "version",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "id",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "market",
          "type": {
            "array": [
              {
                "array": [
                  "u8",
                  32
                ]
              },
              2
            ]
          }
        },
        {
          "name": "side",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "entry",
          "type": {
            "array": [
              {
                "array": [
                  "u8",
                  32
                ]
              },
              2
            ]
          }
        },
        {
          "name": "stopLoss",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "takeProfits",
          "type": {
            "array": [
              {
                "array": [
                  {
                    "array": [
                      "u8",
                      32
                    ]
                  },
                  2
                ]
              },
              3
            ]
          }
        },
        {
          "name": "sizeUsd",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "leverage",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "venue",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "timeframe",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "subscribeToSeason",
      "docs": [
        "# Errors",
        "May fail on transfers.",
        "Works by magic"
      ],
      "discriminator": [
        207,
        98,
        197,
        132,
        142,
        191,
        169,
        206
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "follower",
          "writable": true,
          "signer": true
        },
        {
          "name": "trader",
          "writable": true
        },
        {
          "name": "developer",
          "writable": true
        },
        {
          "name": "traderAccount",
          "writable": true
        },
        {
          "name": "followers",
          "docs": [
            "Address lookup table for season"
          ],
          "relations": [
            "season"
          ]
        },
        {
          "name": "season",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "trader"
              },
              {
                "kind": "const",
                "value": [
                  115,
                  101,
                  97,
                  115,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "trader_account.season_count",
                "account": "traderAccount"
              }
            ]
          }
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "clockAccount",
      "discriminator": [
        152,
        171,
        158,
        195,
        75,
        61,
        51,
        8
      ]
    },
    {
      "name": "cluster",
      "discriminator": [
        236,
        225,
        118,
        228,
        173,
        106,
        18,
        60
      ]
    },
    {
      "name": "computationDefinitionAccount",
      "discriminator": [
        245,
        176,
        217,
        221,
        253,
        104,
        172,
        200
      ]
    },
    {
      "name": "feePool",
      "discriminator": [
        172,
        38,
        77,
        146,
        148,
        5,
        51,
        242
      ]
    },
    {
      "name": "mxeAccount",
      "discriminator": [
        103,
        26,
        85,
        250,
        179,
        159,
        17,
        117
      ]
    },
    {
      "name": "season",
      "discriminator": [
        76,
        67,
        93,
        156,
        180,
        157,
        248,
        47
      ]
    },
    {
      "name": "signal",
      "discriminator": [
        20,
        6,
        227,
        69,
        183,
        62,
        78,
        246
      ]
    },
    {
      "name": "signalCounter",
      "discriminator": [
        29,
        234,
        14,
        19,
        79,
        165,
        253,
        110
      ]
    },
    {
      "name": "signerAccount",
      "discriminator": [
        127,
        212,
        7,
        180,
        17,
        50,
        249,
        193
      ]
    },
    {
      "name": "traderAccount",
      "discriminator": [
        111,
        222,
        42,
        107,
        177,
        76,
        38,
        149
      ]
    }
  ],
  "events": [
    {
      "name": "clearSignal",
      "discriminator": [
        211,
        110,
        147,
        27,
        41,
        184,
        196,
        55
      ]
    },
    {
      "name": "observableSignal",
      "discriminator": [
        158,
        133,
        111,
        97,
        151,
        94,
        235,
        29
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidCallbackTx",
      "msg": "Invalid callback transaction"
    }
  ],
  "types": [
    {
      "name": "activation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "activationEpoch",
            "type": {
              "defined": {
                "name": "epoch"
              }
            }
          },
          {
            "name": "deactivationEpoch",
            "type": {
              "defined": {
                "name": "epoch"
              }
            }
          }
        ]
      }
    },
    {
      "name": "bn254g2blsPublicKey",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "array": [
              "u8",
              64
            ]
          }
        ]
      }
    },
    {
      "name": "circuitSource",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "local",
            "fields": [
              {
                "defined": {
                  "name": "localCircuitSource"
                }
              }
            ]
          },
          {
            "name": "onChain",
            "fields": [
              {
                "defined": {
                  "name": "onChainCircuitSource"
                }
              }
            ]
          },
          {
            "name": "offChain",
            "fields": [
              {
                "defined": {
                  "name": "offChainCircuitSource"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "clearSignal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u8"
          },
          {
            "name": "id",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "market",
            "type": {
              "defined": {
                "name": "market"
              }
            }
          },
          {
            "name": "side",
            "docs": [
              "LONG = 0 | SHORT = 1"
            ],
            "type": "u8"
          },
          {
            "name": "entry",
            "type": {
              "defined": {
                "name": "entry"
              }
            }
          },
          {
            "name": "stopLoss",
            "type": "u64"
          },
          {
            "name": "takeProfits",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "profitPoint"
                  }
                },
                3
              ]
            }
          },
          {
            "name": "sizeUsd",
            "type": "u64"
          },
          {
            "name": "leverage",
            "type": "u64"
          },
          {
            "name": "venue",
            "type": "u8"
          },
          {
            "name": "timeframe",
            "type": "u64"
          },
          {
            "name": "seasonId",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "clockAccount",
      "docs": [
        "An account storing the current network epoch"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startEpoch",
            "type": {
              "defined": {
                "name": "epoch"
              }
            }
          },
          {
            "name": "currentEpoch",
            "type": {
              "defined": {
                "name": "epoch"
              }
            }
          },
          {
            "name": "startEpochTimestamp",
            "type": {
              "defined": {
                "name": "timestamp"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "cluster",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "maxSize",
            "type": "u32"
          },
          {
            "name": "activation",
            "type": {
              "defined": {
                "name": "activation"
              }
            }
          },
          {
            "name": "maxCapacity",
            "type": "u64"
          },
          {
            "name": "cuPrice",
            "type": "u64"
          },
          {
            "name": "cuPriceProposals",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          },
          {
            "name": "lastUpdatedEpoch",
            "type": {
              "defined": {
                "name": "epoch"
              }
            }
          },
          {
            "name": "nodes",
            "type": {
              "vec": {
                "defined": {
                  "name": "nodeRef"
                }
              }
            }
          },
          {
            "name": "pendingNodes",
            "type": {
              "vec": {
                "defined": {
                  "name": "nodeRef"
                }
              }
            }
          },
          {
            "name": "blsPublicKey",
            "type": {
              "defined": {
                "name": "setUnset",
                "generics": [
                  {
                    "kind": "type",
                    "type": {
                      "defined": {
                        "name": "bn254g2blsPublicKey"
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "computationDefinitionAccount",
      "docs": [
        "An account representing a [ComputationDefinition] in a MXE."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "finalizationAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "cuAmount",
            "type": "u64"
          },
          {
            "name": "definition",
            "type": {
              "defined": {
                "name": "computationDefinitionMeta"
              }
            }
          },
          {
            "name": "circuitSource",
            "type": {
              "defined": {
                "name": "circuitSource"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "computationDefinitionMeta",
      "docs": [
        "A computation definition for execution in a MXE."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "circuitLen",
            "type": "u32"
          },
          {
            "name": "signature",
            "type": {
              "defined": {
                "name": "computationSignature"
              }
            }
          }
        ]
      }
    },
    {
      "name": "computationSignature",
      "docs": [
        "The signature of a computation defined in a [ComputationDefinition]."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parameters",
            "type": {
              "vec": {
                "defined": {
                  "name": "parameter"
                }
              }
            }
          },
          {
            "name": "outputs",
            "type": {
              "vec": {
                "defined": {
                  "name": "output"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "entry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kind",
            "type": "u8"
          },
          {
            "name": "price",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "epoch",
      "docs": [
        "The network epoch"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          "u64"
        ]
      }
    },
    {
      "name": "feePool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "localCircuitSource",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "mxeKeygen"
          }
        ]
      }
    },
    {
      "name": "mxeAccount",
      "docs": [
        "A MPC Execution Environment."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cluster",
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "keygenOffset",
            "type": "u64"
          },
          {
            "name": "mxeProgramId",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "utilityPubkeys",
            "type": {
              "defined": {
                "name": "setUnset",
                "generics": [
                  {
                    "kind": "type",
                    "type": {
                      "defined": {
                        "name": "utilityPubkeys"
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "name": "fallbackClusters",
            "type": {
              "vec": "u32"
            }
          },
          {
            "name": "rejectedClusters",
            "type": {
              "vec": "u32"
            }
          },
          {
            "name": "computationDefinitions",
            "type": {
              "vec": "u32"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "left",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "right",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "nodeRef",
      "docs": [
        "A reference to a node in the cluster.",
        "The offset is to derive the Node Account.",
        "The current_total_rewards is the total rewards the node has received so far in the current",
        "epoch."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offset",
            "type": "u32"
          },
          {
            "name": "currentTotalRewards",
            "type": "u64"
          },
          {
            "name": "vote",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "observableSignal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonce",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "version",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "id",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "market",
            "type": {
              "array": [
                {
                  "array": [
                    "u8",
                    32
                  ]
                },
                2
              ]
            }
          },
          {
            "name": "side",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "entry",
            "type": {
              "array": [
                {
                  "array": [
                    "u8",
                    32
                  ]
                },
                2
              ]
            }
          },
          {
            "name": "stopLoss",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "takeProfits",
            "type": {
              "array": [
                {
                  "array": [
                    {
                      "array": [
                        "u8",
                        32
                      ]
                    },
                    2
                  ]
                },
                3
              ]
            }
          },
          {
            "name": "sizeUsd",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "leverage",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "venue",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "timeframe",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "seasonId",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "createdAt",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "offChainCircuitSource",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "source",
            "type": "string"
          },
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "onChainCircuitSource",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isCompleted",
            "type": "bool"
          },
          {
            "name": "uploadAuth",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "output",
      "docs": [
        "An output of a computation.",
        "We currently don't support encrypted outputs yet since encrypted values are passed via",
        "data objects."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "plaintextBool"
          },
          {
            "name": "plaintextU8"
          },
          {
            "name": "plaintextU16"
          },
          {
            "name": "plaintextU32"
          },
          {
            "name": "plaintextU64"
          },
          {
            "name": "plaintextU128"
          },
          {
            "name": "ciphertext"
          },
          {
            "name": "arcisX25519Pubkey"
          },
          {
            "name": "plaintextFloat"
          },
          {
            "name": "plaintextPoint"
          },
          {
            "name": "plaintextI8"
          },
          {
            "name": "plaintextI16"
          },
          {
            "name": "plaintextI32"
          },
          {
            "name": "plaintextI64"
          },
          {
            "name": "plaintextI128"
          }
        ]
      }
    },
    {
      "name": "parameter",
      "docs": [
        "A parameter of a computation.",
        "We differentiate between plaintext and encrypted parameters and data objects.",
        "Plaintext parameters are directly provided as their value.",
        "Encrypted parameters are provided as an offchain reference to the data.",
        "Data objects are provided as a reference to the data object account."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "plaintextBool"
          },
          {
            "name": "plaintextU8"
          },
          {
            "name": "plaintextU16"
          },
          {
            "name": "plaintextU32"
          },
          {
            "name": "plaintextU64"
          },
          {
            "name": "plaintextU128"
          },
          {
            "name": "ciphertext"
          },
          {
            "name": "arcisX25519Pubkey"
          },
          {
            "name": "arcisSignature"
          },
          {
            "name": "plaintextFloat"
          },
          {
            "name": "plaintextI8"
          },
          {
            "name": "plaintextI16"
          },
          {
            "name": "plaintextI32"
          },
          {
            "name": "plaintextI64"
          },
          {
            "name": "plaintextI128"
          },
          {
            "name": "plaintextPoint"
          }
        ]
      }
    },
    {
      "name": "profitPoint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "sizePourcentage",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "season",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "followers",
            "type": "pubkey"
          },
          {
            "name": "subscriptionPrice",
            "type": "u64"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "setUnset",
      "docs": [
        "Utility struct to store a value that needs to be set by a certain number of participants (keys",
        "in our case). Once all participants have set the value, the value is considered set and we only",
        "store it once."
      ],
      "generics": [
        {
          "kind": "type",
          "name": "t"
        }
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "set",
            "fields": [
              {
                "generic": "t"
              }
            ]
          },
          {
            "name": "unset",
            "fields": [
              {
                "generic": "t"
              },
              {
                "vec": "bool"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "shareSignalDataOutput",
      "docs": [
        "The output of the callback instruction. Provided as a struct with ordered fields",
        "as anchor does not support tuples and tuple structs yet."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "field0",
            "type": {
              "defined": {
                "name": "sharedEncryptedStruct",
                "generics": [
                  {
                    "kind": "const",
                    "value": "65"
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "name": "sharedEncryptedStruct",
      "generics": [
        {
          "kind": "const",
          "name": "len",
          "type": "usize"
        }
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "encryptionKey",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u128"
          },
          {
            "name": "ciphertexts",
            "type": {
              "array": [
                {
                  "array": [
                    "u8",
                    32
                  ]
                },
                {
                  "generic": "len"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "name": "signal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "id",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "market",
            "type": {
              "array": [
                {
                  "array": [
                    "u8",
                    32
                  ]
                },
                2
              ]
            }
          },
          {
            "name": "side",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "entry",
            "type": {
              "array": [
                {
                  "array": [
                    "u8",
                    32
                  ]
                },
                2
              ]
            }
          },
          {
            "name": "stopLoss",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "takeProfits",
            "type": {
              "array": [
                {
                  "array": [
                    {
                      "array": [
                        "u8",
                        32
                      ]
                    },
                    2
                  ]
                },
                3
              ]
            }
          },
          {
            "name": "sizeUsd",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "leverage",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "venue",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "timeframe",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "seasonId",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "signalCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "signedComputationOutputs",
      "generics": [
        {
          "kind": "type",
          "name": "o"
        }
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "success",
            "fields": [
              {
                "generic": "o"
              },
              {
                "array": [
                  "u8",
                  64
                ]
              }
            ]
          },
          {
            "name": "failure"
          },
          {
            "name": "markerForIdlBuildDoNotUseThis",
            "fields": [
              {
                "generic": "o"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "signerAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "timestamp",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "traderAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seasonCount",
            "type": "u64"
          },
          {
            "name": "hasActiveSeason",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "utilityPubkeys",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x25519Pubkey",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "ed25519VerifyingKey",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "elgamalPubkey",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "pubkeyValidityProof",
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    }
  ]
};
