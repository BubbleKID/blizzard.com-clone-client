interface Props {
    name: string,
    background: string
}

export default function Card(props: Props) {
    return (
      <img
        src={props.background}
        alt={props.name}
        className="card"
        width="240"
        height="320"
      />
    );
}