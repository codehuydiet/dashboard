import React from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective, Inject } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
  return (
    <div className='m-10 md:m-10 p-10 md:p-10 rounded-3xl bg-white '>
      <Header category={"App"} title={"Kanban"} />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id'
        }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((data, index) =>
            <ColumnDirective key={index} {...data} />
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban