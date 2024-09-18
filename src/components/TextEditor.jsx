import React from 'react'
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';



const TextEditor = ({name, control, label, defaultValue=""}) => {



  return (
    <div>
        <label htmlFor="">{label}</label>
        <Controller 
        name={name||"content"} 
        control={control}
        render={({field: {onChange}})=>(
           <Editor initialValue={defaultValue}
           init={{
             height: 500,
             menubar: false,
             plugins: [
               'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
               'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
               'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
             ],
             toolbar: 'undo redo | blocks | ' +
               'bold italic forecolor | alignleft aligncenter ' +
               'alignright alignjustify | bullist numlist outdent indent | ' +
               'removeformat | help',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
           }}/>
        )}
        />

        
        
        
    </div>
  )
}

export default TextEditor