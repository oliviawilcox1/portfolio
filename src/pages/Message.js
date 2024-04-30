import React from "react"


export const Message = () => {
    // document.body.style = 'background: #1A1A1D;';
    return (
<section className="lhhpGw fZhawX scrolled" data-section="cinq" tabindex="-1" aria-hidden="false">
    <div className="responsivemessage">
        <article>
            <div className="messageform">
                <h1 className="message"> Send Me A Message! </h1>
                <p className="reachout"> 
                    Reach out to me with any project proposals or questions! 
                </p>
            </div>
        </article>
 <form class="contact-form hYlwmr" method="POST" target="_blank" action="" id="home-contact">
<input type="hidden" name="_subject" value="Message For Olivia"/>
<div className="form-row">
    <div className="inputgroup"> 
        <label for="full-name">Name </label>
        <input id="full-name" placeholder="Enter your name" type="text" name="name" required="required"></input>
    </div>

    <div className="inputgroup" data-id="email">
        <label for="email"> Email</label>
        <input id="email" placeholder="Enter your email address" type="email" name="_replyto" required="required"></input>
    </div>
</div>

<div className="form-row">
    <div className="inputgroup" data-id="message">
        <label for="message"> Message</label>
        <textarea placeholder="I would love to talk about a project I have for you!" id="message" name="message" required="required" rows="7" minlength="10"></textarea>
    </div>
</div>
<div className="buttoncontainer">
    <button className="button" type="submit" id="submit-button">
        <div> 
            Speak Soon!
        </div>
        {/*  <svg width="52" height="22" viewBox="10 0 72 30" xmlns="http://www.w3.org/2000/svg" className="bow-arrow"><path fill="none" stroke="#4E4E50" stroke-width="3" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg> */}
    </button>
</div>
</form>
</div>
</section>
    )
}

