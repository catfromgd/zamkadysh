import style from "./vacancies.module.css";
import { arr } from "../../data/vacanciesData";
import Vacance from "./Vacance";
import { useState } from "react";
import { MdDeleteOutline, MdHeight } from "react-icons/md";

const Vacancies = () => {
  const [choosedTags, setChoosedTags] = useState([]);
  console.log(choosedTags);
  const filtredVacancies = arr.filter((vac) => {
    return choosedTags.every((el) =>
      [vac.role, vac.level, ...vac.languages, ...vac.tools].includes(el)
    );
  });
  const deleteTag = (tag) => {
    setChoosedTags(choosedTags.filter((el) => el != tag));
  };
  return (
    <>
      <div className={style.container}>
        <header className={style.header}></header>
        <div className={style.choosedTags}>
          {choosedTags.map((tag) => (
            <li key={tag} className={style.tag}>
              {tag}
              <button
                className={style.deleteButton}
                onClick={() => deleteTag(tag)}
              >
                <MdDeleteOutline style={{ color: "white", fontSize: "30px" }} />
              </button>
            </li>
          ))}
        </div>
        <div className={style.vacancies}>
          {filtredVacancies.map((vacance) => (
            <Vacance
              img={vacance.img}
              company={vacance.company}
              isNew={vacance.new}
              featured={vacance.featured}
              position={vacance.position}
              postedAt={vacance.postedAt}
              contract={vacance.contract}
              location={vacance.location}
              role={vacance.role}
              level={vacance.level}
              languages={vacance.languages}
              choosedTags={choosedTags}
              setChoosedTags={setChoosedTags}
              key={vacance.id}
              tools={vacance.tools}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Vacancies;
