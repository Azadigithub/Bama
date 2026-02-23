import React from 'react'
import Examslider from '../Slider/Examslider'

const ExamContainer = ({Examinslider,title}) => {
  return (
        <div className="w-full flex flex-col gap-[30px] bg-gray-200 p-[30px]">
          <h2 className="text-center text-[32px] font-bold">
            {title}
          </h2>
          <Examslider DataImages={Examinslider} />
        </div>
  )
}

export default ExamContainer
