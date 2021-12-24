import GalleryCard from "./GalleryCard";
import history from "../public/history.jpg";
import landscape from "../public/landscape.JPG";
import questionable from "../public/questionable.JPG";

export default function Gallery() {
  return (
    <div className="gallery">
      <GalleryCard title="History" src={history.src} />
      <GalleryCard title="Adventure" src={landscape.src} />
      <GalleryCard title="Culture" src={questionable.src} />
    </div>
  );
}
