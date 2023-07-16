import Container from '../templates/Container';
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate';
const Subscription = (props) => {   
   let title = props.title;
   const onButtonClicked= () => {
    title = "change title";
    console.log("button clicked");
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