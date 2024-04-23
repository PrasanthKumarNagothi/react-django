import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')

  useEffect(() => {
    (
      async () => {
        const response = await axios.get('/api/employees');
        setEmployees(response.data)
        console.log(response.data);
      }
    )()
  }, []);

  const sendemp = (e) => {
    e.preventDefault();
    (
      async () => {
        let data = {
          name,
          email,
          designation
        }
        console.log(data);
        const response = await axios.post('/api/employees', data);
        console.log('POST', response.data);
      }
    )()
  };
  const delemp = (e) => {
    e.preventDefault();
    (
      async () => {
        let id = e.currentTarget.value;
        console.log(data);
        const response = await axios.delete(`/api/employees/delete/${id}`, data);
        console.log('DELETE', response.data);
      }
    )()
  };

  
  let data = employees.map(emp => {
    return (
      <tr key={emp.id}>
        <td key={emp.name}>{emp.name}</td>
        <td key={emp.email}>{emp.email}</td>
        <td key={emp.designation}>{emp.designation}</td>
        <td>
          <button value={emp.id} onClick={delemp}>Delete</button>  
        </td>
      </tr>
    )
  })
 

  return (
    <>
      <h1>API Handling</h1>
      <table border={1}>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>

      <form onSubmit={sendemp}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.currentTarget.value)}/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)}/>
        <input type="text" placeholder="Designation" onChange={(e) => setDesignation(e.currentTarget.value)}/>
        <input type="submit"/>
      </form>
    </>
  );
}

export default App;
