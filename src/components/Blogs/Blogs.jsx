
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({blogs,handleReadTime, handleBookmark}) => {

    return (
        <div className='flex flex-col gap-10'>
            {
                blogs.map(blog =><SingleBlog key={blog.id} blog={blog} handleReadTime={handleReadTime} handleBookmark={handleBookmark}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;