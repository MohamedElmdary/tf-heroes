import { useSelector } from "react-redux";
import ListHero from "../components/ListHero";
import { AppStateModel } from "../store";

export default function () {
  const heroes = useSelector((s: AppStateModel) => s.heroes.heroes);

  return (
    <>
      <h2>My Heroes</h2>
      {heroes.map((hero) => (
        <div key={hero.id}>
          <ListHero hero={hero} />
        </div>
      ))}
    </>
  );
}
