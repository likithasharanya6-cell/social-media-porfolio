/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT & ASSET CONFIG — edit this file only.
 * ─────────────────────────────────────────────────────────────
 *  • Put files inside /public/assets/<folder>/ and reference them
 *    here as "/assets/<folder>/<file>".
 *  • Any `src` left as "" renders a styled placeholder telling you
 *    which file is needed — nothing breaks while assets are missing.
 *  • Videos: use a local path (e.g. "/assets/video-project-1/before.mp4")
 *    or a hosted direct MP4/WebM URL.
 *  • Do not add metrics you can't verify.
 */

export type ImageAsset = {
  src: string; // "" = placeholder
  alt: string;
  caption: string;
  /** Suggested filename shown in the placeholder */
  expected: string;
};

export type VideoAsset = {
  src: string; // "" = placeholder
  poster: string; // "" = placeholder frame
  expected: string;
};

export const profile = {
  name: "Your Name", // TODO: your name
  title: "AI-Powered Social Media Manager & Content Strategist",
  email: "", // TODO: e.g. "hello@yourdomain.com"
  instagramUrl: "", // TODO: e.g. "https://instagram.com/yourhandle"
  instagramHandle: "@yourhandle", // TODO
  linkedinUrl: "", // TODO
  followers: "1.2K+",
  avatar: {
    src: "",
    alt: "Portrait of the creator",
    caption: "",
    expected: "profile/avatar.jpg",
  } as ImageAsset,
};

export const hero = {
  headline: "I Turn Ideas Into Scroll-Stopping Content.",
  description:
    "I'm an AI-powered social media manager who researches viral content opportunities, develops creative strategies, writes engaging video scripts, edits content, and creates AI-powered fashion videos designed to capture attention and grow audiences.",
  collage: [
    { src: "", alt: "Social media content grid", caption: "Content", expected: "hero/content-grid.jpg" },
    { src: "", alt: "Video editing timeline", caption: "Editing", expected: "hero/editing-timeline.jpg" },
    { src: "", alt: "Script draft", caption: "Scripts", expected: "hero/script-draft.jpg" },
    { src: "", alt: "AI fashion visual", caption: "AI Fashion", expected: "hero/fashion-visual.jpg" },
  ] as ImageAsset[],
};

export const researchSteps = [
  {
    title: "Research Content Opportunities",
    body: "I use Claude to help research video topics, explore audience interests, identify content angles, analyze available examples of successful content, and develop ideas relevant to my target audience.",
  },
  {
    title: "Develop Creative Strategies",
    body: "I brainstorm unusual, attention-grabbing concepts with Claude — opening hooks, storytelling approaches and structures that encourage viewers to keep watching. The aim is to improve the potential for reach, retention, shares and saves. No strategy guarantees viral views.",
  },
  {
    title: "Write Video Scripts",
    body: "Scripts with strong hooks, clear storytelling, engaging dialogue or voiceovers, visual directions and effective calls to action.",
  },
  {
    title: "Add Visual References",
    body: "Images, screenshots and examples sit alongside research and scripts to communicate scenes, aesthetics, mood, product presentation and creative direction.",
  },
  {
    title: "Refine the Final Content",
    body: "I refine scripts and concepts with Claude until they feel more engaging, natural, audience-focused and suited to Instagram Reels.",
  },
];

export const researchGallery: ImageAsset[] = [
  { src: "", alt: "Claude assisting with video scriptwriting", caption: "Claude helping draft and tighten a Reel script.", expected: "claude-research/claude-scriptwriting.png" },
  { src: "", alt: "Claude researching video topics", caption: "Exploring topic ideas and content angles with Claude.", expected: "claude-research/claude-topic-research.png" },
  { src: "", alt: "Script with hooks, scenes, voiceover and CTA", caption: "A script broken into hook, scenes, voiceover and CTA.", expected: "scripts/script-breakdown.png" },
  { src: "", alt: "Content strategy brainstorming document", caption: "Strategy and brainstorming notes for a content series.", expected: "strategy/strategy-doc.png" },
  { src: "", alt: "Visual reference board", caption: "Reference board used to explain a video concept.", expected: "strategy/visual-reference-board.jpg" },
  { src: "", alt: "Research-to-script workflow", caption: "How one idea moves from research to a finished content plan.", expected: "strategy/research-to-script-flow.png" },
];

