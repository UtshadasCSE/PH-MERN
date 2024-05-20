import toast from "react-hot-toast";
// get blogs from ls
export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};
// save blogs in ls
export const saveBlogs = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmarked");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog bookmarked successfully");
};

// delete blogs from ls

export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const reamining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(reamining));
  toast.success("Blog removed from bookmarked");
};
