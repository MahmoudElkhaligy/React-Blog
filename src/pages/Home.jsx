import useFetch from "../hooks/usefetch";
import BlogList from "../components/BlogList";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:4000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
