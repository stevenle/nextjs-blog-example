import classes from './FeaturedBlogPost.module.sass';
import {PlaceholderImage} from './PlaceholderImage';

export function FeaturedBlogPost(props: any) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <PlaceholderImage width={2000} height={1000} />
      </div>
      <div className={classes.content}>
        <div className={classes.date}>{props.date}</div>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.body}>{props.body}</div>
      </div>
    </div>
  );
}
