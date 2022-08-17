import { useState } from "react";
import { IPost } from "../../models/models";

const BlogList = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    return ( 
        <div>
            {posts?.map((post: IPost) => (
                <div key={post?.id}>
                    <h2>{post.title}</h2>
                    <p>Comments</p>
                </div>
            ))}
        </div>
     );
}

export default BlogList