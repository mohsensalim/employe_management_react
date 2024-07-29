import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { useState } from 'react';

function App() {
  const [employees,setEmployees]= useState([]);
  const [currentEmpoyee,setCurrentEmployee]= useState({
    name:'',
    email:'',
    phone:'',
    job:'',
    sexe:'',
    exp_years:0
  });

  const handleChangeEmployee= (event) =>{

      setCurrentEmployee({...currentEmpoyee , [event.target.name] : event.target.value})

  }
  return (
    <div className="App">
      <div className="container">

          <Header />
        <div className="row">
            <div className="col-md-7">
              {JSON.stringify(currentEmpoyee)}
              <h2 className='text text-info text-start'> Add New Employee</h2>
              <form action=''>
                  <div className="form-group mt-2 ">
                      <label htmlFor='name' className='col-md-12 text-start' >Name</label>
                      <input type="text" className='form-control' name="name" id="name" 
                      value={currentEmpoyee.name} onChange={handleChangeEmployee} />

                  </div>

                  <div className="form-group mt-2">
                      <label htmlFor='email' className='col-md-12 text-start'>Email</label>
                      <input type="email" className='form-control' name="email" id="email"  
                      value={currentEmpoyee.email} onChange={handleChangeEmployee} />

                  </div>

                  <div className="form-group mt-2 ">
                      <label htmlFor='phone' className='col-md-12 text-start'>Phone</label>
                      <input type="text" className='form-control' name="phone" id="phone" 
                      value={currentEmpoyee.phone} onChange={handleChangeEmployee} />

                  </div>

                  <div className="form-group mt-2">
                      <label htmlFor='job' className='col-md-12 text-start'>Job</label>
                      <select name='job' id='' className='form-control' 
                      value={currentEmpoyee.job} onChange={handleChangeEmployee} >
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
                      value={currentEmpoyee.exp_years} onChange={handleChangeEmployee} />

                  </div>

                  <div className="d-flex justify-content-start my-2">

                    <button type="submit" className='btn btn-primary  '>Add Employee</button>
                  </div>
              </form>
            </div>
            <div className="col-md-5">
              Hello Col 2
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

                    <tr>

                      <td>1</td>
                      <td>Mohcine</td>
                      <td>Mohcine@gmail.com</td>
                      <td>+212693736335</td>
                      <td>Web Developer</td>
                      <td>Male</td>
                      <td>1</td>
                      <td>

                        <button type="submit" className='btn btn-danger mx-2'>Delete</button>
                        <button type="submit" className='btn btn-info'>View</button>
                      </td>

                    </tr>

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
