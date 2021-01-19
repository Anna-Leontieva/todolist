import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import {TextField} from '@material-ui/core';
type EditableSpanProps={
    title:string
    changeTitle:(newTitle:string)=>void
}
function EditableSpan(props:EditableSpanProps){
    const [editMode,setEditMode]=useState<boolean>(false);
    const[title,setTitle]=useState<string>(props.title)
    const onEditMode=()=>{
        setEditMode(true);
    }
    const offEditeMode=()=>{
        setEditMode(false);
        if(title.trim()) props.changeTitle(title.trim())
    }
    const changeTitle=(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)
    return(
        editMode
        ?<TextField onBlur={offEditeMode} autoFocus value={title} onChange={changeTitle}/>//on Blure когда покидает режим редактирования
        :<span onDoubleClick={onEditMode}>{props.title}</span>
    );
}
export default EditableSpan;