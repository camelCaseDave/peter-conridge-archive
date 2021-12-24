export default function BackgroundImage(props) {
  const padding = (props.image.height / props.image.width) * 100;
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: "url(" + props.image.src + ")",
        paddingTop: padding + "%",
      }}
    >
      {props.children}
    </div>
  );
}
