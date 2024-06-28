import { legacy_createStore as createStore} from 'redux';
import competitionReducer from './reducers/competition';

const store = createStore(competitionReducer);

export default store;