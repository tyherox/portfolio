/**
 * Created by JohnBae on 7/1/17.
 */

import {fromJS} from 'immutable';
import Trestle from './trestle';
import Ryeboard from './ryeboard';
import Ryestory from './ryestory';
import Revomake from './revomake';
import EACEF from './eacef';
import Bard from './bard';
import Smith from './smith';
import Scribe from './scribe';
import Mandum from './mandum';
import Vread from './vread';

export default fromJS([Ryeboard, Vread, Mandum, Revomake, Trestle, Ryestory, EACEF, Bard, Smith, Scribe]);
