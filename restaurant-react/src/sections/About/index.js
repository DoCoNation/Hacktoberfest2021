import React from 'react'
import './style.css'

const About = () => {
    return (
        <section className="about section">
            <div className="left">
                <h2>About Vyb</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a rerum dignissimos excepturi temporibus,
                    modi laborum provident omnis iste. Dolorum explicabo illo, hic nulla eveniet autem nam reprehenderit
                    odio
                    incidunt!</p>
            </div>
            <div className="right">
                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="About" />
            </div>
        </section>
    )
}

export default About
