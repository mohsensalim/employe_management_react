import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { useState } from 'react';

function App() {
  const [employees,setEmployees]= useState([]);
  const [currentEmployee,setCurrentEmployee]= useState({
    name:'',
    email:'',
    phone:'',
    job:'',
    sexe:'',
    exp_years:0
  });

  const [selectedEmployee,setSelectedEmployee] = useState(null);

  const handleChangeEmployee= (event) =>{

      setCurrentEmployee({...currentEmployee , [event.target.name] : event.target.value});
      

  }


  const handleSubmit = (event) => {

          event.preventDefault();
          let newEmp = {...currentEmployee, id: employees.length +1};
       
          setEmployees([...employees, newEmp]);
          setCurrentEmployee({
            
            id:'',
            name:'',
            email:'',
            phone:'',
            job:'',
            sexe:'',
            exp_years:0

          })
  }

  const handlTest = ()=>{
    console.log(currentEmployee);
  }

  const deleteEmployee = (id) =>{ 

        setEmployees(employees.filter((item) => item.id != id))




  }

  return (
    <div className="App">
      <div className="container">

          <Header />
        <div className="row">
            <div className="col-md-7">
             {/* {JSON.stringify(selectedEmployee)} */}
              <h2 className='text text-info text-start'> Add New Employee</h2>
              <form onSubmit={handleSubmit}>
                  <div className="form-group mt-2 ">
                      <label htmlFor='name' className='col-md-12 text-start' >Name</label>
                      <input type="text" className='form-control' name="name" id="name" 
                      value={currentEmployee.name} onChange={handleChangeEmployee} />

                  </div>

                  <div className="form-group mt-2">
                      <label htmlFor='email' className='col-md-12 text-start'>Email</label>
                      <input type="email" className='form-control' name="email" id="email"  
                      value={currentEmployee.email} onChange={handleChangeEmployee} />

                  </div>

                  <div className="form-group mt-2 ">
                      <label htmlFor='phone' className='col-md-12 text-start'>Phone</label>
                      <input type="text" className='form-control' name="phone" id="phone" 
                      value={currentEmployee.phone} onChange={handleChangeEmployee} />

                  </div>

                  <div className="form-group mt-2">
                      <label htmlFor='job' className='col-md-12 text-start'>Job</label>
                      <select name='job' id='' className='form-control' 
                      value={currentEmployee.job} onChange={handleChangeEmployee} >
                            <option value="">Select job</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Designer">Designer</option>
                            <option value="Data Engineer">Data Engineer</option>
                            <option value="Mobile Developer">Mobile Developer</option>

                      </select>

                  </div>

                  <div className="form-group mt-2">

                      <label htmlFor="sexe" className='col-md-12 text-start'>Sexe</label>
                      <div className='col-md-12 text-start'>
                        <div className="form-check form-check-inline">
                          <input class="form-check-input"  type="radio" name="sexe" checkeds id="male" 
                          value='male' onChange={handleChangeEmployee} />
                          <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="sexe" id="female"
                           value='female' onChange={handleChangeEmployee} />
                          <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                      </div>
                  </div>


                  <div className="form-group mt-2">

                      <label htmlFor="exp_years" className='col-md-12 text-start'>Experience years</label>
                      <input type="number"  max={20} name="exp_years" id="exp_years" className='form-control' 
                      value={currentEmployee.exp_years} onChange={handleChangeEmployee} />

                  </div>

                  <div className="d-flex justify-content-start my-2">

                    <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Add Employee</button>
                    <button className='btn btn-warning' onClick={handlTest}>Test</button>
                  </div>
              </form>
            </div>
            <div className="col-md-5">
              {
            
                    selectedEmployee && (
                        <div className='d-flex'>

                            <img src={selectedEmployee.sexe === "male" ? "152.jpg" : "profil.jpg"} alt="emp_img" width={200} height={200} />
                            <div className="emp_info">

                                <ul>

                                    <li className='list-unstyled text text-start'><strong>Name</strong></li>
                                    <li className='list-unstyled text text-start'>{selectedEmployee.name}</li>
                                    <li className='list-unstyled text text-start'><strong>Email</strong></li>
                                    <li className='list-unstyled text text-start'>{selectedEmployee.email}</li>
                                    <li className='list-unstyled text text-start'><strong>Phone</strong></li>
                                    <li className='list-unstyled text text-start'>{selectedEmployee.phone}</li>
                                    <li className='list-unstyled text text-start'><strong>Job</strong></li>
                                    <li className='list-unstyled text text-start'>{selectedEmployee.job}</li>
                                    <li className='list-unstyled text text-start'><strong>{selectedEmployee.exp_years} Years Of Experience</strong></li>
                                    

                                </ul>


                            </div>


                        </div>


                    )
              }
            </div>
          </div>



          <div className="mt-4">

          <h2 className="text text-info col-md-12 text-start">Employees List</h2>
          <div className="row">

              <div className="col-md-12 text-start">

                <table className='table table-bordered table-responsive table-striped'>

                  <thead>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Job</th>
                      <th>Sexe</th>
                      <th>Experience/Years</th>
                      <th>Action</th>

                  </thead>

                  <tbody>

                    

                        {
                          employees.map( (item) => {

                              return(

                                <> 
                                
                                
                                    <tr onClick={() => setSelectedEmployee(item)}>
                                      <td>{ item.id}</td>
                                      <td>{ item.name }</td>
                                      <td>{ item.email }</td>
                                      <td>{ item.phone }</td>
                                      <td>{ item.job }</td>
                                      <td>{ item.sexe }</td>
                                      <td>{ item.exp_years }</td>
                                      <td> <button className='btn btn-danger' onClick={() => deleteEmployee(item.id)}>Delete</button> </td>
                                    
                                    </tr>
                                
                                
                                </>

                                    )

                          } )
                        }

                    

                  </tbody>


                </table>

              </div>

          </div>

        
        </div>
      </div>

      

    </div>
  );
}

export default App;
