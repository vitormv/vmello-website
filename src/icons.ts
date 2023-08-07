import { faDownload, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Need to use require instead of import
 * @see https://github.com/FortAwesome/Font-Awesome/issues/19348
 * */
const { library } = require('@fortawesome/fontawesome-svg-core');

library.add(faEnvelope, faDownload, faLinkedin, faGithub, faBars);
