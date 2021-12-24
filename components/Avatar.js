import avatar from "../public/avatar.jpg";

export default function Avatar() {
  return (
    <div className="avatar">
      <img src={avatar.src} />
    </div>
  );
}
