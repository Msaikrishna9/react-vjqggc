import React from 'react'
import "./signup.css";

function SignUp() {
    return (
        <div className='sd-signup-main'>
            <div className='s-left'>
                <h2>Sign Up</h2>
                <h3>Create an account</h3>
                <form>
                    <div className='input'>
                        <label className='form-label'>Display Name <span>*</span></label>
                        <input type="text" maxlength="30" placeholder="Please enter your name" className="form-control" id="exampleInputdisplay" aria-describedby="displayHelp" value=""></input>
                    </div>
                    <div className=" input">
                        <label for="exampleInputEmail1" className="form-label">Mobile Number<span className="sd-imp">*</span></label>
                        <div className="sd-phone-voilet react-tel-input">
                            <div className="special-label">Phone</div>
                            <input className=" form-control" placeholder="Enter Your 10 digit mobile number" type="tel" value="+91"/>
                                <div className=" flag-dropdown">
                                    <div className="selected-flag" title="India: + 91" tabindex="0" role="button" aria-haspopup="listbox">
                                        <div className="flag in">
                                            <div className="arrow"></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="input">
                        <label for="exampleInputPassword1" className="form-label sd-password-tt">Password<span className="sd-imp">*</span>
                            <img src="/static/media/sd-info-icon.e3187d23.svg"/>
                            <div className="spcl">Password must be atleast 8 characters long, and contain atleast 1 Uppercase Alphabet, 1 Number, 1 Special character. Ex: Password@1</div>
                        </label>
                        <div className="sd-password">
                            <input maxlength="30" placeholder="Enter your password" autocomplete="new-password" type="password" className="form-control " id="exampleInputPassword1" value="" /> 
                        </div><p className="sd-errorr"></p>
                    </div>
                    <div className="input">
                        <label for="exampleInputPassword2 " className="form-label sd-password-tt">Confirm Password<span className="sd-imp">*</span>
                            <img src="/static/media/sd-info-icon.e3187d23.svg"/>
                            <div className="sd-scondary">Password must be atleast 8 characters long, and contain atleast 1 Uppercase Alphabet, 1 Number, 1 Special character. Ex: Password@1</div>
                        </label>
                        <div className="sd-password">
                            <input maxlength="30" placeholder="Confirm new password" type="password" className="form-control " id="exampleInputPassword2" value=""/>
                        </div><p className="sd-errorr"></p>
                    </div>
                    <div class="form-check"><br/>
                        <p class="sd-errorr"></p>
                        <label class="form-check-label" for="exampleCheck1">By signing up, you agree to the I agree to the <a>Terms &amp; Conditions</a> and the<a>Privacy Policy</a></label>
                    </div>
                    <button class="btn btn-primary">Sign Up <img src="" alt=">"/></button>
                </form>
                <div class="s-left-bottom">
                    <p>Already have an account ?<a href="/Pages/signin"><a>Sign In</a></a></p>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;