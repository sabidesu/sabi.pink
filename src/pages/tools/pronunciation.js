import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { customButtons, btnOutlineDangerEmphasis } from '../../styles/button_styles.module.css'

const PronunciationPage = () => {
  return (
    <Layout pageTitle="how do you pronounce 'sabi'?">
      <h3 className="text-3xl mb-3">it's pronounced:</h3>
      <PronunciationGenerator />
    </Layout>
  )
}

const PronunciationGenerator = () => {
  const [pronunciation, setPronunciation] = React.useState(' ')

  const headsOrTails = () => {
    // q: why is this coin weighted?
    // a: the longer the pronunciation the better
    return Math.random() < 0.9 ? true : false
  }

  const generatePronunciation = () => {
    let result = 's'
    const syllables = ['bi', 'ba', 'bba', 'bbi', 'sb', 'sba', 'sbi', 'sbbi', 'sbba']

    result += headsOrTails() ? 'a' : ''

    while (headsOrTails())
      result += syllables[Math.floor(Math.random() * syllables.length)]
    result += 'bi'

    if (result === 'sabi')
      result += ' 🎊'

    setPronunciation(result)

    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = 'en-US'
    utterance.rate = 0.8
    speechSynthesis.speak(utterance)
  }

  return (
    <div id={customButtons} className="text-wrap text-break">
      <p className="break-words mb-3">{pronunciation}</p>
      <button className={'border border-rose-700 text-center text-rose-700 hover:text-neutral-50 no-underline hover:bg-rose-700 transition p-2'} onClick={generatePronunciation}>like this 🔊</button>
    </div>
  )
}

export const Head = () => <Seo pageTitle="how do you pronounce 'sabi'? | tools" />

export default PronunciationPage
