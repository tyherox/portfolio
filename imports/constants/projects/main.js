/**
 * Created by JohnBae on 7/1/17.
 */

import {fromJS} from 'immutable';
import * as SKILLS from "../skills";
import Trestle from './trestle';
import Ryestory from './ryestory';
import Revomake from './revomake';
import EACEF from './eacef';
import Bard from './bard';
import Smith from './smith';
import Scribe from './scribe';

export default fromJS([Revomake, Trestle, Ryestory, EACEF, Bard, Smith, Scribe]);
