import {useState, useEffect} from 'react';
import {dbService, TRANSACTIONS} from 'fBase';

function useForm({ initialValues, onSubmit}) {
    const [values, setValues] = useState(initialValues);
    // const [errors, setErrors] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const addObjFirebase = async(obj) => {
        await dbService.collection(TRANSACTIONS).doc(`${obj.id}`).set(obj);
    };

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setValues({ ...values, [name]: value});
        setIsSubmit(false);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setIsSubmit(true);
        
      const transactionObj = {
          type: values.type,
          date: values.date,
          id: Date.now(),
          text: values.text,
          amount: values.amount,
      };
      addObjFirebase(transactionObj);
      setValues(initialValues);
    };

    useEffect(() => {
        if(isSubmit) {
            onSubmit(values);
        } 
        setIsSubmit(false);
    }, [isSubmit, values, onSubmit]);

    return {
        values,
        isSubmit,
        changeHandler,
        submitHandler
    }
}

export default useForm;