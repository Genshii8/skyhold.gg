# Contributing to skyhold.gg

## The Workflow

In a nutshell, the (currently crappy) workflow is this:

1. Create posts in Markdown. Add images where needed.
   - **I recommend a Markdown editor such as Typora. [https://typora.io/](https://typora.io/)**
   - Along with posts, changes to the actual site are made directly to the HTML/CSS.
2. Create necessary HTML pages/folders from template, as well as image folders.
3. Add necessary links to the Nav bar. *This is by far the worst part of the process.* Every time a new page is added, the Nav bar needs to be updated, and this updated Nav bar needs to be added to every single page for the spec. Yes, I need to learn how to template.
4. Convert Markdown to useable HTML for the site. This is done via an online tool.
5. Paste converted Markdown into the actual page.
6. Test out changes in local test environment.
7. Push changes to GitHub.
8. Changes are automatically pushed to the site by the hosting service once it detects changes on GitHub.

I will explain this process in detail the best I can below. <u>If you have any questions or aren't sure about something, please ask.</u> Having to revert Dropbox changes is not fun.

**I plan on building better tools to streamline this. You have two options for contributing.**

1. **Simply create the posts in Markdown and let me handle everything else.**
2. **Learn the process and contribute yourself.**

### skyhold.gg Dropbox Folder

The Dropbox folder is where the full contents of the project are stored.

Take a look through it and see how things are organized.

The main folders that contributors deal with are: `images`, `pages`, and `pages-markdown`.

`images` contains any and all images used in posts or around the site.

`pages` is the actual HTML for each page on the site.

`pages-markdown` are where the actual posts gets created/stored.

### Creating Posts

Open your Markdown editor (you can even use Notepad if you really hate yourself), open the spec folder in `pages-markdown`, create a new markdown file (all markdown files end in `.md`), and start writing!

The file name should be the full title of your post.

Again, I highly recommend [https://typora.io/](https://typora.io/) for this part.

### Basic Markdown Formatting



`# Big Text`

# Biggest Text



`## Bigger Text`

## Bigger Text



`### Big Text` 

### Big Text



`#### Text` is the same as normal sized text (on skyhold.gg) and therefore does nothing.



```
1. Item 1
2. Item 2
3. Item 3
```

1. Item 1
2. Item 2
3. Item 3



```
- Bullet 1
- Bullet 2
- Bullet 3
```

- Bullet 1
- Bullet 2
- Bullet 3



`[Avatar](http://bfa.wowhead.com/spell=107574/avatar)`

[Avatar](http://bfa.wowhead.com/spell=107574/avatar)



`<u>underline</u>`

<u>underline</u>



`**Bold**`

**Bold**



`*emphasis aka italics*`

*emphasis aka italics*



`~~strike~~`

~~strike~~

### Custom Content and Formatting

Due to the restrictions of Markdown formatting, some HTML and CSS is required.

#### Adding an Image

 `<img class="border class2" src="/path/to/image.png">`

For example, if I wanted to add an image in a for a Fury page:

`<img class="border center-image" src="/images/fury/trinkets/pantheon.png">`

Just stick a line like that on its own line.

##### - Available classes

`image-margin` - Adds a bit of spacing on top of the image. You usually won't need to use this. You'll know when you do.

`center-image` - Centers the image on the page.

<u>The `border` class should always be put on images.

#### Adding a Divider

If you ever want to add a divider (i.e. 1 pixel white line, the same as below the title/author section), you can add in:

`<div class="divider"></div> `

#### Adding Single Line Breaks

By default with markdown, hitting enter for a line break adds an empty line.

```
Text text text

Text text text
```

If you want text to move the the immediate next line instead, you would do:

```
Text text text<br>
Text text text
```

In other words, simply add a `<br>` tag *after* the line of text that comes before the line you want on the next line.

#### Custom Wowhead Icon Sizing

By default, Wowhead links (`[Avatar](http://wowhead.com/spell=107574/avatar)`) are a particular size.

There are four available sizes: `tiny`,`small`,`medium`,`large`

By default, all icons are `tiny`.

Generally speaking, you'd likely only ever need to use `small`.

So, instead of doing a normal link, you would do:

`<a href="http://wowhead.com/spell=107574/avatar" rel="spell=107574" data-wh-icon-size="small">Bastion of the Aspects</a>`

There are four parts to this:

1. `href="http://yourlinkhere.com"` - The link
2. `rel=""` - This is taken from the "middle" of the Wowhead link. See above.
3. `data-wh-icon-size="small"` - Icon size
4. Text goes at the end before the closing tag

#### Coloring a Link

All non-Wowhead links need to be colored. This is because Wowhead links are automatically styled.

Normal Wowhead links look like (this is the default way to do links in Markdown):

`[Avatar](http://wowhead.com/spell=107574/avatar)` - [Avatar](http://wowhead.com/spell=107574/avatar)

A link to anything else should look like:

`<a class="text-link" target="_blank" href="http://yourlinkhere.com">Your text here</a>`

Simply replace the link and text.

##### - Available classes

`large-link` - Changes the size of a link to be the same as `<h3>` which is the same as `###`. This is really the only way to increase the font size of a link (unless you know how the CSS to change it).

### Editing the Site

Once you're done with your post (or you want to test it out), it's time to edit the actual site. This part is somewhat easy to mess up, so be careful.

Now, while it is possible to directly edit things on GitHub, which makes quite a few things a bit easier, it gets messy really quickly, and can mess things up. As such, it's best to learn how to use a good text editor and a git client.

#### Some Basics

All paths should be from the root of the project and therefore start with a forward slash. For example, the path to my author image is: `/images/authors/author.png`

This goes for pages as well.

#### Setting up your test environment

You have to do this if you want to see what the site looks like.

Basically, we're going to install Python and a command line utility that runs a local web server.

Go to https://www.python.org/downloads/ and download Python 3.x.x.

Run the installer. <u>Make sure you check "Add Python to PATH"</u>.

Open a Windows command prompt (go to start menu, type in 'cmd' and hit enter). Type `pip install livereload`.

When that's done, you simply need to open up a .bat file I've made, and you'll have a local server running for the site.

The .bat file is in the `/docs/` folder. Double click that. You should see `Serving on http://127.0.0.1:35729`. Copy that IP address and paste it in your browser.

Congrats, you now have a local web server running that will automatically refresh as you make changes to the site.

#### Text editor

I personally use [VS Code](https://code.visualstudio.com/). It's not an actual IDE, but rather a feature-heavy text editor. If you want something simple, just use [Notepad++](https://notepad-plus-plus.org/).

#### Using the Template

There is a post/page template located in `/docs/`, `post-template.html`.

The first step to adding your post to the site is to copy this template into the correct folder and rename it.

For example, if I'm creating a post for Prot, I'd drop the template in `/pages/protection/`.

The name of the html file should be a shortened version of your actual title without any special characters (dashes are fine).

`What's New - Protection Warriors in BfA` -> `whatsnew.html`

Once you have the file copied in there, it's time to start editing it.

#### Sections of the Template 

Firstly, edit the `<title>` towards the top. This should be the name of your post.

#### Nav Bar

`<div id="nav">` is the start of the "container" for the nav bar.

`<div><a class="nav-link" href="/path/to/page.html">LinkName</a></div> ` - A link in the nav bar. Provide the path to the page and change the name of the link.

```html
<div class="dropdown-container"><a href="#" class="nav-link non-link">DropdownName&nbsp&nbsp<i class="fas fa-chevron-down"></i></a>
    <div class="flex-column dropdown-content border element-bg-color">
        
    </div>
</div>
```

The only thing that you would need to edit here is `DropdownName`. Leave the `&nbsp` and the spacing as is.

That is the container for a dropdown nav link. You would place normal nav bar links inside of that. For example: 

```html
<div class="dropdown-container"><a href="#" class="nav-link non-link">DROPDOWN-NAME&nbsp&nbsp<i class="fas fa-chevron-down"></i></a>
    <div class="flex-column dropdown-content border element-bg-color">
        <div><a class="nav-link" href="/path/to/page.html">LinkName</a></div>
        <div><a class="nav-link" href="/path/to/page.html">LinkName</a></div>
    </div>
</div>
```

You can have multiple dropdowns of course. You can't nest them (well, you can, but I have no idea what would happen).

In most cases, you will be copying what you've already made and pasting it into a new post, and then adding on to it. *Then* you have to copy your updated nav bar to every single page for the spec, including the spec home page.

#### Author Section

`<span id="title">TITLE</span> ` - Change the title of the post here.

```html
<div class="flex-column">
    <img id="author-image" class="border" src="/images/authors/author.png" alt="Author"></img>
	<span id="author-name">Author</span>
    <div id="author-social" class="flex-center">
        <a target="_blank" href="https://twitter.com/Handle"><i class="fab fa-twitter"></i></a>?
        <a target="_blank" href="https://twitch.tv/Handle"><i class="fab fa-twitch"></i></a>
	</div>
</div>
```

You need to edit the path to the image, `alt=""` to your name, `<span id="author-name">Author</span>` to your name, and the social links.

For example:

```html
<div class="flex-column">
    <img id="author-image" class="border" src="/images/authors/marok.png" alt="Marok"></img>
	<span id="author-name">Marok</span>
    <div id="author-social" class="flex-center">
        <a target="_blank" href="https://twitter.com/xMarok"><i class="fab fa-twitter"></i></a>?
        <a target="_blank" href="https://twitch.tv/xMarok"><i class="fab fa-twitch"></i></a>
	</div>
</div>
```

You can of course add addition social links. `<a target="_blank" href="PatreonLink"><i class="fab fa-patreon"></i></a>` for example.

#### Post Content

You're almost done.

In Typora, go to File -> Preferences and scroll down and check `Copy Markdown source as plain text`.

Select everything in your Markdown file, copy it, and paste it in the box here:

http://markdown-to-html.s3-website-us-west-2.amazonaws.com/

Click "Copy HTML".

Simply paste your converted Markdown inside of `<div id="post-content"> `.

Now you can view how your post looks by going directly to its path. `http://127.0.0.1:35729/pages/protection/whatsnew.html`

#### Edit the Spec's Homepage

By this point, it should be fairly self-explanatory as to how to do this part.

The specs' hompages are located in `/pages/`. e.g. `protection.html`.

Firstly, you need to paste in your up-to-date nav bar. Nothing changes here. It's the same way as before.

You'll see this next:

```html
<a class="post-link" href="/pages/protection/path.html"><div id="featured-post" class="flex-column mobile-width border element-bg-color">
    <div id="featured-post-image" class="post-image"></div>
    <div class="flex-column post-text">
        <span class="post-title">Title</span>
        <span class="post-description">Description</span>
    </div>
</div></a>
```

This is followed by another section that's for news, and then below that are four similar looking sections for the rest of the "featured" posts.

Edit the path to the post and change the title and description.

Finally, there's the image for the post. Open the .css file for your spec. e.g. `/css/protection.css`.

Simply change the path to point to your image.

#### Editing your Post

Once you have everything setup for a post, to edit it, you would:

Edit your Markdown first. Convert to HTML. Paste in `<div id="post-content"> `.

#### Pushing to GitHub

Once you're done, it's time to push to the GitHub Repo.

Use https://www.gitkraken.com/ for this. It's essentially a GUI for git.

You need a GitHub account. Login with GitHub in GitKraken. Open the skyhold.gg folder in GitKraken.

On the right, you can hit "Stage all changes".

Type in a summary at the bottom. For example, "Add Talents page". These commit messages should be in present tense.

Click "Push" at the top.

You're done. The changes will be pushed to the live site within 30 seconds.