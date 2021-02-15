import { Meteor } from 'meteor/meteor';
import { DevelopersCollection } from '../../../db/developers/collection';

Meteor.publish('developers', function(){
    return DevelopersCollection.find({});
  })