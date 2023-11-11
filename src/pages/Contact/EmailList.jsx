import './EmailList.css';

export function EmailList() {
    return( 
        <div className='email-container'>
            <div className='email-section'>
                <div className='left-block'>
                    <h2>Commercial Contacts</h2>
                    <div className='email-block'>
                        <p>To advertise on Tourista:</p>
                        <a href="mailto:example@example.com">advertise@tourista.com</a>
                    </div>
                    <div className='email-block'>
                        <p>To become an affiliate partner:</p>
                        <a href="mailto:example@example.com">affiliate@tourista.com</a>
                    </div>
                    <div className='email-block'>
                        <p>To contact the hotels team:</p>
                        <a href="mailto:example@example.com">hotels@tourista.com</a>
                    </div>
                    <div className='email-block'>
                        <p>Send your request to republish Tourista content:</p>
                        <a href="mailto:example@example.com">contentlicensing@tourista.com</a>
                    </div>
                    <div className='email-block'>
                        <p>To contact the experiences team:</p>
                        <a href="mailto:example@example.com">experiences@tourista.com</a>
                    </div>
                </div>   
                <div className='right-block'>
                    <h2>Content Contact</h2>
                    <div className='email-block'>
                        <p>To report an issue to our content teams please contact: </p>
                        <a href="mailto:example@example.com">corrections@tourista.com</a>
                    </div>
                    <h2>Press Contacts</h2>
                    <div className='email-block'>
                        <p>If you’re a journalist / influencer with a press enquiry about Tourista,
                            <br />
                            please contact our press office:</p>
                        <a href="mailto:example@example.com">pr@tourista.com</a>
                    </div>
                    <h2>Partnership Contacts</h2>
                    <div className='email-block'>
                        <p>For partnership opportunities:</p>
                        <a href="mailto:example@example.com">partnerships@tourista.com</a>
                    </div>
                </div> 
            </div>
        </div>     
    )
}