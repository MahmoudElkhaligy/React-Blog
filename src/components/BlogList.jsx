import BlogPreview from "./BlogPreview";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <BlogPreview blogs={blogs} title={title}/>
    </div>
  );
};

export default BlogList;
