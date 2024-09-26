import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import service from "../appwrite/config";
import parse from "html-react-parser";
import { Featured } from "../components/Featured";
import { DreamCard } from "../components/DreamCard";


export const Post = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { slug } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const isAuther = post && userData ? post.userID == userData.$id : false;

  useEffect(() => {
    if (slug) {
      console.log(slug);
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post?.imgUrl);
        navigate("/");
      }
    });
  };

  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length == 0) {
    return (
      <div>
        <h1>No dreams for you!</h1>
      </div>
    )
  }

  return (
    <div>
      {post?.imgUrl && (
        <img src={service.getFilePreview(post.imgUrl)} alt="Post Image" />
      )}
      {isAuther && (
        <div className="flex gap-4 justify-end">
          <Link to={`/edit-post/${post.$id}`} className="bg-blue-500 px-5 py-2">
            Edit
          </Link>
          <button onClick={deletePost} className="bg-red-500 px-5 py-2">
            Delete
          </button>
        </div>
      )}
      {post?.imageUrl && (
      <Featured url={post?.imageUrl}   title={post?.title} />
    )}
      <section className="container mx-auto px-6 lg:px-24 py-16 bg-white flex flex-col lg:flex-row gap-10">
  {/* Main content area */}
  <div className="flex-1">
    <div className="flex flex-col gap-5 my-10">
      {post?.content && parse(post.content)}
    </div>
  </div>
  
  {/* Sidebar */}
  <aside className="w-full lg:w-1/3 bg-gray-100 p-6">
    <div className="flex flex-col gap-4">
      {/* Sidebar content goes here */}
      <h2 className="text-xl font-semibold">Sidebar Title</h2>
      <p>Some additional information or links can go here.</p>
      {posts.slice(0, 3).map((post, index) => (
            <DreamCard 
              key={post?.title + (index + 3)} 
              title={post?.title} 
              text={post?.content && parse(post.content)} 
              featuredImg={post?.imageUrl} 
              className={"w-full"} 
              $id={post?.$id} 
            />
          ))}
    </div>
  </aside>
</section>

    </div>
  );
};