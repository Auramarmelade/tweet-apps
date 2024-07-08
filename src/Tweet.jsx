import React from "react";

// Define the Tweet component
function Tweet({ id, name, content, like, onDelete, onLike }) {
  // Return the JSX representing the Tweet component
  return (
    <div className="tweet">
      <button onClick={() => onDelete(id)} className="delete">
        ❌
      </button>
      <h3>{name}</h3>
      <p>{content}</p>
      {/* Attach the handleLike function to the button's onClick event */}
      <button onClick={() => onLike(id)}> {like} ❤️ </button>
    </div>
  );
}

export default Tweet;
