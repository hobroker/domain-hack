import React, { Component } from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './App.css'
import 'whatwg-fetch'

class App extends Component {
  state = {
    phrase: '',
    results: []
  }

  constructor (props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (e) {
    this.setState({ phrase: e.target.value })
  }

  render () {
    const { phrase, results } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <Container>
            <Row>
              <Col md={{ size: 8, offset: 2 }}>
                <Form>
                  <h2>Domain hack</h2>
                  <FormGroup>
                    <Label for='form-phrase'>Word/phrase</Label>
                    <Input type='text'
                           id='form-phrase'
                           onChange={this.onInputChange}
                           value={phrase}
                           placeholder='Ex: delicious' />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </header>
        <Container>
          <table className='table'>
            <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Domain</th>
              <th scope='col'>URL</th>
              <th scope='col'>Country</th>
            </tr>
            </thead>
            <tbody>
            {results.map((item, index) => (
              <tr>
                <th scope='row'>${index + 1}</th>
                <td>{item.domain}</td>
                <td>{item.url}</td>
                <td>{item.country}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Container>
      </div>
    )
  }
}

export default App
