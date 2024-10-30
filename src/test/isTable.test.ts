import { expect, it } from "vitest"
import { isTable } from "../services/isTable"
import type { Board } from "../../types.d"

it('should by table', () => {
  const boardTest: Board = [
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
    ]
  ]
  expect(isTable({ board: boardTest })).toBeTruthy()
})

it('should by not table for the pawn', () => {
  const boardTest: Board = [
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
        "piece": "pawn",
        "color": "me"
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
    ]
  ]
  expect(isTable({ board: boardTest })).toBeFalsy()
})

it('should by not table for the knight', () => {
  const boardTest: Board = [
    [
      {
        "piece": "knight",
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
    ]
  ]
  expect(isTable({ board: boardTest })).toBeFalsy()
})