import React from 'react'

type Props = {
  multipler: string
  roundId: number
  textColor: string
  showRoundInfo: Function
}

export default function MultiplierBadge({
  multipler,
  roundId,
  textColor,
  showRoundInfo,
}: Props) {
  return (
    <>
      <button
        onClick={() => showRoundInfo(roundId)}
        className={`bg-black h-9 border border-gray-700 py-3 hover:border-gray-600 border-opacity-50 font-bold rounded-xl flex capitalize opacity-75 hover:opacity-100 transition items-center justify-center cursor-pointer px-6 text-xs ${textColor}`}
      >
        {parseFloat(multipler).toFixed(2)}x
      </button>
    </>
  )
}
