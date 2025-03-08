import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
            <div className="container">
                <h1>Welcome to the Feedback App!</h1>
                <blockquote>"Feedback is the breakfast of champions." – Ken Blanchard</blockquote>
                <section className="about">
                    <h2>📋 What is a Feedback Form?</h2>
                    <p>
                        A feedback form allows users to share their thoughts and opinions about a product or service.
                        It helps improve quality and user experience.
                    </p>
                </section>
                <section className="features">
                    <h2>🚀 Features of Our Feedback Form</h2>
                    <ul>
                        <li>✔ Collects user name, email, and feedback</li>
                        <li>✔ Provides a 5-star rating system</li>
                        <li>✔ Uses <strong>SweetAlert2</strong> for better confirmation popups</li>
                    </ul>
                </section>
                <section className="sweetalert-info">
                    <h2>⚡ What is SweetAlert2?</h2>
                    <p>
                        SweetAlert2 is a JavaScript library that provides stylish, customizable alert popups.
                        It replaces the default `window.alert()` and `window.confirm()`.
                    </p>
                    <h3>📌 How to Install?</h3>
                    <code>npm install sweetalert2</code>
                    <h3>📌 How We Used It?</h3>
                    <pre>{`
                        Swal.fire({
                            title: 'Please confirm your details',
                            text: 'Are you sure you want to submit?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes, Submit'
                        })`}
                    </pre>
                </section>
                <div className="btn-container">
                    <Link to="/feedback">
                        <button className="btn">Give Feedback</button>
                    </Link>
                </div>
            </div>
    );
};

export default Home;
