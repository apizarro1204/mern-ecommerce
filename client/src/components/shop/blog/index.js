import React from "react";
import Layout from "../layout";

const BlogComponent = (props) => {
    return (
        <div className="flex flex-col items-center justify-center my-32">
            <h1>Blog</h1>
        </div>
      );
    };

    const Blog = (props) => {
        
        return <Layout children={<BlogComponent/>} />;
    }

export default Blog;