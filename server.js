import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const pages = [
  { route: '/', view: 'front-page', currentPage: 'home', isFrontPage: true, title: 'Vlad Neri - Portfolio' },
  { route: '/projects', view: 'projects', currentPage: 'projects', isFrontPage: false, title: 'Projects - Vlad Neri' },
  { route: '/about', view: 'about', currentPage: 'about', isFrontPage: false, title: 'About - Vlad Neri' },
  { route: '/work', view: 'work', currentPage: 'work', isFrontPage: false, title: 'Work Experience - Vlad Neri' },
  { route: '/contact', view: 'contact', currentPage: 'contact', isFrontPage: false, title: 'Contact - Vlad Neri' },
  { route: '/life-flow', view: 'life-flow', currentPage: 'projects', isFrontPage: false, title: 'Life Flow - Vlad Neri' },
  { route: '/moya', view: 'moya', currentPage: 'projects', isFrontPage: false, title: 'Moya - Vlad Neri' },
  { route: '/pennywise', view: 'pennywise', currentPage: 'projects', isFrontPage: false, title: 'PennyWise - Vlad Neri' },
  { route: '/manga-haven', view: 'manga-haven', currentPage: 'projects', isFrontPage: false, title: 'Manga Haven PH - Vlad Neri' },
  { route: '/project-detail', view: 'project-detail', currentPage: 'projects', isFrontPage: false, title: 'Scraaatch - Vlad Neri' },
];

for (const page of pages) {
  app.get(page.route, (_req, res) => {
    res.render(page.view, {
      title: page.title,
      currentPage: page.currentPage,
      isFrontPage: page.isFrontPage,
    });
  });
}

app.use((_req, res) => {
  res.status(404).render('front-page', {
    title: 'Vlad Neri - Portfolio',
    currentPage: 'home',
    isFrontPage: true,
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Vlad Neri Portfolio listening on http://0.0.0.0:${PORT}`);
});
