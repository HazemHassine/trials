import React from 'react'
import { MDXEditor } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

function Editor() {
  return (
    <div className='bg-red-500'>
    <MDXEditor markdown="# Hello world" plugins={[headingsPlugin()]} />
    </div>
  )
}

export default Editor