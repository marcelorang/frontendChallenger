import React, { useState } from 'react'

import { getGameLogo, getHowToPlay } from '../../helpers'
import ModalSettings from './components/ModalSettings'
import HowToPlayModal from './components/HowToPlayModal'



import {
  BellIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline'
import Chat from '../chat';


type Props =
  {
    game: string
    balance: string
    name: string
    executeAction: Function
    openChatHandler?: Function
  }

function TopBar({
  name,
  game,
  balance,
  executeAction
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    soundClick()
  }
  return (

    <nav className="flex items-center justify-between w-full bg-gradient-to-r from-slate-900 to-slate-900 h-18">
      <h1 className="self-center pl-3">{getGameLogo(game)}</h1>
      <div className="flex items-center gap-3 p-3">
        {/* <button type="button" className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md h-9 w-24 text-white'>Saque</button> */}
        <HowToPlayModal />
        
        {/* btn chat */}
        <div className='flex'>
          <button
            onClick={() => {
              setShowChat(!showChat)
              soundClick()
            }}
          >
            <ChatBubbleLeftIcon className="w-6 h-6 bg-opacity-50" />
          </button>
          {/* <BellIcon color='white' /> */}
        </div>
        <Chat show={showChat} />

        {/* Display saldo */}
        <div className="flex items-center justify-center bg-gray-800 text-white font-bold rounded-full shadow-lg gap-3">
          <div className="player-currency rounded-full w-6 h-6 align-center px-3">
            <span className="text-white items-center text-center ">R$</span>
          </div>

          <div className="flex border-l h-6 border-gray-600 border-opacity-50 " />
          <span className="text-green-custom">{balance}</span>
            <button className="bg-blue-500 hover:bg-indigo-500 text-white font-bold py-1 px-3 rounded-full"
            // onClick={() => {addfoundFuntion}} //botão para depositar fundos
            >+</button>
            {/* <button className="text-lg z-0 mr-2 bg-blue-500 hover:bg-indigo-500"
            // onClick={() => {addfoundFuntion}} //botão para depositar fundos
            >+</button> */}
        </div>

        {/* Avatar */}
        {/* <div className="flex items-center justify-center border-l h-6 border-gray-400 border-opacity-50 mt-1" /> */}
        <div className='items-center'>
          <img
            src="https://api.multiavatar.com/NOME.svg"
            className="h-8 invert rounded-full ring-1 ring-[#7e64b5]"
          />
        </div>
        <ModalSettings
          executeAction={executeAction}
        />
      </div>
    </nav>





  )
}

export default TopBar





