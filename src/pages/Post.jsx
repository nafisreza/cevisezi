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

  const extractFileId = (imageUrl) => {
    const urlParts = imageUrl.split('/');
    const fileIdIndex = urlParts.findIndex(part => part === 'files') + 1;
    return urlParts[fileIdIndex];
  };
  const deletePost = async () => {
    try {
      const fileId = await extractFileId(post?.imageUrl);
      await service.deleteFile(fileId);
      console.log(fileId)
      const deleteStatus = await service.deletePost(post.$id);
      if (deleteStatus) {
        navigate("/");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post or associated file:", error);
    }
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

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      {post?.imgUrl && (
        <img src={service.getFilePreview(post.imgUrl)} alt="Post Image" />
      )}
      {isAuther && (
        <div className="flex gap-4 justify-end">
          <Link to={`/edit-post/${post.slug}`} className="bg-blue-500 px-5 py-2">
            Edit
          </Link>
          <button onClick={deletePost} className="bg-red-500 px-5 py-2">
            Delete
          </button>
        </div>
      )}
      {post?.imageUrl && (
        <Featured url={post?.imageUrl} title={post?.title} />
      )}
      <section className="container mx-auto px-6 lg:px-24 py-16 bg-white flex flex-col lg:flex-row gap-10">
        {/* Main content area */}

        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">{post?.title && parse(post.title)}</h1>
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
            {shuffleArray(posts).slice(0, 3).map((post) => (
              <Link
                to={`/post/${post?.$id}`}
                key={post?.$id}
                className="flex flex-col w-full h-[284px] border rounded shadow-lg hover:scale-105 transition-transform duration-1000"
              >
                <img
                  src={post?.imageUrl}
                  alt={post?.title}
                  className="w-full h-full rounded-t overflow-hidden object-cover"
                />
                <div className='flex flex-col text-center justify-around h-[70px]'>
                  <h1 className="font-bold text-[16px]">
                    {post?.title}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>

    </div>
  );
};