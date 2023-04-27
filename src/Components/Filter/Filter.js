import React, { useState } from 'react'
import { Button, Badge, ListGroup, InputGroup } from 'react-bootstrap'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Form from 'react-bootstrap/Form';
import { Switch, label } from '@mui/material';
import Slider from '@mui/material/Slider';
import './Filter.css'
import Pricefiltration from './Pricefiltration';
import Filtrationproductbycategory from './Filtrationproductbycategory';
import { useParams } from 'react-router-dom';
import Filtrationbybrand from './Filtrationbybrand';
import Filtrationbycolor from './Filtrationbycolor';




function Filter() {
  const {category}=useParams()
  console.log(category);
  const [expanded, setExpanded] = useState(false)
  const [expandedtwo, setExpandedtwo] = useState(false)
  const [expandedthree, setExpandedthree] = useState(false)
  const [expandedfour, setExpandedfour] = useState(false)

  return (
    <div className='filtration'>

      <div className='filter-main '>
        <div className='filter '>


          <h5 className="fw-bold mb-0" onClick={() => { setExpanded(!expanded) }}>Categories</h5>

          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpanded(!expanded) }}>
            {
              !expanded ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} variant="outline" /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} variant="outlined"></AddOutlinedIcon>

            }

          </Button>
        </div>
        {!expanded &&
          <>
           <Filtrationproductbycategory category={category}/>
          </>
        }
        <hr></hr>
        <div className='filter'>
          <h5 className="fw-bold mb-0" onClick={() => { setExpandedfour(!expandedfour) }}>Price</h5>
          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpandedfour(!expandedfour) }}>
            {!expandedfour ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} variant="outline" /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} variant="outlined" />
            }
          </Button>
        </div>
        {!expandedfour &&
          <>
             <Pricefiltration  />
            {/* <div className='  '> 
        <label>KD:</label>
       <input className='slider w-25' type="text" id="fname" name="fname"></input>
    
       <label>KD:</label>
       <input className='slider w-25' type="text" id="fname" name="fname"></input>
    
       </div>  */}
            {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}

          </>
        }
        <hr></hr>
        <div className='filter'>
          <h5 className="fw-bold mb-0" onClick={() => { setExpandedtwo(!expandedtwo) }}>Brand</h5>
          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpandedtwo(!expandedtwo) }}>

            {!expandedtwo ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} variant="outline" /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} variant="outlined" />
            }
          </Button>
        </div>
        {!expandedtwo &&
        <Filtrationbybrand/>
          // <>
          //   <div className='checkboxes'>
          //     <input type="checkbox" />
          //     <label for="vehicle1" style={{ marginBottom: '2px', marginLeft: "4px" }}>Apple</label>
          //     <br></br>
          //     <input type="checkbox" />
          //     <label for="vehicle2" style={{ marginBottom: '2px', marginLeft: "4px" }}>Huawei</label>
          //     <br></br>
          //     <input type="checkbox" />
          //     <label for="vehicle3" style={{ marginBottom: '2px', marginLeft: "4px" }}>Samsung</label>
          //     <br></br>
          //   </div>
          // </>
        }
        <hr></hr>
        <div className='filter'>
          <h5 className="fw-bold text-start" onClick={() => { setExpandedthree(!expandedthree) }}>Color</h5>
          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpandedthree(!expandedthree) }}>
            {!expandedthree ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} />
            }
          </Button></div>
        {!expandedthree &&
        <>
        <Filtrationbycolor />
        </>
          // <>
          //   <div className='checkboxes'>
          //     <input type="checkbox" />
          //     <label for="vehicle1" style={{ marginBottom: '2px', marginLeft: "4px" }}> Aqua Blue</label>

          //     <br></br>
          //     <input type="checkbox" />
          //     <label for="vehicle2" style={{ marginBottom: '2px', marginLeft: "4px" }}>Black</label><br></br>
          //     <input type="checkbox" />
          //     <label for="vehicle3" style={{ marginBottom: '2px', marginLeft: "4px" }}>Blue</label><br></br>
          //   </div>
          // </>
        }
      </div></div>
  )
}

export default Filter
