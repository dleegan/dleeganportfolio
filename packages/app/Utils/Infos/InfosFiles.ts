import Bio from './portfolio/bio.json'
import Formations from './portfolio/formations.json'

import Experience5 from './portfolio/professionalXP/2023-présent.json'
import Experience4 from './portfolio/professionalXP/2021-2023.json'

export default {
  bio: Bio,
  formations: Formations,

  //expériences-professionnelles files
  ['2023-présent']: Experience5,
  ['2021-2023']: Experience4,
  // { fileName: '2021-2023' },
  // { fileName: '2021' },
  // { fileName: '2020' },
  // { fileName: '2019-2020' },
}

export let DataSchema = [
  { fileName: 'bio' },
  { fileName: 'formations' },
  {
    folderName: 'expériences-professionnelles',
    content: [
      { fileName: '2023-présent' },
      { fileName: '2021-2023' },
      { fileName: '2021' },
      { fileName: '2020' },
      { fileName: '2019-2020' },
    ],
  },
]
