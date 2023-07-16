import Container from '../templates/Container';
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate';
import react,{useState} from  'react';
const Subscription = (props) => {   
// here is two value first a variable and second is function
   const [title, setTitle] = useState(props.title);
   const onButtonClicked= () => {
    //calling setTitle method
    setTitle("Change Title");
    console.log("button clicked",title);
   }
    return(
        <Container className="subscription">
            <SubscriptionDate date={props.date}/>
            <h2>{title}</h2>
            <div className="subscription_price">{props.amount}</div>
            <button onClick={onButtonClicked}>change title</button>
        </Container>
    )
}
export default Subscription;