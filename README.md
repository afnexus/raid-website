<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/afnexus/raid-website">>
    <img src="public/raid.svg" alt="RAiDLogo" width="80" height="80">
  </a>

  <h3 align="center">RAiD Website</h3>

  <p align="center">
    The officially unofficial public-facing website for RAiD.
    <br />
    <a href="https://github.com/afnexus/raid-website"><strong>Explore the docs and repo »</strong></a>
    <br />
    <br />
    <a href="https://raid.swiftoffice.org/">View Site</a>
    ·
    <a href="https://github.com/afnexus/raid-website/issues">Report Bug</a>
    ·
    <a href="https://github.com/afnexus/raid-website/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![RAiD Website Screenshot][raid-website-screenshot]](https://raid.swiftoffice.org/)

This is the public repository for the RAiD website! We encourage all members of RAiD to try their hand at contributing to the website as an open source contributor, and in so doing, learn what it truly means to contribute to open source.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![Node][node.js]][node-url]
- [![ChakraUI][chakra-ui]][chakra-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/your_username_/raid-website.git
   ```

2. If you do not have yarn installed, install yarn

```sh
npm install --global yarn
```

3. Install NPM packages through yarn
   ```sh
   yarn install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

The RAiD website is RAiD's first open-source project on Github. Anyone can contribute tothe RAiD website, be it to create a new post in our [Blog](https://raid.swiftoffice.org/blog) or [Events](https://raid.swiftoffice.org/events) page, to introduce a new feature enhancement or even to fix bugs on the website.

You may follow the relevant tutorials based on your role as a contributor:

- [Contributing As A Content Editor](#contributing-as-a-content-editor)
- [Contributing As A Developer](#contributing-as-a-developer)

## Contributing As A Content Editor

The following tutorial assumes you have **no knowledge** of Github and coding in general, and follows the process of how to create a simple blog or event post as a content editor.

For contributors who are developers coming in to introduce new features and fix bugs, you may look at the [Contributing As A Developer](#contributing-as-a-developer) tutorial.

This tutorial covers the following:

- [Create a Github Account](#create-a-github-account)
- [Fork the Project](#fork-the-project)
- [Navigating to Your Forked Repository](#navigating-to-your-forked-repository)
- [Create Your Branch](#create-your-branch)
- [Editing Content In Github](#editing-content-in-github)
- [Commit Your Changes](#commit-your-content-changes)
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

| Category | Explanation                                                                           |
| -------- | ------------------------------------------------------------------------------------- |
| feat     | New feature that adds on and expands on the production code                           |
| bug      | Bug fixes                                                                             |
| docs     | Changes to the documentation                                                          |
| style    | Formatting changes (i.e. missing semi-colons) that do not affect production code      |
| refactor | Refactoring production code (i.e. changing a variable name)                           |
| test     | Adding missing tasks or refactoring existing tests that do not affect production code |
| chore    | Other tasks to be done that do not affect production code                             |
| blog     | New content on the raid website blog page                                             |
| event    | New content on the raid website events page                                           |

This is followed by a concise description of the change that uses hyphens as separators to increase readability.

| Branch Name Example                   | Explanation                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| docs/contributor-tutorial             | Addition of tutorials on how to contribute to RAiD website in `README.md` file |
| feat/innofest                         | Addition of Innofest page                                                      |
| bug/images-not-loading-in-blog-post   | Fixing of bug related to images not being loaded in blog posts                 |
| blog/contributing-as-a-content-editor | New blog post titled 'Contributing As a Content Editor'                        |

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

You can repeat this process as many times as you need as you continue editing the file!

### Open a Pull Request

Once you are done will all your changes and commits, it is time to create a pull request to merge it into the parent repository!

1. After a commit, you should be brought back to the root repository, where you will see a dialogue box in yellow prompting you to create a pull request. Click on the green _Compare & pull request_ button.
   ![Create a Pull Request Dialogue][pr-1]

2. You will be brought to a page to fill in details regarding your pull request, with a template to follow.
   ![Pull Request Page][pr-2]

3. For simple content creation, you may go ahead to delete the unnecessary sections except **Description**. Here, you can write a description of the content you are adding.
   ![Fill in PR Template][pr-3]

4. Once done, you can click on the green **Create pull request** button.<br>
   ![Create Pull Request][pr-4]

### Follow Up

Congratulations, you just created your first pull request! Thereafter, the maintainers of the RAiD website will review your pull request and make sure everything is in the right order.

If there are no changes that need to be made, the maintainer will merge your code changes into the main source code, and your post will be live for everyone to see on the site.

If there are changes to be made, the maintainer will leave comments on your pull request for you to make additional edits.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
## Contributing As a Developer

This tutorial covers the following additional steps to take for contributors that are looking to make feature changes or bug fixes:

- [Cloning the Forked Repository](#cloning-the-forked-repository)

### Prerequisite Steps

Ensure you have completed the following steps in the tutorial for [Contributing As a Content Editor](#contributing-as-a-content-editor):

- [Create a Github Account](#create-a-github-account)
- [Fork the Project](#fork-the-project)
- [Navigating to Your Forked Repository](#navigating-to-your-forked-repository)
- [Create Your Branch](#create-your-branch)

### Cloning the Forked Repository

1. Above the list of files, click **Code**, then click **Open with Github Desktop**.
   ![Open With Github Desktop][clone-4]

### Make Changes to the Code In Your Text Editor

Pending

### Commit your Changes

Pending

### Push to the Branch (`git push origin feature/AmazingFeature`)

Pending

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/afnexus/raid-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/afnexus/raid-website/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/afnexus/raid-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/afnexus/raid-website/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[raid-website-url]: https://raid.swiftoffice.org/
[raid-wesite-repo]: https://github.com/afnexus/raid-website
[raid-website-screenshot]: public/readme/raid-website-screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[chakra-ui]: https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white
[chakra-url]: https://chakra-ui.com/
[node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
[fork-1]: public/readme/fork-1.png
[fork-2]: public/readme/fork-2.png
[fork-3]: public/readme/fork-3.png
[fork-4]: public/readme/fork-4.png
[clone-1]: public/readme/clone-1.png
[clone-2]: public/readme/clone-2.png
[clone-3]: public/readme/clone-3.png
[clone-4]: public/readme/clone-4.png
[branch-1]: public/readme/branch-1.png
[branch-2]: public/readme/branch-2.png
[branch-3]: public/readme/branch-3.png
[branch-4]: public/readme/branch-4.png
[content-1]: public/readme/content-1.png
[content-2]: public/readme/content-2.png
[content-3]: public/readme/content-3.png
[content-4]: public/readme/content-4.png
[content-5]: public/readme/content-5.png
[content-6]: public/readme/content-6.png
[content-7]: public/readme/content-7.png
[content-8]: public/readme/content-8.png
[content-9]: public/readme/content-9.png
[content-10]: public/readme/content-10.png
[content-11]: public/readme/content-11.png
[content-12]: public/readme/content-12.png
[content-13]: public/readme/content-13.png
[content-14]: public/readme/content-14.png
[commit-1]: public/readme/commit-1.png
[commit-2]: public/readme/commit-2.png
[pr-1]: public/readme/pr-1.png
[pr-2]: public/readme/pr-2.png
[pr-3]: public/readme/pr-3.png
[pr-4]: public/readme/pr-4.png
