import { motion } from "framer-motion";

import React from 'react';


const ListItem : React.FC<{ item: string; index: number}> = ({ item , index}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y:0, }} 
      animate={{opacity: 1, y: -40 }}
      transition={{ delay: index * 0.1 + 2.6, duration : 0.5 }} // Adjust delay for staggered animation
      style={{ listStyleType: 'none' }}
      layout = "position"
    >
      {item}
    </motion.li>
  );
};

const AnimatedList = () => {
  const items = ['search', 'random', 'faves', 'about'];

  return (
    <ul className = "mt-40 ml-20">
      {items.map((item, index) => (
        <ListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default AnimatedList;





