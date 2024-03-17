// import React, { useState } from 'react';
// import Card from '../Components/Card.js'
// const YourComponent = () => {
//     // State to manage form data
//     const [formData, setFormData] = useState({
//         eventName: '',
//         description: '',
//         address: '',
//         imageUpload: null
//     });
//     // State to store events
//     const [events, setEvents] = useState([]);

//     // Function to handle form field changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     // Function to handle file input change
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setFormData(prevState => ({
//             ...prevState,
//             imageUpload: file
//         }));
//     };

//     // Function to handle form submission
//     const saveEvent = () => {
//         // Construct event object
//         const event = {
//             eventName: formData.eventName,
//             description: formData.description,
//             address: formData.address,
//             imageUpload: formData.imageUpload
            
//         };

//         // Push the event object to the events array
//         setEvents(prevEvents => [...prevEvents, event]);

//         // Optionally, you can log the events array to verify the data
       
//     };

//     return (
//         <div>
            
//             <div className='container mt-5' id='form'>
//                 <h3 className='text-center' id='formhead'>
//                     Event
//                 </h3>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="eventName">Event Name:</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="eventName"
//                             name="eventName"
//                             value={formData.eventName}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="description">Description of the Event:</label>
//                         <textarea
//                             className="form-control"
//                             id="description"
//                             name="description"
//                             value={formData.description}
//                             onChange={handleInputChange}
//                             rows={3}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="address">Address:</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="address"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="imageUpload">Upload Image:</label>
//                         <input
//                             type="file"
//                             className="form-control-file"
//                             id="imageUpload"
//                             name="imageUpload"
//                             accept="image/*"
//                             onChange={handleFileChange}
//                         />
//                     </div>
//                     <div className="text-center">
//                         <button
//                             type="button"
//                             className="btn btn-success"
//                             id="hireform-btn"
//                             onClick={saveEvent}
//                         >
//                             Save Event
//                         </button>
//                     </div>
//                     <Card event={events.eventName} description={events.description} image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/>
        
//                 </form>
//             </div>
//           </div> 
//     );
// };

// export default YourComponent // Exporting both YourComponent function and events array
