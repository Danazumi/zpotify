import { motion } from "framer-motion";

import React from 'react';


const ListItem : React.FC<{ item: string; index: number}> = ({ item , index}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y:0, }} 
      animate={{opacity: 1, y: -40 }}
      transition={{ delay: index * 0.1 + 2.75, duration : 0.5 }} // Adjust delay for staggered animation
      style={{ listStyleType: 'none' }}
      layout = "position"
    >
      {item}
    </motion.li>
  );
};

const Paragraph : React.FC<{ item: string; index: number}> = ({ item , index}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y:0, }} 
      animate={{opacity: 1, y: -40 }}
      transition={{ delay: index * 0.02 + 2.6, duration : 0.5 }} // Adjust delay for staggered animation
      style={{ listStyleType: 'none' }}
      layout = "position"
    >
      {item}
    </motion.li>
  );
};



const AnimatedList = () => {
  const items = ['search', 'random', 'faves', 'about'];
  const lines = ['we love music' , 'because it gives light' , 'to our dark world']

  return (
    <div className="font-semibold ">
      <ul className = "mt-[200px] -ml-[30px] text-[43px] text-black">
          {lines.map((item, index) => (
            <Paragraph key={index} item={item} index={index} />
          ))}
      </ul>
      
      <ul className = "mt-40 -ml-[322px] text-[20px] text-black">
        {items.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))}
    </ul>




    </div>
  );
};

export default AnimatedList;





