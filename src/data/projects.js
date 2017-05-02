const ProjectData = [
  {
    "title": "DoodleDocs",
    "summary": "Responsive online drawing platform. Mimics a sketching program using HTML Canvas and custom methods that track mouse movements. Sketches' entire histories are saved.",
    "description": "DoodleDocs is a responsive, online drawing platform. It mimics a sketching program through the use of custom HTML Canvas methods that allow you to draw directly through the mouse. Individual strokes are saved in the history state of the sketching component, allowing users to see each step of the drawing, as well as permitting undo and redo functionality. Users can also look through the latest doodles that other users have made, fork them, and add things to them or save them for himself/herself. Each new save keeps the history of previous versions, so users always have access to every stroke used to create an individual doodle.",
    "languages": ["Ruby", "Ruby on Rails", "SQL", "ActiveRecord", "HTML5", "CSS", "JavaScript", "jQuery"],
    "externalApis": [],
    "githubLink": "https://github.com/depaolif/doodledocs",
  },
  {
    "title": "Koko",
    "summary": "Dynamic, social website where users review songs and vote on others’ reviews. Calls the Spotify API to allow users to play songs as they write their reviews. Reviews are shared on song pages and on user's profiles. Public pages show top 'influencers' and trending reviews/songs.",
    "languages": ["Ruby", "Ruby on Rails", "SQL", "API's", "HTML5", "SCSS", "JavaScript", "jQuery", "React", "Redux"],
    "externalApis": ["Spotify"],
    "githubLink": "https://github.com/depaolif/yelpify"
  },
  {
    "title": "CheckUpOn",
    "summary": "Single-page webapp that displays a Twitter user’s current mood. Calls the Twitter API using a twitter handle to get that user's last 10 tweets, then runs them through Google's Natural Language API. Ultimately returns a short blurb and stats on the user's most recent general 'mood'.",
    "languages": ["Ruby", "Ruby on Rails", "API's", "HTML5", "SCSS", "JavaScript", "jQuery"],
    "externalApis": ["Twitter", "Google Natural Language"],
    "githubLink": "https://github.com/depaolif/check-up-on"
  }
]

export default ProjectData
