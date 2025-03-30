import React from "react";

const Blog = ({ posts }) => {
    return (
        <div className="blog">
            <h1>Blog Saya</h1>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
        props: { posts },
    };
}

export default Blog;