import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'
import { Right } from 'react-bootstrap/lib/Media';

//This Component is a child Component of Customers Component
export default class EmployeeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getEmployeeDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getEmployeeDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getEmployeeDetails(id) {
    axios.get('assets/json-response/employee' + id + '.json').then(response => {
      this.setState({employeeDetails: response})
    })
  };

  render() {
    if (!this.state.employeeDetails)
      return (<p>Loading Data</p>)
    return (<div className="employeeDetails">
      <Panel bsStyle="info" className="centeralign" >
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.employeeDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.employeeDetails.data.name}</p>
          <p>Email : {this.state.employeeDetails.data.email}</p>
          <p>Phone : {this.state.employeeDetails.data.phone}</p>
          <p>City : {this.state.employeeDetails.data.city}</p>
          <p>State : {this.state.employeeDetails.data.state}</p>
          <p>Country : {this.state.employeeDetails.data.country}</p>
          <p>Organization : {this.state.employeeDetails.data.organization}</p>
          <p>Job Profile : {this.state.employeeDetails.data.jobProfile}</p>
          <p>Additional Info : {this.state.employeeDetails.data.additionalInfo}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}