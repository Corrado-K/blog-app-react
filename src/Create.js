import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history =  useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:3002/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            setIsPending(false);
            // history.go(-1); // go back one to the most previous page
            history.push('/'); // route/push to the home page

        })

    }

    return ( 
        <div className="create max-w-[400px] my-0 mx-auto text-center">
            <h2 className="text-[#f1356d] mb-[30px] text-2xl font-semibold">Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="text-left block">Blog Title:</label>
                <input
                    className="w-[100%] py-[6px] px-[10px] my-[10px] mx-0 border-[#ddd] border-[1px] box-border block" 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    required
                />
                <label className="text-left block">Blog Body:</label>
                <textarea 
                    className="w-[100%] py-[6px] px-[10px] my-[10px] mx-0 border-[#ddd] border-[1px] box-border block"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                    required
                ></textarea>
                <label className="text-left block">Blog author:</label>
                <select 
                    className="w-[100%] py-[6px] px-[10px] my-[10px] mx-0 border-[#ddd] border-[1px] box-border block"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button className="p-2 border-0 rounded-lg cursor-pointer text-white bg-[#f1356d]">Add blog</button>}
                {isPending && <button disabled className="p-2 border-0 rounded-lg cursor-pointer text-white bg-[#f1356d]">Adding blog...</button>}

            </form>
        </div>
     );
}
 
export default Create;