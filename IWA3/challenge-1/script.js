
// correction of importing from configuration.js

import {company} from './configuration.js'
import {year} from './configuration.js'

const message = '© ' + company + year;
document.querySelector('footer').innerText = message