import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
      const handleBlur = e => {
      const newInfo = {...info};
      newInfo[e.target.name] = e.target.value
      setInfo(newInfo)

      }
      const handleFileChange = (e) =>{
      const newFile = e.target.files[0]
      setFile(newFile)


      }


      const handleSubmit = (e) =>{

        const formData = new FormData()
        formData.append('file', file)
        formData.append('email', info.email)
        formData.append('name', info.name)
        fetch('https://dry-forest-66504.herokuapp.com/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          alert('done')
        })
        .catch(error => {
          console.error(error)
        })
      
      e.preventDefault()
      }
    return (
        <section>
            <div className="container-fluid row containerStyle">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5 p-4">
                    <h5 className="text-brand">Add a Doctor</h5>

                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword1" placeholder="Your name" name="name" />
                        </div>
                        <div class="form-group">
                        <label for="exampleCheck1">Upload</label>
                        <input type="file" onChange={handleFileChange} class="form-control" />
                            
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>


                </div>
            </div>
        </section>
    );
};

export default AddDoctor;