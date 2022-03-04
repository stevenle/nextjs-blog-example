import classes from './PlaceholderImage.module.sass';

export function PlaceholderImage(props: any) {
  return (
    <div className={classes.placeholderImage} style={{aspectRatio: `${props.width}/${props.height}`}}></div>
  );
}
