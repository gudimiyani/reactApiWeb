import React from 'react'

export default function Contact() {
  return (
    <>
           
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.63727300306!2d72.68220702887878!3d21.15946270597587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1679741584610!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy"    referrerPolicy="no-referrer-when-downgrade"></iframe>

            <form action="" className='pt-5'>
                <div className="row text-center g-0">
                    <div className="col-12 ">
                        <input type="text" placeholder='UserName' className='searchbox ps-3' />
                    </div>
                    <div className="col-12 my-3">
                        <input type="text" placeholder='Email' className='searchbox ps-3' />
                    </div>
                    <div className="col-12 ">
                        <textarea name="" cols="38" rows="4" placeholder='Enter Your messege'></textarea>
                    </div>
                    <div className="col-12 mt-4">
                    {/* <span className='search'>SEND</span>   */}
                    <input type="submit" name="" id="" className='search' />
                    </div>
                </div>
            </form>

            <div className="spacer"></div>
            
    
    </>
  )
}
