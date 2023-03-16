import '../App.css'
export const TodoItem =({title,status,id,handleDelete})=>{

    return (<>
    <div>
    <h1 className='too'>{title} {status? "Done" : "Not Done"}</h1>
    <button onClick={()=>handleDelete(id)}>Mark as Done</button>
    </div>
    </>
    )
}