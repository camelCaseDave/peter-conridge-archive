export default function Header(props) {
  return <strong className={`header container bar ${props.dark ? 'dark-text' : ''}`} >{props.title}</strong>
}
