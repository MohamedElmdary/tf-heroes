import { Hero } from "../store/heroes";
import { useNavigate } from "react-router-dom";

interface Props {
  hero: Hero;
}

export default function ({ hero }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="dashboard-hero"
      onClick={() => navigate("/hero/" + hero.id)}
    >
      <div>{hero.name}</div>
    </div>
  );
}
