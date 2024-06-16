import { createMemoryHistory, createRouter } from 'vue-router'

import NoteBookList from '@/pages/note-book-list.vue'


const router = createRouter({
    history: createMemoryHistory(),
    routes:[
        { path: '/', component: NoteBookList },
    ]
})

export default router;