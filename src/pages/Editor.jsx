import React from 'react'
import { HtmlEditor, RichTextEditorComponent, Image, Inject, Link, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'
const Editor = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl mt-24 '>
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor