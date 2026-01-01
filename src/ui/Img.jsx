
export default function Img({ src, alt="", className="" }) {
  return <img src={src} alt={alt} className={("rounded", className)} />;
}
