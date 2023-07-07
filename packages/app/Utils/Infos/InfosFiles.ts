import Bio from './portfolio/bio.json'
import Formations from './portfolio/formations.json'
import ProfessionalExp from './portfolio/professionalExp.json'
import Nothing from './portfolio/nothing.json'
import StupideThings from './portfolio/stupideThings.json'

export default {
  bio: Bio,
  formations: Formations,

  //expériences-professionnelles files
  nothing: Nothing,
  ['stupide-things']: StupideThings,
}

export let DataSchema = [
  { fileName: 'bio' },
  { fileName: 'formations' },
  {
    folderName: 'expériences-professionnelles',
    content: [{ fileName: 'nothing' }, { fileName: 'stupide-things' }],
  },
]
