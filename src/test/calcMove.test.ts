import { expect, it } from "vitest"
import { calcMove } from "../services/calcMove"
import type { Board } from "../../types.d"

it("should can to make castling", () => {
  const boardTest: Board = [
    [
      {
        "piece": "rook",
        "color": "her"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "bishop",
        "color": "her"
      },
      {
        "piece": "queen",
        "color": "her"
      },
      {
        "piece": "king",
        "color": "her"
      },
      {
        "piece": "bishop",
        "color": "her"
      },
      {
        "piece": "knight",
        "color": "her"
      },
      {
        "piece": "rook",
        "color": "her"
      }
    ],
    [
      {
        "piece": "pawn",
        "color": "her"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "pawn",
        "color": "her"
      },
      {
        "piece": "pawn",
        "color": "her"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "pawn",
        "color": "her"
      },
      {
        "piece": "pawn",
        "color": "her"
      },
      {
        "piece": "pawn",
        "color": "her"
      }
    ],
    [
      {
        "piece": "knight",
        "color": "her"
      },
      {
        "piece": "pawn",
        "color": "her"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      }
    ],
    [
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "pawn",
        "color": "her"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      }
    ],
    [
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "bishop",
        "color": "me"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "pawn",
        "color": "me"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      }
    ],
    [
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "knight",
        "color": "me"
      }
    ],
    [
      {
        "piece": "pawn",
        "color": "me"
      },
      {
        "piece": "pawn",
        "color": "me"
      },
      {
        "piece": "pawn",
        "color": "me"
      },
      {
        "piece": "pawn",
        "color": "me"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "pawn",
        "color": "me"
      },
      {
        "piece": "pawn",
        "color": "me"
      },
      {
        "piece": "pawn",
        "color": "me"
      }
    ],
    [
      {
        "piece": "rook",
        "color": "me"
      },
      {
        "piece": "knight",
        "color": "me"
      },
      {
        "piece": "bishop",
        "color": "me"
      },
      {
        "piece": "queen",
        "color": "me"
      },
      {
        "piece": "king",
        "color": "me"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "rook",
        "color": "me"
      }
    ]
  ]
  expect(calcMove("king", [7, 6], [7, 4], boardTest, 0, 0)).toBeTruthy()
})