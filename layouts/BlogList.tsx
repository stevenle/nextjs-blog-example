import {BlogCard} from '../components/BlogCard';
import {FeaturedBlogPost} from '../components/FeaturedBlogPost';
import {Grid} from '../components/Grid';
import classes from './BlogList.module.sass';

export function BlogList(props: any) {
  return (
    <Grid className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.headerTitle}>Blog.</h1>
      </div>
      <div className={classes.content}>
        <div className={classes.featured}>
          <FeaturedBlogPost {...props.featuredPost} />
        </div>
        <div className={classes.more}>
          <h2 className={classes.moreTitle}>More posts.</h2>
          <div className={classes.morePosts}>
            {props.posts.map((post: any) => (
              <BlogCard {...post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </Grid>
  );
}
