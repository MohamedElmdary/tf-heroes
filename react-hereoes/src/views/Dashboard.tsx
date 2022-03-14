import { useSelector } from "react-redux";
import DashboardHero from "../components/DashboardHero";
import { AppStateModel } from "../store";

export default function () {
  const hereos = useSelector((s: AppStateModel) => {
    const { heroes, topHeroes } = s.heroes;
    const heroSet = new Set(topHeroes);
    return heroes.filter((hero) => heroSet.has(hero.id));
  });

  return (
    <>
      <h2>Top Heroes</h2>
      <div className="dashboard-heroes">
        {hereos.map((hero) => (
          <DashboardHero {...{ hero, key: hero.id }} />
        ))}
      </div>
    </>
  );
}
