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

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![ChakraUI][Chakra-ui]][Chakra-url]

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

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
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
- [Cloning the Forked Repository](#cloning-the-forked-repository)
- [Create Your Feature Branch](#create-your-feature-branch-git-checkout--b-featureamazingfeature)
- [Make Changes To the Code](#make-changes-to-the-code)
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing As a Developer
### Cloning the Forked Repository

Right now, you have a fork of the `raid-website` repository, but you do not have the files in that repository locally on your computer.

1. On GitHub.com, click your avatar on the top-right corner of your navigation bar. In the dropdown menu, select your **repositories**.
![Navigate to Your Respositories][clone-1]

2. Navigate to your fork of the `raid-website` repository.
![Navigate to Your Fork of The RAiD Website Repository][clone-2]

3. Above the list of files, click **Code**, then click **Open with Github Desktop**.
![Open With Github Desktop][clone-3]

### Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

### Make Changes to the Code

### Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

### Push to the Branch (`git push origin feature/AmazingFeature`)

### Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

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
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Chakra-ui]: https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white
[Chakra-url]: https://chakra-ui.com/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[fork-1]: public/readme/fork-1.png
[fork-2]: public/readme/fork-2.png
[fork-3]: public/readme/fork-3.png
[fork-4]: public/readme/fork-4.png
[clone-1]: public/readme/clone-1.png
[clone-2]: public/readme/clone-2.png
[clone-3]: public/readme/clone-3.png