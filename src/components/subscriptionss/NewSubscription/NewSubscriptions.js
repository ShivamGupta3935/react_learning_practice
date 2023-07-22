import FormSubscription from './FormSubscription';
import {useState} from 'react'
import './NewSubscriptions.css'
const NewSubscriptions=(props)=>{
       let onSaveHandler=(data) => {
        const subscriptionData={...data,id:Math.random().toString()}
        props.onAddSubscription(subscriptionData);
        console.log("On Add Subscription",subscriptionData );
        setShowForm(false)
    }
    const[showForm, setShowForm]=useState(false)
    const showFormHandler=()=>{
        setShowForm(true)
        console.log("Show form", showForm);
    }
    const hideFormHandler=()=>{
        setShowForm(false)
    }
    return<div className='new_subscription '>
        {showForm && <FormSubscription onSave={onSaveHandler} onCancel={hideFormHandler} />}
        <button className='new_subscription' type='button' onClick={showFormHandler}>Add new</button>
        </div>

}

export default NewSubscriptions;