// scripts.js

// correction of importing from configuration

import {company} from './configuration.js';
import {year} from './configuration.js';

const message = '© ' + company + year;
document.querySelector('footer').innerText = message