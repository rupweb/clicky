import React from 'react';
import '../styles/contact.css'; 

export default function ContactPage() {
    return (
        <div>
            <div className="contact">
                <h1>Contact Me</h1>
                <p>
                    Email: <a href="mailto:rupert@webstersystems.co.uk">rupert@webstersystems.co.uk</a>
                </p>
                <p>
                    GitHub: <a href="https://github.com/rupweb" target="_blank">rupweb</a>
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/rupertstjw" target="_blank">rupertstjw</a>
                </p>
            </div>
        </div>
    );
}

