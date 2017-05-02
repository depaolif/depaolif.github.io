export function getVideos(title) {
  switch(title.toLowerCase()) {
    case "doodledocs":
      return [
        {
          name: "drawing.mov",
          caption: "Users can use the toolbox to draw on the campus with a variety of shapes. Colors can be picked from the color modal, and line width can be increased or decreased for the 'free draw' and 'line' tools."},
        {
          name: "latest doodles.mov",
          caption:"Placeholder"
        },
        {
          name: "undo redo history",
          caption: "Placeholder"
        }
      ]
    default:
  }
}
