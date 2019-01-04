function classes() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let com = '';
            if (this.comments.length > 0) {
                com =
                    `\nComments:\n${this.comments.map(c => ` * ${c}`).join('\n')}`;
            }
            return super.toString() + `Rating: ${this.likes - this.dislikes}` + com;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return super.toString() + `Views: ${this.views}`
        }

    }

    return {Post, SocialMediaPost, BlogPost};
}

let c = classes();
let Post = c.Post;
let SocialMediaPost = c.SocialMediaPost;
let BlogPost = c.BlogPost;


let post = new Post("Post", "Content");
// Post: Post
// Content: Content
let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

let smp = new SocialMediaPost("TestTitle", "TestContent", 5, 10);
console.log(smp.toString());
smp.addComment("1");
smp.addComment("2");
smp.addComment("3");

console.log();

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let test = new BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();
console.log(test.toString());