import React, { useState, useEffect, useRef, useContext } from 'react'

import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
// import { getHowToPlay } from '../../../helpers/index'
import { getGameLogo, getHowToPlay } from '@/core/helpers'


import {
  QuestionMarkCircleIcon,
  Bars3Icon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline'
import GameLimitsModal from '../../../../../core/components/provably-fair/game-limits'

type Props = {
  game: string
  balance: string
  name: string
  executeAction: Function
  openChatHandler?: Function
}

const HowToPlayModal = ({
  game,
  executeAction,

}: Props) => {
  const HowToPlay = getHowToPlay(game)
  const dropdownRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showGameLimitsModal, setShowGameLimitsModal] =
    useState<boolean>(false)

  const { soundEnabled,
    setSoundEnabled,
    soundClick,
    playerName
  } = useContext(CrashGameContext)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    soundClick()
  }

  const handleSoundEnabled = (event) => {
    const { checked } = event.target
    executeAction(checked ? 'soundsOn' : 'soundsOff')
    setSoundEnabled(checked)
  }
  return (
    <div className="flex">
      <button
        onClick={() => {
          setShowModal(!showModal)
          soundClick()
        }}
        className="flex items-center text-gray-200 gap-1 capitalize text-sm font-normal"
      >
        <QuestionMarkCircleIcon className="h-6 w-6" />
        {/* <span className="hidden sm:inline">Como Jogar?</span> */}
      </button>

      <HowToPlay show={showModal} toggle={setShowModal} />

      <GameLimitsModal
        show={showGameLimitsModal}
        toggle={setShowGameLimitsModal}
      />

    </div>
  )
}

export default HowToPlayModal




