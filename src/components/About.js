import React from 'react'
import img1 from "./../img/About.jpg"
export default function About() {
    return (
        <div className='about-page'>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style={{ textAlign: "center", margin:"5px auto" }}>Our Team</h2>
            <div className="about-row">
                <div className="about-column">
                    <div className="about-card">
                        <img src={img1} alt="Jane" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="about-contact-button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="about-column">
                    <div className="about-card">
                        <img src={img1} alt="Jane" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="about-contact-button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="about-column">
                    <div className="about-card">
                        <img src={img1} alt="Jane" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="about-contact-button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}