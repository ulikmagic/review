import FrownIcon from '@/assets/icons/frown.svg'
import HappyIcon from '@/assets/icons/happy.svg'
import NeutralIcon from '@/assets/icons/neutral.svg'
import SadnessIcon from '@/assets/icons/sadness.svg'
import SmirkIcon from '@/assets/icons/smirk.svg'

export interface IFeeling {
  id: number
  text: string
  emoji: string
}

export const feelings: IFeeling[] = [
  { id: 1, text: 'хуже, чем до сессии', emoji: FrownIcon },
  { id: 2, text: 'также как и до сессии', emoji: HappyIcon },
  { id: 3, text: 'нейтрально', emoji: NeutralIcon },
  { id: 4, text: 'лучше', emoji: SadnessIcon },
  { id: 5, text: 'значительно лучше', emoji: SmirkIcon },
  { id: 6, text: 'отлично!', emoji: SmirkIcon },
]