import "./Konst.css";
import { useState } from "react";
import fon from "../../assets/Fön_vit.png";
import rakapparat from "../../assets/Rakapparat_vit.png";
import doskalleapa from "../../assets/Dödskalleapa_vit.png";
import gorilla from "../../assets/Gorilla_vit.png";
import grasklippare from "../../assets/Gräsklippare_vit.png";
import gadda from "../../assets/Gädda_vit.png";
import isberg from "../../assets/Isberg_vit.png";
import kompisar from "../../assets/Kompisar_vit.png";
import lejongap from "../../assets/Lejongap stor_vit.png";
import lillaLejongap from "../../assets/Lejongap_vit.png";
import lopare from "../../assets/Löpare_vit.png";
import plugg from "../../assets/Löpare_vit.png";
import sengangare from "../../assets/Sengångare_vit.png";
import tiger from "../../assets/Tiger_vit.png";

const images = [
  { src: fon, title: "Inte som jag tänkt mig" },
  { src: rakapparat, title: "Inte som jag tänkt mig 2" },
  { src: doskalleapa, title: "Döskalleapa" },
  { src: sengangare, title: "Sengångare" },
  { src: grasklippare, title: "Gräsklippare" },
  { src: gadda, title: "Ful fisk" },
  { src: isberg, title: "Isberg" },
  { src: kompisar, title: "Kompisar" },
  { src: lejongap, title: "Stora lejongap" },
  { src: lillaLejongap, title: "Lilla lejongap" },
  { src: lopare, title: "Löpare" },
  { src: plugg, title: "Naken plugg" },
  { src: gorilla, title: "Gorilla" },
  { src: tiger, title: "Tiger" },
];

export default function Konst() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openGallery = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const closeGallery = () => setOpen(false);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      <div className="marknad-presentation">
        <img
          className="marknad-img"
          src="/src/assets/marknad.png"
          alt="Marknad"
          draggable="false"
        />
        <div className="marknad-text">
          <h3>Välkommen hit</h3>
          <p>
            Här har jag samlat ett urval av min konst. Om du vill se mer, följa
            mitt arbete eller få en känsla för processen, hittar du fler verk på
            min Instagram.
          </p>
          <p>
            Är du intresserad av att köpa något, eller bara vill säga hej, går
            det bra att höra av sig via Instagram eller något av
            kontaktalternativen längst ner på sidan.
          </p>
          <p>
            Min instagram:
            <a
              href="https://instagram.com/emma.renes"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <i id="instagramikon" className="fa-brands fa-instagram"></i>
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
          <div className="modal-center" onClick={(e) => e.stopPropagation()}>
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
