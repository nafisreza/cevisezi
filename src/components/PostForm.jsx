import React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import Select from './Select'
import TextEditor from './TextEditor'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import service from '../appwrite/config'
import { useEffect } from 'react'
import { Button } from './Button'



const PostForm = ({ post }) => {
    const userData = useSelector((state) => state.auth.userData)

    const navigate = useNavigate()

    const { register, handleSubmit, watch, control, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post.slug || "",
            status: post?.status || "",
        }
    })

    const submit = async (data) => {
        if(post){
            
        }
    }

    const convertSlug = (title) => {
        return title.trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-")
    }

    useEffect(() => {
        watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", convertSlug(value.title), { shouldValidate: true})
            }
        })
    }, [convertSlug, watch, setValue])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <Input 
                label="Title"
                placeholder="Please enter your title"
                {...register("title", {required: true})}
                />

                <Input 
                label="Slug"
                placeholder=""
                {...register("slug", {required: true})}
                onInput={(e) => {
                    setValue("slug", convertSlug(e.currentTarget.value), { shouldValidate: true });
                }}
                />

                <TextEditor 
                name="content"
                control={control} 
                label="content"
                defaultValue={getValues("content")}
                />

                <Input 
                label="Featured image"
                type= "file"
                accept="image/png, image/jpg, image/jpeg, image/gif img/webp"
                    {...register("image", { required: !post })}
                />
                {
                    post&&(
                        <div>
                            <img src={service.getFilePreview(post.featuredImg)} alt="" />
                        </div>
                    )
                }
                <Select 
                label= "Status"
                options= {["active", "inactive"]}
                {...register("status", {required: true})}
                />

                <Button varient="large" type="submit">
                    {post ? "Update" : "Create"}
                </Button>

            </form>
        </div>
    )
}

export default PostForm