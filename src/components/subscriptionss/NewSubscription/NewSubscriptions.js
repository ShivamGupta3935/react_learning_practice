import FormSubscription from './FormSubscription';
import './NewSubscriptions.css'
const NewSubscriptions=(props)=>{
       let onSaveHandler=(data) => {
        const subscriptionData={...data,id:Math.random().toString()}
        props.onAddSubscription(subscriptionData);
        console.log("On Add Subscription",subscriptionData );
    }
    return<div className='new_subscription '><FormSubscription onSave={onSaveHandler}/></div>

}

export default NewSubscriptions;