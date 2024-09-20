import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import service from '../appwrite/config';
import Input from './Input';
import Select from './Select';
import TextEditor from './TextEditor';
import { Button } from './Button';

const PostForm = ({ post }) => {
    const userData = useSelector((state) => state.auth.userData);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const { register, handleSubmit, watch, control, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        }
    });

    const submit = async (data) => {
        setError("");
        try {
            if (post) {
                let imageUrl = post.imageUrl;
                if (data.image[0]) {
                    const uploadedFile = await service.uploadFile(data.image[0]);
                    if (uploadedFile) {
                        imageUrl = service.getFilePreview(uploadedFile.$id);
                        if (post.imageUrl) {
                            const oldFileId = post.imageUrl.split('/').pop().split('?')[0];
                            await service.deleteFile(oldFileId);
                        }
                    }
                }
                const dbPost = await service.updatePost(post.$id, {
                    ...data,
                    imageUrl,
                });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                const file = data.image[0];
                if (!file) throw new Error("Featured image is required");
                const uploadedFile = await service.uploadFile(file);
                if (uploadedFile) {
                    const imageUrl = service.getFilePreview(uploadedFile.$id);
                    const dbPost = await service.createPost({
                        ...data,
                        imageUrl,
                        userID: userData.$id,
                    });
                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const convertSlug = useCallback((title) => {
        return title
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", convertSlug(value.title), { shouldValidate: true });
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, setValue, convertSlug]);

    return (
        <div>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    label="Title"
                    placeholder="Enter your title"
                    {...register("title", { required: "Title is required" })}
                />
                <Input
                    label="Slug"
                    placeholder="post-slug"
                    {...register("slug", { required: "Slug is required" })}
                    onInput={(e) => {
                        setValue("slug", convertSlug(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <TextEditor
                    name="content"
                    control={control}
                    label="Content"
                    defaultValue={getValues("content")}
                />
                <Input
                    label="Featured image"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/webp"
                    {...register("image", { required: !post })}
                />
                {post && post.imageUrl && (
                    <div className="my-4">
                        <img
                            src={post.imageUrl}
                            alt="Featured"
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    label="Status"
                    options={["active", "inactive"]}
                    {...register("status", { required: "Status is required" })}
                />
                <Button type="submit" className="w-full">
                    {post ? "Update" : "Create"} Post
                </Button>
            </form>
        </div>
    );
};

export default PostForm;