
import Blog from '../Blog/Blog';
import SingleBlog from '../SingleBlog/SingleBlog';

const BlogsContainer = ({blogs,handleReadTime, handleBookmark}) => {

    return (
        <div>
            <div className='flex flex-col gap-10'>
            {
                blogs.map(blog =><SingleBlog key={blog.id} blog={blog} handleReadTime={handleReadTime} handleBookmark={handleBookmark}></SingleBlog>)
            }
            </div>
            <Blog></Blog>
        </div>
    );
};

export default BlogsContainer;