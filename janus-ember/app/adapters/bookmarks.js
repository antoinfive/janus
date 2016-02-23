import DS from 'ember-data';

import ApplicationAdapter from './application';

export default ApplicationAdapter.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    tags: { serialize: 'ids'}
  }
});


// import DS from 'ember-data';

// export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
//   attrs: {
//     author: { embedded: 'always' },
//     comments: { serialize: 'ids' }
//   }
// });