// import React, { useState } from "react";
// import { Col, Container, Image, Row } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// const ProfilePage = () => {
//   const [text, setText] = useState("");
//   const maxLength = 51; // Maximum number of words allowed

//   // Update the state with the text from textarea
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   /* Will use this later to show remaining words when text is entered.  */
//   // Display the remaining number of words allowed
//   const remainingWords = maxLength - text.split(/\s+/).length;

//   return (
//     <div>
//       <div className="mt-4 mb-4">
//         <Container className="border-container mt-4 mb-4">
//           <Row>
//             <Col md={2} sm={8} className="border-right ">
//               {/* Content for the left column */}
//               <div className="text-center mb-4 ">
//                 <Image
//                   src="https://via.placeholder.com/150"
//                   roundedCircle
//                   className="mb-2"
//                 />
//                 <h4>User Name</h4>
//               </div>
//               <div className="d-flex justify-content-center">
//                 <ul className="list-unstyled">
//                   <li>
//                     <NavLink to="/profile/photo">Profile Photo</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/profile/security">Account Security</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/profile/closeAccount">Close Account</NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </Col>

//             <Col md={10} sm={16}>
//               <Row>
//                 <div className="text-center mb-2 mt-4">
//                   <h2>Public Profile </h2>
//                   <p>Add information about yourself</p>
//                 </div>
//               </Row>

//               <Row className="border-top">
//                 <div className="text-center mb-4 mt-4">
//                   <div>
//                     <div
//                       style={{
//                         paddingBottom: "1rem",
//                         paddingLeft: "10rem",
//                         paddingRight: "10rem",
//                       }}
//                     >
//                       <p className="text-start">Basics</p>
//                       <input
//                         className="form-control form-control-lg"
//                         type="text"
//                         placeholder="First Name"
//                         aria-label="First Name"
//                       />
//                     </div>

//                     <div
//                       style={{
//                         paddingBottom: "1rem",
//                         paddingLeft: "10rem",
//                         paddingRight: "10rem",
//                       }}
//                     >
//                       <input
//                         className="form-control form-control-lg"
//                         type="text"
//                         placeholder="Last Name"
//                         aria-label="Last Name"
//                       />
//                     </div>

//                     <div
//                       style={{
//                         paddingBottom: "1rem",
//                         paddingLeft: "10rem",
//                         paddingRight: "10rem",
//                       }}
//                     >
//                       <textarea
//                         className="form-control form-control-lg"
//                         type="textarea"
//                         value={text}
//                         onChange={handleChange}
//                         rows={1}
//                         placeholder="Heading"
//                         aria-label="Heading"
//                       />
//                       {/* Will use this later to show remaining words when text is entered.  */}
//                       {/* <small className="form-text text-muted">
//                         {remainingWords} words remaining
//                       </small> */}

//                       <p className="text-start small fw-light">
//                         Add a professional headline like, "Instructor at Udemy"
//                         or "Architect."
//                       </p>
//                     </div>
//                   </div>
//                   <div>
//                     <div
//                       style={{
//                         paddingBottom: "1rem",
//                         paddingLeft: "10rem",
//                         paddingRight: "10rem",
//                       }}
//                     >
//                       <p className="text-start">Links</p>

//                       <div style={{ paddingBottom: "1rem" }}>
//                         <div className="input-group">
//                           <span className="input-group-text" id="basic-addon3">
//                             http://www.linkedin.com/
//                           </span>
//                           <input
//                             type="text"
//                             class="form-control"
//                             id="basic-url"
//                             aria-describedby="basic-addon3 basic-addon4"
//                           />
//                         </div>
//                         <div className="form-text text-start" id="basic-addon4">
//                           Input your LinkedIn resource id (e.g. in/johnsmith).
//                         </div>
//                       </div>

//                       <div>
//                         <div className="input-group">
//                           <span className="input-group-text" id="basic-addon3">
//                             https://github.com/
//                           </span>
//                           <input
//                             type="text"
//                             class="form-control"
//                             id="basic-url"
//                             aria-describedby="basic-addon3 basic-addon4"
//                           />
//                         </div>
//                         <div className="form-text text-start" id="basic-addon4">
//                           Input your github id (e.g. prem-code-dot).
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;




// import React from "react";
// import { Col, Container, Image, Row } from "react-bootstrap";
// import { NavLink, Outlet } from "react-router-dom";

// const ProfilePage = () => {
//   return (
//     <div>
//       <div className="mt-4 mb-4">
//         <Container className="border-container mt-4 mb-4">
//           <Row>
//             <Col md={2} sm={8} className="border-right">
//               {/* Content for the left column */}
//               <div className="text-center mb-4 ">
//                 <Image
//                   src="https://via.placeholder.com/150"
//                   roundedCircle
//                   className="mb-2"
//                 />
//                 <h4>User Name</h4>
//               </div>
//               <div className="d-flex justify-content-center">
//                 <ul className="list-unstyled">
//                   <li>
//                     <NavLink to="/profile/photo">Profile Photo</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/profile/security">Account Security</NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/profile/closeAccount">Close Account</NavLink>
//                   </li>
//                 </ul>
//               </div>
//             </Col>

//             <Col md={10} sm={16}>
//               <Row>
//                 <div className="text-center mb-2 mt-4">
//                   <h2>Public Profile </h2>
//                   <p>Add information about yourself</p>
//                 </div>
//               </Row>
//               <Row>
                
//               </Row>
//               <Outlet /> {/* Outlet for nested routes */}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <div className="mt-4 mb-4">
        <Container className="border-container mt-4 mb-4">
          <Row>
            <Col md={2} sm={8} className="border-right">
              {/* Content for the left column */}
              <div className="text-center mb-4 ">
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle
                  className="mb-2"
                />
                <h4>User Name</h4>
              </div>
              <div className="d-flex justify-content-center">
                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/user/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/photo">Photo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/security">Account Security</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/closeAccount">Close Account</NavLink>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={10} sm={16}>
              {/* Upper row */}
              
              
              {/* <Row className="border-top">
                <div className="text-center mb-4 mt-4">
                  <Outlet name="heading" />
                </div>
              </Row> */}
              
                  <Outlet />
              {/* Lower row */}
              {/* <Row className="border-top">
                <div className="text-center mb-4 mt-4">
                </div>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfilePage;
