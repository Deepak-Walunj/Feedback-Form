import { useState } from "react";
import './FeedbackForm.css'
import Swal from 'sweetalert2';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email : "",
        feedback: "",
        rating : 0,
    })
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const confirmationMessage = `Name : ${formData.name}<br> Email : ${formData.email}<br> Feedback : ${formData.feedback}<br> Rating: ${formData.rating} ⭐`;
        Swal.fire({
            title: 'Please comfirm your details',
            html:` <pre>${confirmationMessage}</pre>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            confirmButtonCancel: 'Cancel',
        })
        .then((result) => {
            if (result.isConfirmed) {
                console.log('Feedback Submitted', formData)
                setFormData({name: "", email: "", feedback: "", rating: 0})
                Swal.fire({
                    title: "Thank You!",
                    text: "Your Feedback has been submitted",
                    icon: "success",
                    confirmButtonText: "Close"
                })
            }
        })
    }

    return(
        <div>
            <nav>
                Tell Us What Do You Think 
            </nav>
            <form onSubmit={handleSubmit} className="feedback_form">
                <h2>We Would Love to Hear From You!</h2>
                <p>Please Share Your Feedback With Us</p>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
                <textarea name="feedback" id="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange}></textarea>
                <div className="rating">
                    <p>Rate Us: </p>
                    {[1,2,3,4,5].map(
                        (star) => (
                            <span 
                            key={star}
                            onClick={() => setFormData({...formData, rating: star})}
                            className={`star ${formData.rating >= star ? "Selected" : ""}`}>
                                {formData.rating >= star ? '★' : '☆'} 
                            </span>
                        )
                    )}
                </div>
                <button type="submit" onSubmit={() => {handleSubmit()}}>Submit</button>
            </form>
        </div>
    )
}

export default FeedbackForm;