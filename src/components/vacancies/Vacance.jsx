import style from "./vacancies.module.css";

const Vacance = ({img, company, isNew, featured, position, postedAt, contract, location, role, level, languages, setChoosedTags, choosedTags, tools}) => {
  return (
    <div className={style.vacance}>
      <div className={style.vacanceBlock}>
        <img src={img} alt="" className={style.vacanceAvatar} />
        <div className={style.vacanceInfo}>
          <div className={style.vacanceNameAndTags}>
            <h3 className={style.vacanceName}>{company}</h3>
            {isNew && (
              <button className={style.vacanceTagNew}>NEW!</button>
            )}
            {featured && (
              <button className={style.vacanceTagFeatured}>FEATURED!</button>
            )}
          </div>
          <h2 className={style.vacancePosition}>{position}</h2>
          <ul className={style.vacaneCategoryList}>
            <li className={style.vacaneCategoryItem}>{postedAt}</li>
            <li className={style.vacaneCategoryItem}>{contract}</li>
            <li className={style.vacaneCategoryItem}>{location}</li>
          </ul>
        </div>
      </div>

      <ul className={style.vacanceTagList}>
        {[role, level, ...languages, ...tools].map((el, index) => (
          <li className={style.vacanceTagItem} key = {index}>
            <button className={style.vacanceTagButton} onClick={() => setChoosedTags([...new Set ([...choosedTags, el])])}>{el}</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Vacance;
