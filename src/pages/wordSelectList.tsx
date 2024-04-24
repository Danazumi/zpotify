// WordSelectionList.tsx
import { createRef, useRef, useState } from "react";
import WordSelectedItem from "./wordSelectItem";

const words = [
  "brown",
  "The",
  "fox",
  "dog",
  "over",
  "the",
  "jumps",
  "lazy",
  "quick",
];

const WordSelectionList = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [currX, setCurrX] = useState(0);
  const [currY, setCurrY] = useState(0);

  const refs = useRef<any[]>(words.map(() => createRef()));

  const handleWordSelect = (index: number, word: string) => {

    const element = refs.current[index].current;

    const clientRect = element.getBoundingClientRect();

    setCurrX(clientRect.x);
    setCurrY(clientRect.y);

    if (!selected.includes(word)) {
      setSelected((values) => [...values, word]);
    }
  };

  const handleWordUnSelect = (word: string) => {
    if (selected.includes(word)) {
      // remove the word from selected array
      setSelected((values) => values.filter((value) => value !== word));
    }
  };

  return (
    <div className="flex justify-center h-full">
      <div className="w-2/3 border p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex border p-2">
            <div className="flex space-x-2 h-11">
              {selected.map((word, i) => (
                <WordSelectedItem
                  x={currX}
                  y={currY}
                  key={i}
                  word={word}
                  onSelect={handleWordUnSelect}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {words.map((word, i) => (
              <button
                ref={refs.current[i]}
                className="flex p-2 rounded-lg border"
                key={`word-${i}`}
                onClick={(e) => handleWordSelect(i, word)}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSelectionList;