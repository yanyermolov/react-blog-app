import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map => (
                <div className="blog-preview" key={blog.id}>
                    <Link>
                        <h2>{blog.title}</h2>
                        <p>Comments</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}