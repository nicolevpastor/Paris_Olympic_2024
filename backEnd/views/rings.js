.bounce1 {
      position:fixed;
      left:50%;
      bottom:0;
      margin-top:-25px;
      margin-left:-25px;
      height:50px;
      width:50px;
      background:red;
      -webkit-animation:bounce 1s infinite;
    }
    
    @-webkit-keyframes bounce {
      0%       { bottom:5px; }
      25%, 75% { bottom:15px; }
      50%      { bottom:20px; }
      100%     {bottom:0;}
    }