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

###Creating Posts

Open your Markdown editor (you can even use Notepad if you really hate yourself), open the spec folder in `pages-markdown`, create a new markdown file (all markdown files end in `.md`), and start writing!

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