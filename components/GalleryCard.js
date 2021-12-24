export default function GalleryCard(props) {
  return (
    <div className="gallery-card">
      <div className="gallery-card-img"><img src={props.src}/></div>
      <div className="gallery-card-title">{props.title}</div>
    </div>
  );
}
