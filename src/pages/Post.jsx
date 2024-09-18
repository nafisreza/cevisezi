import React from 'react'
import { Featured } from '../components/Featured'
import { MostFrequentDreams } from '../components/MostFrequentDreams'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSelector } from 'react-redux'
import service from '../appwrite/config'


export const Post = () => {
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const { slug } = useParams()
    const userData = useSelector((state) => state.auth.userData)
    const isAuther = post && userData ? post.userID == userData.$id : false

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                } else {
                    navigate("/")
                }
            })
        } else {
            navigate("/")
        }

    }, [slug, navigate])

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage)
                navigate("/")
            }
        })
    }

    return (
        <div>
            <img src={service.getFilePreview(post.featuredImage)} alt="" />
            {
                isAuther && (
                    <div>
                        <Link to={`/edit-post/${post.$id}`}>Edit</Link>
                        <button onClick={deletePost}>Delete</button>
                    </div>
                )
            }
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>

        </div>

    )
}
