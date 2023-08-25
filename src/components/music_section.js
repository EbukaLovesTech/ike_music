import Image from "next/image";
import Link from "next/link";
export default function MusicComponent({ src, alt, className, width, height, songName }) {
    return (
        <article className={className}>
            <div>
                <div>
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        priority
                    />
                </div>
                <div>
                    <h3>{songName}</h3>
                    <Link href='/'>Listen</Link>
                </div>
            </div>
        </article>
    )
}