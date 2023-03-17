import {useRef, useState} from 'react';
export const Form = ()=> {
    const [form , setForm] = useState({
        username: "",
        age: "",
        email:"",
    })
    const ref = useRef(null)
    const handleChange = (e) => {
    //console.log(e.target.name , e.target.value)
    console.log(ref.current.files )
    const {name , value} = e.target;
    setForm({
        ...form,
        [name] : value
    })
    }
    
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
}

    return <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name='username' placeholder="Enter Name" />
        <input onChange={handleChange} type="number" name='age' placeholder="Enter Age" />
        <input onChange={handleChange} type="email" name='email' placeholder="Enter Email" />
        <input ref={ref} onChange={handleChange} type="file" />
        <input type="submit" value="submit" />
    </form>
}