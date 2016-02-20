import Express from 'express';
import * as UrlController from '../controllers/url.controller';

const router = Express.Router();

// Get all URLs
router.route('/urls').get(UrlController.getUrls);

// Resolve Short URL
router.route('/resolve/:id').get(UrlController.resolve);

// Shorten URL
router.route('/shorten').post(UrlController.shorten);

export default router;