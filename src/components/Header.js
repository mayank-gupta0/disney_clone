import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {
    selectUserName,
    selectUserPhoto,
    setSignOut,
    setUserLogin,
} from '../features/user/userSlice';

import { useSelector,useDispatch } from 'react-redux';
import {auth,provider} from '../firebase';

function Header() {
    const dispatch=useDispatch()
    const history=useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL,
    
                }))
                history.push("/")

            }
        })

    },[])

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user=result.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,

            }))
            history.push("/")
        })

    }

    const signOut=()=>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut())
            history.push("/login")
        })
    }
    return (
        <Nav>
            {/* <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1280px-Disney%2B_logo.svg.png"/> */}

            <Link to="/">
                <Logo
                    src="/images/logo.svg" />
            </Link>
            { !userName ?( 
                <LoginContainer>
                   <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                
                ):

            <>

                <NavMenu>
                    <a>
                        <img src="/images/home-icon.svg" />
                        <span>Home</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" />
                        <span>Search</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" />
                        <span>Watchlist</span>
                    </a>
                    <a>
                        <img src="/images/original-icon.svg" />
                        <span>Original</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" />
                        <span>Movies</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" />
                        <span>Series</span>
                    </a>

                </NavMenu>

                <UserImg onClick={signOut} src="https://i.pinimg.com/736x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg" />




            </>

            }



        </Nav>
    )
}

export default Header

const Nav = styled.nav`
      height:70px;
      background:#090b13;
      display:flex;
      align-item:center;
      padding:0px 12px;
      overflow-x:hidden;


`

const Logo = styled.img`
width:80px;
padding: 5px 0px;


`
const NavMenu = styled.div`
   display:flex;
   flex:1;
   margin-left:25px;

   a{
       display:flex;
       align-items:center;
       padding-left:12px;
       padding-right:12px;
       cursor:pointer;
       

       img{
           height:20px;
       }

       span{
           font-size:13px
           letter-spacing:1.42px;
           position:relative;

           &:after{     
               content:"";
               height:2px;
               background:white;
               position:absolute;
               left:0;
               right:0;
               bottom:-6px;
               opacity:0;
               transform-origin:left center;
               transform:scaleX(0);
               transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
           }
       }
       &:hover{
           span:after{
               transform:scaleX(1);
               opacity:1;

           }
       }
   }
`

const UserImg = styled.img`
          height:40px;
          width:40px;
          border-radius:50%;
          cursor:pointer;
          margin-top:15px;
          text-align:center;
}

`

const Login=styled.div`
       border:1px solid #f9f9f9;
       height:33px;
       margin-top:13px;
       padding:8px 16px;
       border-radius:4px;
       letter-spacing:1.5px;
       text-transform:uppercase;
       background-color:rgba(0,0,0,0.6);
       transition:all 0.2s ease 0s;
       cursor:pointer;
       &:hover{
           background-color:#f9f9f9;
           color:#000;
           border-color:transparent;

       }


`

const LoginContainer=styled.div`
       display:flex;
       flex:1;
       flex-direction:row-reverse;

`