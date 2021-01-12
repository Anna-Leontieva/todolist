import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
type EditableSpanProps={
    title:string
}
function EditableSpan(props:EditableSpanProps){
    const [editMode,setEditMode]=useState<boolean>(false);

    const onEditMode=()=>{
        setEditMode(true);
    }
    const offEditeMode=()=>{

    }
    return(
        editMode
        ?<input value={props.title}/>
        :<span>{props.title}</span>
    );
}
export default EditableSpan;