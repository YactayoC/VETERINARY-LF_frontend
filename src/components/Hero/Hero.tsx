interface Props {
  title: string;
  description?: string;
  img?: string;
}

const Hero = ({ description, title, img }: Props) => {
  if (title === 'Services' || title === 'Contact') {
    return (
      <div className={`hero-${title.toLowerCase()} animate__animated animate__fadeIn`}>
        <h1 className="hero__title">{title}</h1>
      </div>
    );
  } else {
    return (
      <div className="hero">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__district">{description}</p>
        <img className="hero__img" src={img} alt="img" />
      </div>
    );
  }
};

export default Hero;
