import { createMemoryHistory, createRouter } from 'vue-router'

import NoteBookList from '@/pages/note-book-list.vue'
import NoteBookAdd from '@/pages/note-book-add.vue'


const router = createRouter({
    history: createMemoryHistory(),
    routes:[
        { path: '/', component: NoteBookList },
        { path: '/noteBookAdd', component: NoteBookAdd },
    ]
})

export default router;