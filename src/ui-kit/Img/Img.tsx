type ImgProps = {
  styleClass?: string;
  imgSrc: string;
  imgAlt: string;
};

export function Img({ styleClass, imgSrc, imgAlt }: ImgProps) {
  return <img src={imgSrc} className={styleClass} alt={imgAlt} />;
}
