import {useState} from 'react'
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostCreateModal from './components/PostCreateModal';
import Toast from './components/Toast';

function App() {
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [isModalOpen, setisModalOpen] = useState(false);
    const [posts, setPosts] = useState([
        {id:1,title:'Cold',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://www.shutterstock.com/image-photo/colorful-chameleon-perched-on-branch-600nw-2488859469.jpg'},
        {id:2,title:'In Summer',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/photos-gratuite/couleurs-neons-brillantes-brillent-cameleon-sauvage_23-2151682804.jpg'},
        {id:3,title:'Forest',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg'},
        {id:4,title:'Jungle',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/premium-photo/beautiful-photo-is-must-everyday-work-ai-generated-best-wonderful-photo-images-very-nice_1089151-1199.jpg'},
    ]);

    const handleDelete = (id) => setPosts((prevState)=> prevState.filter(post => id != post.id));
    const handleModal = (value) => setisModalOpen(value);

    const addPost = (data) => {
        let insertData = {...data,id:posts.length + 1}
        setPosts((prevState)=> [...prevState,insertData])
    };

    const handleToast = (value,message) => {
        setToastMessage(message);
        setShowToast(value);
        setTimeout(() => {
            setToastMessage("");
            setShowToast(false);
        }, 1000);
    };

    return (
        <>
        <div className="bg-white dark:bg-gray-800 min-h-screen">
            <Navbar handleModal={handleModal} />
            <PostCreateModal isModalOpen={isModalOpen} handleModal={handleModal} addPost={addPost} />
            <PostList posts={posts} handleDelete={handleDelete} handleToast={handleToast} />
            <Toast showToast={showToast} toastMessage={toastMessage} />
        </div>
        </>
    )
}

export default App
