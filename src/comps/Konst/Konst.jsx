import './Konst.css'
import { useState } from "react";

const images = [
  { src: "/src/assets/Fön_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Rakapparat_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Dödskalleapa_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Gorilla_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Gräsklippare_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Gädda_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Isberg_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Kompisar_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Lejongap stor_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Lejongap_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Löpare_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Plugg_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Sengångare_vit.png", title: "Inte som jag tänkt mig" },
  { src: "/src/assets/Tiger_vit.png", title: "Inte som jag tänkt mig" },
];

export default function Konst() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
  
    const openGallery = (i) => {
      setIndex(i);
      setOpen(true);
    };
  
    const closeGallery = () => setOpen(false);
  
    const prev = () =>
      setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  
    const next = () =>
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  
    return (
      <>
        <div className='marknad-presentation'>
            <img className='marknad-img' src="/src/assets/marknad.png" alt="Marknad" draggable="false" />
            <div className='marknad-text'>
            <h3>Välkommen hit</h3>
            <p>
            Här har jag samlat ett urval av min konst. Om du vill se mer, följa mitt
            arbete eller få en känsla för processen, hittar du fler verk på min
            Instagram.
            </p>
            <p>
            Är du intresserad av att köpa något, eller bara vill säga hej, går det
            bra att höra av sig via Instagram eller något av kontaktalternativen
            längst ner på sidan.
            </p>
            <p>Min instagram:
                <a
                    href="https://instagram.com/emma.renes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                >
                    <i id="instagramikon"  className="fa-brands fa-instagram"></i>
                </a>
            </p>
            </div>
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {images.map((img, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => openGallery(i)}
            >
              <img src={img.src} alt={img.title} />
            </button>
          ))}
        </div>
  
        {/* MODAL */}
        {open && (
          <div className="modal-overlay" onClick={closeGallery}>
            <div
              className="modal-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="image-wrapper">
                <button className="nav-btn-left" onClick={prev}>
                  ‹
                </button>
  
                {/* ✅ ENDAST AKTIV BILD */}
                <img
                  src={images[index].src}
                  alt={images[index].title}
                  className="modal-image"
                />
                <button className="nav-btn-right" onClick={next}>
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
