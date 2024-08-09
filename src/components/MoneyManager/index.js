import { Component } from "react";
import { v4 } from "uuid";

import TransacionItem from "../TransactionItem";
import MoneyDetails from "../MoneyDetails";

import './index.css'

const transactionTypeOptions = [
    {
        optionId:'INCOME',
        displayText: 'Income'
    },
    {
        optionId: 'EXPENSES',
        displayText:'Expenses'
    }
]

class MoneyManager extends Component{
    state={
        transactionList :[],
        titileInput:'',
        amountInput:'',
        optionId: transactionTypeOptions[0].optionId
    }

    deleteTransaction =id =>{
        const {transactionList} = this.state

        const updatedList = transactionList.filter(
            each => id !== each.id
        )

        this.setState({transactionList: updatedList})
    }

    onAddTransaction = (e)=>{
        e.preventDefault()
        const {titileInput, amountInput, optionId} = this.state

        const typeOption = transactionTypeOptions.find(
            each => each.optionId === optionId
        )

        const {displayText} = typeOption

        const newTransaction ={
            id:v4(),
            title: titileInput,
            amount: parseInt(amountInput),
            type: displayText
        }

        this.setState(prevState =>({
            transactionList: [...prevState.transactionList, newTransaction],
            titileInput:'',
            amountInput:'',
            optionId:transactionTypeOptions[0].optionId
        }))
    }



    handleOnChange=(e)=>{
        const {name, value} = e.target
        this.setState({[name]: value})
    }


    getExpenses =()=>{
        const {transactionList} = this.state

        let expensesAmount = 0 
        transactionList.forEach(eachOne =>{
            if(eachOne.type === transactionTypeOptions[1].displayText){
                expensesAmount += eachOne.amount
            }
        })

        return expensesAmount
    }


    getIncome = ()=>{
        const {transactionList} = this.state 
        let incomeAmount = 0 

        transactionList.forEach(eachOne =>{
            if(eachOne.type === transactionTypeOptions[0].displayText){
                incomeAmount += eachOne.amount
            }
        })
        return incomeAmount
    }

    getBalance = ()=>{
        const {transactionList} = this.state 

        let incomeAmount = 0 
        let balanceAmount =0 
        let expensesAmount = 0 

        transactionList.forEach(eachOne =>{
            if(eachOne.type === transactionTypeOptions[0].displayText){
                incomeAmount += eachOne.amount
            }else{
                expensesAmount += eachOne.amount
            }
        })

        balanceAmount = incomeAmount - expensesAmount

        return balanceAmount
    }

    render(){
        const {titileInput, amountInput, optionId, transactionList} = this.state

        const balanceAmount = this.getBalance()
        const incomeAmount = this.getIncome()
        const expensesAmount = this.getExpenses()
        return(
            <div className="money-manager-container">
                <div className="responsive-container div">
                    <div className="header-container">
                        <p  className="header-content">Welcome to your <span className="money-manager-text">Money Manager</span></p>
                    </div>
                   
                    <MoneyDetails
                    balanceAmount = {balanceAmount}
                    incomeAmount = {incomeAmount}
                    expensesAmount = {expensesAmount}
                    />
                     </div>
                   
                    <div className="transaction-details div">
                        <form className="transaction-form" onSubmit={this.onAddTransaction}>
                            <h1 className="transaction-header">Add Transaction</h1>
                            <label className="input-label" htmlFor="title">TITLE</label>
                            <input type="text" id="title" className="input" placeholder="title...." name="titileInput" value={titileInput} onChange={this.handleOnChange}/>
                            <label className="input-label" htmlFor="amount">AMOUNT</label>
                            <input type="number" id="amount" className="input" placeholder="amount...." name="amountInput" value={amountInput} onChange={this.handleOnChange}/>
                            <label className="input-label" htmlFor="select">TYPE</label>
                            <select id="select" className="input" value={optionId} name="optionId" onChange={this.handleOnChange}>
                                {transactionTypeOptions.map(eachOption =>(
                                    <option key={eachOption.optionId} value={eachOption.optionId}>{eachOption.displayText}</option>
                                ))}
                            </select>
                            <button type="submit" className="button">ADD</button>
                        </form>
                        </div>
                        <div className="history-transactions div">
                            <h1 className="transaction-header">History</h1>
                            <div className="transaction-table-container">
                                <ul className="transactions-table">
                                    <li className="transaction-table">
                                        <li className="table-header">
                                            <p className="table-header-cell">Title</p>
                                            <p className="table-header-cell">Amount</p>
                                            <p className="table-header-cell">Type</p>
                                        </li>
                                        {transactionList.map(each =>(
                                            <TransacionItem key={each.id} transactionDetails={each} deleteTransaction ={this.deleteTransaction}/>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default MoneyManager