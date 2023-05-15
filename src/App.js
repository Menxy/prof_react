import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {PostsPage} from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";


function App() {

  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route path={'todos'} element={<TodosPage/>}/>
            <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
