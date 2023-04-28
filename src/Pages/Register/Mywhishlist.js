import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Mywhishlist() {
  return (
    <div>
        <Container className='mt-5'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Avail</th>
          <th>Unit Price</th>
          <th>Qty</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
         
        </tr>
        
      </tbody>
    </Table>
    </Container>


    </div>
  )
}

export default Mywhishlist