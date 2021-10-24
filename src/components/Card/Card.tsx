import './Card.css';

interface Props {
    name: string,
    background: string
}

export default function Card(props: Props) {
    return (
      <a href="#" className="card">
        <img
          src={props.background}
          alt={props.name}
        
        />
      </a>
    );
}