import './Filter.css'
const Fitler =(props)=>{
    const onSelectHandler=(events)=>{
            console.log("on select handler", events.target.value);
            props.onFilterChange(events.target.value)
    }
    return(
        <div className='filter'>
            <div className='filter_control'>
                <label>Filter by Year</label>
                <select value={props.selectedFilter} onChange={onSelectHandler} >
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>

        </div>
    )
}
export default Fitler;