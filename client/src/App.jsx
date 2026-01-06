import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-center text-primary'>Library Management System</h1>
     <div className="container d-flex  p-2">
      <div className="formdiv col-4 p-2  m-2 rounded shadow bg-light">
            <form >
              <h2>Enter Book Details</h2>
              <label className='form-label' name='bCode'>Book Code :</label>
              <input type="text" placeholder='Enter book code'  name='bCode' className='form-control'/>
               <label className='form-label'  name='bName'>Book :</label>
              <input type="text" placeholder='Enter book Name'   name='bName' className='form-control'/>
               <label className='form-label'   name='bAuthor'>Author :</label>
              <input type="text" placeholder='Enter Author name' className='form-control'   name='bAuthor'/>
               <label className='form-label'   name='bPrice'>Price :</label>
              <input type="Number" placeholder='Enter book price' className='form-control'   name='bPrice'/>
              <button type='submit' className='form-control bg-success mt-2'>Add Book</button>
            </form>
      </div>
      <div className="tablediv col-8 p-2 shadow m-2 rounded bg-light">
              <table className='table table-bordered shadow'>
                <thead className='table-light'>
                  <tr>
                     <th>SR.NO</th>
                     <th>Book Code</th>
                     <th>Book Name</th>
                     <th>Author</th>
                     <th>Price</th>
                     <th>Delete</th>
                     <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>1</td>
                      <td>001</td>
                      <td>Hello World</td>
                      <td>Tanuja</td>
                      <td>299</td>
                      <td><button className='btn btn-danger'>Delete</button></td>
                      <td><button className='btn btn-warning'>Edit</button></td>
                    </tr>
                </tbody>
              </table>
      </div>
     </div>
    </>
  )
}

export default App
