import { ref } from 'vue'
import { projfirestore } from '../firebase'
import { collection, getDocs } from 'firebase/firestore';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await getDocs(collection(projfirestore, 'post'))
            posts.value = res.docs.map(doc => {
                
                console.log(doc.data())
                return { ...doc.data(), id: doc.id}
            })
        }
        catch (err) {
            error.value = err.message
            alert(error.value)
        }
    }

    return { posts, error, load }
}

export default getPosts