import React, { Component } from 'react'

class contact extends Component {
    render() {
        return (
        
    <form className="container col-md-4">
         <label for="formGroupExampleInput">First Name</label>
         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter First Name" />
         <label for="formGroupExampleInput2">Last Name</label>
         <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Last Name" />
         <label for="formGroupExampleInput2">Email</label>
         <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" />
         <label for="exampleFormControlTextarea1">Enter Text</label>
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Text"></textarea>
         <button type="button" class="btn btn-outline">Submit</button>
   </form>
        )
    }
}
export default contact;
