import React from 'react';
import Header from '../components/Header';

const Showcase = () => (
    <>
        <Header />
        <main>
            <h2>Client and Employee Feedback</h2>
            <div className="feedback-list">
                <p>"The best keyboards I've ever used!" - Jane Doe</p>
                <p>"KeyStaxx is redefining how keyboards should feel and look!" - John Smith</p>
            </div>
        </main>
    </>
);

export default Showcase;
