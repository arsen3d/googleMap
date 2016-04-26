import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    Meteor.methods({
        getMap() {
            return JSON.parse(Assets.getText('Vineyard_Blocks.json'));
        }
    })
});
