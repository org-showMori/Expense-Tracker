import React from 'react';
import useForm from 'components/useForm';
import validate from 'components/validate';

function TransactionFactory() {

  const { values, errors, isSubmit, changeHandler, submitHandler} = useForm({
    initialValues: {type: "지출", date: "", text: "", amount: 0},
    onSubmit: (values) => {},
    validate,
    });

  let isExpense = true;

  if(values.type === '지출'){
    isExpense = true;
  } else if(values.type === '수입'){
    isExpense = false;
  }

  return (
    <form onSubmit={submitHandler}>
      <fieldset id="type">
        <legend>Transaction type</legend>
        <label htmlFor="typePlus">수입</label>
        <input
          type="radio"
          name="type"
          id="typePlus"
          className="transactionType"
          value="수입"
          checked={!isExpense}
          onChange={changeHandler}
        />
        <label htmlFor="typeMinus">지출</label>
        <input
          type="radio"
          name="type"
          id="typeMinus"
          className="transactionType"
          value="지출" 
          checked={isExpense}
          onChange={changeHandler}
        />
        
      </fieldset>

      <fieldset id="info">
        <legend>Transaction Info</legend>

        <label htmlFor="date">Date</label>
        {errors.date && <span>{errors.date}</span>}
        <input type="date" name="date" value={values.date} onChange={changeHandler} required/>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={values.text}
          onChange={changeHandler}
          name="text"
          id="text"
          placeholder="Enter text"
          required
        />
        <label htmlFor="amount">Amount</label>
        {errors.amount && <span>{errors.amount}</span>}
        <input
          type="number"
          id="amount"
          name="amount"
          value={values.amount}
          onChange={changeHandler}
          required
        />
      </fieldset>
      
      <input type="submit" value="Add transaction" disabled={isSubmit}/>
    </form>
  );
}

export default TransactionFactory
