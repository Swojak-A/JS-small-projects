/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "Aldo",
    friends: 14,
    messages: ["Hi!\nGreat to see you all here", "I hate this. I quit."],
    postMessage: function(content) {
        this.messages.push(content);
    },
    deleteMessage: function(n) {
        this.messages.splice(n,1);
    },
    addFriend: function() {
        this.friends += 1;
    },
    removeFriend: function() {
        this.friends -= 1;
    }
};

facebookProfile.postMessage("kk, ill stay");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);