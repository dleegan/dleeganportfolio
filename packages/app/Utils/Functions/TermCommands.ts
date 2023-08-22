let allCommandes = [
  {
    commande: 'ls',
    function: () => {
      return 'ls function'
    },
  },
  {
    commande: 'cd',
    function: () => {
      return 'cd function'
    },
  },
  {
    commande: 'ls',
    function: () => {
      return 'ls function'
    },
  },
  {
    commande: 'help',
    function: () => {
      return 'help function\nlsls'
    },
  },
]

type RET = {
  error?: boolean
  result: string
}

export function commandesInterpretor(cmd: string): RET {
  let index = allCommandes.findIndex((it) => it.commande.includes(cmd))
  if (index !== -1) {
    return { result: allCommandes[index]?.function() }
  }
  return { error: true, result: `command not found: ${cmd}` }
}
