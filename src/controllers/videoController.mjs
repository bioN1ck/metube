import { MOCK_VIDEOS } from '../../db.mjs';

export const home = (req, res) => {
    res.render('home', { pageTitle: 'Home', videos: MOCK_VIDEOS });
}
export const search = (req, res) => {
    const { query: searchQuery } = req.query
    res.render('search', { pageTitle: 'Search', searchQuery });
}
export const videos = (req, res) => res.render('videos', { pageTitle: 'Videos' });
export const upload = (req, res) => res.render('upload', { pageTitle: 'Upload' });
export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' });
export const videoEdit = (req, res) => res.render('videoEdit', { pageTitle: 'Video Edit' });
export const videoDelete = (req, res) => res.render('videoDelete', { pageTitle: 'Video Delete' });
