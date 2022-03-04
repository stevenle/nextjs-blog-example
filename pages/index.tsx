import type {NextPage} from 'next';
import {BlogList} from '../layouts/BlogList';

const Home: NextPage = () => {
  const featuredPost = {id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', date: 'March 3, 2022', image: {url: ''}};
  const posts = [
    {id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', date: 'March 3, 2022', image: {url: ''}},
    {id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', date: 'March 3, 2022', image: {url: ''}},
    {id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', date: 'March 3, 2022', image: {url: ''}},
    {id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', date: 'March 3, 2022', image: {url: ''}},
    {id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', date: 'March 3, 2022', image: {url: ''}},
    {id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', date: 'March 3, 2022', image: {url: ''}},
  ];
  return <BlogList featuredPost={featuredPost} posts={posts} />;
};

export default Home;
