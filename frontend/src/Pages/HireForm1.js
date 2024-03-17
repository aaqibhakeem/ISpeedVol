import React,{ useState} from 'react'

function HireForm() {
    const [eventForm, setEventForm] = useState({});

    const handleForm = (e) => {
        setEventForm({ ...eventForm, [e.target.name]: e.target.value });
    };

    const saveEvent = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/hireform', {
                method: 'POST',
                body: JSON.stringify(eventForm),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                console.log("Event saved successfully");
            } else {
                console.error("Failed to save event");
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };
    return(
         <div>
            <div className='container mt-5' id='form'>
                <h3 className='text-center' id='formhead'>
                    Event</h3>
                <form on sonSubmit={""}>
                    <div className="form-group">
                        <label for="eventName">Event Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="eventName"
                            name="eventName"
                            required
                            value={eventForm.eventName}
                            onchange={handleForm}
                        // 
                        />
                    </div>
                    <div className="form-group">
                        <label for="discription">Description of the Event:</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="discription"
                            name="discription"
                            rows={3}
                            required
                            value={eventForm.description}
                            onchange={handleForm}
                        />
                    </div>
                    <div className="form-group">
                        <label for="address">Address:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            required
                            value={eventForm.address}
                            onchange={handleForm}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUpload">Upload Image:</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="imageUpload"
                            name="imageUpload"
                            accept="image/*"
                                       
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-success"
                            id="hireform-btn" onClick={saveEvent}

                        >
                            Save Event
                        </button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default HireForm
