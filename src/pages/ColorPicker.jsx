import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const change1 = (bruh) => {
  document.getElementById("preview").style.backgroundColor = bruh.currentValue.hex;
}
const ColorPicker = () => {
  return (
    <div className='m-2 p-2 md:p-10 md:m-10 mt-24 bg-white rounded-3xl '>
      <Header category="App" title="Color Picker" />
      <div className='text-center'>
        <div id='preview' />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
              id='inline-pallette'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change1}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-picker'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker