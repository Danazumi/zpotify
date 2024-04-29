import { motion } from "framer-motion";

import React from 'react';


const ListItem : React.FC<{ item: string; index: number}> = ({ item , index}) => {
  return (
    <motion.li
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ delay: index * 0.1 }} // Adjust delay for staggered animation
      style={{ listStyleType: 'none' }}
    >
      {item}
    </motion.li>
  );
};

const AnimatedList = () => {
  const items = ['egg', 'bread', 'rice', 'beans'];

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default AnimatedList;





// const WordSelectedItem = ({
//   x,
//   y,
//   word,
//   onSelect,
// }: {
//   x: number;
//   y: number;
//   word: string;
//   onSelect: (word: string) => void;
// }) => {
//   return (
//     <motion.button
//       className="flex border rounded-lg p-2"
//       initial={{ x, y }}
//       animate={{ x: 0, y: 0 }}
//       transition={{ duration: 1.5 }}
//       onClick={() => onSelect(word)}
//     >
//       <span>{word}</span>
//     </motion.button>
//   );
// // };

// export default WordSelectedItem;