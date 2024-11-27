import React, { useState } from 'react';
import Header from '../components/Header';

const DeveloperPage = () => {
    const [vouchPoints, setVouchPoints] = useState(0);

    return (
        <>
            <Header />
            <main className="developer-page">
                <h2>About the Developer</h2>
                <div className="developer-info">
                    <div className="developer-photo">
                        <img src="path_to_your_photo.jpg" alt="Rham Benedict C. Calpotura" />
                    </div>
                    <div className="developer-details">
                        <h3>Rham Benedict C. Calpotura</h3>
                        <p><strong>Website Developer & Designer</strong></p>
                        <p>
                            I am a passionate web developer specializing in front-end design and full-stack development. With a strong foundation in HTML, CSS, JavaScript, and React, I am committed to creating seamless, user-friendly, and visually appealing web applications.
                        </p>
                        <h4>Resume</h4>
                        <ul>
                            <li><strong>Education:</strong> Bachelor of Science in Computer Science</li>
                            <li><strong>Skills:</strong> React, JavaScript, HTML5, CSS3, Responsive Design, UX/UI Design, A/B Testing, Git, etc.</li>
                            <li><strong>Experience:</strong> 3+ years of experience working on front-end and full-stack projects, including personal and freelance work.</li>
                        </ul>
                        <a href="path_to_your_resume.pdf" target="_blank" rel="noopener noreferrer" className="download-resume-btn">
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="vouch-section">
                    <p>Vouch Points: {vouchPoints}</p>
                    <button onClick={() => setVouchPoints(vouchPoints + 1)}>Vouch</button>
                </div>
            </main>
        </>
    );
};

export default DeveloperPage;
