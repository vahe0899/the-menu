
import './ItemTable.css';
import { motion } from 'framer-motion';
import { GoChevronDown,  GoChevronUp } from "react-icons/go";
import { useEffect, useState } from 'react';

function ItemTable({item, key}) {
  const [expanded, setExpanded] = useState(false)
  const variants = {
      open: { height: '65px', x: 0, opacity: 1 },
      closed: { height: '350px', x: 0, opacity: 1 },
  }

  const title = {
    'breakfast': 'завтрак',
    'lunch': 'обед',
    'dinner': 'ужин'
  }

  const clickMenuItem = () => {
    setExpanded(!expanded)
  }
  return (
    <motion.div
        key={key}
        initial={{x: 400, opacity: 0, height: '65px'}}
        animate={expanded ? "closed" : "open"}
        variants={variants}
        exit={{x: -400, opacity: 0}}
        transition={{duration: .5}}
        className="itemContainer"
        onClick={clickMenuItem}>
                <div className={`itemHeader + ${expanded ? "itemHeader__expanded" : ""}`}>
                    <span className="itemTitle">
                        {title[item.id]}
                    </span>
                    <GoChevronDown className="itemButton" size={30} />
                </div>
                  <motion.div
                    className="itemContent">
                    <span className='recipeTitle'>
                      {item.recipeTitle}
                    </span>
                    <span className='recipeDetails'>
                      {item.recipeDetails}
                    </span>
                  </motion.div>
    </motion.div>
  );
}

export default ItemTable;
