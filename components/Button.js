export default function Button(props) {
  console.log(props)
  return (
    <form method="get" target="_blank" action={props.src}>
      <button className="button-link" type="submit">
        <strong>{props.text}</strong>
      </button>
    </form>
  );
}
