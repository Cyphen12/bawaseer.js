import React from "react";
import pic5 from '../images/pic5.png'
import frame from"../images/Frame.png"
function Header() {
  return (
    <div class="header" >

<div style={{backgroundColor:"#001738", display:"inline",width: "54px" ,paddingTop:"20px"}}>
        <img src={frame}></img>
      </div>
        {/* <svg class="navbar-logo navbar-logo-dark" alt="KloudLearn" width="270" height="49" viewBox="0 -15 290 70" fill="none">
            <rect width="50" height="50" rx="3" fill="#FF1D1D"></rect>
            <path d="M33.0035 37.8087H18.5315V12.0327H21.8435V34.6407H33.0035V37.8087Z" fill="white"></path>
            <path d="M64.9717 13.5791H67.4619V22.7432L77.207 13.5791H80.5107L68.7734 24.5361L81.4238 38H78.1865L67.4619 26.6113V38H64.9717V13.5791ZM84.3291 12.9648H86.6533V38H84.3291V12.9648ZM100.034 19.4727C102.812 19.4727 105.114 20.4798 106.94 22.4941C108.601 24.3314 109.431 26.5062 109.431 29.0186C109.431 31.542 108.551 33.75 106.791 35.6426C105.042 37.5241 102.79 38.4648 100.034 38.4648C97.2673 38.4648 95.0039 37.5241 93.2441 35.6426C91.4954 33.75 90.6211 31.542 90.6211 29.0186C90.6211 26.5173 91.4512 24.348 93.1113 22.5107C94.9375 20.4854 97.2451 19.4727 100.034 19.4727ZM100.034 21.7471C98.1084 21.7471 96.4538 22.4609 95.0703 23.8887C93.6868 25.3164 92.9951 27.043 92.9951 29.0684C92.9951 30.3743 93.3105 31.5918 93.9414 32.7207C94.5723 33.8496 95.4245 34.724 96.498 35.3438C97.5716 35.9525 98.7503 36.2568 100.034 36.2568C101.318 36.2568 102.497 35.9525 103.57 35.3438C104.644 34.724 105.496 33.8496 106.127 32.7207C106.758 31.5918 107.073 30.3743 107.073 29.0684C107.073 27.043 106.376 25.3164 104.981 23.8887C103.598 22.4609 101.949 21.7471 100.034 21.7471ZM113.465 19.9375H115.806V28.3711C115.806 30.4297 115.916 31.8464 116.138 32.6211C116.47 33.7279 117.101 34.6022 118.03 35.2441C118.971 35.8861 120.089 36.207 121.384 36.207C122.679 36.207 123.774 35.8971 124.671 35.2773C125.578 34.6465 126.204 33.8219 126.547 32.8037C126.779 32.1064 126.896 30.6289 126.896 28.3711V19.9375H129.27V28.8027C129.27 31.293 128.976 33.1689 128.39 34.4307C127.814 35.6924 126.94 36.6829 125.767 37.4023C124.604 38.1107 123.144 38.4648 121.384 38.4648C119.624 38.4648 118.152 38.1107 116.968 37.4023C115.795 36.6829 114.915 35.6868 114.328 34.4141C113.753 33.1302 113.465 31.2044 113.465 28.6367V19.9375ZM152.479 12.9648V38H150.188V34.8955C149.214 36.0798 148.118 36.9707 146.9 37.5684C145.694 38.166 144.371 38.4648 142.933 38.4648C140.376 38.4648 138.19 37.5407 136.375 35.6924C134.571 33.833 133.669 31.5752 133.669 28.9189C133.669 26.318 134.582 24.0934 136.408 22.2451C138.234 20.3968 140.431 19.4727 142.999 19.4727C144.482 19.4727 145.821 19.7881 147.017 20.4189C148.223 21.0498 149.28 21.9961 150.188 23.2578V12.9648H152.479ZM143.182 21.7139C141.887 21.7139 140.691 22.0348 139.596 22.6768C138.5 23.3076 137.626 24.1986 136.973 25.3496C136.331 26.5007 136.01 27.7181 136.01 29.002C136.01 30.2747 136.336 31.4922 136.989 32.6543C137.642 33.8164 138.517 34.724 139.612 35.377C140.719 36.0189 141.903 36.3398 143.165 36.3398C144.438 36.3398 145.644 36.0189 146.784 35.377C147.924 34.735 148.799 33.8662 149.407 32.7705C150.027 31.6748 150.337 30.4408 150.337 29.0684C150.337 26.9766 149.645 25.2279 148.262 23.8223C146.889 22.4167 145.196 21.7139 143.182 21.7139ZM158.14 13.5791H160.597V35.6426H169.977V38H158.14V13.5791ZM188.67 32.0068L190.629 33.0361C189.987 34.2979 189.245 35.3161 188.404 36.0908C187.563 36.8656 186.617 37.4577 185.565 37.8672C184.514 38.2656 183.324 38.4648 181.996 38.4648C179.052 38.4648 176.75 37.502 175.09 35.5762C173.43 33.6393 172.6 31.4535 172.6 29.0186C172.6 26.7275 173.302 24.6855 174.708 22.8926C176.49 20.6126 178.875 19.4727 181.863 19.4727C184.94 19.4727 187.397 20.6403 189.234 22.9756C190.54 24.6247 191.204 26.6833 191.227 29.1514H174.99C175.035 31.2542 175.704 32.9808 176.999 34.3311C178.294 35.6702 179.893 36.3398 181.797 36.3398C182.715 36.3398 183.606 36.1794 184.47 35.8584C185.344 35.5374 186.086 35.1113 186.694 34.5801C187.303 34.0488 187.962 33.1911 188.67 32.0068ZM188.67 27.1426C188.36 25.903 187.906 24.9124 187.309 24.1709C186.722 23.4294 185.942 22.8317 184.968 22.3779C183.994 21.9242 182.97 21.6973 181.896 21.6973C180.126 21.6973 178.604 22.2673 177.331 23.4072C176.401 24.2373 175.699 25.4824 175.223 27.1426H188.67ZM213.572 19.9375V38H211.281V34.8955C210.307 36.0798 209.212 36.9707 207.994 37.5684C206.788 38.166 205.465 38.4648 204.026 38.4648C201.47 38.4648 199.284 37.5407 197.469 35.6924C195.665 33.833 194.763 31.5752 194.763 28.9189C194.763 26.318 195.676 24.0934 197.502 22.2451C199.328 20.3968 201.525 19.4727 204.093 19.4727C205.576 19.4727 206.915 19.7881 208.11 20.4189C209.317 21.0498 210.374 21.9961 211.281 23.2578V19.9375H213.572ZM204.275 21.7139C202.98 21.7139 201.785 22.0348 200.689 22.6768C199.594 23.3076 198.719 24.1986 198.066 25.3496C197.424 26.5007 197.104 27.7181 197.104 29.002C197.104 30.2747 197.43 31.4922 198.083 32.6543C198.736 33.8164 199.61 34.724 200.706 35.377C201.813 36.0189 202.997 36.3398 204.259 36.3398C205.532 36.3398 206.738 36.0189 207.878 35.377C209.018 34.735 209.892 33.8662 210.501 32.7705C211.121 31.6748 211.431 30.4408 211.431 29.0684C211.431 26.9766 210.739 25.2279 209.355 23.8223C207.983 22.4167 206.29 21.7139 204.275 21.7139ZM217.938 19.9375H220.312V22.5771C221.021 21.5368 221.768 20.762 222.554 20.2529C223.34 19.7327 224.159 19.4727 225.011 19.4727C225.653 19.4727 226.339 19.6774 227.069 20.0869L225.857 22.0459C225.37 21.8356 224.961 21.7305 224.629 21.7305C223.854 21.7305 223.107 22.0514 222.388 22.6934C221.668 23.3242 221.12 24.3092 220.744 25.6484C220.456 26.6777 220.312 28.7585 220.312 31.8906V38H217.938V19.9375ZM229.045 19.9375H231.369V23.1748C232.299 21.9352 233.328 21.0111 234.457 20.4023C235.586 19.7826 236.814 19.4727 238.143 19.4727C239.493 19.4727 240.688 19.8158 241.729 20.502C242.78 21.1882 243.555 22.1123 244.053 23.2744C244.551 24.4365 244.8 26.2461 244.8 28.7031V38H242.492V29.3838C242.492 27.3031 242.404 25.9141 242.227 25.2168C241.95 24.0215 241.43 23.125 240.666 22.5273C239.902 21.9186 238.906 21.6143 237.678 21.6143C236.272 21.6143 235.01 22.0791 233.893 23.0088C232.786 23.9385 232.055 25.0895 231.701 26.4619C231.48 27.3584 231.369 28.9964 231.369 31.376V38H229.045V19.9375Z" fill="black">

            </path>
            </svg> */}


            {/* <div class="example flex-fill align-self-center">
  <input type="text" placeholder="Search assests,courses" name="search2"/>
  <span className="input-group-addon"><i class="fa fa-search fa-fw" aria-hidden="true"></i></span>
</div> */}

{/* <div id="head-icons">
<i class="fa fa-comment" aria-hidden="true"></i>
<i class="fa fa-bell" aria-hidden="true"></i>
<i class="fa fa-volume-off" aria-hidden="true" style={{fontSize:23}}></i>
<i class="fa fa-cog" aria-hidden="true" style={{fontSize:20}}></i>

</div> */}
<div className="pro">

<div className="info">
  <span className="name">wahid kahn</span>
<span className="des">Group name</span>
</div>
<div>
<img  src={pic5}></img>
</div>
</div>

    
   
    </div>
  );
}

export default Header;