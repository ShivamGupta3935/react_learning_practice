import "./Container.css"
import "../subscriptionss/Subscription.css"
const Container =(props) => {
    const classes = "container "+props.className
    return<div className={classes}>{props.children}</div>

}
export default Container;