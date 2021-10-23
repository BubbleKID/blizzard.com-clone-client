interface Props {
    background: string
}

export default function Card(props: Props) {
    return (
      <img
        src={props.background}
        alt="Katherine Johnson"
        className="avatar"
      />
    );
}