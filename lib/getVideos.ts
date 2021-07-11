const { promisify } = require('util');
const path = require('path');
const marked = require('meta-marked');
const { readFile, readdir } = require('fs');
const slug = require('speakingurl');

const readAFile = promisify(readFile);
const readDirContents = promisify(readdir);
const format = require('date-fns/format');

const pad = num => `000${num}`.substr(-3);

let videos;

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a rel="noopener noreferrer" target="_blank" href="${href}"> ${text}</a>`;
};

const loadVideos = async () => {
  // Cached videos
  if (videos) {
    return videos;
  }

  const videosDir = path.join(process.cwd(), 'videos');
  const files = (await readDirContents(videosDir)).filter(file =>
    file.endsWith('.md')
  );

  const markdownPromises = files.map(file =>
    readAFile(path.join(videosDir, file), 'utf-8')
  );
  const videoMarkdown = await Promise.all(markdownPromises);

  videos = videoMarkdown
    .map(md => marked(md, { renderer })) // convert to markdown
    .map((video, i) => {
      const { number } = video.meta;

      return {
        ...video.meta,
        slug: `/video/${number}/${slug(video.meta.title)}`,
        html: video.html,
        notesFile: files[i],
        displayDate: format(parseFloat(video.meta.date), 'MMM do, yyyy'),
        displayNumber: pad(number),
      };
    }) // flatten
    .reverse();

  return videos;
};

async function getVideos(filter) {
  // eslint-disable-next-line no-shadow
  const videosForGetVideos = await loadVideos();
  const now = Date.now();
  return filter === 'all'
    ? videosForGetVideos
    : videosForGetVideos.filter(video => video.date < now);
}

async function getVideo(number) {
  const videosForGetVideo = await loadVideos();
  const video = videosForGetVideo.find(
    videoItem => videoItem.displayNumber === number
  );
  return video;
}

module.exports = {
  getVideos,
  getVideo,
};
