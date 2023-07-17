// import logo from './logo.svg';
import './App.css';
import Subscription from './components/subscriptionss/Subscription';
import Container from './components/templates/Container';
import NewSubscriptions from './components/subscriptionss/NewSubscription/NewSubscriptions';


const App = () => {
  let subscriptions = [
    {
      id:"1",
      date:(new Date('2023','07','15')),
      title:"Monthly Subscription",
      amount:"125.70"
    },
    {
      id:"2",
      date:(new Date('2021','03','05')),
      title:"Quatorly Subscription",
      amount:"425.70"
    },
    {
      id:"3",
      date:(new Date('2020','01','05')),
      title:"Annual Subscription",
      amount:"1125.70"
    }
    
]
  // let date = new Date('2023','07','15') ;
  // let title = "Monthly Subscription"
  // let amount = "125.00"
  return (
    <Container className="App">
      <NewSubscriptions/>
      <Subscription date={subscriptions[0].date} title= {subscriptions[0].title} amount= {subscriptions[0].amount} />
      <Subscription date={subscriptions[1].date} title= {subscriptions[1].title} amount= {subscriptions[1].amount} />
      <Subscription date={subscriptions[2].date} title= {subscriptions[2].title} amount= {subscriptions[2].amount} />
    </Container>
  );
}

export default App;
