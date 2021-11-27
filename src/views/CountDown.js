import meme from '../images/avatar.png';
import notsmile from '../images/notsmile.png';
import smile from '../images/smile.png';
import { useState } from 'react';
const CountDown = () => {
//     var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();  
    var countDownDate = new Date("Nov 27, 2021 09:55:00").getTime(); 
    var runCountDown = setInterval(function() {  
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var days = Math.floor(distance / (d));
      var hours = Math.floor((distance % (d)) / (h));
      var minutes = Math.floor((distance % (h)) / (m));
      var seconds = Math.floor((distance % (m)) / s);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds; 
      hours = hours < 10 ? "0" + hours : hours; 
      days = days < 10 ? "0" + days : days; 

 
 

      if (distance < 0) {
        clearInterval(runCountDown);
        setIsPopup(true);
       
      } else {
        document.querySelector(".days .count").innerHTML = days;  
        document.querySelector(".hours .count").innerHTML = hours;  
        document.querySelector(".minutes .count").innerHTML = minutes;  
        document.querySelector(".seconds .count").innerHTML = seconds;
      }
    }, 1000);
    
    const [avatar, setAvatar] = useState(notsmile);
    const [isTooltip, setIsTooltip] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    
    const tooltip = document.querySelector(".tooltip-avatar");
    const randomTooltip = ['Heheheh', 'Vẫn ăn hại như xưa :((', 'Hihihihi', 'Được cái ngu hơnnn !!'];
    const randomIndex = Math.floor((Math.random()*randomTooltip.length));
   

    
    const handleMouseOver = () => {
        setIsTooltip(true);
        
        setAvatar(smile);

       
    }
    const handleMouseOut = () => {
        setIsTooltip(false);
        
        setAvatar(notsmile);

       
    }
    const handleClosePopup = () => {
        setIsPopup(false);

    }


    return(
        <>
        <div className="countdown">
            <div className="countdown-header">
                <div className="countdown-title">CountDown To 2022</div>
                <div className="countdown-timer">
                    <div className="days">
                        <div className="count">00</div>
                        <div className="desc">Days</div>
                    </div>
                    <div className="twodots">:</div>
                    <div className="hours">
                        <div className="count">00</div>
                        <div className="desc">Hours</div>
                    </div>
                    <div className="twodots">:</div>
                    <div className="minutes">
                        <div className="count">00</div>
                        <div className="desc">Minutes</div>
                    </div>
                    <div className="twodots">:</div>
                    <div className="seconds">
                        <div className="count">00</div>
                        <div className="desc">Second</div>
                    </div>
                </div>
            </div>
            <div className="title">Trong năm qua tôi đã thay đổi như thế nào?</div>
            <div className="profile">
                <div className="about-me">
                <div className="border-avatar">
                {isTooltip === true &&  
                
                
                <div className="tooltip-avatar"><span className="tooltip-text">{randomTooltip[randomIndex]}</span></div> 
                
           
           
                }
              
                <img src={avatar} className="img-avatar" onMouseOver={() => handleMouseOver()} onMouseOut={() => handleMouseOut()} />


                </div>
                <div className="about-name">Le Van Thinh</div>

                </div>
                <div className="form-input">
                    
                    <div className="form-title"><center>Thật ra là</center></div>
                    <div className="label">Chưa có gì thay đổi cả hihi :v</div>

                
                </div>
           
                <div className="contact">
                    <div className="fb">
                    <a href="https://fb.com/thinhvle2210" target="_blank"><div className="content">Facebook</div></a>
                    </div>
                    <div className="github">
                    <a href="https://github.com/lethinh2003" target="_blank"><div className="content">Github</div></a>

                    </div>                    
                    <div className="website">
                    <a href="https://lethinh2003.xyz" target="_blank"><div className="content">Website</div></a>
                    
                    </div>                    
                </div>
            </div>
            {isPopup === true && 
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-header">
                        <span className="header-title">Thông Báo</span>
                        <div className="close-icon" onClick={() => handleClosePopup()}><span className="x">X</span></div>
                    </div>
                    <div className="modal-body">
                    <div className="about-me">
                <div className="border-avatar" style={{'backgroundColor': '#15e6c3',}}>
             
                
                
                <div className="tooltip-avatar"><span className="tooltip-text">Năm mới đã đến rồi. Happy new years</span></div> 
                
           
           
   
              
                <img src={meme} className="img-avatar" />


                </div>
                <div className="about-name">Le Van Thinh</div>
                <h3>Do đã đến năm mới rồi nên CountDown sẽ không chạy nữa! và website này sẽ dừng hoạt động</h3>

                </div>


                    </div>
                    <div className="modal-footer">
                    <div className="close-btn" onClick={() => handleClosePopup()}>Close</div>

                    </div>
                </div>

            </div>
            }

        </div>

        </>
    )

}
export default CountDown;
