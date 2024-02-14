import FrownIcon from '../assets/icons/frown.svg'
import HappyIcon from '../assets/icons/happy.svg'
import NeutralIcon from '../assets/icons/neutral.svg'
import SadnessIcon from '../assets/icons/sadness.svg'
import SmirkIcon from '../assets/icons/smirk.svg'

export interface IFeeling {
  id: number
  text: string
  emoji: string
  english_text: string
}

export const feelings: IFeeling[] = [
  { id: 1, text: 'стало хуже', english_text: 'It got worse', emoji: SadnessIcon },
  { id: 2, text: '⁠осталось таким же', english_text: 'Remained the same', emoji: NeutralIcon },
  { id: 3, text: 'не готов отвечать на это вопрос', english_text: '⁠Not ready to answer', emoji: FrownIcon },
  { id: 4, text: 'стало лучше', english_text: '⁠Somewhat better', emoji: HappyIcon },
  { id: 5, text: 'стало значительно лучше', english_text: '⁠Significantly better', emoji: SmirkIcon },
]