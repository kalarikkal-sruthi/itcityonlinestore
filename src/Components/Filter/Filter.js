import React, { useState } from 'react'
import { Button} from 'react-bootstrap'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './Filter.css'
import Pricefiltration from './Pricefiltration';
import Filtrationproductbycategory from './Filtrationproductbycategory';
import { useParams } from 'react-router-dom';
import Filtrationbybrand from './Filtrationbybrand';
import Filtrationbycolor from './Filtrationbycolor';
import { useTranslation } from 'react-i18next';



function Filter() {
  const { t, i18n } = useTranslation();
  const { category_id } = useParams()
  const [expanded, setExpanded] = useState(false)
  const [expandedtwo, setExpandedtwo] = useState(false)
  const [expandedthree, setExpandedthree] = useState(false)
  const [expandedfour, setExpandedfour] = useState(false)

  return (
    <div className='filtration'>

      <div className='filter-main '>
        <div className='filter'>


          <h5 className="fw-bold mb-0" onClick={() => { setExpanded(!expanded) }}>{t("Categories")}</h5>

          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpanded(!expanded) }}>
            {
              !expanded ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} variant="outline" /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} variant="outlined"></AddOutlinedIcon>

            }

          </Button>
        </div>
        {!expanded &&
          <>
            <Filtrationproductbycategory category={category_id} />
          </>
        }
        <hr></hr>
        <div className='filter'>
          <h5 className="fw-bold mb-0" onClick={() => { setExpandedfour(!expandedfour) }}>{t("Price")}</h5>
          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpandedfour(!expandedfour) }}>
            {!expandedfour ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} variant="outline" /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} variant="outlined" />
            }
          </Button>
        </div>
        {!expandedfour &&
          <>
            <Pricefiltration />

          </>
        }
        <hr></hr>
        <div className='filter'>
          <h5 className="fw-bold mb-0" onClick={() => { setExpandedtwo(!expandedtwo) }}>{t("Brands")}</h5>
          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpandedtwo(!expandedtwo) }}>

            {!expandedtwo ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} variant="outline" /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} variant="outlined" />
            }
          </Button>
        </div>
        {!expandedtwo &&
          <Filtrationbybrand />
        }
        <hr></hr>
        <div className='filter'>
          <h5 className="fw-bold text-start" onClick={() => { setExpandedthree(!expandedthree) }}>{t("Color")}</h5>
          <Button style={{ backgroundColor: "white", color: '#f5831a;' }} className=" border-0" onClick={() => { setExpandedthree(!expandedthree) }}>
            {!expandedthree ? <RemoveOutlinedIcon sx={{ color: "#f5831a;" }} /> : <AddOutlinedIcon sx={{ color: "#f5831a;" }} />
            }
          </Button></div>
        {!expandedthree &&
          <>
            <Filtrationbycolor />
          </>
         
        }
      </div>
      
      </div>
  )
}

export default Filter
