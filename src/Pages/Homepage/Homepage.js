import React, { useState,useEffect } from 'react'
import Categories from '../../Components/Homecategory/Homecategory'
import Banner from '../../Components/Homebanner/Homebanner'
import Categoryaccessories from '../../Components/Homecategories/Categoryaccessories'
import Categorycomputer from '../../Components/Homecategories/Categorycomputer'
import Categorymobile from '../../Components/Homecategories/Categorymobile'
import Categorytablet from '../../Components/Homecategories/Categorytablet'
import Categoryhome from '../../Components/Homecategories/Categoryhome'
import Categorywatches from '../../Components/Homecategories/Categorywatches'
import Categorytravel from '../../Components/Homecategories/Categorytravel'
import Personalcare from '../../Components/Homecategories/Personalcare'
import Categorycameras from '../../Components/Homecategories/Categorycameras'
import Categoryoffer from '../../Components/Homecategories/Categoryoffer'
import Categorygaming from '../../Components/Homecategories/Categorygaming'



function Homepage() {
    return (
        <div>
       
            <Banner />
            <Categories />
            <Categoryaccessories/>
            <Categorycomputer/>
            <Categorymobile/>
            <Categorytablet/>
            <Categoryhome/>
            <Categorywatches/>
            <Categorytravel/>
            <Personalcare/>
            <Categorycameras/>
            <Categoryoffer/>
         <Categorygaming/>
        </div>
    )
}

export default Homepage
