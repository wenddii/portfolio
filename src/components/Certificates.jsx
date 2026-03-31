import { useState } from "react";
import "./Certificates.css";

// Import certificate images
import alxCert from "../assets/web_dev.png";
import djangoCert from "../assets/proffesional_foundations.png";

function Certificates() {
  const certificates = [
    { title: "ALX Software Engineering", img: alxCert },
    { title: "ALx Professional Foundations ", img: djangoCert },
    // add more if needed
  ];

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (img) => {
    setCurrentImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImg("");
  };

  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>
      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div
            className="certificate-item"
            key={index}
            onClick={() => openModal(cert.img)}
          >
            <img src={cert.img} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={currentImg} alt="Certificate" className="modal-img" />
        </div>
      )}
    </section>
  );
}

export default Certificates;