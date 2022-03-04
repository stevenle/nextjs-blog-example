import {getClassName} from '../utils/getClassName';
import styles from './Grid.module.sass';

export function Grid(props: any) {
  return (
    <div className={getClassName(styles.container, props.className)}>
      {props.children}
    </div>
  )
}
