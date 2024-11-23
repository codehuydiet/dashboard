import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, DateTime, Legend, Inject, SplineAreaSeries, Chart } from '@syncfusion/ej2-react-charts'

import { areaPrimaryXAxis, areaPrimaryYAxis, areaCustomSeries } from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'
const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Inflation Rate in percentage' />
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? "#33373E" : "#fff"}
      >
        <Inject services={[DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) =>
            <SeriesDirective key={index} {...item} />
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area