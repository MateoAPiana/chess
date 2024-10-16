import type { Board } from "../../types.d"
import { isMate } from '../services/isMate'
import { expect, it } from "vitest"

it('should by not mate', () => {
  const boardTest: Board = [
    [
      {
        "piece": "rook",
        "color": "her"
      },
      {
        "piece": "knight",
        "color": "her"
      },
      {
        "piece": "bishop",
        "color": "her"
      },
      {
        "piece": "king",
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
      },
      {
        "piece": "pawn",
        "color": "her"
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
        "piece": "bishop",
        "color": "me"
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
        "piece": "queen",
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
        "piece": "",
        "color": ""
      },
      {
        "piece": "king",
        "color": "me"
      },
      {
        "piece": "queen",
        "color": "me"
      },
      {
        "piece": "bishop",
        "color": "me"
      },
      {
        "piece": "knight",
        "color": "me"
      },
      {
        "piece": "rook",
        "color": "me"
      }
    ]
  ]
  expect(isMate(boardTest)).toBeFalsy()
})

it('should by mate', () => {
  const boardTest: Board = [
    [
      {
        "piece": "rook",
        "color": "her"
      },
      {
        "piece": "knight",
        "color": "her"
      },
      {
        "piece": "",
        "color": ""
      },
      {
        "piece": "king",
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
      },
      {
        "piece": "pawn",
        "color": "her"
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
        "piece": "pawn",
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
        "piece": "",
        "color": ""
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
        "piece": "queen",
        "color": "her"
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
        "piece": "king",
        "color": "me"
      },
      {
        "piece": "queen",
        "color": "me"
      },
      {
        "piece": "bishop",
        "color": "me"
      },
      {
        "piece": "knight",
        "color": "me"
      },
      {
        "piece": "rook",
        "color": "me"
      }
    ]
  ]
  const from: [number, number] = [2, 2]
  const to: [number, number] = [6, 2]
  expect(isMate(boardTest)).toBeTruthy()
})