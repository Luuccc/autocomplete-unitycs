'use babel';

import mainProvider from './main-provider';

export default {
    getProvider() {
        // return a single provider
        return mainProvider;
    }
};
