import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type AddItemFormPropsType ={
    addItem:(title:string)=>void
}

function AddItemForm(props:AddItemFormPropsType){
    const [title, setTitle] = useState<string>("dddeeeeeedd");
    const [error, setError] = useState<string | null>(null);

    const addItem = () => {
        const itemTitle = title.trim()
        if (itemTitle) {
            props.addItem(itemTitle) //обнуление поля вода после введения таски
        } else {
            setError("Title is reqiured")
        }
        setTitle("");
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter") addItem() }
    return(
        <div>
        {/* локальный импут, e.currentTarget===input   */}   <input value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler} 
            className={error?"error":""}/>  {/*При нажатиии Enter будет вводиться  Task */}
        {/* e.currentTarget ==== input */}
        <button onClick={addItem}>+</button>
        {error && <div className={"error-message"}>{error}</div>}
    </div>
   
    );
}

export default AddItemForm;