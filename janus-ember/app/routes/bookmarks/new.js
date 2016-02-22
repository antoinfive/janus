import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    return Ember.RSVP.hash({
      bookmark: this.store.createRecord('bookmark'),
      projects: this.store.findAll('project')
  });
},
  actions: {
    createBookmark(){
      let bookmark = this.modelFor(this.routeName).bookmark;
      let project_ids = [];
      bookmark.get('projects').forEach((project)=>{
        project_ids.push(project.id);
      });
      bookmark.set("jankiness", project_ids.toString());
      debugger;
      bookmark.save().then((bookmark) => {
        bookmark.get('tags').invoke('save');
        this.transitionTo('bookmarks.bookmark', bookmark.id);
      });
    }
  }
});
