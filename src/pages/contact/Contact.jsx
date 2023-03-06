import "./Contact.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="contact-bgImg-container">
      <main class="contact">
        <h2>Contact Me ...</h2>
        <div class="contact__list">
          <div class="contact__item">
            <HiOutlineMail /> Email
            <div class="text-secondary">samaritan@nevermoreacademy.edu</div>
          </div>
          <div class="contact__item">
            <FiSmartphone /> Phone
            <div class="text-secondary">+40 (571) 360-1234</div>
          </div>
          <div class="contact__item">
            <HiLocationMarker />
            Address
            <div class="text-secondary">
              Strada Zamorei 1, Bușteni 105500, Romania
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Contact;