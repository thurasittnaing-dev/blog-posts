import {useState} from 'react'
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostCreateModal from './components/PostCreateModal';

function App() {
    const [isModalOpen, setisModalOpen] = useState(false);
    const [posts, setPosts] = useState([
        {id:1,title:'1st Post',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://www.shutterstock.com/image-photo/colorful-chameleon-perched-on-branch-600nw-2488859469.jpg'},
        {id:2,title:'2nd Post',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/photos-gratuite/couleurs-neons-brillantes-brillent-cameleon-sauvage_23-2151682804.jpg'},
        {id:3,title:'3rd Post',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg'},
        {id:4,title:'4th Post',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/premium-photo/chameleon-is-sitting-branch-with-pink-flower-background_924629-324272.jpg'},
        {id:5,title:'5th Post',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/premium-photo/colorful-chameleon-branch_607202-2241.jpg'},
        {id:6,title:'6th Post',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/premium-photo/portrait-tropical-chameleon-iguana-lizard-wild-nature-animals_158518-27693.jpg'},
        {id:7,title:'7th Post',description:'Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.',img:'https://img.freepik.com/premium-photo/painting-iguana-with-high-quality-highly-detailed-background-image-ai-generated_163892-2751.jpg'},
    ]);

    const handleDelete = (id) => setPosts((prevState)=> prevState.filter(post => id != post.id));
    const handleModal = (value) => setisModalOpen(value);

    return (
        <>
        <div className="bg-white dark:bg-gray-800">
            <Navbar handleModal={handleModal} />
            <PostCreateModal isModalOpen={isModalOpen} handleModal={handleModal} />
            <PostList posts={posts} handleDelete={handleDelete} />
        </div>
        </>
    )
}

export default App
