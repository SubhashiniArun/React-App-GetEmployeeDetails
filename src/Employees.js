import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import EmployeeDetails from './EmployeeDetails'
import axios from 'axios'

export default class Employees extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedEmployee: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getEmployeeData();
  }

  //Function to get the Customer Data from json
  getEmployeeData() {
    axios.get('assets/json-response/employeeList.json').then(response => {
      this.setState({employeeList: response})
    })
  };

  render() {
    if (!this.state.employeeList)
      return (<p>Loading data</p>)
    return (<div className="addmargin" style={{
      margin:"20px"
    }}>
      <div className="col-md-3">
        {

          this.state.employeeList.data.map(employee => <Panel bsStyle="info" key={employee.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{employee.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{employee.email}</p>
              <p>{employee.phone}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedEmployee: employee.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <EmployeeDetails val={this.state.selectedEmployee}/>
      </div>
    </div>)
  }

}