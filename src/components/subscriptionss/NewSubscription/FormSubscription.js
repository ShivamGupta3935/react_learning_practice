import './FormSubscription.css'
import { useState } from 'react'
const FormSubscription=()=>{
    // const [userTitle, setUserTitle] = useState("")
    // const [userDate, setUserDate] = useState("")
    // const [userAmount, setUserAmount] = useState("")
    const [form, setForm] = useState({userTitle:'',userDate:'',userAmount:''})

    const titleChangeHandler = (events) => {
        // setUserTitle(events.target.value)
        // console.log("user title ",userTitle)
        setForm({...form,userDate:events.target.value})
        console.log(form);
    }
    const dateChangeHandler=(events)=>{
        //   setUserDate(events.target.value)
        //   console.log("User Date : ",userDate);
        setForm({...form,userAmount:events.target.value})
        console.log(form);

    }
    const amountChangeHandler=(events)=>{
        //   setUserAmount(events.target.value)
        //   console.log("User Amount is : ",userAmount);
        setForm({...form,userTitle:events.target.value})
        console.log(form);


    }
    return (
        <form>
            <div className='new_subscription_controls'>
                <div className='new_subscription_control'>
                   <label>Title</label>
                   <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new_subscription_control'>
                   <label>Date</label>
                   <input type='date'onChange={dateChangeHandler}></input>
                </div>
                <div className='new_subscription_control'>
                   <label>Amount</label>
                   <input type='text' onChange={amountChangeHandler}></input>
                </div>
            </div>
            <div className='new_subscription_actions'>
                <button type='submit' className="">Add Subscription</button>
            </div>
        </form>
    )
}
export default FormSubscription;