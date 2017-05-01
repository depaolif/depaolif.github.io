const ProjectData = [
  {
    "title": "DoodleDocs",
    "description": "Responsive online drawing platform. Mimics a sketching program using HTML Canvas and custom methods that track mouse movements. Sketches' entire histories are saved.",
    "languages": ["Ruby", "Rails", "SQL", "ActiveRecord", "HTML5", "CSS", "JavaScript", "jQuery"],
    "external apis": [],
    "github link": "https://github.com/depaolif/doodledocs",
  },
  {
    "title": "Koko",
    "description": "Dynamic, social website where users review songs and vote on others’ reviews. Calls the Spotify API to allow users to play songs as they write their reviews. Reviews are shared on song pages and on user's profiles. Public pages show top 'influencers' and trending reviews/songs.",
    "languages": ["Ruby", "Rails", "SQL", "HTML5", "SCSS", "JavaScript", "jQuery", "React", "Redux"],
    "external apis": ["Spotify"],
    "github link": "https://github.com/depaolif/yelpify"
  },
  {
    "title": "CheckUpOn",
    "description": "Single-page webapp that displays a Twitter user’s current mood. Calls the Twitter API using a twitter handle to get that user's last 10 tweets, then runs them through Google's Natural Language API. Ultimately returns a short blurb and stats on the user's most recent general 'mood'.",
    "languages": ["HTML5", "SCSS", "JavaScript", "jQuery"],
    "external apis": ["Twitter", "Google Natural Language"],
    "github link": "https://github.com/depaolif/check-up-on"
  }
]

export default ProjectData
