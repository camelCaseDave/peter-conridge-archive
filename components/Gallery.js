import GalleryCard from "./GalleryCard";

export default function Gallery(props) {
  return (
    <div className="gallery">
      <GalleryCard title={props.title} src={props.src} />
    </div>
  );
}
