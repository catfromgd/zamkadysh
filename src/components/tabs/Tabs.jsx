import { useState } from "react";
import "./tabs.css";
// import { useState } from React;
// https://fish-text.ru/
// https://vercel.com/home
const tabsArr = [
  {
    title: "lorem1",
    description:
      "Повседневная практика показывает, что сложившаяся структура организации прекрасно подходит для реализации переосмысления внешнеэкономических политик. В своём стремлении улучшить пользовательский опыт мы упускаем, что предприниматели в сети интернет призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы.",
  },
  {
    title: "lorem2",
    description:
      "Картельные сговоры не допускают ситуации, при которой элементы политического процесса призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы. Лишь базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть обнародованы.",
  },
  {
    title: "lorem3",
    description:
      "В целом, конечно, социально-экономическое развитие обеспечивает актуальность поставленных обществом задач. Современные технологии достигли такого уровня, что перспективное планирование предоставляет широкие возможности для системы обучения кадров, соответствующей насущным потребностям.",
  },
];

function Tabs() {
//   let [title, setTitle] = useState("");
//   let [description, setDescription] = useState("");
const [currentIndex, setCurrentIndex] = useState(0)
  const handleClickShowTab = (index) => {
    setCurrentIndex(index)
  };
  return (
    <>
      <div className="tabsContainer">
        <div className="buttons">
          {tabsArr.map((tab, index) => (
            <button onClick={() => handleClickShowTab(index)}>tab {index + 1}</button>
          ))}
        </div>
        <h1 className="title">{tabsArr[currentIndex].title}</h1>
        <p className="description">{tabsArr[currentIndex].description}</p>
      </div>
    </>
  );
}

export default Tabs;
