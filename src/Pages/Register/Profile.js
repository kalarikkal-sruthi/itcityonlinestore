import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUser } from '../../Redux/userSlice'
import { Container,Col,Row,Table } from 'react-bootstrap'
import { useEffect } from 'react'
import { getUserdetails,fetchAsyncuserdetails} from '../../Redux/userSlice';

function Profile() {
  const Userdetails = useSelector(getUser)
  const userdetails=useSelector(getUserdetails)
  const dispatch = useDispatch()
  const userdata=Userdetails.user
  console.log(userdata);
  useEffect(() => {
    dispatch(fetchAsyncuserdetails());
   
  }, [dispatch])

  return (
    <div>

<Container className="m-5">
  <Row>

  <Col>
  <Table striped bordered hover>
  
  <thead>
        <tr>
          <th>My Profile</th>
          
        </tr>
      </thead>
      <tbody>
        <tr><td>Name:</td>
        
        <td>{userdata.customer_name}</td>
        </tr>
        <tr><td>Mobile Number:</td></tr>
        <tr><td>Place/Area:</td></tr>
        <tr><td>Block Number:</td></tr>
        <tr><td>House/Building Number:</td></tr>
        <tr><td>Street/Avenue Number:</td></tr>
        <tr><td>Place/Area:</td></tr>
      
        
       
         
      </tbody>
      </Table>
  </Col>
  </Row>
</Container>

    </div>
  )
}

export default Profile