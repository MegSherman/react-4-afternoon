import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount () {
    axios.get (`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then (res => {
      this.setState ({
        students: res.data
      })
    })
  }

  render() {
    const students = this.state.students.map ((student, id) => (
      <Link to = {`/student/${student.id}`} key={id}>
        <h3>
        {this.state.students.first_name} {this.state.students.last_name}
        </h3>
      </Link>
    ))

    return (
      <div className="box">
        <h1>{this.props.match.params.className}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}