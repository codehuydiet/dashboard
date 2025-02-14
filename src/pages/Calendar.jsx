import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='m-10 md:m-10 p-10 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height={"650px"}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 1, 20)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div >
  )
}

export default Calendar