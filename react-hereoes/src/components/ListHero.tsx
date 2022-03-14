import { useNavigate } from "react-router-dom";
import { Hero } from "../store/heroes";

interface Props {
  hero: Hero;
}

export default function ({ hero }: Props) {
  const navigate = useNavigate();

  return (
    <div className="list-hero" onClick={() => navigate("/hero/" + hero.id)}>
      <span>{hero.id}</span>
      <p>{hero.name}</p>
    </div>
  );
}
