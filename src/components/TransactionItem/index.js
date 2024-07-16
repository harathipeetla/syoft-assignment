import { RiDeleteBinLine } from "react-icons/ri";

import './index.css'
const TransacionItem =  props =>{
    const {transactionDetails, deleteTransaction} = props 
    const {id, title, amount, type} = transactionDetails
    const onDeleteTransaction=()=>{
        deleteTransaction(id)
    }
    return(
        <li className='table-row'>
            <p className='transaction-text'>{title}</p>
            <p className='transaction-text'>RS {amount}</p>
            <p className='transaction-text'>{type}</p>
            <div className="delete-container">
            <button className='delete-button' type='button' onClick={onDeleteTransaction}>
               <RiDeleteBinLine/>
            </button>
            </div>
        </li>
    )
}

export default TransacionItem