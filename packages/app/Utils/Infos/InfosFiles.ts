import Bio from './bio.json'
import Education from './education.json'
import ProfessionalExp from './professionalExp.json'
import Nothing from './nothing.json'
import StupideThings from './stupideThings.json'

export default {
  bio: Bio,
  education: Education,
  ['professional-exp']: ProfessionalExp,
  nothing: Nothing,
  ['stupide-things']: StupideThings,
}

export let DataSchema = [
  { fileName: 'bio' },
  { fileName: 'education' },
  { fileName: 'professional-exp' },
  {
    folderName: 'expériences-professionnelles',
    content: [{ fileName: 'nothing' }, { fileName: 'stupide-things' }],
  },
]
