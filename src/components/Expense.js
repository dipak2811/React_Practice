function Expense(props)
{   
    // console.log("jahskdj");
    props.data(10);//calling this function which is declared in Showdata file
    return (
        <div>
            <div>passing function as props to communicate with other components</div>
        </div>
    );
}
export default Expense;