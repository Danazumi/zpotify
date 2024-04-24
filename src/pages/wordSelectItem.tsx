import { motion } from "framer-motion";

const WordSelectedItem = ({
  x,
  y,
  word,
  onSelect,
}: {
  x: number;
  y: number;
  word: string;
  onSelect: (word: string) => void;
}) => {
  return (
    <motion.button
      className="flex border rounded-lg p-2"
      initial={{ x, y }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 1.5 }}
      onClick={() => onSelect(word)}
    >
      <span>{word}</span>
    </motion.button>
  );
};

export default WordSelectedItem;