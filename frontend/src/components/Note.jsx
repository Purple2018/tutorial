import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note

// import React from "react";
// import "../styles/Project.css"

// function Project({ project, onDelete }) {

//     return (
//         <div className="project-container">
//             <p className="project-title">{note.title}</p>
//             <p className="project-content">{note.content}</p>
//             <p className="project-date">{formattedDate}</p>
//             <button className="delete-button" onClick={() => onDelete(note.id)}>
//                 Delete
//             </button>
//         </div>
//     );
// }

// export default Project