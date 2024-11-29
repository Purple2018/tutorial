import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;

// import { useState, useEffect } from "react";
// import api from "../api";
// import Project from "../components/Project"
// import "../styles/Home.css"

// function Home() {
//     const [notes, setProjects] = useState([]);
//     const [content, setContent] = useState("");
//     const [title, setTitle] = useState("");

//     useEffect(() => {
//         getProjects();
//     }, []);

//     const getProjects = () => {
//         api
//             .get("/api/projects/")
//             .then((res) => res.data)
//             .then((data) => {
//                 setProjects(data);
//                 console.log(data);
//             })
//             .catch((err) => alert(err));
//     };

//     const deleteProjects = (id) => {
//         api
//             .delete(`/api/projects/delete/${id}/`)
//             .then((res) => {
//                 if (res.status === 204) alert("Project deleted!");
//                 else alert("Failed to delete project.");
//                 getProjects();
//             })
//             .catch((error) => alert(error));
//     };

//     const createProject = (e) => {
//         e.preventDefault();
//         api
//             .post("/api/projects/", { content, title })
//             .then((res) => {
//                 if (res.status === 201) alert("Project created!");
//                 else alert("Failed to make project.");
//                 getProjects();
//             })
//             .catch((err) => alert(err));
//     };

//     return (
//         <div>
//             <div>
//                 <h2>Projects</h2>
//                 {projects.map((project) => (
//                     <Project project={project} onDelete={deleteProject} key={project.id} />
//                 ))}
//             </div>
//             <h2>Create a Project</h2>
//             <form onSubmit={createProject}>
//                 <label htmlFor="name">Name:</label>
//                 <br />
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                 />
//                 <label htmlFor="content">Description:</label>
//                 <br />
//                 <textarea
//                     id="content"
//                     name="content"
//                     required
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                 ></textarea>
//                 <br />
//                 <input type="submit" value="Submit"></input>
//             </form>
//         </div>
//     );
// }

// export default Home;