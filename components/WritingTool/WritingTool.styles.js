export default `


  
  .host {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    max-height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    top: 0;
    height: 100vh;
  }
  
  .right {
    position: absolute;
    top: 0;
    right: 0;
    float: right;
  }
  
  .sidebar-toggle-btn {
    position: absolute;
    left: -50px;
    z-index: 2;
    height: 50px;
    width: 50px;
    border-radius: 9px 0px 0px 9px;
    cursor: pointer;
  }
  
  .sidebar-toggle-btn-container {
    position: absolute;
    height: 55px;
    width: 50px;
    left: -50px;
    padding-top: 7px;
    padding-left: 7px;
    border-radius: 9px 0px 0px 9px;
  }
  
  .status-bar {
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 1;
    z-index: -5;
    background-size: cover;
    background-position: center;
  }
  
  .left-margin {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 10px;
  }

  .left {
    position: absolute;
    top: 0px;
    left: 0;
    max-width: calc(100vw - 30px);
    min-width: 677px;
  }
  
  .popover-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.9);
    z-index: 20;
  }
  
  .image-popover {
    position: absolute;
    top: calc(50% - 100px);
    height: 300px;
    width: 300px;
    left: calc(50% - 100px);
    z-index: 21;
  }
  
  @media screen and (max-width: 1280px) {
     .left {
       width: calc(100vw - 20px);
     }
     
     .right {
       position: absolute;
       right: 0;
       top: 0;
       width: 20px;
       transform: translateX(0px);
     }
 
     .right.sidebarOpen {
       width: 415px;
     }
     
     .left.sidebarOpen {
       width: calc(100vw - 415px);
     }
  }
  
  @media screen and (min-width: 1281px) {
     .left {
       width: calc(100vw - 20px);
     }
     
     .right {
       width: 20px;
       transform: translateX(0px);
     }

     .sidebar-toggle-btn-container{
       display: none;
     }
     
     .right.sidebarOpen {
       width: 40%;
     }
     
     .left.sidebarOpen {
       width: 60%;
     }
  }
  
  @media screen and (max-width: 925px) {
    .right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`
