import {useState} from 'react'

export default function PostForm({addPost,handleModal}) {

    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [message, setMessage] = useState("");

    const resetForm = () => {
        setTitle("");
        setImageURL("");
        setMessage("");
    }

    const submitForm = (e) => {
        e.preventDefault();

        addPost({
            title,
            img: imageURL,
            description: message,
        });
        resetForm();
        handleModal(false);
    }

    return (
        <>
            <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={submitForm} className="space-y-4" action="#" autoComplete='off'>
                    <div>
                        <label htmlFor="title" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Your Post Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Post Title Here" required />
                    </div>

                    <div>
                        <label htmlFor="image" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Your Post Image URI</label>
                        <input type="text" onChange={(e) => setImageURL(e.target.value)} value={imageURL} name="image_url" id="image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Image URL" required />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>

                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create New Post</button>
                        <button onClick={resetForm} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}
