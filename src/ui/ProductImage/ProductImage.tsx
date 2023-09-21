type ImageProps = {
    source: string
    imageAlt: string
}

export function ProductImage({ imageAlt, source }: ImageProps) {
    return(
        <img src={source} alt={imageAlt} />
    )
}