import { Description } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        < Container>
            <CTA>
                <CTALogoOne src="/images/viewers-disney.png" />
                <CTALogoOne src="/images/viewers-pixar.png" />
                <CTALogoOne src="/images/viewers-marvel.png" />
            </CTA>
            <SignUp>GET ALL ThERE</SignUp>
            <Des>The Walt Disney Company, formerly TWDC Holdco 613 Corp, is a worldwide entertainment company. The Company operates in four business segments: Media Networks, Parks Experiences and Products, Studio Entertainment, and Direct-To-Consumer and International.</Des>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </ Container>
    )
}

export default Login

const Container = styled.div`
 
      position:relative;
      height:100vh;
    

      &:before{
          background-position:top;
          background-size:cover;
          background-repeat:no-repeat;
          background-image:url('/images/login-background.jpg') ;
          content:"";
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          opacity:0.6;
          z-index:-1;

      }


`

const CTA = styled.div`
   display:flex;
   max-width:600px;
   justify-content:center;
   margin-left:auto;
   margin-right:auto;
   padding:100px 40px
   

`
const CTALogoOne = styled.img`
    width:205px;
    margin-bottom:-120px;

`

const SignUp = styled.a` 
    display:flex;
    justify-content:center;
    width:80%;
    margin-left:auto;
    margin-right:auto;
    background-color:#0063e5;
    font-weight:bold; 
    padding:13px 0px;
    border-radius:4px;
    font-size:18px;
    cursor:pointer;
    transition:all 250ms ;
    letter-spacing:1.5px;
    &:hover{
        background:#0483ee;
    }
`

const Des = styled.p`

  width:82%;
  margin-left:auto;
  margin-right:auto;
  font-size:11px;
  letter-spacing:1.5px;
  text-align:center;
  padding:12px 0px;
  line-height:1.5;


`
const CTALogoTwo=styled.img`
  display:flex;
  width:80%;
  margin-left:auto;
  margin-right:auto;
  padding-top:10px;
`