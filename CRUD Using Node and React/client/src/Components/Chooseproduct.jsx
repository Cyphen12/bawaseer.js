import React from 'react'
import Leftnavbar from './Leftnavbar'
import Table from 'react-bootstrap/Table';
import Top from './Top'
import frame from '../images/Frame.png'
import p1 from "../images/p1.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.png"
import p4 from "../images/p4.png"
import p5 from "../images/p5.png"
import p6 from "../images/p6.png"
import {Link} from 'react-router-dom'

function Chooseproduct() {
  return (
    <div style={{width:"100%"}} className='d-flex flex-row '>
    <div className='d-flex flex-column'>
    <div style={{backgroundColor:"#001738", display:"inline",width: "64px" ,paddingBottom:"35px",paddingTop:"20px"}}>
            <img src={frame}></img>
          </div>
          <Leftnavbar/>
          </div>
    
          <div className='d-flex flex-column flex-grow-1'>
          <Top/>
          <div className='progressbar'>
    <div className='d-flex flex-column'>
        <div><h3 style={{marginTop:"50px",marginLeft:"15px"}}>Your Ad campaign</h3></div>
        <div style={{fontSize:"12px",color:"rgba(0, 0, 0, 0.5)" ,marginLeft:"20px",marginBottom:"30px"}}>Launch your app in just 4 easy Steps</div>
    </div>
    
    
    
    <div className='d-flex coloumn' >
    
         <div className="md-stepper-horizontal orange">
        <div className="md-step active done">
          <div className="md-step-circle"><span>1</span></div>
          <div className="md-step-title">What do you want to do</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step active editable">
          <div className="md-step-circle"><span></span></div>
          <div className="md-step-title">Choose product</div>
          <div className="md-step-optional"></div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step  ">
          <div className="md-step-circle"><span></span></div>
          <div className="md-step-title">Campaign settings</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step last">
          <div className="md-step-circle last"><span> </span></div>
          <div className="md-step-title">Ready to go</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
      </div>
    
    
    
      </div>
    
    {/*  content selection   ------------------------------- */}
    
    
      <div style={{background:"white", marginLeft:"40px",marginRight:"40px"}}>
     
       <Table style={{borderCollapse: 'separate',borderSpacing: '30px 24px'}}hover>
          <thead>
            <tr>
              
              <th colSpan={3}>Choose the Product <span style={{fontSize:"12px", color:"grey"}}>step(2 of 4)</span></th>
             
            </tr>
          </thead>
          <tbody>
            <tr style={{padding:"25px",borderRadius:"14px"}}>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={p1}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Blueberry cake with raw toppings</div>
  <div class="p-2 bd-highlight">Rs 2.290</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={p5}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Best raw topping choco cake</div>
  <div class="p-2 bd-highlight">Rs 1.234</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={p6}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Custard mixed with fruit cake</div>
  <div class="p-2 bd-highlight">Rs 2.456</div>
</div>
</div>
              </td>
            </tr>
            <tr>
             
            <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={p2}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Chocolate truffle cake</div>
  <div class="p-2 bd-highlight">Rs 2.190</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={p3}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Brownie cake with fluffy creame</div>
  <div class="p-2 bd-highlight">Rs 1.222</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={p4}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Ferro rocher cake</div>
  <div class="p-2 bd-highlight">Rs 1.234</div>
</div>
</div>
              </td>
            </tr>
            {/* <tr>
    
              <td style={{padding:"25px"}} >Larry the Bird</td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>@twitter</td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>@twitter</td>
            </tr> */}
             <tr>
              <td colSpan={3}>
                <Link to='/CampaignSettings'>
                <button style={{float:"right"}}type="button" class="btn btn-primary">Continue</button>

                </Link>
                
                 </td>
            </tr>
          </tbody>
        </Table>
    </div>
    
    {/* content selction ends --------------------------------- */}
    </div>
    </div>
    
    
        </div>
  )
}

export default Chooseproduct