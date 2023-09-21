type ImageProps = {
    source: string
    imageAlt: string
}

export function Image({ imageAlt, source }: ImageProps) {
    return(
        <img src={source} alt={imageAlt} />
    )
}