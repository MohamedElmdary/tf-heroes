import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppStateModel } from "../store";
import { updateHero } from "../store/heroes";
import TfInput from "../components/TfInput";
import { useState } from "react";

export default function () {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hero = useSelector((s: AppStateModel) => {
    const id = +params.id!;
    return s.heroes.heroes.find((h) => h.id === id);
  });

  const [name, setName] = useState<string>(hero?.name ?? "");

  if (!hero) {
    return (
      <div>
        <h2>Hero was not found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{name} Details!</h2>

      <TfInput label="ID" value={hero.id.toString()} disabled />
      <TfInput label="Name" value={name} input={setName} />

      <button
        disabled={!name}
        onClick={() => {
          dispatch(updateHero(hero.id, name));
          navigate(-1);
        }}
        className="back-btn"
      >
        Back
      </button>
    </div>
  );
}
