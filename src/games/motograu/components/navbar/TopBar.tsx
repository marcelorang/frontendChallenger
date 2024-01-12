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

    <nav className="flex px-3 items-center justify-between w-full border-solid border-1 bg-gradient-to-r from-slate-900 to-slate-900 rounded-sm h-18">
      <h1 className="self-center ">{getGameLogo(game)}</h1>


      <div className="flex items-center justify-center bg-gray-800 text-white font-bold rounded-lg shadow-lg gap-2 ml-4">
        <div className="player-currency rounded-full w-6 h-6 align-center px-2">
          <p className="text-white items-center text-center ">R$</p>
        </div>

        <div className="flex items-center justify-center border-l h-6 border-gray-600 border-opacity-50 " />
        <span className="balance mr-4">{balance}</span>
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full h-9 w-9 z-0 ml-4"
        // onClick={() => {addfoundFuntion}} //botão para depositar fundos
        >+</button>

      </div>


      <div className="flex gap-2 p-4 ">
        {/* <button type="button" className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md h-9 w-24 text-white'>Saque</button> */}
        <HowToPlayModal />
        <ModalSettings
          executeAction={executeAction}
        />
        <div className='flex rounded-full items-start h-6 w-5 mr-2'>
          <button
            className="btn btn-sm px-1 btn-ghost"
            onClick={() => {
              setShowChat(!showChat)
              soundClick()
            }}
          >
            <ChatBubbleLeftIcon className="w-6 h-6 bg-opacity-50" />
          </button>
          {/* <BellIcon color='white' /> */}
        </div>
        <div className="flex items-center justify-center border-l h-6 border-gray-400 border-opacity-50 mt-1" />
        <img
          src="https://api.multiavatar.com/NOME.svg"
          className="h-8 invert rounded-full ring-1 ring-[#7e64b5] mr-2"
        />
      </div>
      <Chat show={showChat} />
    </nav>





  )
}

export default TopBar





