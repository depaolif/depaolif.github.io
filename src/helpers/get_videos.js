export function getVideos(title) {
  switch(title.toLowerCase()) {
    case "doodledocs":
      return [
        {
          name: "drawing.mov",
          caption: "Users can use the toolbox to draw on the HTML Canvas element with a variety of shapes. Colors can be picked from the color modal, and line width can be increased or decreased for the 'free draw' and 'line' tools. Finally, videos can be saved to your profile."},
        {
          name: "history undo redo.mov",
          caption: "All doodles have a history slider that users can slide through to see the strokes made to create that doodle. Doodles also have undo and redo functionality. Changed doodles can then be saved over their originals, updating them. This can be done through the auto-save feature (saves every 5secs) or manually clicking Save."
        },
        {
          name: "latest doodles.mov",
          caption:"Users can look at Latest Doodles to see what people have been drawing. From here, they can click on a doodle to edit it, adding or undoing things as they see fit, and saving it for themselves. This does not change the original doodle whatsoever, but rather saves a new copy for the user."
        },
      ]
  }
}
