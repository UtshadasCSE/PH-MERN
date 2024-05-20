import { useLoaderData } from "react-router-dom";
import placeholderImg from "../../src/assets/images/404.jpg";
import Markdown from "https://esm.sh/react-markdown@9";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div>
      <div
        rel="noopener noreferrer"
        className="mx-auto group hover:no-underline focus:no-underline border-2 border-gray-300 p-3 rounded-md  "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={blog.cover_image || placeholderImg}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          {blog.tags.map((tag) => (
            <p
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline  text-gray-900 font-bold bg-gray-200"
            >
              #{tag}
            </p>
          ))}
        </div>
        <div className="p-6 space-y-2 ">
          <h3 className="text-2xl font-semibold  underline pb-4">
            {blog.title}
          </h3>
          <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
