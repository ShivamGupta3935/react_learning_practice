const SubscriptionDate = (props) => {
    const month = props.date.toLocaleString('default',{month:'long'})
    const day = props.date.toLocaleString('default',{day:'2-digit'})
    const year = props.date.getFullYear();
    return(
        <div className="date">
        <div className="month"> {month}</div>
        <div className="day"> {day}</div>
        <div className="year"> {year}</div>
        </div>
    )
}
export default SubscriptionDate;