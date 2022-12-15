---
title: "Contributing As A Content Editor"
tags: "opensource"
date: "2022-12-15"
author: "Natasha"
---

The RAiD website is RAiD's first open-source project on Github. Anyone can contribute tothe RAiD website, be it to create a new post in our [Blog](https://raid.swiftoffice.org/blog) or [Events](https://raid.swiftoffice.org/events) page, to introduce a new feature enhancement or even to fix bugs on the website. 

## Contributing As A Content Editor

The following tutorial assumes you have **no knowledge** of Github and coding in general, and follows the process of how to create a simple blog or event post as a content editor.

For contributors who are developers coming in to introduce new features and fix bugs, you may look at the [Contributing As A Developer](#contributing-as-a-developer) tutorial.

This tutorial covers the following:
- [Create a Github Account](#create-a-github-account)
- [Fork the Project](#fork-the-project)
- [Navigating to Your Forked Repository](#navigating-to-your-forked-repository)
- [Create Your Branch](#create-your-branch)
- [Editing Content In Github](#editing-content-in-github)
- [Commit Your Changes](#commit-your-changes-git-commit--m-add-some-amazingfeature)
- [Push to the Branch](#push-to-the-branch-git-push-origin-featureamazingfeature)
- [Open a Pull Request](#open-a-pull-request)

### Create a Github Account
### Fork the Project

To contribute to a project, you first have to create a copy of the project in your personal github account. The following instructions takes reference from [Github's tutorial of how to fork a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

1. On GitHub.com, navigate to the [afnexus/raid-website](raid-website-repo) repository.

2. In the top-right corner of the page, click Fork.
[![Click Fork][fork-1]](https://github.com/afnexus/raid-website#repository-container-header)

3. Select an owner for the forked repository. This is usually your personal github account!
[![Select An Owner][fork-2]](https://github.com/afnexus/raid-website/fork)

4. By default, forks are named the same as their upstream repositories. You can change the name of the fork to distinguish it further. 
[![Name Your Repository][fork-3]](https://github.com/afnexus/raid-website/fork)

5. Optionally, add a description of your fork in the `description` field.

6. Ensure that the checkbox beside **Copy the `develop` branch only** is checked. By default, only the `develop` branch is copied.
[![Copy The Develop Branch Only][fork-4]](https://github.com/afnexus/raid-website/fork)

7. Click **Create fork**.

### Navigating To Your Forked Repository

1. On GitHub.com, click your avatar on the top-right corner of your navigation bar. In the dropdown menu, select your **repositories**.
![Navigate to Your Respositories][clone-1]

2. Navigate to your fork of the `raid-website` repository.
![Navigate to Your Fork of The RAiD Website Repository][clone-2]

3. You should now see a list of files attributed to the raid website repository.
![Fork of Raid Website Repository][clone-3]



### Create Your Branch

1. At the top left hand corner of the repository, click the button labelled `develop` branch to switch branches and tags.
![Click the Develop Branch][branch-1]

2. To create a new branch, type the name of the new branch in the input field with the default text _Find or create a branch..._. 
![Name Your Branch][branch-2]

When naming branches, best practices often recommend prefixing the branch name with the general category of the change you are trying to implement. Categories that our repository uses includes the following:

| Category | Explanation |
| -------- | ----------- |
| feat | New feature that adds on and expands on the production code |
| bug | Bug fixes |
| docs | Changes to the documentation |
| style | Formatting changes (i.e. missing semi-colons) that do not affect production code |
| refactor | Refactoring production code (i.e. changing a variable name) |
| test | Adding missing tasks or refactoring existing tests that do not affect production code |
| chore | Other tasks to be done that do not affect production code |
| blog | New content on the raid website blog page |
| event | New content on the raid website events page |

This is followed by a concise description of the change that uses hyphens as separators to increase readability.

| Branch Name Example | Explanation |
| ------------------- | ----------- |
| docs/contributor-tutorial | Addition of tutorials on how to contribute to RAiD website in `README.md` file |
| feat/innofest | Addition of Innofest page |
| bug/images-not-loading-in-blog-post | Fixing of bug related to images not being loaded in blog posts |
| blog/contributing-as-a-content-editor | New blog post titled 'Contributing As a Content Editor' |

3. After naming your branch, click on `Create branch: <your-branch-name> from 'develop'` to create your branch.
![Create Your Branch][branch-3]


4. You should navigate to your newly created branch immediately after. Check that the branch button now indicates your new branch name to verify you are on your new branch. You can switch branches by clicking on this button and clicking on the destination branch you want to navigate to.
![Navigate to Your Branch][branch-4]

### Editing Content in Github
This portion takes reference from [Github's article on creating new files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files).

1. In your new branch, navigate to the `content` directory among the list of files within the repository.
![Navigate to the Content Directory][content-1]

2. Depending on which content you want to edit, go to either the `posts` or `events` directory. This example will follow the example of creating a new blog post.
![Navigate to the Posts Directory][content-2]

3. Each file in the `posts` directory represents a blog post, except the `template.md` file. Click on the `template.md` file to open it.
![Navigate to the Template File][content-3]

4. Once in the file, click on the edit pencil icon on the top right corner of the file.
![Click on Edit Icon][content-4]

5. You should be brought to the raw markdown text in the template file. Select all the text and click copy. **DO NOT CUT OR CHANGE THE TEXT IN THIS FILE**.
![Select All and Copy][content-5]

6. Click **Cancel Changes** to exit the file.
![Cancel Changes][content-6]

7. Now navigate back to the `posts` directory.
![Navigate to the Posts Directory][content-7]

8. In the posts directory, click on the top right **Add File** button.
![Add File][content-8]

9. Click on **Create A New File** to create a new file for your blog post.
![Create New File][content-9]

10. Name the new file after the title of your blog post in small case and using hyphens as separators and attaching the `.md` file ending to the file.
**REMEMBER TO ADD THE `.md` FILE ENDING**
![Name Your New File][content-10]

11. Paste the template that you copied in step 5 in the empty file space below **Edit new file**.
![Paste the Template][content-11]

12. Begin filling out the post metadata in the template with details of your blog post within the `---` markers.
![Fill In Template Details][content-12]

13. You may now start writing your blog post content under the `---` marker using markdown syntax, which is a specific formatting language. You may refer to this [markdown syntax article]([https://www.markdownguide.org/basic-syntax/]) to learn how to do so.
![Write Your Content][content-13]

14. Click the **Preview** tab to view how your blog post will look like! The metadata table will not appear in the blog post once it is merged into the source code, while all content below the metadata table will be content that is rendered in the blog post.
![Preview Your Content][content-14]

### Commit your Content Changes
Once you are done with the content, or when you want to save your changes to come back later to edit it further, you can commit your changes. 

1. Scroll down to the bottom of the page to see the **Commit New File** dialogue. Start by providing a concise summary of the commit. Ideally, you want to prefix the commit message with the category, followed by a short summary of the changes you made, much like naming the branch. You can also add more detailed description in the box below.
![Write Your Commit Message][commit-1]

2. Click the green **Commit new file** button once you are done.
![Commit New File][commit-2]

<p align="right">(<a href="#readme-top">back to top</a>)</p>