export const editingProjects = [
  {
    title: "Project 01 — Title of your edit", // TODO
    description: "Short description of the original footage and the goal of the edit.", // TODO
    // List only improvements that actually apply to this video.
    improvements: ["Pacing & cuts", "Captions", "Hook in first seconds"], // TODO
    before: { src: "", poster: "", expected: "video-project-1/before.mp4 (+ before-poster.jpg)" } as VideoAsset,
    after: { src: "", poster: "", expected: "video-project-1/after.mp4 (+ after-poster.jpg)" } as VideoAsset,
  },
  {
    title: "Project 02 — Title of your edit", // TODO
    description: "Short description of the original footage and the goal of the edit.", // TODO
    improvements: ["Storytelling structure", "Framing", "Visual presentation"], // TODO
    before: { src: "", poster: "", expected: "video-project-2/before.mp4 (+ before-poster.jpg)" } as VideoAsset,
    after: { src: "", poster: "", expected: "video-project-2/after.mp4 (+ after-poster.jpg)" } as VideoAsset,
  },
];

export const fashionGallery: (ImageAsset & { ratio: "portrait" | "landscape" | "square" })[] = [
  { src: "", ratio: "portrait", alt: "AI-generated fashion influencer portrait", caption: "Virtual influencer — portrait", expected: "fashion/images/influencer-portrait.jpg" },
  { src: "", ratio: "portrait", alt: "Virtual influencer wearing a styled outfit", caption: "Outfit styling", expected: "fashion/images/influencer-outfit.jpg" },
  { src: "", ratio: "landscape", alt: "AI fashion campaign moodboard", caption: "Campaign concept & moodboard", expected: "fashion/images/campaign-moodboard.jpg" },
  { src: "", ratio: "square", alt: "AI fashion video thumbnail", caption: "AI fashion video thumbnail", expected: "fashion/images/video-thumbnail.jpg" },
  { src: "", ratio: "portrait", alt: "Styling concept with different pose and location", caption: "Poses, locations & aesthetics", expected: "fashion/images/styling-concepts.jpg" },
  { src: "", ratio: "landscape", alt: "Frame from a completed AI fashion video", caption: "Frame from a completed film", expected: "fashion/images/video-frame.jpg" },
];

export const fashionVideos = [
  { title: "Fashion Film 01", label: "AI Fashion Film", description: "Short creative description.", video: { src: "", poster: "", expected: "fashion/videos/film-01.mp4" } as VideoAsset },
  { title: "Virtual Influencer 01", label: "Virtual Influencer", description: "Short creative description.", video: { src: "", poster: "", expected: "fashion/videos/influencer-01.mp4" } as VideoAsset },
  { title: "Campaign Concept 01", label: "Digital Fashion Campaign", description: "Short creative description.", video: { src: "", poster: "", expected: "fashion/videos/campaign-01.mp4" } as VideoAsset },
];

/** Selected Instagram posts. `stat` is optional — only fill with real figures. */
export const instagramPosts: (ImageAsset & { url: string; stat?: string })[] = [
  { src: "", url: "", alt: "Instagram Reel thumbnail", caption: "Reel 01", expected: "instagram/post-01.jpg" },
  { src: "", url: "", alt: "Instagram Reel thumbnail", caption: "Reel 02", expected: "instagram/post-02.jpg" },
  { src: "", url: "", alt: "Instagram Reel thumbnail", caption: "Reel 03", expected: "instagram/post-03.jpg" },
  { src: "", url: "", alt: "Instagram Reel thumbnail", caption: "Reel 04", expected: "instagram/post-04.jpg" },
];

export const workflow = [
  { title: "Research", body: "Explore relevant topics and audience interests." },
  { title: "Strategy", body: "Develop creative approaches for Instagram content." },
  { title: "Scripting", body: "Write hooks, scenes, voiceovers and calls to action." },
  { title: "Visual References", body: "Collect and organize imagery that clarifies the concept." },
  { title: "Editing", body: "Refine pacing, structure, captions and presentation." },
  { title: "AI Video Creation", body: "Produce fashion-focused content with virtual influencers." },
  { title: "Publish & Optimize", body: "Prepare for publication and learn from actual performance data." },
];

export const services = [
  {
    title: "Content Research & Strategy",
    items: ["Content topic research", "Viral-content ideation", "Creative Instagram Reels strategies", "Audience-focused content planning", "Content calendars & campaign concepts"],
  },
  {
    title: "Video Scriptwriting & Editing",
    items: ["Hook development", "Short-form video scripts", "Storytelling & voiceover planning", "Editing direction & AI-assisted workflows", "Video refinement for social media"],
  },
  {
    title: "AI Fashion Content Creation",
    items: ["Virtual influencer concepts", "AI-generated fashion visuals", "AI fashion video creation", "Digital fashion campaign concepts", "Creative direction for fashion short-form"],
  },
];

export const projectTypes = ["Content strategy", "Video scripts", "Video editing", "AI fashion content", "Ongoing social media management", "Other"];
