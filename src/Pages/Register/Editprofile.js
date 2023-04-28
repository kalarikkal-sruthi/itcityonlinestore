import React from 'react'
import { Col, Row, Form, Button, FloatingLabel, Table } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

function Editprofile() {
    const { t, i18n } = useTranslation();
  return (
    <div>
   <Form className='text-start mb-5'>
            <FloatingLabel
              controlId="floatingInput"
              label={t("Customer Name")}
              className="mb-3  required"
               >

            <Form.Control type="text"     
                   id="customer_name"
                  
                    name="customer_name" 
                    placeholder={t("Customer Name")} />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingInput"
              label={t("Email Address")}
              className="mb-3  required"
            >
            <Form.Control type="email"           
                    id="customer_name"
                  
                    name="customer_name"  
                    placeholder={t("name@example.com")} />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingInput"
              label={t("Mobile number")}
              className="mb-3  required"
            >
              <Form.Control type="number" 
                id="customer_mobile"
                
                name="customer_mobile"
              placeholder={t("Mobile number")} />
            </FloatingLabel>


            <FloatingLabel
              controlId="floatingInput"
              label={t("Place / Area")}
              className="mb-3  required"
            >
              <Form.Control type="text" 
                id="customer_pincode"
               
                name="customer_pincode"
              placeholder={t("Place / Area")} />
            </FloatingLabel>



            
            <FloatingLabel controlId="loatingInput" label="Country">
              <Form.Control
                as="text"
                id="country"
                
                name="country"
                className="mb-3  required"
                placeholder={t("Country")}            
              />
            </FloatingLabel>


            <FloatingLabel controlId="floatingTextarea2" label="Remarks">

              <Form.Control
                as="textarea"
                id="remarks"
                
                name="remark"
                placeholder={t("Remarks")}
                className="mb-3  required"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <Button style={{background:"#f5831a",borderColor:"#f5831a"}} className="border-0 me-2 mt-2 " variant="primary" type="submit">
              {t("Submit")}
            </Button>
          </Form>

    </div>
  )
}

export default Editprofile