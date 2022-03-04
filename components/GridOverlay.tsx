import {useState} from 'react';
import {useKeyPress} from '../hooks/useKeyPress';
import classes from './GridOverlay.module.sass';

export function GridOverlay() {
  const [enabled, setEnabled] = useState(false);
  useKeyPress('ctrl+g', () => setEnabled((enabled) => !enabled));
  if (!enabled) {
    return null;
  }
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.gridColumn}>1</div>
        <div className={classes.gridColumn}>2</div>
        <div className={classes.gridColumn}>3</div>
        <div className={classes.gridColumn}>4</div>
        <div className={classes.gridColumn}>5</div>
        <div className={classes.gridColumn}>6</div>
        <div className={classes.gridColumn}>7</div>
        <div className={classes.gridColumn}>8</div>
        <div className={classes.gridColumn}>9</div>
        <div className={classes.gridColumn}>10</div>
        <div className={classes.gridColumn}>11</div>
        <div className={classes.gridColumn}>12</div>
      </div>
    </div>
  );
}
