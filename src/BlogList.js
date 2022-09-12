import { Link } from "react-router-dom";

const BlogList = ( {blogs, title} ) => { 

    return ( 
        <div className="blog-list">
            <h2 className="text-xl font-semibold">{ title }</h2>
            {blogs.map((blog) => (
                <div className="rounded-md py-[10px] px-[16px] my-[20px] border-b-[#fafafa] hover:shadow-t-[1px] hover:shadow-r-[3px] hover:shadow-b-[5px] hover:shadow-[#0000014e] hover:shadow-sm" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className="text-2xl mb-[8px] text-[#f1356d]">{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                    
                </div> 
            ))}
        </div>
        
     );
}
 
export default BlogList;