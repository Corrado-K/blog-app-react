import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch('http://localhost:3002/blogs/'+id)
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:3002/blogs/' + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="">
            { isPending && <div>Loading... </div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2 className="text-xl font-semibold mb-[10px]">{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div className="my-[20px]">{ blog.body }</div>
                    <button className="bg-[#f1356d] text-white border-0 rounded-lg p-2 cursor-pointer" onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;