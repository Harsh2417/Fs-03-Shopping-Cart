import '../App.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
function Header(props) {
    return (
        <div className='flex head'>
            <div onClick={() => props.handleShow(false)} ><h4 style={{cursor:"pointer"}}>HOME</h4></div>
            <div onClick={() => props.handleShow(true)}> 
            
            <h4 style={{cursor:"pointer"}}>
            <BsFillCartPlusFill/>
                Cart
                <sup> {props.count} </sup></h4>
            </div>
        </div>
    );
}

export default Header;