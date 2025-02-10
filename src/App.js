// import logo from './logo.svg';
import RiskAnalysisPage from "./components/RiskAnalysisPage"
// import RiskAnalysisPage2 from "./components/RiskAnalysisPage2"
import './App.css';

const data = [
  {
    "source_address": "1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
    "risk_score": "89%",
    "risk": "Highly Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "85%",
        "risky_entities_count": 3,
        "non_risky_entities_count": 1,
        "total_coinjoin": 2,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64",
            "amount": 0.75,
            "date": "06:02:2025 14:30:00",
            "transactions": [
              {
                "tx_amount": 0.75,
                "date_time": "06:02:2025 14:30:00",
                "transaction_id": "f5d8ee39c1e07f9bb5db2831ebf6177886a84b65b4c5472d8be515fb2d6d25b1"
              }
            ],
            "entity_name": "Darknet Market",
            "token_type": "BTC",
            "transaction_type": "Transfer"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1PnMfRF2enSZnR6JSexxBHuQnxG8Vo5FVK",
            "amount": 1.5,
            "date": "06:02:2025 14:10:00",
            "transactions": [
              {
                "tx_amount": 1.5,
                "date_time": "06:02:2025 14:10:00",
                "transaction_id": "3d3fa1b4f451cdb1a1f5c68d27e0cf66763c8c5a39a1281f5e40c615e27e4f0b"
              }
            ],
            "entity_name": "Mixing Service",
            "token_type": "BTC",
            "transaction_type": "Deposit"
          }
        ]
      },
      {
        "level": 2,
        "risk_percentage": "72%",
        "risky_entities_count": 2,
        "non_risky_entities_count": 2,
        "total_coinjoin": 1,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Ai2JjijKtBGLzXtHX9kAA5Vmfz3g9dM6T",
            "amount": 1.0,
            "date": "06:02:2025 13:45:00",
            "transactions": [
              {
                "tx_amount": 1.0,
                "date_time": "06:02:2025 13:45:00",
                "transaction_id": "4cf32f83e5a1c8d08e4b6fd9f7323ea6a53b4d82a0b7c75d3a8f07cc685a9323"
              }
            ],
            "entity_name": "Fraudulent Exchange",
            "token_type": "BTC",
            "transaction_type": "Withdrawal"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1QLbz7JHiBTspS962RLKV8GndWFwi5j6Qr",
            "amount": 0.9,
            "date": "06:02:2025 13:30:00",
            "transactions": [
              {
                "tx_amount": 0.9,
                "date_time": "06:02:2025 13:30:00",
                "transaction_id": "2a97b85bcdfa2b6f7f6c731ba2f229ef12eb1ecf156d9df2f03f9f2b065f13b6"
              }
            ],
            "entity_name": "Flagged Wallet",
            "token_type": "BTC",
            "transaction_type": "Payment"
          }
        ]
      }
    ]
  },
  {
    "source_address": "Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
    "risk_score": "18%",
    "risk": "Low Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "15%",
        "risky_entities_count": 3,
        "non_risky_entities_count": 1,
        "total_coinjoin": 2,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Cbq7aT1tY8kMxWLbitaG7yT6bPbKChq64",
            "amount": 0.75,
            "date": "06:02:2025 14:30:00",
            "transactions": [
              {
                "tx_amount": 0.75,
                "date_time": "06:02:2025 14:30:00",
                "transaction_id": "f5d8ee39c1e07f9bb5db2831ebf6177886a84b65b4c5472d8be515fb2d6d25b1"
              }
            ],
            "entity_name": "Darknet Market",
            "token_type": "BTC",
            "transaction_type": "Transfer"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1PnMfRF2enSZnR6JSexxBHuQnxG8Vo5FVK",
            "amount": 1.5,
            "date": "06:02:2025 14:10:00",
            "transactions": [
              {
                "tx_amount": 1.5,
                "date_time": "06:02:2025 14:10:00",
                "transaction_id": "3d3fa1b4f451cdb1a1f5c68d27e0cf66763c8c5a39a1281f5e40c615e27e4f0b"
              }
            ],
            "entity_name": "Mixing Service",
            "token_type": "BTC",
            "transaction_type": "Deposit"
          }
        ]
      },
      {
        "level": 2,
        "risk_percentage": "20%",
        "risky_entities_count": 2,
        "non_risky_entities_count": 2,
        "total_coinjoin": 1,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Ai2JjijKtBGLzXtHX9kAA5Vmfz3g9dM6T",
            "amount": 1.0,
            "date": "06:02:2025 13:45:00",
            "transactions": [
              {
                "tx_amount": 1.0,
                "date_time": "06:02:2025 13:45:00",
                "transaction_id": "4cf32f83e5a1c8d08e4b6fd9f7323ea6a53b4d82a0b7c75d3a8f07cc685a9323"
              }
            ],
            "entity_name": "Fraudulent Exchange",
            "token_type": "BTC",
            "transaction_type": "Withdrawal"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1QLbz7JHiBTspS962RLKV8GndWFwi5j6Qr",
            "amount": 0.9,
            "date": "06:02:2025 13:30:00",
            "transactions": [
              {
                "tx_amount": 0.9,
                "date_time": "06:02:2025 13:30:00",
                "transaction_id": "2a97b85bcdfa2b6f7f6c731ba2f229ef12eb1ecf156d9df2f03f9f2b065f13b6"
              }
            ],
            "entity_name": "Flagged Wallet",
            "token_type": "BTC",
            "transaction_type": "Payment"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "risk_score": "95%",
    "risk": "Extremely Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "90%",
        "risky_entities_count": 4,
        "non_risky_entities_count": 0,
        "total_coinjoin": 3,
        "total_flagged": 2,
        "beneficiary_details": [
          {
            "beneficiary_address": "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
            "amount": 1.2,
            "date": "07:02:2025 12:00:00",
            "transactions": [
              {
                "tx_amount": 1.2,
                "date_time": "07:02:2025 12:00:00",
                "transaction_id": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0"
              }
            ],
            "entity_name": "Darknet Market",
            "token_type": "BTC",
            "transaction_type": "Transfer"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
            "amount": 2.0,
            "date": "07:02:2025 11:45:00",
            "transactions": [
              {
                "tx_amount": 2.0,
                "date_time": "07:02:2025 11:45:00",
                "transaction_id": "z1y2x3w4v5u6t7s8r9q0p1o2n3m4l5k6j7i8h9g0"
              }
            ],
            "entity_name": "Mixing Service",
            "token_type": "BTC",
            "transaction_type": "Deposit"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1P5ZEDWTKTFGxQjZphgWPQUpe554WKDfHQ",
    "risk_score": "78%",
    "risk": "Highly Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "75%",
        "risky_entities_count": 2,
        "non_risky_entities_count": 1,
        "total_coinjoin": 1,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
            "amount": 0.5,
            "date": "08:02:2025 10:30:00",
            "transactions": [
              {
                "tx_amount": 0.5,
                "date_time": "08:02:2025 10:30:00",
                "transaction_id": "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1"
              }
            ],
            "entity_name": "Fraudulent Exchange",
            "token_type": "BTC",
            "transaction_type": "Withdrawal"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1LQoWist8KkaUXSPKZHNvEyfrEkPHzSsCd",
            "amount": 1.0,
            "date": "08:02:2025 10:15:00",
            "transactions": [
              {
                "tx_amount": 1.0,
                "date_time": "08:02:2025 10:15:00",
                "transaction_id": "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2"
              }
            ],
            "entity_name": "Flagged Wallet",
            "token_type": "BTC",
            "transaction_type": "Payment"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
    "risk_score": "82%",
    "risk": "Highly Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "80%",
        "risky_entities_count": 3,
        "non_risky_entities_count": 1,
        "total_coinjoin": 2,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r",
            "amount": 0.8,
            "date": "09:02:2025 09:00:00",
            "transactions": [
              {
                "tx_amount": 0.8,
                "date_time": "09:02:2025 09:00:00",
                "transaction_id": "d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3"
              }
            ],
            "entity_name": "Darknet Market",
            "token_type": "BTC",
            "transaction_type": "Transfer"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1JAd7XCBzGudGpJQSDSfpmJhiyimLr67Yr",
            "amount": 1.2,
            "date": "09:02:2025 08:45:00",
            "transactions": [
              {
                "tx_amount": 1.2,
                "date_time": "09:02:2025 08:45:00",
                "transaction_id": "e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4"
              }
            ],
            "entity_name": "Mixing Service",
            "token_type": "BTC",
            "transaction_type": "Deposit"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd",
    "risk_score": "88%",
    "risk": "Highly Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "85%",
        "risky_entities_count": 3,
        "non_risky_entities_count": 1,
        "total_coinjoin": 2,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Nxwenay9Z8Lc9JBiywExpnEFiLp6Afp8v",
            "amount": 0.9,
            "date": "10:02:2025 07:30:00",
            "transactions": [
              {
                "tx_amount": 0.9,
                "date_time": "10:02:2025 07:30:00",
                "transaction_id": "f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5"
              }
            ],
            "entity_name": "Fraudulent Exchange",
            "token_type": "BTC",
            "transaction_type": "Withdrawal"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1KAt6STtisWMMVo5XGdos9P7DBNNsFfjx7",
            "amount": 1.1,
            "date": "10:02:2025 07:15:00",
            "transactions": [
              {
                "tx_amount": 1.1,
                "date_time": "10:02:2025 07:15:00",
                "transaction_id": "g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6"
              }
            ],
            "entity_name": "Flagged Wallet",
            "token_type": "BTC",
            "transaction_type": "Payment"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1CzuqkM9QLuALuXQwY1J4g9fos5A5Z8Y1d",
    "risk_score": "91%",
    "risk": "Extremely Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "88%",
        "risky_entities_count": 4,
        "non_risky_entities_count": 0,
        "total_coinjoin": 3,
        "total_flagged": 2,
        "beneficiary_details": [
          {
            "beneficiary_address": "3QpCQP8uAg5Q4Q5q5q5q5q5q5q5q5q5q5q5",
            "amount": 1.5,
            "date": "11:02:2025 06:00:00",
            "transactions": [
              {
                "tx_amount": 1.5,
                "date_time": "11:02:2025 06:00:00",
                "transaction_id": "h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7"
              }
            ],
            "entity_name": "Darknet Market",
            "token_type": "BTC",
            "transaction_type": "Transfer"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1Dq2m2m2m2m2m2m2m2m2m2m2m2m2m2m2m2m2m2m",
            "amount": 2.0,
            "date": "11:02:2025 05:45:00",
            "transactions": [
              {
                "tx_amount": 2.0,
                "date_time": "11:02:2025 05:45:00",
                "transaction_id": "i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8"
              }
            ],
            "entity_name": "Mixing Service",
            "token_type": "BTC",
            "transaction_type": "Deposit"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    "risk_score": "84%",
    "risk": "Highly Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "82%",
        "risky_entities_count": 3,
        "non_risky_entities_count": 1,
        "total_coinjoin": 2,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3JZq6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6",
            "amount": 0.7,
            "date": "12:02:2025 04:30:00",
            "transactions": [
              {
                "tx_amount": 0.7,
                "date_time": "12:02:2025 04:30:00",
                "transaction_id": "j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9"
              }
            ],
            "entity_name": "Fraudulent Exchange",
            "token_type": "BTC",
            "transaction_type": "Withdrawal"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1Gq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 1.0,
            "date": "12:02:2025 04:15:00",
            "transactions": [
              {
                "tx_amount": 1.0,
                "date_time": "12:02:2025 04:15:00",
                "transaction_id": "k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0"
              }
            ],
            "entity_name": "Flagged Wallet",
            "token_type": "BTC",
            "transaction_type": "Payment"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1Hr6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r6r",
    "risk_score": "89%",
    "risk": "Highly Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "86%",
        "risky_entities_count": 3,
        "non_risky_entities_count": 1,
        "total_coinjoin": 2,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3KpCQP8uAg5Q4Q5q5q5q5q5q5q5q5q5q5q5",
            "amount": 0.6,
            "date": "13:02:2025 03:00:00",
            "transactions": [
              {
                "tx_amount": 0.6,
                "date_time": "13:02:2025 03:00:00",
                "transaction_id": "l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1"
              }
            ],
            "entity_name": "Darknet Market",
            "token_type": "BTC",
            "transaction_type": "Transfer"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1Jq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 1.3,
            "date": "13:02:2025 02:45:00",
            "transactions": [
              {
                "tx_amount": 1.3,
                "date_time": "13:02:2025 02:45:00",
                "transaction_id": "m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2"
              }
            ],
            "entity_name": "Mixing Service",
            "token_type": "BTC",
            "transaction_type": "Deposit"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1KpCQP8uAg5Q4Q5q5q5q5q5q5q5q5q5q5q5",
    "risk_score": "92%",
    "risk": "Extremely Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "89%",
        "risky_entities_count": 4,
        "non_risky_entities_count": 0,
        "total_coinjoin": 3,
        "total_flagged": 2,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Lq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 1.4,
            "date": "14:02:2025 01:30:00",
            "transactions": [
              {
                "tx_amount": 1.4,
                "date_time": "14:02:2025 01:30:00",
                "transaction_id": "n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3"
              }
            ],
            "entity_name": "Fraudulent Exchange",
            "token_type": "BTC",
            "transaction_type": "Withdrawal"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1Lq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 1.6,
            "date": "14:02:2025 01:15:00",
            "transactions": [
              {
                "tx_amount": 1.6,
                "date_time": "14:02:2025 01:15:00",
                "transaction_id": "o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4"
              }
            ],
            "entity_name": "Flagged Wallet",
            "token_type": "BTC",
            "transaction_type": "Payment"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1Mq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
    "risk_score": "87%",
    "risk": "Highly Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "84%",
        "risky_entities_count": 3,
        "non_risky_entities_count": 1,
        "total_coinjoin": 2,
        "total_flagged": 1,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Mq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 0.8,
            "date": "15:02:2025 00:00:00",
            "transactions": [
              {
                "tx_amount": 0.8,
                "date_time": "15:02:2025 00:00:00",
                "transaction_id": "p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5"
              }
            ],
            "entity_name": "Darknet Market",
            "token_type": "BTC",
            "transaction_type": "Transfer"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1Nq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 1.2,
            "date": "14:02:2025 23:45:00",
            "transactions": [
              {
                "tx_amount": 1.2,
                "date_time": "14:02:2025 23:45:00",
                "transaction_id": "q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6"
              }
            ],
            "entity_name": "Mixing Service",
            "token_type": "BTC",
            "transaction_type": "Deposit"
          }
        ]
      }
    ]
  },
  {
    "source_address": "1Nq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
    "risk_score": "90%",
    "risk": "Extremely Risky",
    "level_vise_risk_analysis": [
      {
        "level": 1,
        "risk_percentage": "87%",
        "risky_entities_count": 4,
        "non_risky_entities_count": 0,
        "total_coinjoin": 3,
        "total_flagged": 2,
        "beneficiary_details": [
          {
            "beneficiary_address": "3Nq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 1.1,
            "date": "16:02:2025 22:30:00",
            "transactions": [
              {
                "tx_amount": 1.1,
                "date_time": "16:02:2025 22:30:00",
                "transaction_id": "r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7"
              }
            ],
            "entity_name": "Fraudulent Exchange",
            "token_type": "BTC",
            "transaction_type": "Withdrawal"
          }
        ],
        "payer_details": [
          {
            "payer_address": "1Oq6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q",
            "amount": 1.5,
            "date": "16:02:2025 22:15:00",
            "transactions": [
              {
                "tx_amount": 1.5,
                "date_time": "16:02:2025 22:15:00",
                "transaction_id": "s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8"
              }
            ],
            "entity_name": "Flagged Wallet",
            "token_type": "BTC",
            "transaction_type": "Payment"
          }
        ]
      }
    ]
  }
]


function App() {
  return (
    <div className='h-100vh'>
      <RiskAnalysisPage data={data} />
      {/* <RiskAnalysisPage2 data={data} /> */}
    </div >
  );
}

export default App;
