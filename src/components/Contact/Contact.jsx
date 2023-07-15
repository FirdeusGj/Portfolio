import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section>
        <div>

            <h1>Contact</h1>
        <div>
            <h1>Let's connect and craft an extraordinary online masterpiece!</h1>
            <h3>Got opportunities, ideas, or burning questions? Send them my way, and let's turn them into something remarkable!</h3>
        </div>
        <div>
            <a href="mailto:firdegjepali@gmail.com">firdegjepali@gmail.com</a>
        </div>
        </div>
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Message</label>
                <input type="text" />
            </div>
        </div>
    </section>
  )
}
