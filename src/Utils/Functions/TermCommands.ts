let allCommandes = ['ls', '{}'];
let commandesTab = ['this is a test', '{}'];

export function commandesInterpretor(cmd: string): string {
  if (allCommandes.includes(cmd)) {
    let index = allCommandes.findIndex(element => element === cmd);
    return commandesTab[index];
  }
  return `command not found: ${cmd}`;
}
