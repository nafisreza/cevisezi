import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import service from "../appwrite/config";
import parse from "html-react-parser";
import { Featured } from "../components/Featured";


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
      <div className="flex flex-col gap-5 my-10">
        <Featured url={`bg-[url('${post?.imageUrl}')]`} title={post?.title}/>
        <h1 className="font-semibold text-5xl">{post?.title}</h1>
        <img src={post?.imageUrl} alt={post?.title} className="w-[720px]" />
        {post?.content && parse(post.content)}
      </div>
    </div>
  );
};

'bg-[url("./about-us.png")]'