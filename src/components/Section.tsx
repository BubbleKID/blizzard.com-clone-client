interface Props {
    backgroundImage: string
}

export default function Section(props: Props) {
    return(
        <div style={{height: '336px', backgroundImage: `url(${props.backgroundImage})`}}>
            im section
        </div>
    )
}